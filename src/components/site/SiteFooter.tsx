import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { brand } from "@/content/images";
import { admissions, campus, school } from "@/content/school";
import { NAV_LINKS } from "./nav";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="stripe-tartan h-2" aria-hidden />
      <div className="container-page grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <span className="rounded-md bg-paper p-1.5">
              <img
                src={brand.crest.src}
                alt=""
                width={48}
                height={48}
                className="size-12"
                loading="lazy"
              />
            </span>
            <span className="font-display text-2xl">All Grace Schools</span>
          </div>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink-foreground/70">
            A Christian crèche, nursery and primary school in Uyo, Akwa Ibom State. Founded{" "}
            {school.founded.label}.
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-2">
          <h2 className="eyebrow text-ink-foreground/50">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            <li>
              <Link to="/" className="link-underline">
                Home
              </Link>
            </li>
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="link-underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h2 className="eyebrow text-ink-foreground/50">Admissions</h2>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            <li className="text-ink-foreground/70">
              {admissions.officer}, {admissions.role}
            </li>
            <li>
              <a href={admissions.phone.tel} className="link-underline">
                {admissions.phone.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${admissions.email}`} className="link-underline">
                {admissions.email}
              </a>
            </li>
            <li className="text-ink-foreground/70">Admissions desk: {admissions.deskHours}</li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="eyebrow text-ink-foreground/50">Visit</h2>
          <ul className="mt-4 space-y-3 text-[15px] text-ink-foreground/80">
            {campus.gates.map((g) => (
              <li key={g.label}>
                <span className="font-semibold text-ink-foreground">{g.label}:</span> {g.address}
              </li>
            ))}
            <li>{campus.officeHours}</li>
            <li>
              <a href={`mailto:${campus.generalEmail}`} className="link-underline">
                {campus.generalEmail}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="container-page flex flex-col gap-3 py-6 text-[13px] text-ink-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} All Grace Schools, Uyo.</p>
          <div className="flex gap-5">
            <a
              href={school.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 link-underline"
            >
              Facebook <ArrowUpRight className="size-3" aria-hidden />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href={school.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 link-underline"
            >
              School Portal <ArrowUpRight className="size-3" aria-hidden />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
