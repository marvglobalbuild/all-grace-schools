import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { ReviewNote } from "@/components/site/ReviewNote";
import { AdmissionsBand, Figure, PageIntro, SectionHeading } from "@/components/site/blocks";
import { VideoModal } from "@/components/site/VideoTour";
import { photos } from "@/content/images";
import { achievements, clubs, school } from "@/content/school";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/school-life")({
  head: () =>
    pageHead({
      title: "School life — classrooms, clubs and ceremonies | All Grace Schools",
      description:
        "Photographs and facts about everyday life at All Grace Schools, Uyo: the crèche, classrooms, security, optional clubs and graduation and awards day.",
      path: "/school-life",
    }),
  component: SchoolLife,
});

const facilities = [
  {
    title: "The crèche",
    body: "A newly improved crèche, described by the school as a home away from home, with good sleeping space and a hygienic feeding area. CCTV cameras monitor staff and children’s activities.",
    photo: photos.crechePlayroom,
  },
  {
    title: "Classrooms",
    body: "Well-ventilated, child-friendly rooms. The school places strong emphasis on cleanliness across classrooms, uniforms and hallways.",
    photo: photos.classroomWriting,
  },
  {
    title: "Security",
    body: "Dedicated security personnel are on duty from 7 a.m. until the close of the school day, working on strategies to keep the school safe.",
    photo: photos.campus,
  },
];

function SchoolLife() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <PageIntro
        eyebrow="School life"
        title="A day at All Grace: learning, play, rest and celebration."
        lede="Caregivers and teachers plan a balanced routine of learning, physical activity, rest and playtime, with time for children to choose their own activities."
        photo={photos.classParticipation}
      />

      <section className="py-20 md:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Spaces and care" title="Where your child spends the day." />
          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
            {facilities.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <Figure photo={f.photo} imgClassName="aspect-[4/3]" />
                <h3 className="mt-6 text-2xl">{f.title}</h3>
                <p className="mt-3 text-[15.5px] leading-relaxed text-muted-foreground">{f.body}</p>
              </Reveal>
            ))}
          </div>
          <ReviewNote item="facilities" className="mt-12 max-w-3xl" />
        </div>
      </section>

      <section className="bg-card">
        <div className="container-page py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <SectionHeading className="lg:col-span-7" eyebrow="Celebrations" title="Graduation, ceremonies and awards.">
              {achievements.general}
            </SectionHeading>
            <Reveal className="lg:col-span-4 lg:col-start-9" delay={80}>
              <p className="border-l-2 border-tartan pl-5 text-[15.5px] leading-relaxed">
                {achievements.documented}
              </p>
            </Reveal>
          </div>

          <ul className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {[
              photos.graduandCertificate,
              photos.graduandSpeech,
              photos.awardsCeremony,
              photos.pupilPresentation,
            ].map((ph, i) => (
              <Reveal as="li" key={ph.src} delay={i * 60}>
                <Figure photo={ph} imgClassName="aspect-[3/4] object-top" />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Clubs" title="Optional clubs.">
              Each club attracts a separate fee. Ask the admissions desk for details.
            </SectionHeading>
          </div>
          <Reveal as="ol" className="lg:col-span-6 lg:col-start-7" delay={80}>
            {clubs.map((c, i) => (
              <li key={c} className="flex items-baseline gap-5 border-b py-5 first:border-t">
                <span className="font-display text-sm text-tartan">0{i + 1}</span>
                <span className="font-display text-2xl">{c}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-deep">
        <div className="container-page grid gap-12 py-20 md:py-24 lg:grid-cols-12 lg:items-center">
          <div className="grid grid-cols-2 gap-3 lg:col-span-7">
            <Reveal>
              <Figure photo={photos.kindergartenClass} imgClassName="aspect-[3/4]" />
            </Reveal>
            <Reveal delay={80} className="pt-12">
              <Figure photo={photos.pupilsFirstDay} imgClassName="aspect-[3/4]" />
            </Reveal>
          </div>
          <Reveal className="lg:col-span-4 lg:col-start-9" delay={100}>
            <p className="eyebrow">Media</p>
            <h2 className="display-md mt-4">See more of the school.</h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
              Watch the school video presentation, or follow All Grace Schools on Facebook for news of
              events and activities.
            </p>
            <ul className="mt-8 space-y-3">
              <li>
                <button
                  type="button"
                  onClick={() => setVideoOpen(true)}
                  className="w-full text-left group flex items-center justify-between rounded-md border border-ink/15 bg-background px-5 py-4 font-medium transition-colors hover:border-crest hover:bg-card cursor-pointer"
                >
                  <span className="inline-flex items-center gap-3 text-ink">
                    <span className="flex size-7 items-center justify-center rounded-full bg-tartan/10 text-tartan group-hover:bg-tartan group-hover:text-white transition-colors">
                      <Play className="size-3.5 fill-current ml-0.5" aria-hidden />
                    </span>
                    Watch school video presentation
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-crest">
                    Play
                  </span>
                </button>
              </li>
              <li>
                <a
                  href={school.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-md border border-ink/15 bg-background px-5 py-4 font-medium transition-colors hover:border-ink"
                >
                  Facebook
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <AdmissionsBand />
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  );
}
