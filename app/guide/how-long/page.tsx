import type { Metadata } from 'next';
import Link from 'next/link';
import FAQAccordion from '@/components/FAQAccordion';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'How Long Does a Personal Injury Case Take in Philadelphia?',
  description:
    'Learn how long personal injury cases take in Philadelphia, settlement timelines vs. trial timelines, what causes delays, and realistic expectations.',
};

const faqs = [
  {
    question: 'Can I speed up my personal injury case?',
    answer:
      'To some extent. Responding quickly to your attorney\'s requests, attending all medical appointments, and documenting everything thoroughly can prevent delays. However, you cannot rush the medical treatment process, settling before you\'ve reached maximum medical improvement typically means undervaluing your claim.',
  },
  {
    question: 'What causes the most delays in personal injury cases?',
    answer:
      'Common causes of delay: waiting for medical treatment to conclude, difficulty obtaining records, insurance company stalling tactics, court scheduling backlogs in Philadelphia, disputes over liability, and complex cases requiring extensive expert witnesses.',
  },
  {
    question: 'Should I accept a quick settlement offer?',
    answer:
      "Be cautious about early settlement offers, especially before your treatment is complete. Once you settle, you typically cannot go back for more money even if your injuries turn out to be more serious. Your attorney can advise whether an offer is fair given your specific circumstances.",
  },
  {
    question: 'What is maximum medical improvement (MMI) and why does it matter?',
    answer:
      "MMI is the point at which your doctor believes your condition has stabilised and further significant improvement is unlikely. Settling before MMI is risky, you don't yet know the full extent of your injuries, future medical costs, or long-term impact on your ability to work. Most experienced attorneys wait for MMI before demanding a settlement.",
  },
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.phillylegalguide.com';

export default function HowLongPage() {
  const articleJsonLd = articleSchema({
    title: 'How Long Does a Personal Injury Case Take in Philadelphia?',
    description: 'Settlement and trial timelines for personal injury cases in Philadelphia.',
    url: `${siteUrl}/guide/how-long`,
    datePublished: '2024-01-15',
  });
  const faqJsonLd = faqSchema(faqs);
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Guides', url: `${siteUrl}/guide` },
    { name: 'How Long', url: `${siteUrl}/guide/how-long` },
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
          <span className="text-text-secondary">How Long</span>
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4 leading-tight">
          How Long Does a Personal Injury Case Take in Philadelphia?
        </h1>
        <p className="text-text-muted text-sm mb-8">7 min read &nbsp;·&nbsp; Philadelphia, PA</p>

        <div className="prose-like text-text-secondary leading-relaxed space-y-6">
          <p className="text-lg">
            One of the most common questions people have after an injury is: how long will
            this take? The honest answer is: it depends. But here's a realistic framework
            for what to expect in Philadelphia.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            The Short Answer: Most Cases Take 1–3 Years
          </h2>
          <p>
            Simple cases, clear liability, minor-to-moderate injuries, cooperative insurers
           , can sometimes settle in 3–9 months. Complex cases involving serious injury,
            disputed liability, or litigation commonly take 2–4 years. Medical malpractice
            cases often take 3–5 years.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            Settlement Timeline vs. Trial Timeline
          </h2>
          <p>
            The vast majority of personal injury cases settle without going to trial —
            roughly 95%+ in most estimates. Settlement timelines:
          </p>
          <div className="space-y-4 my-2">
            {[
              { phase: 'Pre-litigation settlement (3–12 months)', detail: 'Investigation, medical treatment, demand letter, insurance negotiations. This is the fastest path and avoids court entirely.' },
              { phase: 'Post-filing settlement (12–24 months)', detail: 'If the insurer won\'t make a fair offer, your attorney files suit. Most cases still settle during discovery, before trial.' },
              { phase: 'Trial (2–4+ years)', detail: 'If both sides cannot agree, the case goes to trial. Philadelphia Court of Common Pleas schedules are busy, getting a trial date can take 18–24 months after filing alone.' },
            ].map((item) => (
              <div key={item.phase} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-brand flex-shrink-0 mt-2" aria-hidden="true" />
                <div>
                  <span className="font-medium text-text-primary">{item.phase}: </span>
                  <span>{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            Factors That Affect Duration
          </h2>
          <ul className="space-y-2">
            {[
              { factor: 'Severity of injuries', detail: 'Attorneys wait for you to reach Maximum Medical Improvement (MMI) before demanding a settlement. Serious injuries with longer recovery periods mean longer cases.' },
              { factor: 'Liability clarity', detail: 'Clear-cut liability (e.g., a rear-end collision with a police report) speeds things up. Disputed liability, where both sides disagree about who was at fault, adds months or years.' },
              { factor: 'Insurance company cooperation', detail: 'Some insurers negotiate in good faith. Others use delay tactics. Cases against major insurers with standard litigation tactics can take longer.' },
              { factor: 'Case complexity', detail: 'Medical malpractice and catastrophic injury cases involve extensive expert witnesses, depositions, and discovery that take time regardless of insurer cooperation.' },
              { factor: 'Philadelphia court backlog', detail: 'If your case goes to trial, Philadelphia\'s Court of Common Pleas schedules are busy. Getting a trial date can add 12–24 months to your timeline.' },
            ].map((item) => (
              <li key={item.factor} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2" aria-hidden="true" />
                <div>
                  <strong className="text-text-primary">{item.factor}:</strong>{' '}
                  {item.detail}
                </div>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            Typical Timelines by Case Type
          </h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-bg-accent">
                  <th className="text-left px-4 py-3 font-semibold text-text-primary border border-border-subtle">Case Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-text-primary border border-border-subtle">Settlement</th>
                  <th className="text-left px-4 py-3 font-semibold text-text-primary border border-border-subtle">If Litigated</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Car Accident (minor)', '3–9 months', '12–18 months'],
                  ['Car Accident (serious)', '9–18 months', '18–36 months'],
                  ['Slip & Fall', '6–18 months', '18–30 months'],
                  ["Workers' Comp", '6–18 months', '12–36 months'],
                  ['Medical Malpractice', '18–36 months', '36–60 months'],
                ].map(([type, settlement, litigated]) => (
                  <tr key={type} className="hover:bg-bg-accent/50 transition-colors">
                    <td className="px-4 py-3 font-medium text-text-primary border border-border-subtle">{type}</td>
                    <td className="px-4 py-3 text-text-secondary border border-border-subtle">{settlement}</td>
                    <td className="px-4 py-3 text-text-secondary border border-border-subtle">{litigated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            What You Can Control
          </h2>
          <ul className="space-y-2">
            {[
              'Follow all medical recommendations, gaps in treatment hurt your case',
              'Document everything: keep a journal of symptoms, limitations, and medical appointments',
              'Respond promptly to your attorney\'s requests',
              'Don\'t post about your case or your activities on social media',
              'Don\'t sign anything from an insurance company before consulting your attorney',
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

        <div className="mt-10 pt-8 border-t border-border-subtle">
          <p className="text-sm font-semibold text-text-primary mb-3">Related guides</p>
          <div className="flex flex-col gap-2">
            <Link href="/guide/how-to-choose" className="text-sm text-link hover:text-brand transition-colors">
              How to choose a personal injury lawyer in Philadelphia →
            </Link>
            <Link href="/guide/what-percentage" className="text-sm text-link hover:text-brand transition-colors">
              What percentage do personal injury lawyers take in Pennsylvania? →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
