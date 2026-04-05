import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

type CaseTypeCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

export default function CaseTypeCard({ icon: Icon, title, description, href }: CaseTypeCardProps) {
  return (
    <Link
      href={href}
      className="card p-6 flex flex-col gap-3 hover:shadow-card-hover hover:border-border-brand transition-all duration-200 group"
    >
      <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-brand" aria-hidden="true" />
      </div>
      <div>
        <h3 className="font-semibold text-text-primary group-hover:text-brand transition-colors">
          {title}
        </h3>
        <p className="text-sm text-text-secondary mt-1 leading-relaxed">{description}</p>
      </div>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-link group-hover:text-brand transition-colors mt-auto">
        Learn more
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  );
}
