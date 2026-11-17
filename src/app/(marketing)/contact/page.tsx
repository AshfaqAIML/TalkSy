import type { Metadata } from "next";
import { BookOpenCheck, Bug, GraduationCap, Handshake, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/marketing/reveal";
import { ContactForm } from "@/components/marketing/contact-form";
import { JsonLd } from "@/components/marketing/json-ld";
import { absoluteUrl, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Questions about TalkSy, the curriculum, the roadmap or a bug you found? Send a message — it goes straight to the people building the platform.",
  path: "/contact",
  ogTitle: "Contact TalkSy",
});

const channels = [
  {
    icon: Mail,
    title: "This form is the channel",
    text: "There is no ticket queue and no bot. Messages land in the same place the team reads every day, and replies go to the email you provide.",
  },
  {
    icon: Bug,
    title: "Found something broken?",
    text: "Choose “Something isn't working” and tell us the page and your browser. Reproduction details make fixes fast.",
  },
  {
    icon: BookOpenCheck,
    title: "Content feedback",
    text: "Spotted a mistake in a lesson, or an explanation that didn't land? Choose “Feedback on lesson content” — curriculum fixes go through our review pipeline.",
  },
  {
    icon: Handshake,
    title: "Classrooms & partnerships",
    text: "Class sets and teacher tools are on the roadmap. Tell us about your programme and we'll keep you in the loop.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact TalkSy",
          url: absoluteUrl("/contact"),
        }}
      />
      <PageHero
        eyebrow="Contact"
        title="Talk to the people building TalkSy"
        lede="Questions, bug reports, content feedback, classroom interest — everything is welcome, and everything is read."
        breadcrumb="Contact"
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
        <Reveal>
          <Card className="border-2 shadow-sm">
            <CardContent className="p-6 sm:p-8">
              <h2 className="mb-1 font-display text-heading-md text-ink-900">Send a message</h2>
              <p className="mb-6 text-body-sm text-ink-500">
                No account needed. We reply to the email address you give us.
              </p>
              <ContactForm />
            </CardContent>
          </Card>
        </Reveal>

        <div className="space-y-4">
          {channels.map((channel, i) => (
            <Reveal key={channel.title} delay={i * 0.06}>
              <Card className="border-line shadow-xs">
                <CardContent className="flex gap-4 p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-800 dark:bg-brand-600/20 dark:text-brand-800">
                    <channel.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="font-semibold text-ink-900">{channel.title}</h2>
                    <p className="mt-1 text-caption leading-relaxed text-ink-500">{channel.text}</p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
          <Reveal delay={0.24}>
            <Card className="border-line bg-sand-100/60 shadow-xs dark:bg-sand-100/40">
              <CardContent className="flex gap-4 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-semibold text-ink-900">Just want to learn?</h2>
                  <p className="mt-1 text-caption leading-relaxed text-ink-500">
                    You don&apos;t need to write to us for that — the first lesson is free and
                    starts with the letter A.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}
