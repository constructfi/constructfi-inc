"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FaqItem = { q: string; a: string };

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem key={item.q} value={`item-${i}`}>
          <AccordionTrigger className="text-base font-medium text-navy dark:text-white">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
