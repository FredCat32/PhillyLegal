import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for PhillyLegalGuide.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <p className="text-sm text-text-muted mb-6">
        <Link href="/" className="hover:text-brand">Home</Link>
        {' / '}
        <span className="text-text-secondary">Privacy Policy</span>
      </p>

      <h1 className="text-3xl font-bold text-text-primary mb-3">Privacy Policy</h1>
      <p className="text-sm text-text-muted mb-8">Last updated: January 2024</p>

      <div className="prose-like text-text-secondary leading-relaxed space-y-5">
        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-2">Overview</h2>
          <p>
            PhillyLegalGuide ("we", "us", "our") is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, and safeguard information when
            you visit phillylegalguide.com.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-2">Information We Collect</h2>
          <p><strong className="text-text-primary">Information you provide:</strong></p>
          <ul className="space-y-1.5 mt-2">
            {[
              'Email address (if you submit the optional email capture form on quiz results)',
              'Quiz answers (case type, timeframe, preferences — no personal identifying information is required)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3">
            <strong className="text-text-primary">Information collected automatically:</strong>
          </p>
          <ul className="space-y-1.5 mt-2">
            {[
              'Usage data via Google Analytics 4 (pages viewed, time on site, general location)',
              'Standard web server logs (IP address, browser type, referring URL)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-2">How We Use Information</h2>
          <p>We use collected information to:</p>
          <ul className="space-y-1.5 mt-2">
            {[
              'Operate and improve the site and quiz',
              'Understand how visitors use the site (aggregate analytics)',
              'Send the requested email checklist if you provide your address',
              'Comply with legal obligations',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3">
            We do not sell personal information. We do not share personal information with
            law firms or third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-2">Cookies</h2>
          <p>
            We use Google Analytics 4, which sets cookies to help us understand site usage.
            These are analytics cookies only. You can opt out of Google Analytics tracking
            via the{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:text-brand"
            >
              Google Analytics Opt-out Browser Add-on
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-2">Third-Party Links</h2>
          <p>
            Our site contains links to law firm websites. We are not responsible for the
            privacy practices of those sites. Please review the privacy policy of any
            external site before submitting personal information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-2">Data Retention</h2>
          <p>
            Email addresses collected through our opt-in form are retained until you
            unsubscribe or request deletion. Analytics data is retained per Google's
            standard retention periods.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-2">Your Rights</h2>
          <p>
            You may request deletion of any personal information we hold about you at any
            time. You may also unsubscribe from any email communications at any time using
            the unsubscribe link in our emails.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-2">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Changes will be posted on this
            page with an updated date. Continued use of the site after changes constitutes
            acceptance of the updated policy.
          </p>
        </section>
      </div>
    </div>
  );
}
