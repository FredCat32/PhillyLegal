import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Scale, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About PhillyLegalGuide',
  description:
    'PhillyLegalGuide is an independent information resource helping Philadelphia residents understand their personal injury cases and find the right legal help.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <p className="text-sm text-text-muted mb-6">
        <Link href="/" className="hover:text-brand">Home</Link>
        {' / '}
        <span className="text-text-secondary">About</span>
      </p>

      <h1 className="text-3xl font-bold text-text-primary mb-4">
        About PhillyLegalGuide
      </h1>

      <p className="text-lg text-text-secondary leading-relaxed mb-8">
        PhillyLegalGuide is an independent information resource for Philadelphia residents
        navigating personal injury situations. We are not a law firm.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
        {[
          {
            icon: Shield,
            title: 'Independent',
            description: 'We are not affiliated with any law firm. Our goal is to help you find the right information — not to steer you to a particular firm.',
          },
          {
            icon: Scale,
            title: 'Informational',
            description: 'Nothing on this site is legal advice. We provide general information about Pennsylvania personal injury law to help you ask better questions.',
          },
          {
            icon: MapPin,
            title: 'Philadelphia-focused',
            description: 'All information is specific to Philadelphia and Pennsylvania. Laws, statutes of limitations, and court procedures vary by state.',
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="card p-5">
              <div className="w-9 h-9 rounded-lg bg-brand-light flex items-center justify-center mb-3">
                <Icon className="w-4 h-4 text-brand" aria-hidden="true" />
              </div>
              <h2 className="font-semibold text-text-primary mb-1.5">{item.title}</h2>
              <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
            </div>
          );
        })}
      </div>

      <div className="prose-like text-text-secondary leading-relaxed space-y-4 mb-10">
        <h2 className="text-2xl font-bold text-text-primary">What We Do</h2>
        <p>
          PhillyLegalGuide helps Philadelphia residents understand what type of personal
          injury case they may have, what the relevant statutes of limitations are in
          Pennsylvania, what to expect from the legal process, and which Philadelphia firms
          specialise in different case types.
        </p>
        <p>
          Our primary tool is the <Link href="/quiz" className="text-link hover:text-brand">2-minute quiz</Link>,
          which asks four questions about your situation and identifies your case type,
          flags any urgency around Pennsylvania's statute of limitations, and shows you
          firms that handle your situation.
        </p>
        <p>
          We also maintain a <Link href="/firms" className="text-link hover:text-brand">firm directory</Link>,
          guides on{' '}
          <Link href="/guide/how-to-choose" className="text-link hover:text-brand">how to choose a lawyer</Link>,{' '}
          <Link href="/guide/what-percentage" className="text-link hover:text-brand">contingency fees in Pennsylvania</Link>,
          and{' '}
          <Link href="/guide/how-long" className="text-link hover:text-brand">how long cases take</Link>.
        </p>

        <h2 className="text-2xl font-bold text-text-primary pt-4">What We Don't Do</h2>
        <p>
          We do not provide legal advice, evaluate individual cases, or represent clients.
          We are not a law firm and nothing on this site should be relied upon as legal
          advice. Always consult a licensed Pennsylvania attorney about your specific
          situation.
        </p>
        <p>
          We do not currently have paid relationships with any firm listed in our directory.
          Firm listings are based on publicly available information about Philadelphia
          personal injury firms.
        </p>
      </div>

      <div className="bg-bg-accent border border-border-brand rounded-card p-5">
        <p className="text-sm text-text-secondary leading-relaxed">
          <strong className="text-text-primary">Disclaimer:</strong> PhillyLegalGuide is an
          independent information resource and is not a law firm. Nothing on this site
          constitutes legal advice. Information is provided for general informational
          purposes only. Always consult a licensed Pennsylvania attorney regarding your
          specific situation.
        </p>
      </div>
    </div>
  );
}
