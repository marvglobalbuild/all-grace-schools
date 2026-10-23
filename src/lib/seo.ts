import { SITE_URL } from "@/content/school";

type PageMeta = { title: string; description: string; path: string; type?: "website" | "article" };

/** Builds the head() payload for a content route: title, description, OG, Twitter and canonical. */
export function pageHead({ title, description, path, type = "website" }: PageMeta) {
  const url = `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:site_name", content: "All Grace Schools" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
