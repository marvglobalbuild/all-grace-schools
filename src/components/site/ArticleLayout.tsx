import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

import { photos, type Photo } from "@/content/images";
import { articles, formatDate, type ArticleSlug } from "@/content/school";
import { AdmissionsBand } from "./blocks";

export const articleCover: Record<ArticleSlug, Photo> = {
  "why-you-should-choose-all-grace-schools": photos.pupilsFirstDay,
  "how-to-enroll-your-child-in-a-class": photos.classroomTeacher,
  "meet-our-proprietor": photos.proprietor,
};

export function ArticleLayout({ slug, children }: { slug: ArticleSlug; children: ReactNode }) {
  const a = articles.find((x) => x.slug === slug)!;
  const cover = articleCover[slug];
  return (
    <>
      <article>
        <header className="container-page max-w-4xl pb-10 pt-12 md:pt-20">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-muted-foreground hover:text-ink"
          >
            <ArrowLeft className="size-4" aria-hidden /> All news
          </Link>
          <p className="mt-8 text-[13px] text-muted-foreground animate-rise">
            <span className="font-semibold text-tartan">{a.category}</span> ·{" "}
            <time dateTime={a.date}>{formatDate(a.date)}</time>
          </p>
          <h1 className="display-lg mt-4 animate-rise" style={{ ["--delay" as string]: "60ms" }}>
            {a.title}
          </h1>
        </header>
        <div className="container-page max-w-5xl">
          <img
            src={cover.src}
            alt={cover.alt}
            width={cover.width}
            height={cover.height}
            fetchPriority="high"
            className="aspect-[16/9] w-full rounded-md object-cover object-[50%_35%] animate-photo"
          />
        </div>
        <div className="container-page max-w-3xl py-14 md:py-20">{children}</div>
      </article>
      <AdmissionsBand />
    </>
  );
}
