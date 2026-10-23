import { createFileRoute } from "@tanstack/react-router";

import { ArticleLayout } from "@/components/site/ArticleLayout";
import { AdmissionsActions, TextLink } from "@/components/site/blocks";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/how-to-enroll-your-child-in-a-class")({
  head: () =>
    pageHead({
      title: "How to enrol your child in a class | All Grace Schools",
      description:
        "Check age eligibility and the optional extracurricular clubs, then contact the All Grace Schools Admissions Department.",
      path: "/how-to-enroll-your-child-in-a-class",
      type: "article",
    }),
  component: Article,
});

function Article() {
  return (
    <ArticleLayout slug="how-to-enroll-your-child-in-a-class">
      <div className="prose-school">
        <p className="lede">
          Check the age eligibility for each class and the optional extracurricular clubs on our
          Admission Process page, then contact the Admissions Department.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-6">
        <TextLink to="/admission-process">Admission process</TextLink>
        <TextLink to="/academics">Ages and classes</TextLink>
      </div>
      <div className="mt-10">
        <AdmissionsActions />
      </div>
    </ArticleLayout>
  );
}
