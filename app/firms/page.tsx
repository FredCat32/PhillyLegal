import type { Metadata } from 'next';
import Link from 'next/link';
import { firms } from '@/lib/firms';
import FirmCard from '@/components/FirmCard';
import SiteDisclosure from '@/components/SiteDisclosure';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Philadelphia Personal Injury Law Firm Directory',
  description:
    'Directory of Philadelphia personal injury law firms. Find firms that handle car accidents, slip and fall, workers\' comp, and medical malpractice in Pennsylvania.',
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.phillylegalguide.com';

const specialtyLabels: Record<string, string> = {
  'car-accident': 'Car Accident',
  'slip-and-fall': 'Slip & Fall',
  'workers-comp': "Workers' Comp",
  'medical-malpractice': 'Medical Malpractice',
  'catastrophic-injury': 'Catastrophic Injury',
  'general': 'General Personal Injury',
};

export default function FirmsPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Firm Directory', url: `${siteUrl}/firms` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <p className="text-sm text-text-muted mb-6">
          <Link href="/" className="hover:text-brand">Home</Link>
          {' / '}
          <span className="text-text-secondary">Firm Directory</span>
        </p>

        <div className="max-w-2xl mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-3">
            Philadelphia Personal Injury Firm Directory
          </h1>
          <p className="text-text-secondary leading-relaxed">
            A curated list of Philadelphia personal injury law firms and their specialties.
            All firms listed offer free consultations. This directory is for informational
            purposes, we are not affiliated with any firm listed.
          </p>
        </div>

        <div className="mb-8">
          <SiteDisclosure />
        </div>

        {/* Filter note */}
        <div className="bg-bg-accent border border-border-brand rounded-card p-4 mb-8">
          <p className="text-sm text-text-secondary">
            <strong>Looking for firms by case type?</strong> Browse our case type pages to see
            filtered firm lists:{' '}
            <Link href="/types/car-accident" className="text-link hover:text-brand">Car Accident</Link>,{' '}
            <Link href="/types/slip-and-fall" className="text-link hover:text-brand">Slip & Fall</Link>,{' '}
            <Link href="/types/workers-comp" className="text-link hover:text-brand">Workers' Comp</Link>,{' '}
            <Link href="/types/medical-malpractice" className="text-link hover:text-brand">Medical Malpractice</Link>.
          </p>
        </div>

        {/* All firms */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {firms.map((firm, i) => (
            <div key={firm.id}>
              <div className="mb-2 flex flex-wrap gap-1.5">
                {firm.specialty.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-medium text-brand bg-brand-light px-2 py-0.5 rounded-full"
                  >
                    {specialtyLabels[s] || s}
                  </span>
                ))}
              </div>
              <FirmCard firm={firm} sourcePage="firms-directory" position={i + 1} />
            </div>
          ))}
        </div>

        {/* Quiz CTA */}
        <div className="bg-brand rounded-card p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            Not sure which firm is right for your case?
          </h2>
          <p className="text-brand-mid mb-5 text-sm">
            Our quiz identifies your case type and shows you which firms specialise in your
            situation.
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 bg-white text-brand font-semibold px-6 py-3 rounded-btn hover:bg-brand-light transition-colors text-sm"
          >
            Take the 2-Minute Quiz →
          </Link>
        </div>
      </div>
    </>
  );
}
