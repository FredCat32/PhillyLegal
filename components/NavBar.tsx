'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Scale } from 'lucide-react';
import { cn } from '@/lib/utils';

const nav = [
  { label: 'Case Types', href: '/types' },
  { label: 'Blog', href: '/blog' },
  { label: 'Firms', href: '/firms' },
  { label: 'Guides', href: '/guide' },
  { label: 'About', href: '/about' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-subtle shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Scale
              className="w-5 h-5 text-brand"
              aria-hidden="true"
            />
            <span className="font-bold text-lg text-text-primary group-hover:text-brand transition-colors">
              PhillyLegalGuide
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                  pathname === item.href || pathname.startsWith(item.href + '/')
                    ? 'text-brand bg-brand-light'
                    : 'text-text-secondary hover:text-brand hover:bg-brand-light'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/quiz"
              className="hidden sm:inline-flex btn-primary text-sm py-2 px-4"
            >
              Take the Quiz
            </Link>
            <button
              className="md:hidden p-2 rounded-lg text-text-secondary hover:text-brand hover:bg-brand-light transition-colors"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border-subtle bg-white">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1" aria-label="Mobile navigation">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                  pathname === item.href || pathname.startsWith(item.href + '/')
                    ? 'text-brand bg-brand-light'
                    : 'text-text-secondary hover:text-brand hover:bg-brand-light'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/quiz"
              onClick={() => setOpen(false)}
              className="btn-primary text-sm mt-2"
            >
              Take the Free Quiz →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
