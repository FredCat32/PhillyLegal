import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Philadelphia Personal Injury Guides',
  description:
    'Free guides for Philadelphia personal injury cases, how to choose a lawyer, what percentage they take, and how long your case will take.',
};

const guides = [
  {
    title: 'How to Choose a Personal Injury Lawyer in Philadelphia: What Actually Matters',
    slug: 'how-to-choose',
    description:
      'Contingency fees explained, questions to ask, red flags to watch for, why specialisation matters, and what to bring to a free consultation.',
    readTime: '8 min read',
  },
  {
    title: 'What Percentage Do Personal Injury Lawyers Take in Pennsylvania?',
    slug: 'what-percentage',
    description:
      'Typical contingency fee ranges (33–40%), how expenses work, how to calculate your net settlement, and how to evaluate whether a fee is reasonable.',
    readTime: '6 min read',
  },
  {
    title: 'How Long Does a Personal Injury Case Take in Philadelphia?',
    slug: 'how-long',
    description:
      'Settlement timelines vs. trial timelines, factors that affect duration, what causes delays, and how to set realistic expectations.',
    readTime: '7 min read',
  },
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://phillylegalguide.com';

export default function GuideHubPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Guides', url: `${siteUrl}/guide` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-sm text-text-muted mb-6">
          <Link href="/" className="hover:text-brand">Home</Link>
          {' / '}
          <span className="text-text-secondary">Guides</span>
        </p>

        <div className="max-w-2xl mb-10">
          <h1 className="text-3xl font-bold text-text-primary mb-3">
            Philadelphia Personal Injury Guides
          </h1>
          <p className="text-text-secondary leading-relaxed">
            Practical, honest guides for navigating a personal injury case in Philadelphia.
            Written to help you ask better questions and make better decisions, not to
            replace legal advice.
          </p>
        </div>

        <div className="flex flex-col gap-5 max-w-3xl mb-12">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guide/${guide.slug}`}
              className="card p-6 flex items-start gap-4 hover:shadow-card-hover hover:border-border-brand transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 text-brand" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs text-text-muted">{guide.readTime}</span>
                </div>
                <h2 className="font-semibold text-text-primary group-hover:text-brand transition-colors leading-snug mb-2">
                  {guide.title}
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed">{guide.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-link group-hover:text-brand transition-colors mt-3">
                  Read guide
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-brand-light border border-border-brand rounded-card p-6">
          <h2 className="font-semibold text-text-primary mb-1">
            Ready to find a lawyer?
          </h2>
          <p className="text-sm text-text-secondary mb-4">
            Our quiz identifies your case type and matches you to Philadelphia firms that
            specialise in your situation.
          </p>
          <Link href="/quiz" className="btn-primary text-sm py-2.5 px-5 inline-flex">
            Take the Free Quiz →
          </Link>
        </div>
      </div>
    </>
  );
}
