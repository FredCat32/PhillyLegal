import { AlertTriangle } from 'lucide-react';

type UrgencyBannerProps = {
  monthsAgo: string;
};

const urgencyMessages: Record<string, { headline: string; body: string }> = {
  '6-24': {
    headline: 'Time is running. Act now.',
    body: "Pennsylvania's 2-year statute of limitations means you may have less than a year to file your claim. Missing this deadline typically means losing your right to compensation entirely. We strongly recommend contacting a lawyer this week.",
  },
  '24+': {
    headline: 'You may have passed the deadline',
    body: "Pennsylvania's 2-year statute of limitations may have already expired for your case. Contact a Philadelphia personal injury attorney immediately, in rare circumstances exceptions apply, but time is critical.",
  },
};

export default function UrgencyBanner({ monthsAgo }: UrgencyBannerProps) {
  const msg = urgencyMessages[monthsAgo];
  if (!msg) return null;

  return (
    <div className="urgency-box flex items-start gap-3 mb-6">
      <AlertTriangle className="w-5 h-5 text-urgency-border flex-shrink-0 mt-0.5" aria-hidden="true" />
      <div>
        <p className="font-semibold text-sm">{msg.headline}</p>
        <p className="text-sm mt-1 leading-relaxed">{msg.body}</p>
      </div>
    </div>
  );
}
