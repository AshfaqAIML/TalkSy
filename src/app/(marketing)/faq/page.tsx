import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/marketing/reveal";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { JsonLd } from "@/components/marketing/json-ld";
import { faqs } from "@/lib/marketing/content";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Frequently asked questions",
  description:
    "Can absolute beginners use TalkSy? Is there an AI tutor? Does it work on mobile? Honest answers to the questions learners actually ask — including pricing, levels and content review.",
  path: "/faq",
  ogTitle: "TalkSy — frequently asked questions",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }}
      />
      <PageHero
        eyebrow="FAQ"
        title="Questions learners actually ask"
        lede="Every answer below is true of the product as it exists today — including the honest parts other apps would smooth over."
        breadcrumb="FAQ"
      />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <Reveal>
          <FaqAccordion items={faqs} className="rounded-2xl border border-line bg-card px-5 shadow-xs sm:px-6" />
        </Reveal>

        <Reveal className="mt-10">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-line bg-sand-100/70 p-8 text-center dark:bg-sand-100/40">
            <MessageCircle className="h-8 w-8 text-primary" aria-hidden="true" />
            <h2 className="font-display text-heading-md text-ink-900">Still curious?</h2>
            <p className="max-w-md text-body-sm leading-relaxed text-ink-500">
              Ask us anything — about the method, the roadmap, or where to start. Messages from
              the contact form go straight to the people building TalkSy.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link href="/contact">
                  Contact us <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/register">Start free</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
