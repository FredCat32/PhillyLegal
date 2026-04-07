import type { Metadata } from 'next';
import Link from 'next/link';
import FirmCard from '@/components/FirmCard';
import FAQAccordion from '@/components/FAQAccordion';
import SiteDisclosure from '@/components/SiteDisclosure';
import { getFirmsBySpecialty } from '@/lib/firms';
import { faqSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: "Workers' Compensation Lawyers in Philadelphia",
  description:
    "Find a workers' comp attorney in Philadelphia. Learn how Pennsylvania's workers' compensation system works, why claims get denied, and how a lawyer can help.",
};

const faqs = [
  {
    question: "Do I need a lawyer for a workers' comp claim in Pennsylvania?",
    answer:
      "Not always for simple claims, but if your claim has been denied, disputed, or if your injuries are serious, a workers' compensation attorney significantly increases your odds of a full recovery. Most work on contingency and are paid from your settlement.",
  },
  {
    question: "How long do I have to report a workplace injury in Pennsylvania?",
    answer:
      "You must report your workplace injury to your employer within 120 days to be eligible for workers' compensation benefits. To receive full back-pay for benefits, you must report within 21 days. You then have 3 years from the date of injury to file a formal claim petition.",
  },
  {
    question: "Can I sue my employer for a workplace injury in Pennsylvania?",
    answer:
      "Generally, no, Pennsylvania's workers' compensation system is the exclusive remedy against your employer. However, you may be able to sue a third party (such as an equipment manufacturer, contractor, or negligent driver) whose actions contributed to your injury.",
  },
  {
    question: "What if my workers' comp claim is denied?",
    answer:
      "You have the right to appeal a denied claim before the Pennsylvania Workers' Compensation Appeal Board. The process involves a hearing before a workers' compensation judge. An attorney is almost always necessary at this stage.",
  },
  {
    question: "Can I be fired for filing a workers' comp claim in Pennsylvania?",
    answer:
      "No, Pennsylvania law prohibits retaliation for filing a workers' compensation claim. If you are fired or demoted after filing, you may have a separate wrongful termination claim. Document everything and contact an attorney immediately.",
  },
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://phillylegalguide.com';

export default function WorkersCompPage() {
  const firms = getFirmsBySpecialty('workers-comp');
  const faqJsonLd = faqSchema(faqs);
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Case Types', url: `${siteUrl}/types` },
    { name: "Workers' Comp", url: `${siteUrl}/types/workers-comp` },
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
          <span className="text-text-secondary">Workers' Comp</span>
        </p>

        <div className="mb-6"><SiteDisclosure /></div>

        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
          Workers' Compensation Lawyers in Philadelphia
        </h1>

        <p className="text-text-secondary leading-relaxed mb-6 text-lg">
          If you were injured on the job in Philadelphia, you are generally entitled to
          workers' compensation benefits, including medical expenses and a portion of lost
          wages. But the system is designed by insurers, and claims are frequently denied or
          underpaid. An experienced workers' comp attorney can level the playing field.
        </p>

        <div className="statute-callout mb-8">
          <p className="font-semibold text-brand mb-1">Pennsylvania Filing Deadlines</p>
          <p className="text-sm text-text-secondary leading-relaxed">
            Report your injury to your employer within <strong>120 days</strong> of the incident
            (21 days for full back-pay of benefits). You have <strong>3 years from the date of
            injury</strong> to file a formal workers' compensation claim petition. Miss these
            deadlines and you may lose your right to benefits.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
          What to Look for in a Philadelphia Workers' Comp Lawyer
        </h2>
        <ul className="space-y-3 text-text-secondary leading-relaxed mb-8">
          {[
            'Dedicated workers\' compensation practice, not just a general personal injury firm',
            'Experience handling denied claims and appeals before the PA Workers\' Compensation Appeal Board',
            'Familiarity with employer and insurer tactics to reduce or terminate benefits',
            'Ability to identify third-party claims that may provide additional compensation',
            'Clear contingency fee agreement, typical fees are capped by Pennsylvania law',
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
            'Has my employer or their insurer done anything that may harm my claim?',
            'Do I have any third-party claims in addition to workers\' comp?',
            'What benefits am I entitled to and for how long?',
            'What happens if my employer disputes the injury occurred at work?',
            'How are your fees structured for workers\' comp cases in Pennsylvania?',
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
            { phase: 'Immediate steps', detail: 'Report your injury to your employer in writing. Seek medical care, in Pennsylvania, your employer may designate which doctors you must see for the first 90 days.' },
            { phase: 'Claim filed and evaluated (1–3 months)', detail: 'The employer\'s insurance carrier has 21 days to accept or deny your claim. If denied, you need to file a claim petition.' },
            { phase: 'Litigation if disputed (6–18 months)', detail: 'Disputed claims go before a workers\' compensation judge. Discovery, depositions, and hearings take time. Most cases settle during this process.' },
            { phase: 'Resolution', detail: 'Cases can settle with a lump sum payment or continue as ongoing weekly benefits. Your attorney can help evaluate whether a settlement offer is fair.' },
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
            Pennsylvania workers' compensation is governed by the <strong>Pennsylvania Workers'
            Compensation Act</strong>. Most employers are required to carry workers' comp
            insurance. Benefits include: medical treatment coverage, wage loss benefits (typically
            66 2/3% of your average weekly wage), and specific loss benefits for permanent
            injuries.
          </p>
          <p>
            Pennsylvania law <strong>caps attorney fees</strong> in workers' comp cases at 20%
            of compensation awarded, and fees must be approved by the workers' compensation judge.
          </p>
          <p>
            The <strong>employer-designated physician rule</strong> means that for the first 90
            days, you may be required to treat with a doctor from your employer's approved list.
            After 90 days, you can generally choose your own physician.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-text-primary mb-5">
          Philadelphia Firms That Handle Workers' Comp Cases
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {firms.map((firm, i) => (
            <FirmCard key={firm.id} firm={firm} sourcePage="workers-comp" position={i + 1} />
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
