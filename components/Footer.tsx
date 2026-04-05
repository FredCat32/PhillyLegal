import Link from 'next/link';
import { Scale } from 'lucide-react';

const caseTypes = [
  { label: 'Car Accident', href: '/types/car-accident' },
  { label: 'Slip & Fall', href: '/types/slip-and-fall' },
  { label: 'Workers Comp', href: '/types/workers-comp' },
  { label: 'Medical Malpractice', href: '/types/medical-malpractice' },
];

const guides = [
  { label: 'How to Choose a Lawyer', href: '/guide/how-to-choose' },
  { label: 'What Percentage Do Lawyers Take?', href: '/guide/what-percentage' },
  { label: 'How Long Does a Case Take?', href: '/guide/how-long' },
];

const company = [
  { label: 'About', href: '/about' },
  { label: 'Firm Directory', href: '/firms' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Privacy Policy', href: '/privacy' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-subtle mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Scale className="w-4 h-4 text-brand" aria-hidden="true" />
              <span className="font-bold text-text-primary">PhillyLegalGuide</span>
            </Link>
            <p className="text-sm text-text-muted leading-relaxed">
              Independent information resource for Philadelphia personal injury cases.
            </p>
          </div>

          {/* Case Types */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
              Case Types
            </h3>
            <ul className="space-y-2">
              {caseTypes.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary hover:text-brand transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
              Guides
            </h3>
            <ul className="space-y-2">
              {guides.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary hover:text-brand transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
              Company
            </h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary hover:text-brand transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="border-t border-border-subtle pt-6">
          <p className="text-xs text-text-muted leading-relaxed max-w-4xl">
            PhillyLegalGuide is an independent information resource and is not a law firm.
            Nothing on this site constitutes legal advice. Information is provided for general
            informational purposes only. Always consult a licensed Pennsylvania attorney
            regarding your specific situation. Firm listings are for informational purposes only.
          </p>
          <p className="text-xs text-text-muted mt-3">
            © {new Date().getFullYear()} PhillyLegalGuide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
