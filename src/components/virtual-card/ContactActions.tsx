import type { ComponentType, SVGProps } from "react";
import { ArrowUpRight, Globe, Mail, Phone, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ContactActionIcon, ContactActionKey } from "@/data/businessCard";

const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 0 5.373 0 12a11.95 11.95 0 001.875 6.375L0 24l5.79-1.815A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12 0-3.213-1.253-6.213-3.48-8.52zM12 21.6c-1.657 0-3.213-.45-4.59-1.305l-.33-.195-3.435 1.08 1.05-3.345-.21-.345A8.4 8.4 0 013.6 12c0-4.65 3.75-8.4 8.4-8.4 2.25 0 4.335.9 5.88 2.445 1.545 1.545 2.445 3.63 2.445 5.88 0 4.65-3.75 8.4-8.4 8.4z" />
    <path d="M17.1 14.1c-.285-.15-1.68-.825-1.935-.915-.255-.09-.45-.135-.64.135-.19.27-.735.915-.9 1.11-.165.195-.33.225-.615.075-.285-.15-1.2-.44-2.285-1.41-.845-.75-1.41-1.68-1.575-1.965-.165-.285-.018-.435.127-.585.13-.13.285-.33.43-.495.15-.165.195-.285.285-.465.09-.18.045-.345-.0225-.495-.0675-.15-.64-1.545-.875-2.115-.23-.555-.465-.48-.64-.49l-.545-.01c-.18 0-.47.065-.715.315-.245.245-.935.915-.935 2.235 0 1.32.96 2.595 1.095 2.775.135.18 1.89 2.88 4.575 4.035 1.605.69 2.235.75 3.03.63.495-.075 1.68-.685 1.92-1.35.24-.66.24-1.225.165-1.35-.075-.12-.27-.18-.555-.33z" fill="#fff" />
  </svg>
);

const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.98h4v14h-4v-14zM9.5 8.98h3.84v1.92h.05c.54-1.02 1.86-2.1 3.84-2.1 4.11 0 4.87 2.7 4.87 6.21v7.97h-4v-7.06c0-1.68-.03-3.84-2.34-3.84-2.34 0-2.7 1.83-2.7 3.72v7.18h-4v-14z" />
  </svg>
);

const iconMap: Record<ContactActionIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  Phone: Phone,
  Mail: Mail,
  Globe: Globe,
  WhatsApp: WhatsAppIcon,
  LinkedIn: LinkedInIcon,
};

type ContactButtonData = {
  key: ContactActionKey;
  label: string;
  detail: string;
  icon: ContactActionIcon;
  onClick: () => void;
};

interface ContactActionsProps {
  actions: ContactButtonData[];
  sectionLabel: string;
  quickActions: {
    downloadLabel: string;
    shareLabel: string;
  };
  onShare: () => void | Promise<void>;
}

function ContactButton({ action }: { action: ContactButtonData }) {
  const Icon = iconMap[action.icon];

  return (
    <Button
      onClick={action.onClick}
      variant="outline"
      className={cn(
        "group flex w-full items-center justify-between rounded-3xl border border-black/10 bg-white px-6 py-6 text-left text-black shadow-sm transition hover:border-primary hover:shadow-lg",
      )}
    >
      <span className="flex items-center gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white transition group-hover:scale-105">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <span className="space-y-1">
          <span className="block text-xs font-semibold uppercase tracking-[0.32em] text-primary">
            {action.label}
          </span>
          <span className="block text-base font-semibold text-black sm:text-lg">
            <span className="inline-block max-w-[22ch] truncate" title={action.detail}>
              {action.detail}
            </span>
          </span>
        </span>
      </span>
      <ArrowUpRight
        className="h-6 w-6 text-primary transition group-hover:translate-x-1 group-hover:-translate-y-1"
        aria-hidden
      />
    </Button>
  );
}

const ContactActions = ({ actions, sectionLabel, quickActions, onShare }: ContactActionsProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4" aria-label={sectionLabel}>
        {actions.map((action) => (
          <ContactButton key={action.key} action={action} />
        ))}
      </div>

      <div className="flex flex-wrap gap-4" aria-label="Acciones rápidas">
        <Button
          variant="ghost"
          onClick={onShare}
          className="gap-3 rounded-3xl border border-primary bg-white px-6 py-5 text-base font-semibold text-primary shadow-sm hover:bg-primary/10"
        >
          <Share2 className="h-5 w-5" aria-hidden />
          {quickActions.shareLabel}
        </Button>
      </div>
    </div>
  );
};

export type { ContactButtonData };
export default ContactActions;

