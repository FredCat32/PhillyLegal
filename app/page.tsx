import type { Metadata } from 'next';
import Link from 'next/link';
import { Car, Building2, HardHat, Stethoscope, ArrowRight, CheckCircle2, Shield, MapPin } from 'lucide-react';
import CaseTypeCard from '@/components/CaseTypeCard';
import FAQAccordion from '@/components/FAQAccordion';
import { faqSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Find the Right Injury Lawyer for Your Philadelphia Case | PhillyInjuryGuide',
  description:
    'Independent guide helping Philadelphia residents find the right personal injury lawyer. Take our free 2-minute quiz and see which firms handle your situation.',
  openGraph: {
    title: 'PhillyInjuryGuide — Find the Right Injury Lawyer in Philadelphia',
    description:
      'Answer 4 questions and find out exactly what type of lawyer you need — and which Philadelphia firms handle your situation.',
  },
};

const caseTypes = [
  {
    icon: Car,
    title: 'Car Accident',
    description: 'Vehicle accidents, rideshare injuries, pedestrian accidents in Philadelphia.',
    href: '/types/car-accident',
  },
  {
    icon: Building2,
    title: 'Slip & Fall',
    description: 'Premises liability, dangerous conditions, negligent property owners.',
    href: '/types/slip-and-fall',
  },
  {
    icon: HardHat,
    title: "Workers' Comp",
    description: 'Workplace injuries, denied claims, Pennsylvania workers\' compensation.',
    href: '/types/workers-comp',
  },
  {
    icon: Stethoscope,
    title: 'Medical Malpractice',
    description: 'Surgical errors, misdiagnosis, negligent medical care in PA.',
    href: '/types/medical-malpractice',
  },
];

const faqs = [
  {
    question: 'Do I need a lawyer for a minor accident in Philadelphia?',
    answer:
      "Not always — but even minor accidents can result in injuries that appear days later. A free consultation with a Philadelphia personal injury attorney costs nothing and helps you understand your rights before accepting any settlement from an insurance company.",
  },
  {
    question: 'How much does a personal injury lawyer cost in Pennsylvania?',
    answer:
      'Most Philadelphia personal injury lawyers work on contingency — meaning you pay nothing upfront and only owe legal fees if you win. Typical contingency fees in Pennsylvania range from 33% to 40% of your settlement. If you lose, you owe nothing.',
  },
  {
    question: 'What is the statute of limitations in Pennsylvania for personal injury?',
    answer:
      'Pennsylvania generally allows 2 years from the date of injury to file a personal injury lawsuit. Missing this deadline typically means losing your right to compensation entirely. Some exceptions apply — for example, if the injury was not immediately discovered, or if a government entity is involved.',
  },
  {
    question: 'How do I know if I have a personal injury case?',
    answer:
      'To have a viable claim, you generally need: (1) someone else was negligent or at fault, (2) that negligence caused your injury, and (3) you suffered documented harm. The best way to evaluate your case is a free consultation with a qualified Philadelphia personal injury attorney.',
  },
  {
    question: 'What should I bring to a free consultation with a personal injury lawyer?',
    answer:
      'Bring any documentation you have: police or accident reports, medical records and bills, photos of the scene or injuries, insurance information, correspondence with insurers, and a timeline of what happened. The more information you bring, the better your attorney can evaluate your case.',
  },
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://phillylegalguide.com';

export default function HomePage() {
  const faqJsonLd = faqSchema(faqs);
  const breadcrumbJsonLd = breadcrumbSchema([{ name: 'Home', url: siteUrl }]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-white border-b border-border-subtle">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-brand-light text-brand text-sm font-medium px-3 py-1.5 rounded-full mb-5">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Philadelphia, Pennsylvania
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary leading-tight text-balance mb-4">
              Find the Right Injury Lawyer for Your Philadelphia Case
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Answer 4 questions and find out exactly what type of lawyer you need — and which
              Philadelphia firms handle your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/quiz" className="btn-primary text-base py-3.5 px-7">
                Take the 2-minute quiz →
              </Link>
              <Link href="/types" className="btn-secondary text-base py-3.5 px-7">
                Browse case types
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="bg-bg-accent border-b border-border-brand">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center text-sm text-text-secondary">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-brand flex-shrink-0" aria-hidden="true" />
              <span><strong className="text-text-primary">Independent</strong> — we are not a law firm</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border-mid" aria-hidden="true" />
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" aria-hidden="true" />
              <span><strong className="text-text-primary">Free</strong> — no cost to use this guide</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border-mid" aria-hidden="true" />
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand flex-shrink-0" aria-hidden="true" />
              <span><strong className="text-text-primary">Local</strong> — Philadelphia-specific information</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case types */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-text-primary mb-2">
            Browse by Case Type
          </h2>
          <p className="text-text-secondary">
            Not sure where to start? Select the type of injury that best describes your situation.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {caseTypes.map((ct) => (
            <CaseTypeCard key={ct.href} {...ct} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="section-tint py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-xl mb-10">
            <h2 className="text-2xl font-bold text-text-primary mb-2">How It Works</h2>
            <p className="text-text-secondary">
              Our quiz takes 2 minutes and surfaces information that matters for your Philadelphia
              case — including your statute of limitations deadline.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Answer 4 quick questions',
                description:
                  'Tell us what happened, how long ago, and what matters most to you. No contact information required.',
              },
              {
                step: '2',
                title: 'See your case type and firm matches',
                description:
                  "We identify your case type, flag any statute of limitations urgency, and show you Philadelphia firms that specialise in your situation.",
              },
              {
                step: '3',
                title: 'Contact a firm for a free consultation',
                description:
                  'All listed firms offer free consultations with no obligation. Bring what you have and ask the questions that matter.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-9 h-9 rounded-full bg-brand text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-text-primary mb-6">
          Common Questions About Philadelphia Injury Cases
        </h2>
        <div className="max-w-3xl">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-brand py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to find the right lawyer for your case?
          </h2>
          <p className="text-brand-mid text-lg mb-7">
            Takes 2 minutes. No contact info required. Philadelphia-specific results.
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 bg-white text-brand font-semibold px-8 py-3.5 rounded-btn hover:bg-brand-light transition-colors text-base"
          >
            Take the Free Quiz
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
