"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/lib/marketing/content";

/** FAQ accordion — the visible content is the source for FAQPage JSON-LD. */
export function FaqAccordion({ items, className }: { items: FaqItem[]; className?: string }) {
  return (
    <Accordion type="single" collapsible className={className}>
      {items.map((item) => (
        <AccordionItem key={item.question} value={item.question}>
          <AccordionTrigger className="text-left text-body font-semibold hover:text-primary hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-body-sm leading-relaxed text-ink-600 dark:text-ink-400">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
