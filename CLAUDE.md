# PhillyLegalGuide — CLAUDE.md

## Project Overview

PhillyLegalGuide (phillylegalguide.com) is a Philadelphia personal injury information and lawyer-matching site. It is not a law firm. It is an independent resource that helps users identify their case type, understand Pennsylvania-specific legal rules, and find matching law firms.

**Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS
**Hosting:** Vercel (auto-deploys from main branch)
**Analytics:** GA4 — ID configured in Vercel env vars as `NEXT_PUBLIC_GA4_ID`

---

## Site Structure

```
app/
  page.tsx                        → Homepage
  quiz/page.tsx                   → 4-step quiz
  quiz/results/page.tsx           → Firm matching results (not indexed)
  types/page.tsx                  → Case type hub
  types/[car-accident|slip-and-fall|workers-comp|medical-malpractice]/page.tsx
  guide/page.tsx                  → Guide hub
  guide/[how-to-choose|what-percentage|how-long]/page.tsx
  blog/page.tsx                   → Blog hub
  blog/[slug]/page.tsx            → Dynamic blog articles
  firms/page.tsx                  → Firm directory
  about|disclaimer|privacy/page.tsx

lib/
  firms.ts                        → Firm data + helper functions
  blog.ts                         → Blog post content + metadata
  schema.ts                       → JSON-LD schema generators (article, faq, breadcrumb)
  analytics.ts                    → GA4 event tracking helpers
  utils.ts                        → cn() utility

components/
  NavBar.tsx, Footer.tsx
  QuizWidget.tsx, QuizResults.tsx
  FirmCard.tsx
  FAQAccordion.tsx
  UrgencyBanner.tsx
  SiteDisclosure.tsx
```

---

## Adding a New Blog Article

All blog content lives in `lib/blog.ts`. To add a new article, add a new object to the `blogPosts` array. The dynamic route, hub page, and sitemap all pick it up automatically — no other files need to change.

### Blog post object structure

```ts
{
  slug: 'your-url-slug-here',           // becomes /blog/your-url-slug-here
  title: 'Full Article Title',
  description: 'Meta description, ~155 chars, include target keyword',
  datePublished: 'YYYY-MM-DD',
  readTime: '7 min read',
  excerpt: 'One or two sentence summary shown on the hub listing page.',
  content: [ /* ContentSection[] — see below */ ],
  faqs: [
    { question: '...', answer: '...' },
  ],
}
```

### Content section types

```ts
{ type: 'p-lead'; text: string }          // Large opening paragraph
{ type: 'p'; text: string }               // Regular paragraph
{ type: 'h2'; text: string }              // Section heading
{ type: 'ul'; items: string[] }           // Bullet list
{ type: 'steps'; items: { heading: string; body: string }[] }  // Numbered steps
{ type: 'callout'; variant: 'warning' | 'info'; title: string; body: string }
```

### Article writing rules

- **No em dashes.** Use commas, colons, or periods instead.
- **Do not sound like AI.** No "it's worth noting", "navigating", "crucial", "delve", "comprehensive", "it's important to". Write direct, practical sentences.
- **Minimum 1,200 words** of body content (not counting headings, callouts, or FAQs).
- **Lead with the direct answer** in the first paragraph. Do not bury it.
- **Include Pennsylvania-specific information** wherever relevant: statute of limitations, limited tort vs full tort, Pennsylvania comparative negligence rules, PA workers' comp specifics, etc.
- **Always include a statute of limitations callout** using `{ type: 'callout', variant: 'warning' }`.
- **No firm recommendations** within article body. The quiz CTA at the bottom handles that.
- **4 to 6 FAQs** per article. These get FAQ schema markup automatically.
- **Quiz CTA** is rendered automatically at the bottom of every article — do not add it to content sections.

### Example callout

```ts
{
  type: 'callout',
  variant: 'warning',
  title: 'Pennsylvania Statute of Limitations: 2 Years',
  body: 'Pennsylvania law gives you 2 years from the date of the accident to file a lawsuit. Missing that deadline means losing your right to sue regardless of how strong your case is.',
}
```

### Content section types (full list)

```ts
{ type: 'p-lead'; text: string }          // Large opening paragraph
{ type: 'p'; text: string }               // Regular paragraph
{ type: 'h2'; text: string }              // Section heading
{ type: 'ul'; items: string[] }           // Bullet list
{ type: 'steps'; items: { heading: string; body: string }[] }  // Numbered steps
{ type: 'callout'; variant: 'warning' | 'info'; title: string; body: string }
{ type: 'inline-link'; text: string; href: string; label: string }  // Contextual CTA box linking to related page
```

### After adding an article

1. Run `npx tsc --noEmit` to check for type errors
2. Commit and push to main — Vercel deploys automatically
3. Sitemap regenerates on build (next-sitemap postbuild script)
4. Go to Google Search Console → URL Inspection → request indexing: `https://www.phillylegalguide.com/blog/[slug]`
5. See `SEO.md` for full internal linking strategy and on-page checklist

---

## Adding a New Firm

Edit `lib/firms.ts`. Each firm object:

```ts
{
  id: 'unique-kebab-id',
  name: 'Firm Name',
  specialty: ['car-accident', 'slip-and-fall', 'workers-comp', 'medical-malpractice', 'catastrophic-injury', 'general'],
  yearsInBusiness: 20,
  phone: '(215) 555-0000',
  website: 'https://example.com',
  description: 'One sentence. Specific about what the firm specializes in.',
  contingencyFee: true,
  freeConsultation: true,
}
```

Firms are matched to quiz results by `specialty`. A firm only appears for a case type if that case type is in their specialty array.

---

## Schema Markup

Use the helpers in `lib/schema.ts` on every content page:

```ts
articleSchema({ title, description, url, datePublished })  // guide + blog pages
faqSchema(faqs)                                            // any page with FAQs
breadcrumbSchema([{ name, url }, ...])                     // every page
```

Render them with:
```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
```

---

## Key Rules

- **Brand name:** PhillyLegalGuide everywhere. Domain: phillylegalguide.com.
- **Not a law firm.** Every page that gives legal-adjacent information needs a `SiteDisclosure` component or inline disclaimer.
- **Statute of limitations:** Pennsylvania personal injury = 2 years. Workers comp = 120 days to report, 3 years for claim petition. Always flag urgency when timeframe is 6+ months.
- **Quiz results page** is `robots: index: false` — keep it that way. It is user-specific and should not be indexed.
- **Do not commit `.env.local`** — it is gitignored. Environment variables for production are set in the Vercel dashboard.
