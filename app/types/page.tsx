import type { Metadata } from 'next';
import Link from 'next/link';
import { Car, Building2, HardHat, Stethoscope, ArrowRight } from 'lucide-react';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Types of Personal Injury Cases in Philadelphia',
  description:
    'Learn about different types of personal injury cases in Philadelphia, car accidents, slip and fall, workers comp, and medical malpractice.',
};

const caseTypes = [
  {
    icon: Car,
    title: 'Car Accident Lawyers',
    slug: 'car-accident',
    description:
      'Vehicle accidents are the most common type of personal injury case in Philadelphia. Learn what makes a strong car accident claim and what to expect.',
    limitText: '2 years from date of accident',
  },
  {
    icon: Building2,
    title: 'Slip & Fall Lawyers',
    slug: 'slip-and-fall',
    description:
      'Property owners in Philadelphia have a duty to maintain safe conditions. If negligent maintenance caused your fall, you may have a claim.',
    limitText: '2 years from date of injury',
  },
  {
    icon: HardHat,
    title: "Workers' Comp Lawyers",
    slug: 'workers-comp',
    description:
      "Pennsylvania's workers' compensation system covers most workplace injuries, but claims are frequently denied. An attorney can help.",
    limitText: '3 years from date of injury or last payment',
  },
  {
    icon: Stethoscope,
    title: 'Medical Malpractice Lawyers',
    slug: 'medical-malpractice',
    description:
      'Medical malpractice cases are complex and require attorneys with specific expertise. Learn what qualifies and how to find the right firm.',
    limitText: '2 years from date of injury or discovery',
  },
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.phillylegalguide.com';

export default function TypesHubPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Case Types', url: `${siteUrl}/types` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <p className="text-sm text-text-muted mb-2">
            <Link href="/" className="hover:text-brand">Home</Link>
            {' / '}
            <span className="text-text-secondary">Case Types</span>
          </p>
          <h1 className="text-3xl font-bold text-text-primary mb-3">
            Types of Personal Injury Cases in Philadelphia
          </h1>
          <p className="text-text-secondary leading-relaxed">
            Different types of injuries require different legal expertise. Choose your case type
            below to see Philadelphia firms that specialise in your situation, what to expect,
            and Pennsylvania-specific information.
          </p>
        </div>

        {/* Case type cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {caseTypes.map((ct) => {
            const Icon = ct.icon;
            return (
              <Link
                key={ct.slug}
                href={`/types/${ct.slug}`}
                className="card p-6 hover:shadow-card-hover hover:border-border-brand transition-all duration-200 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-brand" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-semibold text-text-primary group-hover:text-brand transition-colors mb-1">
                      {ct.title}
                    </h2>
                    <p className="text-sm text-text-secondary leading-relaxed mb-3">
                      {ct.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-text-muted">
                        Statute of limitations: {ct.limitText}
                      </span>
                      <ArrowRight className="w-4 h-4 text-link group-hover:text-brand transition-colors" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Not sure CTA */}
        <div className="bg-brand rounded-card p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            Not sure which category fits your situation?
          </h2>
          <p className="text-brand-mid mb-5">
            Take our 2-minute quiz and we'll identify your case type for you.
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 bg-white text-brand font-semibold px-6 py-3 rounded-btn hover:bg-brand-light transition-colors text-sm"
          >
            Take the Free Quiz
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </>
  );
}
