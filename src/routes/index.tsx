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
      title: "All Grace Schools, Uyo — Christian Play Group, Kindergarten and Grade School",
      description:
        "Since 2014, All Grace Schools in Uyo, Akwa Ibom State, has offered play group, kindergarten and grade school education rooted in Christian values. Contact our admissions team.",
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
  creche: photos.playgroup || photos.crechePlayroom,
  kindergarten: photos.kindergartenClass,
  "lower-grade": photos.classroomWriting,
  "upper-grade": photos.upperGrade,
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
    <section className="relative overflow-hidden bg-background">
      {/* =========================================================================
          MOBILE VIEW ONLY (modeled directly on swotgadgets.com layout):
          - Red dot + uppercase eyebrow
          - High-contrast headline with red text accent on "hard work & discipline"
          - Clean lede text
          - Dual side-by-side action buttons: Left red filled, Right white WhatsApp
          - Feature bullets divider line
          - Campus photo with bottom-right floating admissions chat card
          ========================================================================= */}
      <div className="container-page block pb-12 pt-6 md:hidden">
        {/* Eyebrow with red indicator dot */}
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-[#C8161D] shrink-0" aria-hidden />
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Play Group · Kindergarten · Grade School — {school.city}
          </p>
        </div>

        {/* Big Bold Headline with Red Accent */}
        <h1 className="mt-4 font-display text-[2.35rem] font-extrabold leading-[1.08] tracking-tight text-ink">
          Rooted in God,{" "}
          <span className="block text-[#C8161D]">hard work &amp; discipline.</span>
        </h1>

        {/* Lede Paragraph */}
        <p className="mt-4 text-[14.5px] font-normal leading-relaxed text-ink/75">
          Since {school.founded.label}, All Grace Schools has nurtured children in Uyo, Akwa Ibom State, through a curriculum that blends Nigerian and British approaches with Christian principles.
        </p>

        {/* Dual Action Buttons (Side by Side) */}
        <div className="mt-6 flex items-center gap-2.5">
          <Link
            to="/admission-process"
            hash="contact-admissions"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#C8161D] px-3.5 py-3.5 text-center text-[13px] font-bold text-white shadow-xs transition-transform active:scale-95"
          >
            <span>Contact Admissions</span>
            <ArrowRight className="size-4 shrink-0" aria-hidden />
          </Link>

          <a
            href={`https://wa.me/2347089625023?text=${encodeURIComponent("Hello All Grace Schools, I would like to inquire about admissions.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-white px-3.5 py-3.5 text-center text-[13px] font-semibold text-ink shadow-xs transition-transform active:scale-95"
          >
            <svg className="size-4.5 fill-[#25D366] shrink-0" viewBox="0 0 24 24" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Quick Tour Link */}
        <div className="mt-3 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-crest hover:underline cursor-pointer"
          >
            <Play className="size-3.5 fill-crest text-crest" aria-hidden />
            <span>Watch Virtual Video Tour</span>
          </button>
          <Link
            to="/academics"
            className="text-xs font-medium text-muted-foreground hover:text-ink hover:underline"
          >
            Explore Academics →
          </Link>
        </div>

        {/* Feature bullets divider bar (modeled on reference) */}
        <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-medium text-muted-foreground/90">
          <span>Nigerian &amp; British Curriculum</span>
          <span className="text-border">•</span>
          <span>Christian Foundation</span>
          <span className="text-border">•</span>
          <span>Play Group from 1 Year</span>
          <span className="text-border">•</span>
          <span>{school.city}</span>
        </div>

        {/* Mobile Campus Photo with Floating Info Card */}
        <div className="relative mt-5 overflow-hidden rounded-xl border border-border shadow-xs">
          <img
            src={photos.campus.src}
            alt={photos.campus.alt}
            width={photos.campus.width}
            height={photos.campus.height}
            className="aspect-[4/3] w-full object-cover object-[30%_50%]"
          />

          {/* Floating Admission / WhatsApp prompt card (modeled directly on screenshot) */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 rounded-xl border border-white/80 bg-white/95 p-3 shadow-lg backdrop-blur-md">
            <div>
              <p className="text-[11px] font-medium text-muted-foreground">
                Admissions 2026/2027 Ongoing
              </p>
              <a
                href={`https://wa.me/2347089625023?text=${encodeURIComponent("Hello All Grace Schools, I would like to inquire about admissions.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 inline-flex items-center gap-1 text-[12.5px] font-bold text-ink hover:text-crest"
              >
                <span>Chat with admissions</span>
                <ArrowRight className="size-3" aria-hidden />
              </a>
            </div>
            <a
              href={`https://wa.me/2347089625023?text=${encodeURIComponent("Hello All Grace Schools, I would like to inquire about admissions.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-9 items-center justify-center rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#0b8043] shrink-0 active:scale-95 transition-transform"
              aria-label="Enquire on WhatsApp"
            >
              <svg className="size-4.5 fill-[#0b8043]" viewBox="0 0 24 24" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================================
          DESKTOP VIEW (preserved original layout)
          ========================================================================= */}
      <div className="container-page hidden md:grid gap-10 pb-16 pt-10 md:pt-16 lg:grid-cols-12 lg:gap-8 lg:pb-24">
        <div className="lg:col-span-6 lg:pt-10 xl:pt-16">
          <p className="eyebrow animate-rise">
            Play Group · Kindergarten · Grade School — {school.city}
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
            A Christian school in Uyo for children from one year old through the grade school levels.
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
            <Reveal as="li" key={s.id} delay={i * 80} className="group card-motion rounded-xl p-3 -m-3 hover:bg-card">
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
          Photographs from the school’s own collection: the play group, kindergarten rooms, lessons
          and graduation day.
        </SectionHeading>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
          <Reveal className="col-span-2 md:col-span-4 md:row-span-2">
            <Figure photo={photos.playground} imgClassName="aspect-[4/3] md:aspect-auto md:h-full" className="h-full" />
          </Reveal>
          <Reveal className="md:col-span-2" delay={60}>
            <Figure photo={photos.graduandCertificate} imgClassName="aspect-square" />
          </Reveal>
          <Reveal className="md:col-span-2" delay={120}>
            <Figure photo={photos.pupilPresentation} imgClassName="aspect-square" />
          </Reveal>
          <Reveal className="col-span-2 md:col-span-3" delay={60}>
            <Figure photo={photos.pupilSmileUniform} imgClassName="aspect-[3/2] object-top" />
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
          <SectionHeading eyebrow="Leadership" title="Mrs. B. B. Eshiet, Executive Director" />
          <Reveal delay={80}>
            <p className="prose-school mt-6 max-w-xl">
              A trained teacher with a BA and MA in English and a Postgraduate Diploma in
              Education, Mrs. Eshiet worked across education in Akwa Ibom State and later served as
              a Permanent Secretary before founding All Grace Schools as Executive Director. She is the author of three
              books used in educational institutions in the State.
            </p>
            <div className="mt-8">
              <TextLink to="/meet-our-proprietor">Read Executive Director's profile</TextLink>
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
            <Reveal as="li" key={s.title} delay={i * 80} className="bg-background p-7 md:p-9 card-motion">
              <span className="flex size-10 items-center justify-center rounded-full bg-ink font-display text-lg text-ink-foreground">
                {i + 1}
              </span>
              <h3 className="mt-6 text-xl md:text-2xl">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.body}</p>
            </Reveal>
          ))}
        </ol>
        {/* Dedicated Admissions Desk & HR Support Feature */}
        <Reveal className="mt-12 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-paper via-white to-secondary p-6 shadow-sm lg:p-9 card-motion">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <div className="card-motion-img relative overflow-hidden rounded-xl shadow-photo group aspect-[4/5] max-w-[280px] mx-auto lg:max-w-none">
                <img
                  src={photos.hrOffice.src}
                  alt={photos.hrOffice.alt}
                  width={photos.hrOffice.width}
                  height={photos.hrOffice.height}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-semibold text-white/90">HR &amp; Admissions Office</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Admissions Desk Support</span>
              </div>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                Ready to enroll? Speak directly with our HR &amp; Admissions Desk.
              </h3>
              <p className="mt-3 text-[15.5px] leading-relaxed text-muted-foreground">
                Our HR Manager, <strong className="text-ink">{admissions.officer}</strong>, and admissions coordinators are available on campus weekdays from 9 a.m. to 3 p.m. to welcome your family, answer questions, and assist with registration forms and teller payments.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={admissions.phone.tel}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#C8161D] px-5 py-3 text-sm font-bold text-white shadow-xs transition hover:bg-[#a51117] active:scale-95 cursor-pointer"
                >
                  <span>Call {admissions.phone.display}</span>
                </a>
                <a
                  href="https://wa.me/2347089625023?text=Hello%20Ubong%20Abasi%20Edet%2C%20I%20would%20like%20to%20inquire%20about%20enrolling%20my%20child%20at%20All%20Grace%20Schools."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-5 py-3 text-sm font-semibold text-ink shadow-xs transition hover:bg-slate-50 active:scale-95 cursor-pointer"
                >
                  <svg className="size-4.5 fill-[#25D366]" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z"/></svg>
                  <span>WhatsApp Admissions</span>
                </a>
                <Link to="/admission-process" className="text-sm font-semibold text-crest hover:underline ml-2">
                  View full admission process &rarr;
                </Link>
              </div>
            </div>
          </div>
        </Reveal>


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
