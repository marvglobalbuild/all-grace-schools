<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Project rules

- All school facts live in `src/content/school.ts`, each traceable to a page on allgraceschools.com; pages import from there instead of hard-coding facts — keeps content auditable against the official source.
- Unconfirmed or contradictory facts go in `REVIEW_ITEMS` and render via `<ReviewNote>`; `SHOW_REVIEW_NOTES` hides them all once the school confirms — never silently resolve a conflict.
- School photos are the official site's own images, optimised to WebP and stored as Lovable asset pointers in `src/assets/*.asset.json`, mapped in `src/content/images.ts` — no stock or generated images presented as the school.
- Legacy WordPress URLs (/about, /admissions, /contact, /events, /media, /news-list-vc) are kept as 301 redirect routes; existing URLs (/about-our-school, /admission-process, /academics, /contacts, article slugs) are preserved — protects existing links and search visibility.
- No backend, database or inquiry form: admissions conversion uses the published phone, email and WhatsApp links only — a form would need verified delivery to the school.
- Scroll reveal is CSS + one IntersectionObserver (`Reveal`); content is visible without JS and under reduced motion — no animation library.
- The sticky header must not use backdrop-filter: it makes the fixed mobile menu position relative to the header and breaks it.
