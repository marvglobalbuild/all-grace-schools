import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { ReviewNote } from "@/components/site/ReviewNote";
import { AdmissionsActions, PageIntro } from "@/components/site/blocks";
import { admissions, campus, school, whatsapp } from "@/content/school";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contacts")({
  head: () =>
    pageHead({
      title: "Contact All Grace Schools — address, phone and directions | Uyo",
      description:
        "Find All Grace Schools in Shelter Afrique Estate, Uyo. Admissions phone and email, office hours, WhatsApp contacts and a map.",
      path: "/contacts",
    }),
  component: Contacts,
});

const { lat, lng } = campus.map;
const mapEmbed = `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`;
const directions = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

function Contacts() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Visit, call or write to us."
        lede={`The admissions desk is open ${admissions.deskHours.toLowerCase()}. The school office is open ${campus.officeHours}.`}
      >
        <AdmissionsActions />
      </PageIntro>

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Reveal className="rounded-md border bg-card p-7 md:p-8">
            <p className="eyebrow text-tartan">Admissions</p>
            <h2 className="mt-4 text-2xl">{admissions.officer}</h2>
            <p className="text-[14.5px] text-muted-foreground">{admissions.role}</p>
            <ul className="mt-6 space-y-3 text-[15.5px]">
              <li>
                <a href={admissions.phone.tel} className="inline-flex items-center gap-3 link-underline">
                  <Phone className="size-4 text-crest" aria-hidden /> {admissions.phone.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${admissions.email}`} className="inline-flex items-center gap-3 link-underline">
                  <Mail className="size-4 text-crest" aria-hidden /> {admissions.email}
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal className="rounded-md border bg-card p-7 md:p-8" delay={60}>
            <p className="eyebrow text-tartan">School office</p>
            <h2 className="mt-4 text-2xl">General enquiries</h2>
            <p className="text-[14.5px] text-muted-foreground">{campus.officeHours}</p>
            <ul className="mt-6 space-y-3 text-[15.5px]">
              {campus.officePhones.map((p) => (
                <li key={p.tel}>
                  <a href={p.tel} className="inline-flex items-center gap-3 link-underline">
                    <Phone className="size-4 text-crest" aria-hidden /> {p.display}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${campus.generalEmail}`} className="inline-flex items-center gap-3 link-underline">
                  <Mail className="size-4 text-crest" aria-hidden /> {campus.generalEmail}
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal className="rounded-md border bg-card p-7 md:col-span-2 md:p-8 lg:col-span-1" delay={120}>
            <p className="eyebrow text-tartan">WhatsApp</p>
            <h2 className="mt-4 text-2xl">Message a representative</h2>
            <ul className="mt-6 divide-y border-y">
              {whatsapp.map((w) => (
                <li key={w.name}>
                  <a
                    href={w.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 py-3.5 hover:text-crest"
                  >
                    <span>
                      <span className="block font-medium">{w.name}</span>
                      <span className="text-[13.5px] text-muted-foreground">{w.role}</span>
                    </span>
                    <MessageCircle className="size-4 shrink-0 text-shield" aria-hidden />
                    <span className="sr-only">(opens WhatsApp in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="container-page mt-6 grid gap-4 md:grid-cols-2">
          <ReviewNote item="phones" />
          <ReviewNote item="supervisor" />
        </div>
      </section>

      <section className="bg-card">
        <div className="container-page grid gap-12 py-16 md:py-24 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Find us</p>
            <h2 className="display-md mt-4">Two gates, one campus in Uyo.</h2>
            <ul className="mt-8 space-y-6">
              {campus.gates.map((g) => (
                <li key={g.label} className="flex gap-4">
                  <MapPin className="mt-1 size-5 shrink-0 text-tartan" aria-hidden />
                  <span>
                    <span className="block font-semibold">{g.label}</span>
                    <span className="text-[15.5px] text-muted-foreground">{g.address}</span>
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={directions}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-crest link-underline"
            >
              Get directions in Google Maps <ArrowUpRight className="size-4" aria-hidden />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <ReviewNote item="address" className="mt-8" />
          </Reveal>
          <Reveal className="lg:col-span-8" delay={80}>
            <div className="overflow-hidden rounded-md border">
              <iframe
                title={`Map showing the location of ${school.name}`}
                src={mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-[4/3] w-full md:aspect-[16/10]"
              />
            </div>
            <p className="mt-3 text-[13px] text-muted-foreground">
              Map location as shown on the school’s current Contacts page.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
