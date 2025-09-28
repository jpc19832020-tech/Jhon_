import type { InsightsConfig } from "@/data/businessCard";

interface InsightsProps {
  data: InsightsConfig;
  logoImage: string;
}

const Insights = ({ data, logoImage }: InsightsProps) => {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <img src={logoImage} alt="Logotipo de FOTON" className="h-12 w-auto" loading="lazy" />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">{data.company.subtitle}</p>
            <p className="text-lg font-semibold text-black">{data.company.title}</p>
          </div>
        </div>
        <ul className="space-y-3 text-sm text-neutral-700">
          {data.company.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Insights;
