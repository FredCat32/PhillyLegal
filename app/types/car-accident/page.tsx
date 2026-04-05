import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import FirmCard from '@/components/FirmCard';
import FAQAccordion from '@/components/FAQAccordion';
import SiteDisclosure from '@/components/SiteDisclosure';
import { getFirmsBySpecialty } from '@/lib/firms';
import { faqSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Car Accident Lawyers in Philadelphia',
  description:
    'Find the right car accident lawyer in Philadelphia. Learn what makes a strong claim, what to look for in an attorney, and how long your case may take in Pennsylvania.',
};

const faqs = [
  {
    question: 'How long do I have to file a car accident claim in Pennsylvania?',
    answer:
      'Pennsylvania has a 2-year statute of limitations for personal injury claims, including car accidents. The clock typically starts on the date of the accident. Missing this deadline typically means losing your right to compensation entirely.',
  },
  {
    question: 'Does Pennsylvania use fault or no-fault insurance for car accidents?',
    answer:
      "Pennsylvania is a \"choice no-fault\" state. When you buy car insurance, you choose between limited tort (no-fault, harder to sue) and full tort (can sue for any injury). If you chose limited tort, you can still sue for serious injuries. A Philadelphia car accident attorney can advise which applies to your situation.",
  },
  {
    question: 'What if the other driver was uninsured?',
    answer:
      'Pennsylvania requires drivers to carry uninsured motorist coverage, which can compensate you if the at-fault driver was uninsured or underinsured. A car accident attorney can help you file a UM/UIM claim.',
  },
  {
    question: 'How much is a car accident case worth in Pennsylvania?',
    answer:
      'It depends on the severity of your injuries, lost wages, medical bills, and pain and suffering. Minor fender-benders might settle for a few thousand dollars. Serious injuries involving surgery or permanent disability can settle for hundreds of thousands or more.',
  },
  {
    question: 'Should I talk to the insurance company before hiring a lawyer?',
    answer:
      'Be very cautious. Insurance adjusters are trained to minimise payouts. Anything you say can be used against you. Most Philadelphia car accident attorneys offer free consultations — talk to one before giving a recorded statement to any insurer.',
  },
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://phillylegalguide.com';

export default function CarAccidentPage() {
  const firms = getFirmsBySpecialty('car-accident');
  const faqJsonLd = faqSchema(faqs);
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Case Types', url: `${siteUrl}/types` },
    { name: 'Car Accident', url: `${siteUrl}/types/car-accident` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <p className="text-sm text-text-muted mb-6">
          <Link href="/" className="hover:text-brand">Home</Link>
          {' / '}
          <Link href="/types" className="hover:text-brand">Case Types</Link>
          {' / '}
          <span className="text-text-secondary">Car Accident</span>
        </p>

        {/* Disclosure */}
        <div className="mb-6">
          <SiteDisclosure />
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
          Car Accident Lawyers in Philadelphia
        </h1>

        {/* What is this type of case */}
        <p className="text-text-secondary leading-relaxed mb-6 text-lg">
          Car accidents are the leading cause of personal injury claims in Philadelphia. If you
          were injured in a vehicle accident caused by another driver's negligence — whether on
          I-95, Route 1, or a local street — you may be entitled to compensation for medical
          bills, lost wages, and pain and suffering.
        </p>

        {/* Statute of limitations callout */}
        <div className="statute-callout mb-8">
          <p className="font-semibold text-brand mb-1">Pennsylvania Statute of Limitations</p>
          <p className="text-sm text-text-secondary leading-relaxed">
            Pennsylvania personal injury cases generally have a <strong>2-year statute of
            limitations</strong> from the date of injury. Missing this deadline typically means
            losing your right to compensation entirely. If your accident was recent, don't delay
            in consulting an attorney.
          </p>
        </div>

        {/* What to look for */}
        <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
          What to Look for in a Philadelphia Car Accident Lawyer
        </h2>
        <ul className="space-y-3 text-text-secondary leading-relaxed mb-8">
          {[
            'Experience specifically with Pennsylvania auto injury claims and insurance disputes',
            'Familiarity with Pennsylvania\'s choice no-fault system (limited tort vs. full tort)',
            'A track record of taking cases to trial, not just settling quickly',
            'Contingency fee structure — you pay nothing unless they win',
            'Clear communication and a dedicated point of contact for your case',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        {/* Questions to ask */}
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Questions to Ask at Your Free Consultation
        </h2>
        <ul className="space-y-3 text-text-secondary leading-relaxed mb-8">
          {[
            'Have you handled car accident cases similar to mine in Pennsylvania?',
            'What is your contingency fee percentage, and how are expenses handled?',
            'Will you personally handle my case, or will it be passed to a junior associate?',
            'Do you think my case is worth taking to trial if the insurance offer is low?',
            'How long do you expect my case to take?',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        {/* Timeline */}
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          What to Expect: Timeline and Process
        </h2>
        <div className="space-y-4 mb-8">
          {[
            { phase: 'Investigation (1–3 months)', detail: 'Your attorney gathers police reports, medical records, witness statements, and any available camera footage.' },
            { phase: 'Demand letter and negotiations (3–6 months)', detail: 'After treatment is complete or you reach maximum medical improvement, your attorney sends a demand to the insurer and begins negotiations.' },
            { phase: 'Filing suit (if needed)', detail: 'If the insurer refuses a fair settlement, your attorney files a lawsuit. Most cases still settle before trial.' },
            { phase: 'Resolution (typically 12–24 months overall)', detail: 'Simple cases can settle in months. Cases involving serious injury, disputed liability, or litigation can take 2+ years.' },
          ].map((item) => (
            <div key={item.phase} className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-brand flex-shrink-0 mt-2" aria-hidden="true" />
              <div>
                <span className="font-medium text-text-primary">{item.phase}: </span>
                <span className="text-text-secondary">{item.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* PA-specific */}
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Pennsylvania-Specific Information
        </h2>
        <div className="prose-like text-text-secondary leading-relaxed space-y-3 mb-10">
          <p>
            Pennsylvania operates a <strong>choice no-fault insurance system</strong>. When
            purchasing auto insurance, drivers choose between "limited tort" (restricts your
            ability to sue for pain and suffering) and "full tort" (preserves all rights to sue).
            Most people default to limited tort because it costs less — but it can significantly
            limit your recovery.
          </p>
          <p>
            The <strong>2-year statute of limitations</strong> applies to car accident claims in
            Pennsylvania (42 Pa.C.S. § 5524). Exceptions exist for minors (clock doesn't start
            until age 18) and cases involving government vehicles (special notice requirements may
            apply within 6 months).
          </p>
          <p>
            Philadelphia is also subject to <strong>comparative negligence rules</strong>: if you
            were partly at fault, your compensation is reduced by your percentage of fault. You can
            still recover if you were less than 51% responsible.
          </p>
        </div>

        {/* Firms */}
        <h2 className="text-2xl font-bold text-text-primary mb-5">
          Philadelphia Firms That Handle Car Accident Cases
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {firms.map((firm, i) => (
            <FirmCard key={firm.id} firm={firm} sourcePage="car-accident" position={i + 1} />
          ))}
        </div>

        {/* Quiz CTA */}
        <div className="bg-brand-light border border-border-brand rounded-card p-6 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-text-primary">Not sure car accident is your case type?</p>
            <p className="text-sm text-text-secondary mt-0.5">Take our 2-minute quiz and we'll identify it for you.</p>
          </div>
          <Link href="/quiz" className="btn-primary text-sm whitespace-nowrap">
            Take the Quiz →
          </Link>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-text-primary mb-5">
          Frequently Asked Questions
        </h2>
        <FAQAccordion items={faqs} />
      </div>
    </>
  );
}
