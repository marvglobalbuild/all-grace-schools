import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { NAV_LINKS } from "@/components/site/nav";
import { admissionRules, admissions, formatNaira, stages } from "@/content/school";

const router = () => createRouter({ routeTree, context: { queryClient: new QueryClient() } });

describe("Admissions rules published by the school", () => {
  it("registration form costs ₦10,000", () => {
    expect(admissionRules.registrationFeeNaira).toBe(10000);
    expect(formatNaira(admissionRules.registrationFeeNaira)).toBe("₦10,000");
  });

  it("requires two passport photographs", () => {
    expect(admissionRules.passportPhotos).toBe(2);
  });

  it("admissions desk opens 9 a.m. to 3 p.m. on weekdays", () => {
    expect(admissionRules.deskOpenHour).toBe(9);
    expect(admissionRules.deskCloseHour).toBe(15);
    expect(admissionRules.deskDays).toBe("weekdays");
  });

  it("admissions contact uses the Admission Officer's published number", () => {
    expect(admissions.phone.tel).toBe("tel:+2347089625023");
    expect(admissions.email).toBe("admin@allgraceschools.com");
  });

  it("offers only the four learning stages listed on the Admission Process page", () => {
    expect(stages.map((s) => s.ages)).toEqual([
      "1 year – 2 years",
      "3 – 5+ years",
      "6 – 7+ years",
      "8 – 10 years",
    ]);
  });
});

describe("Site routes", () => {
  it.each(NAV_LINKS.map((l) => l.to))("navigation link %s resolves to a page", (to) => {
    const matches = router().matchRoutes(to);
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it.each(["/about", "/admissions", "/contact", "/events", "/media", "/news-list-vc"])(
    "legacy URL %s still has a route (redirect)",
    (to) => {
      const matches = router().matchRoutes(to);
      expect(matches.at(-1)?.routeId).toBe(to);
    },
  );
});
