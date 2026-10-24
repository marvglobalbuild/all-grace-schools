import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { PageIntro } from "@/components/site/blocks";
import { articleCover } from "@/components/site/ArticleLayout";
import { articles, formatDate } from "@/content/school";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/news")({
  head: () =>
    pageHead({
      title: "News and updates | All Grace Schools, Uyo",
      description:
        "Articles from All Grace Schools: why parents choose the school, how to enrol your child, and an introduction to our Executive Director.",
      path: "/news",
    }),
  component: News,
});

function News() {
  const [lead, ...rest] = articles;
  return (
    <>
      <PageIntro
        eyebrow="News"
        title="Notes from All Grace Schools."
        lede="Articles published by the school. For the latest events and activities, follow the school on Facebook."
      />
      <section className="py-16 md:py-24">
        <div className="container-page">
          <Reveal>
            <Link
              to={`/${lead.slug}`}
              className="group grid gap-8 lg:grid-cols-12 lg:items-center card-motion rounded-xl p-3 -m-3 hover:bg-card/50"
            >
              <div className="overflow-hidden rounded-md lg:col-span-7">
                <img
                  src={articleCover[lead.slug].src}
                  alt=""
                  width={articleCover[lead.slug].width}
                  height={articleCover[lead.slug].height}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                />
              </div>
              <div className="lg:col-span-5">
                <p className="text-[13px] text-muted-foreground">
                  <span className="font-semibold text-tartan">{lead.category}</span> ·{" "}
                  <time dateTime={lead.date}>{formatDate(lead.date)}</time>
                </p>
                <h2 className="display-md mt-3 group-hover:text-crest">{lead.title}</h2>
                <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground">{lead.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-crest">
                  Read article <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
            </Link>
          </Reveal>

          <ul className="mt-16 grid gap-10 border-t pt-12 md:grid-cols-2">
            {rest.map((a, i) => (
              <Reveal as="li" key={a.slug} delay={i * 80}>
                <Link to={`/${a.slug}`} className="group grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-6 card-motion rounded-xl p-3 -m-3 hover:bg-card/50">
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={articleCover[a.slug].src}
                      alt=""
                      width={articleCover[a.slug].width}
                      height={articleCover[a.slug].height}
                      loading="lazy"
                      className="aspect-square w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div>
                    <p className="text-[13px] text-muted-foreground">
                      <span className="font-semibold text-tartan">{a.category}</span> ·{" "}
                      <time dateTime={a.date}>{formatDate(a.date)}</time>
                    </p>
                    <h2 className="mt-2 text-2xl group-hover:text-crest">{a.title}</h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{a.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
