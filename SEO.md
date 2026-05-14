# PhillyLegalGuide — SEO Guide

## Strategy

PhillyLegalGuide targets **Philadelphia personal injury** searches exclusively. The domain authority compounds by staying local and specific. Do not dilute the topical focus with content outside Philadelphia or outside personal injury law.

The SEO model:
- **Case type pages** (`/types/*`) target competitive head terms — "car accident lawyers Philadelphia"
- **Guide pages** (`/guide/*`) target mid-funnel questions — "what percentage do lawyers take PA"
- **Blog articles** (`/blog/*`) target long-tail queries — "how long does a car accident settlement take philadelphia"
- **The quiz** (`/quiz`) is the conversion point — all content drives toward it

---

## Content Release Schedule

**Target: 2 articles per week.** Consistency matters more than volume. A steady publishing cadence signals an active site to Google and compounds authority faster than occasional bursts.

After 3 months of consistent publishing, drop to 1 per week to maintain momentum.

---

## Blog Article Priorities

### Remaining from original TODO list
- `how-long-slip-and-fall-settlement-philadelphia`
- `medical-malpractice-statute-of-limitations-pennsylvania`

### Scenario pages (high-value, low competition)
These target ultra-specific queries with almost no competition. Each lives at `/types/[caseType]/[scenario]`.

- `/types/car-accident/rideshare-accident-philadelphia` — Uber/Lyft accidents
- `/types/car-accident/hit-and-run-philadelphia`
- `/types/slip-and-fall/septa-injury-claim`
- `/types/workers-comp/fired-after-workers-comp-claim-pennsylvania`

### Future blog targets (derived from search data)
- `how long does a slip and fall case take philadelphia`
- `what to do after slip and fall philadelphia`
- `pennsylvania workers comp denied what to do`
- `how much is my car accident case worth philadelphia`
- `rideshare accident philadelphia who pays`
- `septa accident claim philadelphia`
- `limited tort serious injury threshold pennsylvania`

---

## Keyword Rules

### Slug format
Always use: `[topic]-[location]` or `[topic]-[state]`
- Good: `how-long-car-accident-settlement-philadelphia`
- Good: `pennsylvania-limited-tort-vs-full-tort-explained`
- Bad: `car-accident-guide` (no location signal)

### Title format
Lead with the question or topic, end with location when it fits naturally:
- "How Long Does a Car Accident Settlement Take in Philadelphia?"
- "Pennsylvania Limited Tort vs. Full Tort: What It Means for Your Claim"
- Do not force location into every title — it looks spammy

### Meta description
- 150–160 characters
- Include the primary keyword naturally
- State a specific, useful fact from the article
- Do not write "In this article we will discuss..."

---

## On-Page SEO Checklist (per article)

- [ ] Primary keyword in slug
- [ ] Primary keyword in H1 title
- [ ] Primary keyword in meta description
- [ ] Pennsylvania-specific content throughout (statutes, courts, rules)
- [ ] Statute of limitations callout present (warning variant)
- [ ] At least one `inline-link` section pointing to a related high-value page
- [ ] `relatedLinks` array populated with 3 contextually relevant pages
- [ ] 4–6 FAQs targeting related search queries (these get FAQ schema automatically)
- [ ] Minimum 1,200 words of body content
- [ ] H2 headings use natural language questions or topic phrases — not "Section 1"
- [ ] Article schema, FAQ schema, breadcrumb schema all generated automatically via `lib/schema.ts`

---

## Internal Linking Strategy

Internal links are how you pass authority between pages. Every article should:

1. **Link to at least one case type page** (`/types/*`) relevant to the article topic
2. **Link to the settlement article** (`/blog/how-long-car-accident-settlement-philadelphia`) from any car accident content — this is your highest-ranking article and needs support
3. **Use `inline-link` sections** within the body for contextual links — these carry more weight than footer `relatedLinks`
4. **Cross-link between blog articles** on the same topic

### Current internal link map
```
what-to-do-after-car-accident → /types/car-accident
what-to-do-after-car-accident → /blog/how-long-car-accident-settlement-philadelphia ✓ inline
what-to-do-after-car-accident → /blog/pennsylvania-limited-tort-vs-full-tort-explained

limited-tort-vs-full-tort → /types/car-accident
limited-tort-vs-full-tort → /blog/how-long-car-accident-settlement-philadelphia ✓ inline
limited-tort-vs-full-tort → /guide/how-to-choose

free-lawyers-philadelphia → /guide/how-to-choose
free-lawyers-philadelphia → /guide/what-percentage
free-lawyers-philadelphia → /firms

how-to-file-workers-comp → /types/workers-comp ✓ inline
how-to-file-workers-comp → /guide/how-to-choose
how-to-file-workers-comp → /guide/what-percentage

how-much-is-a-slip-and-fall-case-worth → /types/slip-and-fall ✓ inline
how-much-is-a-slip-and-fall-case-worth → /guide/how-to-choose
how-much-is-a-slip-and-fall-case-worth → /guide/what-percentage

workers-comp-claim-denied → /types/workers-comp ✓ inline
workers-comp-claim-denied → /blog/how-to-file-workers-comp-claim-philadelphia
workers-comp-claim-denied → /guide/how-to-choose
```

When you add a new article, update this map.

---

## After Publishing

1. Run `npx tsc --noEmit` — fix any type errors before pushing
2. Push to main — Vercel deploys automatically
3. Go to Google Search Console → URL Inspection
4. Enter: `https://www.phillylegalguide.com/blog/[slug]`
5. Click **Request Indexing**

Do this for every new article. It cuts indexing time from days to hours.

---

## Google Search Console

**Property:** `https://www.phillylegalguide.com/` (note the www — always use www prefix when inspecting URLs)

**Key metrics to watch:**
- **Impressions** — Google is showing your page in results. Good early signal.
- **Position** — Average ranking. Below 20 = page 2 or worse. Position 1–5 = clicks start flowing.
- **Clicks** — You only get these consistently above position ~7.

**What to look for weekly:**
- Any article moving from position 15–20 toward position 5–10 is gaining traction — publish related content and add internal links pointing to it
- New queries appearing that you are not targeting yet — these become future article ideas

---

## City Expansion (Future)

When Philadelphia is ranking page 1 positions 1–5 for core terms, expand city by city using separate domains:

- Same codebase, new domain, new city content
- Reuse article structure and legal framework (PA statute of limitations applies statewide)
- Rewrite city-specific references: court names, local firms, local examples
- Each city article is ~20–30% rewrite from the Philadelphia version
- Pitch: "I built PittsburghInjuryGuide.com, it ranks for these terms, here is the traffic data"

Do not start city expansion until Philadelphia is monetised or clearly on trajectory to page 1.

---

## What Does Not Work

- Publishing 6 articles at once then going quiet — consistency beats volume
- Generic content with no Philadelphia or Pennsylvania specifics — too much competition
- Targeting head terms only ("personal injury lawyer") — you cannot beat Martindale-Hubbell and FindLaw on those
- Duplicate content across city domains — rewrite, do not copy
- Settling for hardcoded related links instead of inline contextual links — use `inline-link` sections
