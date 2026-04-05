'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { type FAQItem } from '@/lib/schema';

type FAQAccordionProps = {
  items: FAQItem[];
};

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border-subtle border border-border-subtle rounded-card overflow-hidden">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index}>
            <button
              className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-bg-accent transition-colors"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="font-medium text-text-primary pr-4">{item.question}</span>
              <ChevronDown
                className={cn(
                  'w-4 h-4 text-text-muted flex-shrink-0 transition-transform duration-200',
                  isOpen && 'rotate-180'
                )}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 bg-white">
                <p className="text-text-secondary text-sm leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
