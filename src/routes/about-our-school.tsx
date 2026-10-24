import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/site/Reveal";
import { ReviewNote } from "@/components/site/ReviewNote";
import { AdmissionsBand, Figure, PageIntro, SectionHeading, TextLink } from "@/components/site/blocks";
import { photos } from "@/content/images";
import { achievements, proprietor, school, schoolStaff } from "@/content/school";
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
              <Reveal as="li" key={v} delay={i * 60} className="bg-ink p-7 card-motion">
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

      {/* Leadership & Staff Team */}
      <section className="py-20 md:py-28 bg-card border-t">
        <div className="container-page">
          <SectionHeading
            eyebrow="Leadership & Staff Team"
            title="Experienced leaders, dedicated educators and caring staff."
          >
            Behind the academic excellence and nurturing Christian environment of All Grace Schools is a team of visionary leaders, qualified administrators, and devoted support personnel.
          </SectionHeading>

          {/* Executive Director Feature */}
          <div className="mt-14 rounded-2xl border bg-background p-6 md:p-10 shadow-xs">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <Reveal className="lg:col-span-5">
                <div className="overflow-hidden rounded-xl border aspect-[4/5] bg-muted shadow-xs">
                  <img
                    src={photos.proprietor.src}
                    alt={photos.proprietor.alt}
                    width={photos.proprietor.width}
                    height={photos.proprietor.height}
                    className="h-full w-full object-cover object-[50%_35%]"
                    loading="lazy"
                  />
                </div>
              </Reveal>
              <div className="lg:col-span-7">
                <span className="inline-flex items-center rounded-full bg-crest/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-crest">
                  {proprietor.role}
                </span>
                <h3 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
                  {proprietor.name}
                </h3>
                <Reveal delay={80}>
                  <ul className="mt-6 space-y-3 text-[15.5px] leading-relaxed text-ink/85">
                    {proprietor.career.map((c) => (
                      <li key={c} className="flex gap-3">
                        <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-tartan" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-[15px] text-muted-foreground">{achievements.governance}</p>
                  <div className="mt-8 flex flex-wrap gap-5">
                    <TextLink to="/meet-our-proprietor">Read Executive Director's profile</TextLink>
                    <TextLink to="/academics">Academics</TextLink>
                    <TextLink to="/admission-process">Admissions</TextLink>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Board of Trustees & Executive Management */}
          <div className="mt-16">
            <div className="border-b pb-4">
              <h3 className="font-display text-2xl font-semibold text-ink">
                Board of Trustees & Executive Governance
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Providing institutional vision, fiduciary stewardship, and strategic leadership.
              </p>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {schoolStaff
                .filter((s) => s.category === "governance")
                .map((member, idx) => {
                  const photo = photos[member.photoKey as keyof typeof photos] || photos.campus;
                  return (
                    <Reveal
                      key={member.name}
                      delay={idx * 80}
                      className="group interactive-card flex flex-col overflow-hidden rounded-2xl border bg-background shadow-xs hover:shadow-lg transition-all"
                    >
                      <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-muted interactive-img-container">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          width={photo.width}
                          height={photo.height}
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <span className="inline-flex w-fit items-center rounded-full bg-tartan/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-tartan">
                          {member.categoryLabel}
                        </span>
                        <h4 className="mt-3 font-display text-xl font-semibold text-ink group-hover:text-crest transition-colors">
                          {member.name}
                        </h4>
                        <p className="mt-1 text-sm font-medium text-crest">{member.role}</p>
                        <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted-foreground">
                          {member.description}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
            </div>
          </div>

          {/* School Management & Administrative Team */}
          <div className="mt-16">
            <div className="border-b pb-4">
              <h3 className="font-display text-2xl font-semibold text-ink">
                School Management & Student Welfare
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Driving academic quality, operational coordination, admissions, and pupil care every day.
              </p>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {schoolStaff
                .filter((s) => s.category !== "governance")
                .map((member, idx) => {
                  const photo = photos[member.photoKey as keyof typeof photos] || photos.campus;
                  return (
                    <Reveal
                      key={member.name}
                      delay={idx * 60}
                      className="group interactive-card flex flex-col overflow-hidden rounded-2xl border bg-background shadow-xs hover:shadow-lg transition-all"
                    >
                      <div className="aspect-[4/5] overflow-hidden bg-muted interactive-img-container">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          width={photo.width}
                          height={photo.height}
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <span className="inline-flex w-fit items-center rounded-full bg-crest/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-crest">
                          {member.categoryLabel}
                        </span>
                        <h4 className="mt-2.5 font-display text-lg font-semibold text-ink group-hover:text-crest transition-colors">
                          {member.name}
                        </h4>
                        <p className="mt-1 text-xs font-semibold text-tartan">{member.role}</p>
                        <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-muted-foreground">
                          {member.description}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
            </div>
          </div>

          <ReviewNote item="proprietor" className="mt-14" />
        </div>
      </section>

      <AdmissionsBand />
    </>
  );
}
