import { Info } from 'lucide-react';

export default function SiteDisclosure() {
  return (
    <div className="bg-bg-accent border border-border-brand rounded-card px-4 py-3 flex items-start gap-3">
      <Info className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" aria-hidden="true" />
      <p className="disclosure-text">
        <strong className="text-text-secondary font-medium">Independent resource:</strong>{' '}
        PhillyLegalGuide is not a law firm and does not provide legal advice. Firm listings
        are for informational purposes only. Always consult a licensed Pennsylvania attorney
        about your specific situation.
      </p>
    </div>
  );
}
