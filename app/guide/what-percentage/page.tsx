import type { Metadata } from 'next';
import Link from 'next/link';
import FAQAccordion from '@/components/FAQAccordion';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'What Percentage Do Personal Injury Lawyers Take in Pennsylvania?',
  description:
    'Learn about contingency fees in Pennsylvania personal injury cases, typical percentages (33–40%), how expenses work, and how to calculate your net settlement.',
};

const faqs = [
  {
    question: 'Is the contingency fee percentage negotiable?',
    answer:
      'Sometimes. Particularly strong cases, clear liability, serious injuries, high damages, give you more negotiating leverage. However, many firms use standard rates and the fee structure matters less than the total amount you take home after fees and expenses.',
  },
  {
    question: 'What happens to case expenses if I lose?',
    answer:
      'This varies by firm and should be clarified before you sign. Some firms absorb expenses if you lose; others require reimbursement regardless. Make sure this is addressed in your retainer agreement.',
  },
  {
    question: 'Do I pay more if the case goes to trial?',
    answer:
      'Many contingency fee agreements have a sliding scale, for example, 33% if the case settles before filing, 38% if it requires filing suit, and 40% if it goes to trial. Ask specifically about this before signing.',
  },
  {
    question: 'What are typical case expenses in a personal injury case?',
    answer:
      'Common expenses include: filing fees, medical record retrieval costs, deposition costs, expert witness fees, accident reconstruction specialists, and court costs. Simple cases might have $500–$2,000 in expenses. Complex medical malpractice cases can have $50,000+ in expert costs.',
  },
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.phillylegalguide.com';

export default function WhatPercentagePage() {
  const articleJsonLd = articleSchema({
    title: 'What Percentage Do Personal Injury Lawyers Take in Pennsylvania?',
    description: 'Contingency fees in Pennsylvania personal injury cases explained.',
    url: `${siteUrl}/guide/what-percentage`,
    datePublished: '2024-01-15',
  });
  const faqJsonLd = faqSchema(faqs);
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Guides', url: `${siteUrl}/guide` },
    { name: 'What Percentage', url: `${siteUrl}/guide/what-percentage` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-sm text-text-muted mb-6">
          <Link href="/" className="hover:text-brand">Home</Link>
          {' / '}
          <Link href="/guide" className="hover:text-brand">Guides</Link>
          {' / '}
          <span className="text-text-secondary">What Percentage</span>
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4 leading-tight">
          What Percentage Do Personal Injury Lawyers Take in Pennsylvania?
        </h1>
        <p className="text-text-muted text-sm mb-8">6 min read &nbsp;·&nbsp; Pennsylvania</p>

        <div className="prose-like text-text-secondary leading-relaxed space-y-6">
          <p className="text-lg">
            If you've been injured and are considering hiring a lawyer, one of the first
            questions you'll have is: how much of my settlement goes to attorney fees?
            Here's what you need to know about contingency fees in Pennsylvania.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            The Standard Contingency Fee Range in Pennsylvania
          </h2>
          <p>
            Most Philadelphia personal injury attorneys charge a contingency fee of{' '}
            <strong>33% to 40%</strong> of your total recovery. This means:
          </p>
          <ul className="space-y-2">
            {[
              '33% (one-third) if the case settles before filing a lawsuit',
              '38–40% if the case requires filing suit',
              '40% if the case goes to trial',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Pennsylvania does not cap contingency fees in most personal injury cases (workers'
            compensation is an exception, fees are capped at 20% and must be approved by a
            judge).
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            How Case Expenses Are Handled
          </h2>
          <p>
            Attorney fees and case expenses are two different things. Expenses are the
            out-of-pocket costs of litigating your case: filing fees, medical records,
            expert witnesses, court reporters, accident reconstruction specialists, and more.
          </p>
          <p>
            These expenses are typically advanced by the attorney and deducted from your
            settlement in addition to the fee percentage. On a $100,000 settlement with a
            33% fee and $5,000 in expenses, you would receive:
          </p>
          <div className="bg-bg-accent border border-border-brand rounded-card p-5 my-2">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-text-secondary">Gross settlement</span>
                <span className="font-medium text-text-primary">$100,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Attorney fee (33%)</span>
                <span className="font-medium text-text-primary">− $33,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Case expenses</span>
                <span className="font-medium text-text-primary">− $5,000</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-border-mid">
                <span className="font-semibold text-text-primary">Your net recovery</span>
                <span className="font-bold text-brand">$62,000</span>
              </div>
            </div>
          </div>
          <p>
            Whether expenses are deducted before or after the fee percentage is applied also
            matters, always ask this specifically. Deducting expenses first (then taking the
            fee on the remainder) results in a higher net for you.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            How to Evaluate Whether a Fee Is Reasonable
          </h2>
          <p>
            The percentage is less important than the total amount you take home. A skilled
            attorney who charges 40% but wins you $300,000 leaves you with $180,000 (minus
            expenses). A less experienced firm charging 33% who settles for $100,000 leaves
            you with $67,000 (minus expenses).
          </p>
          <p>
            What matters most:
          </p>
          <ul className="space-y-2">
            {[
              'Does the firm have specific experience in your case type?',
              'Do they have a track record of taking cases to trial when settlements are unfair?',
              'Are the fee and expense arrangements documented clearly in a written retainer?',
              'Does the sliding scale (pre-filing vs. filed vs. trial) make sense for your expected timeline?',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            Workers' Compensation Is Different
          </h2>
          <p>
            In Pennsylvania workers' compensation cases, attorney fees are capped at{' '}
            <strong>20% of benefits recovered</strong> and must be approved by the workers'
            compensation judge. This is a meaningful protection for injured workers.
          </p>
        </div>

        {/* Quiz CTA */}
        <div className="bg-brand-light border border-border-brand rounded-card p-6 my-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-text-primary">Looking for Philadelphia firm recommendations?</p>
            <p className="text-sm text-text-secondary mt-0.5">Take our quiz to see firms matched to your case type.</p>
          </div>
          <Link href="/quiz" className="btn-primary text-sm whitespace-nowrap">
            Take the Quiz →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-text-primary mb-5">
          Frequently Asked Questions
        </h2>
        <FAQAccordion items={faqs} />

        <div className="mt-10 pt-8 border-t border-border-subtle">
          <p className="text-sm font-semibold text-text-primary mb-3">Related guides</p>
          <div className="flex flex-col gap-2">
            <Link href="/guide/how-to-choose" className="text-sm text-link hover:text-brand transition-colors">
              How to choose a personal injury lawyer in Philadelphia →
            </Link>
            <Link href="/guide/how-long" className="text-sm text-link hover:text-brand transition-colors">
              How long does a personal injury case take in Philadelphia? →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
