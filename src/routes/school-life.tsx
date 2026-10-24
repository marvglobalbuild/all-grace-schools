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
        "Photographs and facts about everyday life at All Grace Schools, Uyo: the play group, classrooms, security, optional clubs and graduation and awards day.",
      path: "/school-life",
    }),
  component: SchoolLife,
});

const facilities = [
  {
    title: "Campus Playground & Outdoor Recreation",
    body: "Spacious outdoor playground and recreational facilities equipped for active physical play, motor coordination, sports, and joyful peer interaction in a secure, monitored campus setting.",
    photo: photos.playground,
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
              <Reveal key={f.title} delay={i * 80} className="card-motion">
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
              <Reveal as="li" key={ph.src} delay={i * 60} className="card-motion">
                <Figure photo={ph} imgClassName="aspect-[3/4] object-top" />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      
      {/* Student Leadership & Democratic Elections (Vote Flyers) */}
      <section className="bg-card border-y py-20 md:py-28">
        <div className="container-page">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Student Leadership & Elections"
              title="Democratic participation, responsibility and pupil voice."
            >
              At All Grace Schools, leadership and civic character are nurtured early. Pupils actively campaign and cast votes in democratic student elections for prefect positions, learning public presentation, integrity, peer accountability, and service.
            </SectionHeading>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                photo: photos.voteGames,
                title: "Games Prefect Campaign",
                role: "Sports, Athletics & Teamwork",
                desc: "Promoting physical fitness, fair play, athletics competitions, and team spirit across all grades.",
              },
              {
                photo: photos.voteSanitary,
                title: "Sanitary Prefect Campaign",
                role: "Health, Hygiene & Order",
                desc: "Leading daily classroom cleanliness, personal hygiene standards, and campus environmental care.",
              },
              {
                photo: photos.voteTimekeeper,
                title: "Timekeeper Campaign",
                role: "Punctuality & School Discipline",
                desc: "Upholding punctuality for morning devotions, assembly lines, lesson transitions, and school activities.",
              },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 90} className="group overflow-hidden rounded-xl border bg-background shadow-xs hover:shadow-md transition-shadow">
                <div className="overflow-hidden bg-muted aspect-[4/5]">
                  <img
                    src={f.photo.src}
                    alt={f.photo.alt}
                    width={f.photo.width}
                    height={f.photo.height}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-flex items-center rounded-full bg-crest/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-crest">
                    {f.role}
                  </span>
                  <h3 className="mt-2 text-xl font-display font-semibold text-ink">{f.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Additional Co-Curricular & Club highlights */}
          <div className="mt-14 grid gap-6 md:grid-cols-3 border-t pt-10">
            <Reveal className="overflow-hidden rounded-xl border bg-background p-4">
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={photos.scoutsClub.src}
                  alt={photos.scoutsClub.alt}
                  width={photos.scoutsClub.width}
                  height={photos.scoutsClub.height}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h4 className="mt-3 font-display text-base font-semibold text-ink">Scouting & Outdoor Leadership</h4>
              <p className="mt-1 text-xs text-muted-foreground">Building discipline, outdoor navigation, first aid, and survival skills.</p>
            </Reveal>

            <Reveal className="overflow-hidden rounded-xl border bg-background p-4" delay={60}>
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={photos.bookfairBoy.src}
                  alt={photos.bookfairBoy.alt}
                  width={photos.bookfairBoy.width}
                  height={photos.bookfairBoy.height}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h4 className="mt-3 font-display text-base font-semibold text-ink">Annual Book Fair & Literacy</h4>
              <p className="mt-1 text-xs text-muted-foreground">Fostering deep reading passion, book reviews, and vocabulary building.</p>
            </Reveal>

            <Reveal className="overflow-hidden rounded-xl border bg-background p-4" delay={120}>
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={photos.pupilsStaircase.src}
                  alt={photos.pupilsStaircase.alt}
                  width={photos.pupilsStaircase.width}
                  height={photos.pupilsStaircase.height}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h4 className="mt-3 font-display text-base font-semibold text-ink">Order & Campus Fellowship</h4>
              <p className="mt-1 text-xs text-muted-foreground">A warm, unified student community rooted in mutual respect.</p>
            </Reveal>
          </div>
        </div>
      </section>


      {/* School Community, Welcome & Special Moments (from new photos collection) */}
      <section className="bg-paper-deep border-b py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="School Community & Moments"
            title="Joyful learning, career milestones and school spirit."
          >
            Every school term at All Grace Schools is filled with celebration, cultural enrichment, career discovery, and shared joy among pupils, teachers, and parents.
          </SectionHeading>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                photo: photos.pupilCareerStairs,
                title: "Career Day Aspirations",
                desc: "Pupils dressed in professional attire exploring future vocations and ambitions."
              },
              {
                photo: photos.welcomePupilsArch,
                title: "Welcome Back Celebrations",
                desc: "Festive balloon arches welcoming pupils to a vibrant new academic session."
              },
              {
                photo: photos.pupilGirlTartanFrame,
                title: "School Pride & Character",
                desc: "Confident pupils in official tartan uniform embodying discipline and excellence."
              },
              {
                photo: photos.pupilBoyTieFrame,
                title: "Smart & Ready to Learn",
                desc: "High standards of presentation, punctuality, and enthusiasm for the classroom."
              },
              {
                photo: photos.pupilGirlRibbonFrame,
                title: "Nurturing Every Child",
                desc: "Early childhood care and mentorship supporting confidence and happiness."
              },
              {
                photo: photos.welcomeGirlFrame,
                title: "Smiles & Community Spirit",
                desc: "Creating joyful memories on campus from the very first day of school."
              },
              {
                photo: photos.pupilSmileUniform,
                title: "Safe & Friendly Atmosphere",
                desc: "A warm Christian learning environment where pupils thrive academically and socially."
              },
              {
                photo: photos.pupilReadingBookfair,
                title: "Curiosity & Exploration",
                desc: "Encouraging pupils to discover new books and cultivate lifelong reading habits."
              }
            ].map((item, idx) => (
              <Reveal key={item.title} delay={idx * 60} className="group interactive-card overflow-hidden rounded-xl border bg-background shadow-xs hover:shadow-lg transition-all">
                <div className="aspect-[4/5] overflow-hidden bg-muted interactive-img-container">
                  <img
                    src={item.photo.src}
                    alt={item.photo.alt}
                    width={item.photo.width}
                    height={item.photo.height}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-display text-base font-semibold text-ink group-hover:text-crest transition-colors">{item.title}</h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
