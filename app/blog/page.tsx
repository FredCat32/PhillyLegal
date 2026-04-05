import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';
import { breadcrumbSchema } from '@/lib/schema';
import { blogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Philadelphia Personal Injury Blog',
  description:
    'Practical articles on Philadelphia personal injury law — car accidents, settlement timelines, insurance tactics, and Pennsylvania-specific legal rules.',
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://phillylegalguide.com';

export default function BlogHubPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Blog', url: `${siteUrl}/blog` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-sm text-text-muted mb-6">
          <Link href="/" className="hover:text-brand">Home</Link>
          {' / '}
          <span className="text-text-secondary">Blog</span>
        </p>

        <div className="max-w-2xl mb-10">
          <h1 className="text-3xl font-bold text-text-primary mb-3">
            Philadelphia Personal Injury Blog
          </h1>
          <p className="text-text-secondary leading-relaxed">
            Practical articles on car accidents, settlement timelines, insurance
            tactics, and Pennsylvania-specific legal rules. Written to help you
            understand your situation before you talk to a lawyer.
          </p>
        </div>

        <div className="flex flex-col gap-5 max-w-3xl mb-12">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card p-6 flex items-start gap-4 hover:shadow-card-hover hover:border-border-brand transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-brand" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="text-xs text-text-muted">{post.readTime}</span>
                  <span className="text-xs text-text-muted">
                    {new Date(post.datePublished).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <h2 className="font-semibold text-text-primary group-hover:text-brand transition-colors leading-snug mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-link group-hover:text-brand transition-colors mt-3">
                  Read article
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-brand-light border border-border-brand rounded-card p-6">
          <h2 className="font-semibold text-text-primary mb-1">
            Not sure what type of lawyer you need?
          </h2>
          <p className="text-sm text-text-secondary mb-4">
            Take our free quiz to identify your case type and see which Philadelphia firms
            handle your situation.
          </p>
          <Link href="/quiz" className="btn-primary text-sm py-2.5 px-5 inline-flex">
            Take the Free Quiz →
          </Link>
        </div>
      </div>
    </>
  );
}
