import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { ReviewNote } from "@/components/site/ReviewNote";
import { AdmissionsActions, PageIntro, SectionHeading, TextLink } from "@/components/site/blocks";
import { photos } from "@/content/images";
import {
  admissionRules,
  admissionSteps,
  admissions,
  clubs,
  feesInfo,
  formatNaira,
  stages,
  whatsapp,
} from "@/content/school";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/admission-process")({
  head: () =>
    pageHead({
      title: "Admissions — how to enrol your child | All Grace Schools, Uyo",
      description:
        "How admission works at All Grace Schools: interview with the Head of School, the ₦5,000 registration form, required documents, fees and how to contact our Admission Officer.",
      path: "/admission-process",
    }),
  component: Admissions,
});

const fee = formatNaira(admissionRules.registrationFeeNaira);

const faqs = [
  {
    q: "Which ages and classes can my child join?",
    a: stages.map((s) => `${s.name}${s.classes ? ` (${s.classes})` : ""}: ${s.ages}`).join(" · "),
  },
  {
    q: "How much is the registration form?",
    a: `The registration form for nursery and primary education costs ${fee} and is collected from the admissions desk.`,
  },
  {
    q: "What do I need to bring?",
    a: `The completed and signed form, the registration fee and ${admissionRules.passportPhotos} passport photographs — coloured, with a white background.`,
  },
  {
    q: "Will my child be interviewed?",
    a: "Yes. Every child is interviewed by the Head of School when presented by a parent or guardian. Parents should also attend any interview the school schedules.",
  },
  {
    q: "How much are school fees?",
    a: "Fees depend on your child’s class and on whether they are a new or returning pupil. The admissions desk officer will tell you the amount in person.",
  },
  {
    q: "When can I visit the admissions desk?",
    a: `${admissions.deskHours}. The admissions desk is not open at weekends.`,
  },
  {
    q: "Can I apply online?",
    a: "The school’s website describes a paper registration form collected from and returned to the admissions desk. Call or email the Admission Officer to begin.",
  },
];

