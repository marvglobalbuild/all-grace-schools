import { createFileRoute } from "@tanstack/react-router";

import { ArticleLayout } from "@/components/site/ArticleLayout";
import { ReviewNote } from "@/components/site/ReviewNote";
import { proprietor } from "@/content/school";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/meet-our-proprietor")({
  head: () =>
    pageHead({
      title: "Meet our Executive Director, Mrs. B. B. Eshiet | All Grace Schools",
      description:
        "The career in education and public service of Mrs. B. B. Eshiet, founder and Executive Director of All Grace Schools, Uyo.",
      path: "/meet-our-proprietor",
      type: "article",
    }),
  component: Article,
});

function Article() {
  return (
    <ArticleLayout slug="meet-our-proprietor">
      <div className="prose-school">
        <p className="lede">
          {proprietor.name}, {proprietor.role}, is a trained teacher for whom raising young minds
          is a passion.
        </p>
        <p>
          She holds a Bachelor of Arts and a Master of Arts in English, and a Postgraduate Diploma
          in Education.
        </p>
        <p>
          She has worked across the ranks of education in Akwa Ibom State: teaching in schools,
          then working in the Ministry of Education and at the State Universal Basic Education
          Board before moving to other ministries.
        </p>
        <p>
          The Akwa Ibom State Government appointed her Permanent Secretary and posted her to the
          Ministry of Women Affairs and Child Development, a role that let her work with children
          outside the classroom. She was later posted to the Deputy Governor’s Office as Permanent
          Secretary and Chief of Staff to the Deputy Governor, where she served until retirement.
        </p>
        <p>
          Her passion for education led her to establish All Grace Schools. She is the author of
          three books used in educational institutions in the State.
        </p>
      </div>
      <ReviewNote item="proprietor" className="mt-10" />
    </ArticleLayout>
  );
}
