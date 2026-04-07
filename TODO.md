# PhillyLegalGuide — To-Do List

## Features to Build

### Email capture / lead magnet
Remove the email capture form from the quiz results page until a real backend exists.
When ready to implement:
- Choose a provider: Mailchimp, ConvertKit, Resend, or similar
- Add `NEXT_PUBLIC_EMAIL_API_URL` (or equivalent) to Vercel env vars
- Re-add the form to `components/QuizResults.tsx` with a real POST handler
- The copy was: "Get a free case evaluation checklist — what to bring to your consultation and what questions to ask any Philadelphia injury lawyer"
- Consider also adding it to the bottom of blog articles once the infrastructure is live

## Content To-Do

### Blog articles (long-tail targets)
- [ ] how-long-slip-and-fall-settlement-philadelphia
- [ ] pennsylvania-limited-tort-vs-full-tort-explained
- [ ] what-to-do-after-car-accident-philadelphia
- [ ] workers-comp-claim-denied-pennsylvania-what-to-do
- [ ] how-much-is-a-slip-and-fall-case-worth-philadelphia
- [ ] medical-malpractice-statute-of-limitations-pennsylvania

### Scenario pages (under /types/[caseType]/[scenario])
See architecture plan discussed in session: dynamic route with content data file,
targeting specific long-tail queries like:
- /types/car-accident/rideshare-accident-philadelphia
- /types/car-accident/hit-and-run-philadelphia
- /types/slip-and-fall/septa-injury-claim
- /types/workers-comp/fired-after-workers-comp-claim-pennsylvania

## Technical To-Do

### Firm data
- [ ] Move firms from hardcoded array in `lib/firms.ts` to a CMS (Sanity recommended)
      when firm count exceeds ~10 or firms need to manage their own listings
