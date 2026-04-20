import type { Metadata } from 'next';
import Link from 'next/link';
import FirmCard from '@/components/FirmCard';
import FAQAccordion from '@/components/FAQAccordion';
import SiteDisclosure from '@/components/SiteDisclosure';
import { getFirmsBySpecialty } from '@/lib/firms';
import { faqSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Slip and Fall Lawyers in Philadelphia',
  description:
    'Find a slip and fall attorney in Philadelphia. Learn about premises liability, what you need to prove, and how Pennsylvania law applies to your case.',
};

const faqs = [
  {
    question: 'What do I need to prove in a slip and fall case in Pennsylvania?',
    answer:
      'You generally need to prove: (1) the property owner owed you a duty of care, (2) they knew or should have known about the dangerous condition, (3) they failed to fix it or warn you, and (4) you suffered injuries as a result. Proving the owner "should have known" is often the most contested element.',
  },
  {
    question: 'How long do I have to file a slip and fall claim in Pennsylvania?',
    answer:
      'Pennsylvania has a 2-year statute of limitations for personal injury claims including slip and fall. If the incident occurred on government property (a city sidewalk, public building), you may need to file a formal notice within 6 months.',
  },
  {
    question: 'Can I sue if I slipped on a public sidewalk in Philadelphia?',
    answer:
      "Yes, but government claims have strict notice requirements. For city-owned property, you typically must file a tort claim notice within 6 months of the incident. Adjacent property owners are also often responsible for sidewalk maintenance in Pennsylvania.",
  },
  {
    question: 'What if I was partly at fault for the fall?',
    answer:
      "Pennsylvania uses a modified comparative negligence rule. If you were less than 51% at fault, you can still recover compensation, but your award is reduced by your percentage of fault. If you were 51% or more at fault, you cannot recover.",
  },
  {
    question: 'Does it matter if there was a "Wet Floor" sign present?',
    answer:
      "A warning sign doesn't automatically eliminate the property owner's liability, but it can reduce it. The sign must be clearly visible, placed in the right location, and the hazard itself must be the kind that a reasonable person could avoid after being warned. An attorney can evaluate the specifics.",
  },
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.phillylegalguide.com';

export default function SlipFallPage() {
  const firms = getFirmsBySpecialty('slip-and-fall');
  const faqJsonLd = faqSchema(faqs);
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Case Types', url: `${siteUrl}/types` },
    { name: 'Slip & Fall', url: `${siteUrl}/types/slip-and-fall` },
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
          <span className="text-text-secondary">Slip & Fall</span>
        </p>

        <div className="mb-6"><SiteDisclosure /></div>

        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
          Slip and Fall Lawyers in Philadelphia
        </h1>

        <p className="text-text-secondary leading-relaxed mb-6 text-lg">
          Slip and fall cases, also called premises liability claims, arise when a property
          owner's negligence creates a dangerous condition that causes your injury. Philadelphia
          properties, stores, restaurants, and public spaces all carry a duty to maintain safe
          conditions for visitors.
        </p>

        <div className="statute-callout mb-8">
          <p className="font-semibold text-brand mb-1">Pennsylvania Statute of Limitations</p>
          <p className="text-sm text-text-secondary leading-relaxed">
            Pennsylvania personal injury cases generally have a <strong>2-year statute of
            limitations</strong> from the date of injury. For incidents on government property,
            a 6-month notice requirement may also apply. Missing either deadline can eliminate
            your right to compensation.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
          What to Look for in a Philadelphia Slip and Fall Lawyer
        </h2>
        <ul className="space-y-3 text-text-secondary leading-relaxed mb-8">
          {[
            'Experience investigating premises liability cases and gathering evidence before it disappears',
            'Familiarity with Philadelphia property maintenance codes and standards',
            'Ability to identify all responsible parties (property owner, tenant, maintenance company)',
            'Willingness to fight insurers who argue contributory negligence on your part',
            'Contingency fee structure, you pay nothing unless they win',
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
            'What evidence do I need to preserve right now for my case?',
            'Have you handled similar premises liability cases in Philadelphia?',
            'Do you think the property owner knew about the hazard?',
            'How will you handle it if they argue I was partly responsible?',
            'What is your estimate of what my case could be worth?',
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
            { phase: 'Evidence preservation (immediate)', detail: 'Photos, incident reports, witness information, and surveillance footage must be gathered quickly, property owners are not required to preserve evidence indefinitely.' },
            { phase: 'Medical treatment and documentation', detail: 'Continue all recommended treatment. Documentation of your injuries, pain, and recovery is critical to your case value.' },
            { phase: 'Investigation and demand (3–9 months)', detail: 'Your attorney investigates liability, identifies all defendants, and sends a demand once your medical picture is clear.' },
            { phase: 'Resolution (typically 12–18 months)', detail: 'Many slip and fall cases settle without filing suit. More complex cases involving serious injury can take longer.' },
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
            Pennsylvania law distinguishes between different types of visitors: <strong>invitees</strong>
            (customers, guests invited for business purposes) receive the highest duty of care;
            <strong> licensees</strong> (social guests) receive a moderate duty; and <strong>trespassers</strong>
            receive limited protection. Most slip and fall victims in stores or public spaces are
            considered invitees.
          </p>
          <p>
            The <strong>2-year statute of limitations</strong> applies to slip and fall claims
            (42 Pa.C.S. § 5524). For claims against the City of Philadelphia or other government
            entities, the Pennsylvania Political Subdivision Tort Claims Act may require a
            formal notice within 6 months.
          </p>
          <p>
            Pennsylvania's <strong>modified comparative negligence</strong> rule means your
            compensation is reduced if you were partly at fault, but you can still recover
            if you were less than 51% responsible.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-text-primary mb-5">
          Philadelphia Firms That Handle Slip & Fall Cases
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {firms.map((firm, i) => (
            <FirmCard key={firm.id} firm={firm} sourcePage="slip-and-fall" position={i + 1} />
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
