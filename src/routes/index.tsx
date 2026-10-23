import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { ReviewNote } from "@/components/site/ReviewNote";
import { AdmissionsBand, Figure, SectionHeading, TextLink } from "@/components/site/blocks";
import { VideoTourSection, VideoModal } from "@/components/site/VideoTour";
import { photos } from "@/content/images";
import {
  SITE_URL,
  achievements,
  admissionRules,
  admissionSteps,
  admissions,
  clubs,
  formatNaira,
  proprietor,
  reasons,
  school,
  stages,
} from "@/content/school";
import { pageHead } from "@/lib/seo";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: school.name,
  url: SITE_URL,
  foundingDate: school.founded.iso,
  email: admissions.email,
  telephone: admissions.phone.tel.replace("tel:", ""),
  address: {
    "@type": "PostalAddress",
    addressLocality: school.city,
    addressRegion: school.state,
    addressCountry: "NG",
  },
  sameAs: [school.facebookUrl],
};

export const Route = createFileRoute("/")({
  head: () => {
    const h = pageHead({
      title: "All Grace Schools, Uyo — Christian crèche, nursery and primary school",
      description:
        "Since 2014, All Grace Schools in Uyo, Akwa Ibom State, has offered crèche, kindergarten and primary education rooted in Christian values. Contact our admissions team.",
      path: "/",
    });
    return {
      ...h,
      scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
    };
  },
  component: Home,
});

const stagePhotos = {
  creche: photos.crechePlayroom,
  kindergarten: photos.kindergartenClass,
  "lower-grade": photos.classroomWriting,
  "upper-grade": photos.classParticipation,
} as const;

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Stages />
      <Strengths />
      <SchoolLife />
      <VideoTourSection />
      <Leadership />
      <AdmissionsPreview />
      <AdmissionsBand />
    </>
  );
}

function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative overflow-hidden">
      <div className="container-page grid gap-10 pb-16 pt-10 md:pt-16 lg:grid-cols-12 lg:gap-8 lg:pb-24">
        <div className="lg:col-span-6 lg:pt-10 xl:pt-16">
          <p className="eyebrow animate-rise">
            Crèche · Kindergarten · Primary — {school.city}
          </p>
          <h1 className="display-xl mt-6 animate-rise" style={{ ["--delay" as string]: "60ms" }}>
            Rooted in God, <em className="font-normal italic text-crest">hard work</em> and
            discipline.
          </h1>
          <p
            className="lede mt-7 max-w-xl animate-rise"
            style={{ ["--delay" as string]: "120ms" }}
          >
            Since {school.founded.label}, All Grace Schools has nurtured children in Uyo, Akwa
            Ibom State, through a curriculum that blends Nigerian and British approaches with
            Christian principles.
          </p>
          <div
            className="mt-9 flex flex-wrap gap-3 animate-rise"
            style={{ ["--delay" as string]: "180ms" }}
          >
            <Button asChild variant="admissions" size="lg">
              <Link to="/admission-process" hash="contact-admissions">
                Contact Admissions <ArrowRight aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="line" size="lg">
              <Link to="/academics">Explore learning stages</Link>
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => setVideoOpen(true)}
              className="gap-2 cursor-pointer border-ink/20 hover:border-crest hover:text-crest"
            >
              <Play className="size-4 fill-crest text-crest" aria-hidden /> Watch Video Tour
            </Button>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative overflow-hidden rounded-md shadow-photo group">
            <img
              src={photos.campus.src}
              alt={photos.campus.alt}
              width={photos.campus.width}
              height={photos.campus.height}
              fetchPriority="high"
              className="aspect-[5/4] w-full object-cover object-[30%_50%] animate-photo lg:aspect-[4/5]"
            />
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="absolute bottom-4 right-4 z-10 flex items-center gap-2 rounded-full bg-ink/85 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-crest hover:scale-105 cursor-pointer"
              aria-label="Play video tour"
            >
              <Play className="size-3.5 fill-amber-400 text-amber-400" /> Watch Video Tour
            </button>
          </div>
          <div
            className="absolute -bottom-8 left-4 w-[46%] max-w-[260px] overflow-hidden rounded-md border-4 border-background shadow-photo animate-rise sm:left-[-1.5rem] lg:-left-12"
            style={{ ["--delay" as string]: "400ms" }}
          >
            <img
              src={photos.pupilsGroup.src}
              alt={photos.pupilsGroup.alt}
              width={photos.pupilsGroup.width}
              height={photos.pupilsGroup.height}
              className="aspect-[3/2] w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="stripe-tartan h-1.5" aria-hidden />
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}

