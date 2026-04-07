import type { Metadata } from 'next';
import Link from 'next/link';
import FirmCard from '@/components/FirmCard';
import FAQAccordion from '@/components/FAQAccordion';
import SiteDisclosure from '@/components/SiteDisclosure';
import { getFirmsBySpecialty } from '@/lib/firms';
import { faqSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Medical Malpractice Lawyers in Philadelphia',
  description:
    'Find a medical malpractice attorney in Philadelphia. Learn what qualifies as malpractice, Pennsylvania\'s expert witness requirements, and how to find the right firm.',
};

const faqs = [
  {
    question: 'How do I know if I have a medical malpractice case in Pennsylvania?',
    answer:
      "Medical malpractice occurs when a healthcare provider deviates from the accepted standard of care and causes injury. Common examples include surgical errors, failure to diagnose, medication errors, and birth injuries. Because evaluating this requires medical expertise, the best first step is a free consultation with a malpractice attorney who can review your records.",
  },
  {
    question: 'What is the statute of limitations for medical malpractice in Pennsylvania?',
    answer:
      "Pennsylvania generally has a 2-year statute of limitations for medical malpractice claims. However, the 'discovery rule' may extend this, if you could not reasonably have discovered the malpractice immediately, the clock may start from when you discovered (or should have discovered) the injury. Minors generally have until age 20 to file.",
  },
  {
    question: 'Does Pennsylvania require an expert witness for a malpractice case?',
    answer:
      "Yes. Pennsylvania requires a Certificate of Merit from a licensed medical professional, filed within 60 days of filing suit, stating that the defendant deviated from the standard of care. This is one reason why selecting an attorney with specific malpractice experience, and expert witness relationships, is critical.",
  },
  {
    question: 'How long does a medical malpractice case take in Pennsylvania?',
    answer:
      "Medical malpractice cases are among the most complex personal injury cases. The expert witness requirement, extensive discovery, and high value of claims mean most cases take 2–4 years to resolve. Very few settle quickly, most require filing suit and going through significant litigation.",
  },
  {
    question: "How much does it cost to hire a medical malpractice lawyer in Philadelphia?",
    answer:
      "Most medical malpractice attorneys work on contingency, you pay nothing upfront. Given the complexity and expense of these cases (expert witnesses alone can cost $10,000–$50,000+), attorneys typically take 33–40% of any recovery, with case expenses also deducted from the settlement.",
  },
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://phillylegalguide.com';

export default function MedicalMalpracticePage() {
  const firms = getFirmsBySpecialty('medical-malpractice');
  const faqJsonLd = faqSchema(faqs);
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Case Types', url: `${siteUrl}/types` },
    { name: 'Medical Malpractice', url: `${siteUrl}/types/medical-malpractice` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-sm text-text-muted mb-6">
          <Link href="/" className="hover:text-brand">Home</Link>
          {' / '}
          <Link href="/types" className="hover:text-brand">Case Types</Link>
          {' / '}
          <span className="text-text-secondary">Medical Malpractice</span>
        </p>

        <div className="mb-6"><SiteDisclosure /></div>

        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
          Medical Malpractice Lawyers in Philadelphia
        </h1>

        <p className="text-text-secondary leading-relaxed mb-6 text-lg">
          Medical malpractice cases involve injuries caused by healthcare providers who fail
          to meet the accepted standard of care. These are among the most complex personal injury
          cases, requiring specialised attorneys with expert witness networks, deep medical
          knowledge, and the resources to litigate against well-funded hospital systems.
        </p>

        <div className="statute-callout mb-8">
          <p className="font-semibold text-brand mb-1">Pennsylvania Statute of Limitations</p>
          <p className="text-sm text-text-secondary leading-relaxed">
            Pennsylvania medical malpractice cases generally have a <strong>2-year statute of
            limitations</strong> from the date of the negligent act or discovery of injury. The
            discovery rule may extend this in some situations. Minors have until age 20. Missing
            this deadline typically means losing your right to compensation entirely.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
          What to Look for in a Philadelphia Medical Malpractice Lawyer
        </h2>
        <ul className="space-y-3 text-text-secondary leading-relaxed mb-8">
          {[
            'Dedicated medical malpractice practice with established expert witness relationships',
            'Specific experience with your type of case (surgical error, misdiagnosis, birth injury, etc.)',
            'The financial resources to fund complex litigation (experts, depositions, records)',
            'A track record of substantial verdicts and settlements, not just settlements',
            'Willingness to be direct about the strengths and weaknesses of your case',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Questions to Ask at Your Free Consultation
        </h2>
        <ul className="space-y-3 text-text-secondary leading-relaxed mb-8">
          {[
            'Have you handled cases involving my specific type of medical error?',
            'Do you have medical experts who can review and testify in my type of case?',
            'Do you believe I have a viable case and why?',
            'What are the biggest challenges you foresee in my case?',
            'How will case expenses be handled if we lose?',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-text-primary mb-4">
          What to Expect: Timeline and Process
        </h2>
        <div className="space-y-4 mb-8">
          {[
            { phase: 'Case evaluation (1–3 months)', detail: 'Your attorney obtains and reviews all medical records with expert consultants to assess whether the standard of care was breached.' },
            { phase: 'Certificate of Merit filing', detail: 'Pennsylvania requires a Certificate of Merit from a qualified medical expert within 60 days of filing suit. Without it, the case is dismissed.' },
            { phase: 'Discovery (12–24 months)', detail: 'Both sides exchange evidence, depose witnesses, and retain expert witnesses. This phase is expensive and time-consuming.' },
            { phase: 'Resolution (typically 2–4 years)', detail: 'Medical malpractice cases rarely settle quickly. Most require filing suit and proceeding through significant litigation before resolution.' },
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

        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Pennsylvania-Specific Information
        </h2>
        <div className="text-text-secondary leading-relaxed space-y-3 mb-10">
          <p>
            Pennsylvania's <strong>Medical Care Availability and Reduction of Error (MCARE) Act</strong>
            {' '}governs medical malpractice litigation in the state. It sets requirements for
            expert witnesses, limits on punitive damages, and procedures for case management.
          </p>
          <p>
            Pennsylvania requires medical malpractice cases to be filed in the county where the
            treatment occurred. For Philadelphia cases, this means Philadelphia Court of Common
            Pleas, which has judges experienced in handling complex medical litigation.
          </p>
          <p>
            Pennsylvania does <strong>not</strong> cap compensatory damages in medical malpractice
            cases (unlike many other states), meaning serious injuries can result in substantial
            recoveries for economic and non-economic damages.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-text-primary mb-5">
          Philadelphia Firms That Handle Medical Malpractice Cases
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {firms.map((firm, i) => (
            <FirmCard key={firm.id} firm={firm} sourcePage="medical-malpractice" position={i + 1} />
          ))}
        </div>

        <div className="bg-brand-light border border-border-brand rounded-card p-6 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-text-primary">Not sure this is your case type?</p>
            <p className="text-sm text-text-secondary mt-0.5">Take our 2-minute quiz and we'll identify it for you.</p>
          </div>
          <Link href="/quiz" className="btn-primary text-sm whitespace-nowrap">
            Take the Quiz →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-text-primary mb-5">
          Frequently Asked Questions
        </h2>
        <FAQAccordion items={faqs} />
      </div>
    </>
  );
}
