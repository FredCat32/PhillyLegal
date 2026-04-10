import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { AlertTriangle, Info, ArrowRight } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { getBlogPost, getAllBlogSlugs, type ContentSection } from '@/lib/blog';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

function renderSection(section: ContentSection, index: number) {
  switch (section.type) {
    case 'p-lead':
      return (
        <p key={index} className="text-lg leading-relaxed text-text-secondary">
          {section.text}
        </p>
      );
    case 'p':
      return (
        <p key={index} className="leading-relaxed text-text-secondary">
          {section.text}
        </p>
      );
    case 'h2':
      return (
        <h2 key={index} className="text-2xl font-bold text-text-primary pt-4">
          {section.text}
        </h2>
      );
    case 'ul':
      return (
        <ul key={index} className="space-y-3">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span
                className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2"
                aria-hidden="true"
              />
              <span className="text-text-secondary leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'steps':
      return (
        <div key={index} className="space-y-4">
          {section.items.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-1">{item.heading}</p>
                <p className="text-text-secondary leading-relaxed text-sm">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      );
    case 'callout':
      if (section.variant === 'warning') {
        return (
          <div
            key={index}
            className="bg-red-50 border border-red-200 rounded-card p-5 flex gap-3"
          >
            <AlertTriangle
              className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <p className="font-semibold text-red-800 mb-1">{section.title}</p>
              <p className="text-sm text-red-700 leading-relaxed">{section.body}</p>
            </div>
          </div>
        );
      }
      return (
        <div
          key={index}
          className="bg-bg-accent border border-border-brand rounded-card p-5 flex gap-3"
        >
          <Info
            className="w-5 h-5 text-brand flex-shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <div>
            <p className="font-semibold text-text-primary mb-1">{section.title}</p>
            <p className="text-sm text-text-secondary leading-relaxed">{section.body}</p>
          </div>
        </div>
      );
    case 'inline-link':
      return (
        <div key={index} className="bg-brand-light border border-border-brand rounded-card px-5 py-4 flex items-center justify-between gap-4">
          <p className="text-sm text-text-secondary leading-relaxed">{section.text}</p>
          <Link
            href={section.href}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark whitespace-nowrap transition-colors"
          >
            {section.label}
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      );
    default:
      return null;
  }
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://phillylegalguide.com';

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const articleJsonLd = articleSchema({
    title: post.title,
    description: post.description,
    url: `${siteUrl}/blog/${post.slug}`,
    datePublished: post.datePublished,
  });
  const faqJsonLd = faqSchema(post.faqs);
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Blog', url: `${siteUrl}/blog` },
    { name: post.title, url: `${siteUrl}/blog/${post.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-sm text-text-muted mb-6">
          <Link href="/" className="hover:text-brand">Home</Link>
          {' / '}
          <Link href="/blog" className="hover:text-brand">Blog</Link>
          {' / '}
          <span className="text-text-secondary">{post.title}</span>
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4 leading-tight">
          {post.title}
        </h1>
        <p className="text-text-muted text-sm mb-4">
          {post.readTime}
          &nbsp;·&nbsp;
          {new Date(post.datePublished).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
          &nbsp;·&nbsp; Philadelphia, PA
        </p>
        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border-subtle">
          <div className="w-9 h-9 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
            <span className="text-brand font-bold text-sm">PL</span>
          </div>
          <p className="text-sm text-text-muted">
            Written by the <span className="text-text-secondary font-medium">PhillyLegalGuide editorial team</span> and reviewed for accuracy{' '}
            {new Date(post.datePublished).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}.
            This site is an independent information resource and is not a law firm.
          </p>
        </div>

        <div className="prose-like text-text-secondary leading-relaxed space-y-6">
          {post.content.map((section, i) => renderSection(section, i))}
        </div>

        {/* Quiz CTA */}
        <div className="bg-brand-light border border-border-brand rounded-card p-6 my-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-text-primary">
              Not sure what type of lawyer you need?
            </p>
            <p className="text-sm text-text-secondary mt-0.5">
              Take our free 2-minute quiz to identify your case type and see matching
              Philadelphia firms.
            </p>
          </div>
          <Link href="/quiz" className="btn-primary text-sm whitespace-nowrap">
            Take the Quiz →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-text-primary mb-5">
          Frequently Asked Questions
        </h2>
        <FAQAccordion items={post.faqs} />

        <div className="mt-10 pt-8 border-t border-border-subtle">
          <p className="text-sm font-semibold text-text-primary mb-3">Related guides</p>
          <div className="flex flex-col gap-2">
            {post.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-link hover:text-brand transition-colors"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
