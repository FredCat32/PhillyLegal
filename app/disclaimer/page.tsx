import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Legal disclaimer for PhillyInjuryGuide — independent information resource, not a law firm.',
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <p className="text-sm text-text-muted mb-6">
        <Link href="/" className="hover:text-brand">Home</Link>
        {' / '}
        <span className="text-text-secondary">Disclaimer</span>
      </p>

      <h1 className="text-3xl font-bold text-text-primary mb-8">Disclaimer</h1>

      <div className="prose-like text-text-secondary leading-relaxed space-y-5">
        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-2">Not Legal Advice</h2>
          <p>
            PhillyInjuryGuide is an independent information resource and is not a law firm.
            Nothing on this website constitutes legal advice. The information provided on
            this site is for general informational purposes only and should not be relied
            upon as legal advice for any individual situation.
          </p>
          <p>
            Reading information on this website does not create an attorney-client
            relationship. Always consult a licensed Pennsylvania attorney regarding your
            specific legal situation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-2">Accuracy of Information</h2>
          <p>
            We make reasonable efforts to ensure the information on this site is accurate
            and up to date. However, laws, regulations, and firm information change over
            time. We make no warranties about the accuracy, completeness, or timeliness of
            any information on this site.
          </p>
          <p>
            Statutes of limitations and other legal deadlines listed on this site are
            general guidelines only. The specific deadline applicable to your case may
            differ. Consult a licensed attorney to determine the deadline that applies to
            your situation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-2">Firm Listings</h2>
          <p>
            Law firm listings on PhillyInjuryGuide are provided for informational purposes
            only. We do not endorse any particular firm, guarantee the quality of their
            services, or verify the accuracy of their self-reported information. We are not
            responsible for the content of linked third-party websites.
          </p>
          <p>
            Inclusion in our directory does not imply a recommendation. You should conduct
            your own research and consult multiple attorneys before making any decision
            about legal representation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-2">Quiz Results</h2>
          <p>
            The quiz tool on this site provides general guidance based on the limited
            information you provide. Quiz results are not a legal assessment of your case.
            The case type identified by the quiz may not accurately reflect your legal
            situation. Always consult a licensed attorney for an actual case evaluation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-2">No Liability</h2>
          <p>
            PhillyInjuryGuide is not liable for any actions taken or not taken based on
            information on this site, any errors or omissions in that information, or any
            losses or damages resulting from the use of this site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-2">Contact</h2>
          <p>
            If you have questions about this disclaimer or the information on this site,
            please review our <Link href="/privacy" className="text-link hover:text-brand">Privacy Policy</Link> or
            visit our <Link href="/about" className="text-link hover:text-brand">About</Link> page.
          </p>
        </section>
      </div>
    </div>
  );
}
