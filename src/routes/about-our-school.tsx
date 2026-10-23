import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/site/Reveal";
import { ReviewNote } from "@/components/site/ReviewNote";
import { AdmissionsBand, Figure, PageIntro, SectionHeading, TextLink } from "@/components/site/blocks";
import { photos } from "@/content/images";
import { achievements, proprietor, school } from "@/content/school";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about-our-school")({
  head: () =>
    pageHead({
      title: "About All Grace Schools — mission, vision and values | Uyo",
      description:
        "Founded on 15 September 2014, All Grace Schools in Uyo is built on Christian principles. Read our mission, vision, core values and history.",
      path: "/about-our-school",
    }),
  component: About,
});

function About() {
  return (
    <>
      <PageIntro
        eyebrow="About our school"
        title="We make learning an art, a desire and a passion."
        lede={`Established on ${school.founded.label}, All Grace Schools is committed to nurturing excellence, character and lifelong learning in ${school.city}, ${school.state}.`}
        photo={photos.campus}
      />

      {/* Mission & vision */}
      <section className="py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">Our mission</p>
            <blockquote className="display-md mt-5 border-l-2 border-tartan pl-6">
              {school.mission}
            </blockquote>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">Our vision</p>
            <blockquote className="display-md mt-5 border-l-2 border-crest pl-6">
              {school.vision}
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Core values */}
      <section className="bg-ink text-ink-foreground">
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <p className="eyebrow text-ink-foreground/60">Core values</p>
            <h2 className="display-lg mt-4 max-w-2xl">Five commitments that shape every day.</h2>
          </Reveal>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-md bg-ink-foreground/15 sm:grid-cols-2 lg:grid-cols-5">
            {school.coreValues.map((v, i) => (
              <Reveal as="li" key={v} delay={i * 60} className="bg-ink p-7">
                <span className="font-display text-sm text-ink-foreground/50">0{i + 1}</span>
                <p className="mt-8 font-display text-xl leading-snug">{v}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Our story" title="Growing in Uyo since 2014." />
            <Reveal delay={80}>
              <Figure photo={photos.classroomWriting} className="mt-10" imgClassName="aspect-[4/3]" />
            </Reveal>
          </div>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={80}>
            <div className="prose-school">
              <p>
                All Grace Schools started on {school.founded.label}. Since then it has grown in
                size and become known in Uyo for learning and skill acquisition.
              </p>
              <p>
                The school provides a safe, stimulating and supportive environment where every
                child is encouraged to discover and make the most of their potential. Its
                curriculum balances academic achievement with moral values, creativity, leadership
                and practical life skills.
              </p>
              <p>
                Teachers aim to inspire curiosity, critical thinking, innovation and confidence,
                using modern teaching methods, technology-driven learning and a range of
                co-curricular activities.
              </p>
              <p>
                Children of all ages have time for child-selected activities: teachers set up the
                room with a variety of learning activities, and children explore and learn by
                doing. Trained caregivers plan a balanced routine of learning, physical activity,
                rest and play.
              </p>
            </div>
            <ReviewNote item="years" className="mt-8" />
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-card">
        <div className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <SectionHeading
            className="lg:col-span-5"
            eyebrow="Educational philosophy"
            title="A Christian foundation, a child-centred classroom."
          />
          <Reveal className="grid gap-10 sm:grid-cols-2 lg:col-span-7" delay={80}>
            <div>
              <h3 className="text-xl">Supporting home and church</h3>
              <p className="mt-3 text-[15.5px] leading-relaxed text-muted-foreground">
                The school supports and extends the work of the Christian home and church,
                reinforcing the same values and beliefs as a foundation for raising Godly children.
              </p>
            </div>
            <div>
              <h3 className="text-xl">Every child is unique</h3>
              <p className="mt-3 text-[15.5px] leading-relaxed text-muted-foreground">
                Drawing on the ideas of Jean Piaget and Lev Vygotsky, teachers adapt the learning
                style to each child within a pupil-centred approach.
              </p>
            </div>
            <div>
              <h3 className="text-xl">Equal opportunity</h3>
              <p className="mt-3 text-[15.5px] leading-relaxed text-muted-foreground">
                All children are given equal opportunities to achieve their potential, regardless
                of ability, race, culture, circumstances or gender.
              </p>
            </div>
            <div>
              <h3 className="text-xl">Well-being matters</h3>
              <p className="mt-3 text-[15.5px] leading-relaxed text-muted-foreground">
                The school recognises that children’s mental health and well-being are critical to
                success at school and at home.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-4">
            <Figure photo={photos.proprietor} imgClassName="aspect-[4/5] object-[50%_35%]" />
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6">
            <SectionHeading eyebrow="Leadership" title={proprietor.name}>
              {proprietor.role}
            </SectionHeading>
            <Reveal delay={80}>
              <ul className="mt-8 space-y-3 text-[15.5px] leading-relaxed">
                {proprietor.career.map((c) => (
                  <li key={c} className="flex gap-3">
                    <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-tartan" />
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-[15px] text-muted-foreground">{achievements.governance}</p>
              <div className="mt-8 flex flex-wrap gap-6">
                <TextLink to="/meet-our-proprietor">Full profile</TextLink>
                <TextLink to="/academics">Academics</TextLink>
                <TextLink to="/admission-process">Admissions</TextLink>
              </div>
            </Reveal>
            <ReviewNote item="proprietor" className="mt-8" />
          </div>
        </div>
      </section>

      <AdmissionsBand />
    </>
  );
}