function Intro() {
  return (
    <section className="border-b">
      <div className="container-page grid gap-10 py-20 md:py-28 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Discover our school</p>
          <p className="mt-6 font-display text-[clamp(4.5rem,11vw,8.5rem)] leading-[0.85] tracking-[-0.04em] text-crest">
            2014
          </p>
          <p className="mt-3 text-[15px] text-muted-foreground">
            Founded {school.founded.label}
          </p>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={80}>
          <h2 className="display-md">
            A Christian school in Uyo for children from six months old through the primary
            grades.
          </h2>
          <div className="prose-school mt-6 max-w-2xl">
            <p>
              All Grace Schools offers a safe, stimulating and supportive environment where every
              child is encouraged to discover their potential. The curriculum combines academic
              achievement with moral values, creativity, leadership and practical life skills.
            </p>
            <p>
              Learning goes beyond the classroom: modern teaching methods, technology-driven
              learning and co-curricular activities prepare pupils for an ever-changing world.
            </p>
          </div>
          <div className="mt-8">
            <TextLink to="/about-our-school">About our school</TextLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stages() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="What we offer" title="Four stages, from first steps to certificate exams." />
          <Reveal>
            <TextLink to="/academics">Subjects and curriculum</TextLink>
          </Reveal>
        </div>

        <ol className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((s, i) => (
            <Reveal as="li" key={s.id} delay={i * 80} className="group">
              <div className="flex items-baseline justify-between border-t-2 border-ink pt-3">
                <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-tartan">
                  {s.ages}
                </span>
                <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
              </div>
              <Figure
                photo={stagePhotos[s.id as keyof typeof stagePhotos]}
                className="mt-4"
                imgClassName="aspect-[4/5]"
              />
              <h3 className="mt-5 text-2xl">{s.name}</h3>
              {s.classes && <p className="mt-1 text-sm font-medium text-crest">{s.classes}</p>}
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.summary}</p>
            </Reveal>
          ))}
        </ol>
        <ReviewNote item="stages" className="mt-12 max-w-3xl" />
      </div>
    </section>
  );
}

