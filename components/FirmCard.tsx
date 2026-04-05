'use client';

import { ExternalLink, Phone, CheckCircle2 } from 'lucide-react';
import { type Firm } from '@/lib/firms';
import { trackFirmClick } from '@/lib/analytics';

type FirmCardProps = {
  firm: Firm;
  sourcePage?: string;
  position?: number;
};

export default function FirmCard({ firm, sourcePage = 'unknown', position = 0 }: FirmCardProps) {
  const handleClick = () => {
    trackFirmClick(firm.id, sourcePage, position);
  };

  return (
    <div className="card p-6 flex flex-col gap-4 hover:shadow-card-hover transition-shadow duration-200">
      {/* Header */}
      <div>
        <h3 className="font-semibold text-lg text-text-primary leading-tight">
          {firm.name}
        </h3>
        <p className="text-sm text-text-muted mt-0.5">
          {firm.yearsInBusiness}+ years in business
        </p>
      </div>

      {/* Description */}
      <p className="text-sm text-text-secondary leading-relaxed flex-1">
        {firm.description}
      </p>

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {firm.freeConsultation && (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">
            <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
            Free Consultation
          </span>
        )}
        {firm.contingencyFee && (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">
            <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
            No Win, No Fee
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-2 pt-1 border-t border-border-subtle">
        {firm.phone && (
          <a
            href={`tel:${firm.phone.replace(/\D/g, '')}`}
            className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-text-secondary border border-border-mid rounded-btn px-4 py-2.5 hover:border-brand hover:text-brand transition-colors"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            {firm.phone}
          </a>
        )}
        <a
          href={firm.website}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="flex-1 btn-primary text-sm py-2.5"
        >
          Visit Website
          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
