import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StatusBadge } from "@/components/ds";
import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/marketing/reveal";
import { JsonLd } from "@/components/marketing/json-ld";
import { pricingPlans } from "@/lib/marketing/content";
import { siteStats } from "@/lib/marketing/stats";
import { absoluteUrl, pageMetadata } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Pricing",
  description:
    "TalkSy is free while in public preview — every lesson and every skill. The complete beginner path (Pre-A1 to A2) is free forever; a premium tier for deeper practice is planned, with prices published before anything is charged.",
  path: "/pricing",
  ogTitle: "TalkSy pricing — free today, honest forever",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "TalkSy pricing",
          url: absoluteUrl("/pricing"),
          description:
            "TalkSy is free while in public preview; the complete beginner path (Pre-A1 to A2) is free forever.",
        }}
      />
      <PageHero
        eyebrow="Pricing"
        title="Free today — and the fundamentals stay free"
        lede="TalkSy is free while it's in public preview: every lesson, every skill, all practice tools. When premium arrives, it will sell depth — never the fundamentals — and prices will be published here before anything is ever charged."
        breadcrumb="Pricing"
      />

      {/* Plans */}
      <section aria-labelledby="plans-heading" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 id="plans-heading" className="sr-only">
          Plans
        </h2>
        <div className="grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => {
            const isFree = plan.id === "free";
            return (
              <Reveal key={plan.id} delay={i * 0.08}>
                <Card
                  className={cn(
                    "relative flex h-full flex-col border-line shadow-xs",
                    isFree && "border-2 border-primary shadow-md"
                  )}
                >
                  {isFree && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-micro font-bold uppercase tracking-wide text-primary-foreground">
                      Available today
                    </span>
                  )}
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="mb-1 flex items-center justify-between gap-2">
                      <h3 className="font-display text-heading-sm text-ink-900">{plan.name}</h3>
                      {plan.status === "live" ? (
                        <StatusBadge tone="success">Live</StatusBadge>
                      ) : (
                        <StatusBadge tone="neutral">Planned</StatusBadge>
                      )}
                    </div>
                    <p className="font-display text-display-lg text-primary">{plan.priceLabel}</p>
                    <p className="mt-2 text-body-sm leading-relaxed text-ink-500">{plan.blurb}</p>
                    <ul className="mt-5 flex-1 space-y-2.5">
                      {plan.includes.map((item) => (
                        <li key={item} className="flex gap-2.5 text-body-sm text-ink-700 dark:text-ink-600">
                          <Check
                            className={cn(
                              "mt-0.5 h-4 w-4 shrink-0",
                              isFree ? "text-primary" : "text-ink-400"
                            )}
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {isFree ? (
                      <Button size="lg" className="mt-6 w-full" asChild>
                        <Link href="/register">
                          Start free <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </Button>
                    ) : (
                      <Button size="lg" variant="outline" className="mt-6 w-full" asChild>
                        <Link href="/faq">Read the FAQ</Link>
                      </Button>
                    )}
                    {plan.footnote && (
                      <p className="mt-4 text-center text-caption leading-relaxed text-ink-500">
                        {plan.footnote}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* The guarantee */}
      <section aria-labelledby="guarantee-heading" className="border-y bg-[#062b28] py-16 text-[#e8fbf7]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <Reveal>
            <p className="overline-label mb-2 text-[#7dd2c5]">The structural promise</p>
            <h2 id="guarantee-heading" className="font-display text-display-lg text-balance text-[#e8fbf7]">
              The beginner path is free forever — by design, not discount
            </h2>
            <p className="mt-4 max-w-2xl text-body leading-relaxed text-[#d9f2ee]/90">
              The complete beginner path — Foundations (Pre-A1), Beginner (A1) and Elementary
              (A2): {siteStats.lessons} lessons, practice tools and progress tracking — is
              guaranteed free forever. No trial timer, no “free lesson of the day” mechanics, no
              paywall on core learning. Cost should never block someone&apos;s first year of
              English.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="space-y-3 rounded-2xl border border-[#0f524d] bg-[#0c443f]/60 p-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "Enforced server-side",
                  text: "Entitlements and tier rules live on the server — no client-side premium checks, ever.",
                },
                {
                  icon: BadgeCheck,
                  title: "Depth, not fundamentals",
                  text: "Premium will mean richer variants and deeper labs — not unlocking basics.",
                },
                {
                  icon: Check,
                  title: "Prices published first",
                  text: "Nothing is charged without clear pricing on this page, announced in advance.",
                },
              ].map((point) => (
                <div key={point.title} className="flex gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#177e76] text-white">
                    <point.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-body-sm font-semibold text-[#e8fbf7]">{point.title}</h3>
                    <p className="mt-0.5 text-caption leading-relaxed text-[#d9f2ee]/75">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ teaser */}
      <section aria-labelledby="pricing-faq-heading" className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <Reveal>
          <h2 id="pricing-faq-heading" className="font-display text-heading-lg text-ink-900">
            Pricing questions, answered plainly
          </h2>
          <div className="mt-6 space-y-3 text-left">
            <details className="group rounded-xl border border-line bg-card p-5 shadow-xs">
              <summary className="cursor-pointer list-none font-semibold text-ink-900 marker:hidden [&::-webkit-details-marker]:hidden">
                Will the free lessons I can use today ever become paid?
              </summary>
              <p className="mt-3 text-body-sm leading-relaxed text-ink-500">
                No. The complete beginner path — all three live levels — is free forever. That is
                a structural product guarantee, not a launch promotion.
              </p>
            </details>
            <details className="group rounded-xl border border-line bg-card p-5 shadow-xs">
              <summary className="cursor-pointer list-none font-semibold text-ink-900 marker:hidden [&::-webkit-details-marker]:hidden">
                When does premium launch, and how much will it cost?
              </summary>
              <p className="mt-3 text-body-sm leading-relaxed text-ink-500">
                Premium is in development alongside the higher curriculum levels. Pricing will be
                published on this page before any payment is possible — and free learners will
                always see it coming, never a surprise.
              </p>
            </details>
            <details className="group rounded-xl border border-line bg-card p-5 shadow-xs">
              <summary className="cursor-pointer list-none font-semibold text-ink-900 marker:hidden [&::-webkit-details-marker]:hidden">
                Do I need a credit card to create an account?
              </summary>
              <p className="mt-3 text-body-sm leading-relaxed text-ink-500">
                No. An email and a password — that is the whole sign-up. There is no payment
                system connected to TalkSy today.
              </p>
            </details>
          </div>
          <Button variant="outline" asChild className="mt-8">
            <Link href="/faq">
              All frequently asked questions <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}