function Strengths() {
  return (
    <section className="bg-card">
      <div className="container-page grid gap-14 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading eyebrow="Why parents choose AGS" title="How we teach, and what we stand for." />
            <Reveal delay={100}>
              <Figure photo={photos.classroomTeacher} className="mt-10" imgClassName="aspect-[4/3]" />
            </Reveal>
          </div>
        </div>
        <ol className="lg:col-span-7 lg:pt-4">
          {reasons.map((r, i) => (
            <Reveal
              as="li"
              key={r.title}
              className="grid grid-cols-[3.25rem_1fr] gap-4 border-b py-8 first:pt-0 last:border-b-0 md:grid-cols-[4.5rem_1fr]"
            >
              <span className="font-display text-3xl leading-none text-tartan md:text-4xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl md:text-2xl">{r.title}</h3>
                <p className="mt-2.5 max-w-xl text-[15.5px] leading-relaxed text-muted-foreground">
                  {r.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function SchoolLife() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="School life" title="Classrooms, ceremonies and clubs.">
          Photographs from the school’s own collection: the crèche, kindergarten rooms, lessons
          and graduation day.
        </SectionHeading>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
          <Reveal className="col-span-2 md:col-span-4 md:row-span-2">
            <Figure photo={photos.crechePlayroom} imgClassName="aspect-[4/3] md:aspect-auto md:h-full" className="h-full" />
          </Reveal>
          <Reveal className="md:col-span-2" delay={60}>
            <Figure photo={photos.graduandCertificate} imgClassName="aspect-square" />
          </Reveal>
          <Reveal className="md:col-span-2" delay={120}>
            <Figure photo={photos.pupilPresentation} imgClassName="aspect-square" />
          </Reveal>
          <Reveal className="col-span-2 md:col-span-3" delay={60}>
            <Figure photo={photos.kindergartenRoom} imgClassName="aspect-[3/2]" />
          </Reveal>
          <Reveal className="col-span-2 md:col-span-3" delay={120}>
            <Figure photo={photos.awardsCeremony} imgClassName="aspect-[3/2] object-[50%_30%]" />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 border-t pt-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <h3 className="text-2xl">Optional clubs</h3>
            <p className="mt-2 text-[15px] text-muted-foreground">
              Each club attracts a separate fee. Pupils have also been enrolled in robotics.
            </p>
          </Reveal>
          <Reveal as="ul" className="flex flex-wrap gap-2 md:col-span-8 md:justify-end" delay={80}>
            {clubs.map((c) => (
              <li
                key={c}
                className="rounded-full border border-ink/15 px-4 py-2 text-[14.5px] text-ink"
              >
                {c}
              </li>
            ))}
          </Reveal>
        </div>
        <div className="mt-10">
          <TextLink to="/school-life">See school life</TextLink>
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section className="bg-paper-deep">
      <div className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-5">
          <Figure photo={photos.proprietor} imgClassName="aspect-[4/5] object-[50%_35%]" />
        </Reveal>
        <div className="lg:col-span-6 lg:col-start-7">
          <SectionHeading eyebrow="Leadership" title={`${proprietor.name}, ${proprietor.role}`} />
          <Reveal delay={80}>
            <p className="prose-school mt-6 max-w-xl">
              A trained teacher with a BA and MA in English and a Postgraduate Diploma in
              Education, Mrs. Eshiet worked across education in Akwa Ibom State and later served as
              a Permanent Secretary before founding All Grace Schools. She is the author of three
              books used in educational institutions in the State.
            </p>
            <div className="mt-8">
              <TextLink to="/meet-our-proprietor">Read her profile</TextLink>
            </div>
          </Reveal>

          <Reveal delay={140} className="mt-12 grid gap-6 border-t border-ink/15 pt-8 sm:grid-cols-2">
            <div>
              <p className="eyebrow text-tartan">Recognition</p>
              <p className="mt-3 text-[15px] leading-relaxed">{achievements.documented}</p>
            </div>
            <div>
              <p className="eyebrow text-tartan">Governance</p>
              <p className="mt-3 text-[15px] leading-relaxed">{achievements.governance}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function AdmissionsPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Admissions" title="Three steps to a place at All Grace." />
          <Reveal>
            <TextLink to="/admission-process">Full admission process</TextLink>
          </Reveal>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-md border bg-border md:grid-cols-3">
          {admissionSteps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 80} className="bg-background p-7 md:p-9">
              <span className="flex size-10 items-center justify-center rounded-full bg-ink font-display text-lg text-ink-foreground">
                {i + 1}
              </span>
              <h3 className="mt-6 text-xl md:text-2xl">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.body}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal as="dl" className="mt-10 grid gap-6 sm:grid-cols-3">
          <div>
            <dt className="text-[13px] text-muted-foreground">Registration form</dt>
            <dd className="mt-1 font-display text-3xl">
              {formatNaira(admissionRules.registrationFeeNaira)}
            </dd>
          </div>
          <div>
            <dt className="text-[13px] text-muted-foreground">Passport photographs</dt>
            <dd className="mt-1 font-display text-3xl">{admissionRules.passportPhotos}, coloured</dd>
          </div>
          <div>
            <dt className="text-[13px] text-muted-foreground">Admissions desk</dt>
            <dd className="mt-1 font-display text-3xl">Weekdays, 9–3</dd>
          </div>
        </Reveal>
        <ReviewNote item="fee" className="mt-8 max-w-3xl" />
      </div>
    </section>
  );
}