function Admissions() {
  return (
    <>
      <PageIntro
        eyebrow="Admission process"
        title="Joining All Grace Schools, step by step."
        lede="Admission begins with a conversation and an interview. Here is everything the school asks of new families, and who to speak to."
        photo={photos.pupilsFirstDay}
      >
        <AdmissionsActions />
      </PageIntro>

      {/* Steps */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="The process" title="Three steps." />
          <ol className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            <span aria-hidden className="absolute left-5 top-5 hidden h-px w-[calc(100%-2.5rem)] bg-border md:block" />
            {admissionSteps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 90} className="relative">
                <span className="relative flex size-10 items-center justify-center rounded-full bg-tartan font-display text-lg text-tartan-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-6 text-2xl">{s.title}</h3>
                <p className="mt-3 max-w-sm text-[15.5px] leading-relaxed text-muted-foreground">{s.body}</p>
              </Reveal>
            ))}
          </ol>
          <ReviewNote item="accepting" className="mt-12 max-w-3xl" />
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-card">
        <div className="container-page grid gap-12 py-20 md:py-24 lg:grid-cols-12">
          <SectionHeading
            className="lg:col-span-4"
            eyebrow="Requirements"
            title="What to bring."
          />
          <Reveal as="dl" delay={80} className="grid gap-px overflow-hidden rounded-md border bg-border sm:grid-cols-2 lg:col-span-8">
            <div className="bg-background p-7">
              <dt className="text-[13px] text-muted-foreground">Registration form</dt>
              <dd className="mt-2 font-display text-3xl">{fee}</dd>
              <dd className="mt-2 text-[14.5px] text-muted-foreground">
                For {admissionRules.registrationFeeAppliesTo}, from the admissions desk.
              </dd>
            </div>
            <div className="bg-background p-7">
              <dt className="text-[13px] text-muted-foreground">Passport photographs</dt>
              <dd className="mt-2 font-display text-3xl">{admissionRules.passportPhotos}</dd>
              <dd className="mt-2 text-[14.5px] text-muted-foreground">{admissionRules.passportPhotoSpec}.</dd>
            </div>
            <div className="bg-background p-7">
              <dt className="text-[13px] text-muted-foreground">The form</dt>
              <dd className="mt-2 font-display text-2xl">Completed and signed</dd>
              <dd className="mt-2 text-[14.5px] text-muted-foreground">
                Parents are advised to fill in the correct details.
              </dd>
            </div>
            <div className="bg-background p-7">
              <dt className="text-[13px] text-muted-foreground">Admissions desk</dt>
              <dd className="mt-2 font-display text-2xl">{admissions.deskHours}</dd>
              <dd className="mt-2 text-[14.5px] text-muted-foreground">Weekdays only.</dd>
            </div>
          </Reveal>
          <div className="lg:col-span-8 lg:col-start-5">
            <ReviewNote item="fee" />
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="py-20 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <SectionHeading className="lg:col-span-4" eyebrow="Fees and tuition" title="How fees work." />
          <Reveal className="lg:col-span-7 lg:col-start-6" delay={80}>
            <ul className="divide-y border-y">
              {feesInfo.map((f) => (
                <li key={f} className="py-5 text-[16px] leading-relaxed">
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] text-muted-foreground">
              Optional clubs: {clubs.join(", ")}.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact-admissions" className="scroll-mt-24 bg-ink text-ink-foreground">
        <div className="container-page grid gap-12 py-20 md:py-24 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow text-ink-foreground/60">Contact admissions</p>
            <h2 className="display-lg mt-4">{admissions.officer}</h2>
            <p className="mt-2 text-ink-foreground/70">{admissions.role}</p>
            <dl className="mt-8 space-y-4 text-[16px]">
              <div className="flex flex-wrap gap-x-3">
                <dt className="w-20 text-ink-foreground/60">Phone</dt>
                <dd>
                  <a href={admissions.phone.tel} className="link-underline">
                    {admissions.phone.display}
                  </a>
                </dd>
              </div>
              <div className="flex flex-wrap gap-x-3">
                <dt className="w-20 text-ink-foreground/60">Email</dt>
                <dd>
                  <a href={`mailto:${admissions.email}`} className="link-underline">
                    {admissions.email}
                  </a>
                </dd>
              </div>
              <div className="flex flex-wrap gap-x-3">
                <dt className="w-20 text-ink-foreground/60">Desk</dt>
                <dd>{admissions.deskHours}</dd>
              </div>
            </dl>
            <div className="mt-10">
              <AdmissionsActions tone="dark" />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-8" delay={100}>
            <h3 className="text-xl">Other school contacts on WhatsApp</h3>
            <ul className="mt-5 divide-y divide-ink-foreground/15 border-y border-ink-foreground/15">
              {whatsapp.map((w) => (
                <li key={w.name}>
                  <a
                    href={w.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 py-4 transition-colors hover:text-crest-soft"
                  >
                    <span>
                      <span className="block font-medium">{w.name}</span>
                      <span className="text-[14px] text-ink-foreground/60">{w.role}</span>
                    </span>
                    <span className="inline-flex items-center gap-2 text-[14px]">
                      <MessageCircle className="size-4" aria-hidden /> {w.number}
                    </span>
                    <span className="sr-only">(opens WhatsApp in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
            <ReviewNote item="supervisor" className="mt-6" />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <SectionHeading className="lg:col-span-4" eyebrow="Questions" title="Common questions from parents." />
          <Reveal className="lg:col-span-7 lg:col-start-6" delay={80}>
            <Accordion type="single" collapsible className="border-t">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`q${i}`}>
                  <AccordionTrigger className="py-5 text-left font-display text-lg font-medium hover:no-underline md:text-xl">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-[15.5px] leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-10 flex flex-wrap gap-6">
              <TextLink to="/academics">Learning stages and subjects</TextLink>
              <TextLink to="/contacts">Directions and contacts</TextLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
