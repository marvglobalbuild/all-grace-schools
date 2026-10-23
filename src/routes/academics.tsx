import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/site/Reveal";
import { ReviewNote } from "@/components/site/ReviewNote";
import { AdmissionsBand, Figure, PageIntro, SectionHeading } from "@/components/site/blocks";
import { photos } from "@/content/images";
import { clubs, stages } from "@/content/school";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/academics")({
  head: () =>
    pageHead({
      title: "Academics — Play Group, Kindergarten and Grade School | All Grace Schools",
      description:
        "Learning stages, subjects and teaching at All Grace Schools, Uyo: Play Group, KG1–KG2, Lower Grade 1–3 and Upper Grade 4–5, with a blended Nigerian and British curriculum.",
      path: "/academics",
    }),
  component: Academics,
});

const stagePhotos = {
  creche: photos.playgroup,
  kindergarten: photos.kindergartenRoom,
  "lower-grade": photos.classroomWriting,
  "upper-grade": photos.classroomTeacher,
} as const;

function Academics() {
  return (
    <>
      <PageIntro
        eyebrow="Academics"
        title="A curriculum that gives every child room to learn and achieve."
        lede="All Grace Schools follows a specially designed curriculum that blends the Nigerian and British curricula, with a pupil-centred approach to critical thinking, collaboration, digital literacy, citizenship and communication."
      >
        <nav aria-label="Learning stages" className="flex flex-wrap gap-2">
          {stages.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-ink/20 px-4 py-2 text-sm font-medium transition-colors hover:border-ink hover:bg-ink hover:text-ink-foreground"
            >
              {s.name.replace("The ", "")}
            </a>
          ))}
        </nav>
      </PageIntro>

      <section className="py-16 md:py-20">
        <div className="container-page grid gap-10 md:grid-cols-3">
          {[
            [
              "Moral, social and cultural growth",
              "Children develop morally, socially and culturally through the curriculum, alongside their academic work.",
            ],
            [
              "Learning by doing",
              "Teachers set up the environment with a variety of activities that children are free to explore.",
            ],
            [
              "Practical and digital skills",
              "Computer is taught from Kindergarten, and home-economics practicals, excursions and robotics extend learning beyond the desk.",
            ],
          ].map(([t, b], i) => (
            <Reveal key={t} delay={i * 80} className="border-t-2 border-ink pt-5">
              <h2 className="text-xl md:text-2xl">{t}</h2>
              <p className="mt-3 text-[15.5px] leading-relaxed text-muted-foreground">{b}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="container-page">
        <ReviewNote item="stages" className="max-w-3xl" />
      </div>

      {stages.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className="scroll-mt-28 border-b py-20 last-of-type:border-b-0 md:py-24"
        >
          <div className="container-page grid gap-12 lg:grid-cols-12">
            <div className={i % 2 ? "lg:order-2 lg:col-span-5 lg:col-start-8" : "lg:col-span-5"}>
              <Reveal>
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-tartan">
                  {s.ages}
                </p>
                <h2 className="display-lg mt-3">{s.name}</h2>
                {s.classes && <p className="mt-2 font-medium text-crest">{s.classes}</p>}
                <p className="lede mt-5">{s.summary}</p>
              </Reveal>
              <Reveal delay={80}>
                <Figure
                  photo={stagePhotos[s.id as keyof typeof stagePhotos]}
                  className="mt-8"
                  imgClassName="aspect-[4/3]"
                />
              </Reveal>
            </div>
            <div className={i % 2 ? "lg:order-1 lg:col-span-6" : "lg:col-span-6 lg:col-start-7"}>
              <Reveal delay={60}>
                <ul className="space-y-4 text-[16px] leading-relaxed">
                  {s.detail.map((d) => (
                    <li key={d} className="flex gap-3">
                      <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-crest" />
                      {d}
                    </li>
                  ))}
                </ul>
              </Reveal>
              {s.subjects && (
                <Reveal delay={120} className="mt-10 rounded-md border bg-card p-6 md:p-8">
                  <h3 className="text-lg">Subjects at this level</h3>
                  <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2.5 text-[15px] sm:grid-cols-2">
                    {s.subjects.map((sub) => (
                      <li key={sub} className="border-b border-dashed pb-2.5">
                        {sub}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-paper-deep">
        <div className="container-page grid gap-12 py-20 md:py-24 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="Beyond lessons" title="Clubs and extracurricular activities.">
              These clubs are optional and attract a separate fee. Pupils have also been enrolled
              in robotics and take part in competitions in mathematics, essay writing, music and
              diction.
            </SectionHeading>
            <Reveal as="ul" delay={80} className="mt-8 flex flex-wrap gap-2">
              {clubs.map((c) => (
                <li key={c} className="rounded-full bg-background px-4 py-2 text-[14.5px]">
                  {c}
                </li>
              ))}
            </Reveal>
          </div>
          <Reveal className="lg:col-span-5 lg:col-start-8" delay={100}>
            <Figure photo={photos.pupilPresentation} imgClassName="aspect-[4/5] object-top" />
          </Reveal>
        </div>
      </section>

      <AdmissionsBand title="Find the right class for your child." />
    </>
  );
}
