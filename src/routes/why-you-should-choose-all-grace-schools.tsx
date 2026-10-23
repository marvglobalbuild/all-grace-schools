import { createFileRoute } from "@tanstack/react-router";

import { ArticleLayout } from "@/components/site/ArticleLayout";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/why-you-should-choose-all-grace-schools")({
  head: () =>
    pageHead({
      title: "Why you should choose All Grace Schools | Uyo",
      description:
        "A blended Nigerian and British curriculum, a Christian foundation, a clean and secure environment and preparation for a digital future.",
      path: "/why-you-should-choose-all-grace-schools",
      type: "article",
    }),
  component: Article,
});

const points = [
  [
    "Our academic standards",
    "All Grace Schools works with a specially designed curriculum that blends the Nigerian and British curricula. We follow a 21st-century pupil-centred approach that builds life skills such as critical thinking, collaboration, digital literacy, good citizenship and communication.",
  ],
  [
    "Fee payment",
    "School fees are expected during the holidays, and at the latest by the third week after resumption. Pupils whose fees are not paid in full when due will not be allowed to take part in class activities. The Board of Trustees thanks parents who pay on time, because prompt payment is critical to the effective running of the school.",
  ],
  [
    "A clean, caring and secure environment",
    "Cleanliness is one of the most important ways to judge a school. Our classrooms, pupils’ uniforms, laboratories, staff appearance and hallways reflect how much emphasis we place on it.",
  ],
  [
    "Excellent parent service",
    "You have entrusted us with your child, and we treat you with the same respect. Listening to complaints, suggestions and ideas makes our work more solution-driven.",
  ],
  [
    "A Christian foundation",
    "All Grace Schools supports and extends the work of the Christian home and church, reinforcing the same values and beliefs as a foundation for raising Godly children.",
  ],
  [
    "Educating for a digital future",
    "We take seriously the challenge of educating children for a highly digital future. Developing ICT skills helps them take part fully in the economic, social, political and artistic world.",
  ],
] as const;

function Article() {
  return (
    <ArticleLayout slug="why-you-should-choose-all-grace-schools">
      <p className="lede">
        Based on the philosophy of Jean Piaget and Lev Vygotsky, we believe every child is unique,
        so we use a learning style suited to each child.
      </p>
      <ol className="mt-10 space-y-10">
        {points.map(([t, b], i) => (
          <li key={t} className="grid grid-cols-[2.5rem_1fr] gap-4">
            <span className="font-display text-2xl text-tartan">{i + 1}</span>
            <div>
              <h2 className="text-2xl">{t}</h2>
              <p className="prose-school mt-3">{b}</p>
            </div>
          </li>
        ))}
      </ol>
    </ArticleLayout>
  );
}
