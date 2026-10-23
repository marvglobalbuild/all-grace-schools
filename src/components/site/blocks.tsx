import { Link } from "@tanstack/react-router";
import { Mail, Phone, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { admissions } from "@/content/school";
import type { Photo } from "@/content/images";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

/** Inner-page opening: eyebrow, serif title, lede and an optional photo. */
export function PageIntro({
  eyebrow,
  title,
  lede,
  photo,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  photo?: Photo;
  children?: ReactNode;
}) {
  return (
    <section className="border-b">
      <div
        className={cn(
          "container-page grid gap-10 pb-14 pt-12 md:pb-20 md:pt-20",
          photo && "lg:grid-cols-12 lg:items-end",
        )}
      >
        <div className={cn(photo ? "lg:col-span-7" : "max-w-3xl")}>
          <p className="eyebrow animate-rise">{eyebrow}</p>
          <h1 className="display-xl mt-5 animate-rise" style={{ ["--delay" as string]: "60ms" }}>
            {title}
          </h1>
          {lede && (
            <p
              className="lede mt-6 max-w-2xl animate-rise"
              style={{ ["--delay" as string]: "120ms" }}
            >
              {lede}
            </p>
          )}
          {children && (
            <div className="mt-8 animate-rise" style={{ ["--delay" as string]: "180ms" }}>
              {children}
            </div>
          )}
        </div>
        {photo && (
          <div className="overflow-hidden rounded-md lg:col-span-5">
            <img
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              fetchPriority="high"
              className="aspect-[4/3] w-full object-cover animate-photo"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-2xl", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display-lg mt-4">{title}</h2>
      {children && <div className="lede mt-5">{children}</div>}
    </Reveal>
  );
}

/** Verified admissions contact actions (phone + email). */
export function AdmissionsActions({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild variant={tone === "dark" ? "paper" : "admissions"} size="lg">
        <a href={admissions.phone.tel} data-event="admissions_call">
          <Phone aria-hidden /> Call {admissions.phone.display}
        </a>
      </Button>
      <Button asChild variant={tone === "dark" ? "line-light" : "line"} size="lg">
        <a href={`mailto:${admissions.email}?subject=Admission%20enquiry`} data-event="admissions_email">
          <Mail aria-hidden /> Email admissions
        </a>
      </Button>
    </div>
  );
}

/** Closing conversion band used across pages. */
export function AdmissionsBand({
  title = "Ready to talk about your child’s place?",
}: {
  title?: string;
}) {
  return (
    <section className="bg-crest-deep text-ink-foreground">
      <div className="container-page grid gap-10 py-16 md:py-24 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow text-ink-foreground/60">Admissions</p>
          <h2 className="display-lg mt-4">{title}</h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-foreground/75">
            Speak with {admissions.officer}, our {admissions.role}, or visit the admissions desk
            ({admissions.deskHours.toLowerCase()}) to arrange your child’s interview with the Head
            of School.
          </p>
        </Reveal>
        <Reveal className="lg:col-span-5 lg:justify-self-end" delay={100}>
          <AdmissionsActions tone="dark" />
        </Reveal>
      </div>
    </section>
  );
}

export function TextLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 text-[15px] font-semibold text-crest"
    >
      <span className="link-underline">{children}</span>
      <ArrowRight
        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden
      />
    </Link>
  );
}

export function Figure({
  photo,
  className,
  imgClassName,
  caption,
  priority,
}: {
  photo: Photo;
  className?: string;
  imgClassName?: string;
  caption?: string;
  priority?: boolean;
}) {
  return (
    <figure className={cn("group overflow-hidden", className)}>
      <div className="h-full overflow-hidden rounded-md bg-paper-deep">
        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={cn(
            "h-full w-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-soft)] group-hover:scale-[1.03]",
            imgClassName,
          )}
        />
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-[13px] text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  );
}
