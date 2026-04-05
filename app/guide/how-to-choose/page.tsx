import type { Metadata } from 'next';
import Link from 'next/link';
import FAQAccordion from '@/components/FAQAccordion';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'How to Choose a Personal Injury Lawyer in Philadelphia: What Actually Matters',
  description:
    'Practical guide to choosing the right personal injury lawyer in Philadelphia — contingency fees, questions to ask, red flags, and what to bring to your consultation.',
};

const faqs = [
  {
    question: 'What is a contingency fee?',
    answer:
      "A contingency fee means your attorney only gets paid if you win. Instead of billing by the hour, they take a percentage — typically 33–40% — of your final settlement or verdict. If you lose, you owe no legal fees (though you may still owe case expenses).",
  },
  {
    question: 'What are red flags when hiring a personal injury lawyer?',
    answer:
      "Red flags include: attorneys who guarantee specific outcomes, high-pressure tactics to sign quickly, unclear fee agreements, no direct access to your attorney (only paralegals), firms that seem to handle every type of case rather than specialising, and lack of transparency about how expenses are handled.",
  },
  {
    question: 'Does specialisation matter in personal injury law?',
    answer:
      "Yes, significantly. A firm that specialises in medical malpractice will have expert witness relationships, in-depth knowledge of medical standards of care, and a track record in that specific arena. A general personal injury firm may not have the same depth. Match your case type to a firm with specific expertise.",
  },
  {
    question: 'Should I hire the lawyer with the most TV ads?',
    answer:
      "Not necessarily. Heavy advertising budgets don't correlate with case outcomes. It's worth researching specific attorneys who will handle your case — not just the name on the billboard. Many excellent Philadelphia injury attorneys are not heavy advertisers.",
  },
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://phillylegalguide.com';

export default function HowToChoosePage() {
  const articleJsonLd = articleSchema({
    title: 'How to Choose a Personal Injury Lawyer in Philadelphia: What Actually Matters',
    description:
      'Practical guide to choosing the right personal injury lawyer in Philadelphia.',
    url: `${siteUrl}/guide/how-to-choose`,
    datePublished: '2024-01-15',
  });
  const faqJsonLd = faqSchema(faqs);
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Guides', url: `${siteUrl}/guide` },
    { name: 'How to Choose', url: `${siteUrl}/guide/how-to-choose` },
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
          <span className="text-text-secondary">How to Choose</span>
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4 leading-tight">
          How to Choose a Personal Injury Lawyer in Philadelphia: What Actually Matters
        </h1>
        <p className="text-text-muted text-sm mb-8">8 min read &nbsp;·&nbsp; Philadelphia, PA</p>

        <div className="prose-like text-text-secondary leading-relaxed space-y-6">
          <p className="text-lg">
            Choosing the right personal injury lawyer can be the difference between a fair
            settlement and being taken advantage of by an insurance company. Here's what
            actually matters — and what doesn't.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            1. Understand How Contingency Fees Work
          </h2>
          <p>
            Nearly all Philadelphia personal injury lawyers work on contingency — you pay
            nothing upfront and only owe attorney fees if you win. The standard fee in
            Pennsylvania ranges from <strong>33% to 40%</strong> of your total recovery.
          </p>
          <p>
            Before signing, get clarity on two things: (1) what is the exact percentage,
            and does it change if the case goes to trial? (2) How are case expenses handled?
            Expenses — filing fees, expert witnesses, medical record costs — can run
            $5,000–$50,000+ and are typically deducted from your settlement in addition to
            the attorney fee.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            2. Match the Firm to Your Case Type
          </h2>
          <p>
            A firm that handles hundreds of car accident cases is not the same as a firm
            that specialises in medical malpractice. The latter needs expert witness
            relationships, deep knowledge of medical standards of care, and the financial
            resources to litigate complex cases.
          </p>
          <p>
            Don't hire a general personal injury firm for a medical malpractice case just
            because they advertise heavily or have a good review profile. Ask specifically:
            "How many cases like mine have you handled in the last three years? What were
            the outcomes?"
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            3. Questions to Ask at Every Free Consultation
          </h2>
          <ul className="space-y-2">
            {[
              'Who specifically will handle my case — you, an associate, or a paralegal?',
              'How many cases similar to mine have you taken to trial?',
              'What is your honest assessment of my case strength?',
              'What is your contingency fee, and does it change if we file suit or go to trial?',
              'How are case expenses handled, and what happens if we lose?',
              'How often will you update me, and can I reach you directly?',
              'What is a realistic timeline and value range for my case?',
            ].map((q) => (
              <li key={q} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2" aria-hidden="true" />
                <span>{q}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            4. Red Flags to Watch For
          </h2>
          <ul className="space-y-2">
            {[
              'Guaranteeing a specific outcome or settlement amount — no ethical attorney can promise this',
              'High-pressure tactics to sign a retainer before you\'ve had time to think',
              'Unwillingness to explain their fee structure in writing, in plain English',
              'You\'ll always be talking to a paralegal, never your actual attorney',
              'The firm handles every type of case under the sun — specialists beat generalists in complex cases',
              'Vague answers about how they\'ve handled similar cases',
            ].map((q) => (
              <li key={q} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2" aria-hidden="true" />
                <span>{q}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            5. Free Consultations: What They Are and Aren't
          </h2>
          <p>
            Most Philadelphia personal injury firms offer free initial consultations — typically
            30–60 minutes. This is a real evaluation of your case, not just a sales pitch,
            at good firms.
          </p>
          <p>
            Consultations are non-binding. You are not obligated to hire the attorney after
            meeting them. Meet with 2–3 firms before deciding. Compare how they explain your
            situation, how they answer your questions, and whether they're someone you can
            communicate with openly over what could be a 1–3 year relationship.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            6. What to Bring to Your Consultation
          </h2>
          <ul className="space-y-2">
            {[
              'Police or incident report (if available)',
              'Medical records and bills related to your injury',
              'Photos of the scene, your injuries, or any property damage',
              'Insurance information (yours and any other parties involved)',
              'A written timeline of what happened',
              'Any correspondence from insurance companies (do not sign anything yet)',
              'Names and contact information of witnesses',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
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

        {/* Related links */}
        <div className="mt-10 pt-8 border-t border-border-subtle">
          <p className="text-sm font-semibold text-text-primary mb-3">Related guides</p>
          <div className="flex flex-col gap-2">
            <Link href="/guide/what-percentage" className="text-sm text-link hover:text-brand transition-colors">
              What percentage do personal injury lawyers take in Pennsylvania? →
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
