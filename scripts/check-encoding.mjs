#!/usr/bin/env node
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const ALLOWED_EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".json",
  ".css",
  ".html",
  ".md",
]);

const IGNORE_FILES = new Set(["package-lock.json"]);

const IGNORE_DIRECTORIES = new Set([
  "node_modules",
  ".git",
  "dist",
  "public",
  ".vite",
]);

const PATTERNS = [
  { regex: /\uFFFD/u, message: "Contiene caracter de reemplazo (�)." },
  { regex: /Ã./u, message: "Posible mojibake UTF-8 (secuencia con Ã)." },
  { regex: /Â./u, message: "Posible mojibake UTF-8 (secuencia con Â)." },
  {
    regex: /[a-z]A[0-9]{1,2}[a-z]/u,
    message: "Posible mojibake (patrón A + dígitos dentro de palabra).",
  },
];

async function collectFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (IGNORE_DIRECTORIES.has(entry.name)) {
      continue;
    }

    if (IGNORE_FILES.has(entry.name)) {
      continue;
    }

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectFiles(fullPath)));
      continue;
    }

    const ext = path.extname(entry.name);
    if (ALLOWED_EXTENSIONS.has(ext)) {
      files.push(fullPath);
    }
  }

  return files;
}

function detectIssues(content) {
  return PATTERNS.flatMap(({ regex, message }) => {
    if (!regex.test(content)) {
      return [];
    }

    const lines = content.split(/\r?\n/);
    const hits = [];

    lines.forEach((line, index) => {
      if (regex.test(line)) {
        hits.push({ line: index + 1, snippet: line.trim() });
      }
    });

    return hits.length ? [{ message, hits }] : [];
  });
}

const results = [];

try {
  const files = await collectFiles(ROOT);

  for (const file of files) {
    const content = await readFile(file, "utf8");
    const issues = detectIssues(content);

    if (issues.length > 0) {
      results.push({ file, issues });
    }
  }
} catch (error) {
  console.error("Error al revisar la codificación:", error);
  process.exitCode = 1;
  process.exit();
}

if (results.length === 0) {
  console.log("✔ Codificación UTF-8 verificada (sin mojibake detectado).");
  process.exit(0);
}

console.error("✖ Se detectaron posibles problemas de codificación:");

for (const { file, issues } of results) {
  console.error(`  • ${path.relative(ROOT, file)}`);
  for (const { message, hits } of issues) {
    console.error(`    - ${message}`);
    hits.forEach(({ line, snippet }) => {
      console.error(`      línea ${line}: ${snippet}`);
    });
  }
}

process.exitCode = 1;
