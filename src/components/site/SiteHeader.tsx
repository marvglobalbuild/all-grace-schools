import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { brand } from "@/content/images";
import { admissions, school } from "@/content/school";
import { NAV_LINKS } from "./nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [menuTop, setMenuTop] = useState(72);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    setMenuTop(Math.max(0, headerRef.current?.getBoundingClientRect().bottom ?? 72));
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-ink-foreground"
      >
        Skip to content
      </a>

      <div className="hidden bg-ink text-ink-foreground md:block">
        <div className="container-page flex h-9 items-center justify-between text-[12.5px]">
          <p className="opacity-80">
            Crèche, Kindergarten and Primary · {school.city}, {school.state}
          </p>
          <div className="flex items-center gap-6">
            <a href={admissions.phone.tel} className="link-underline opacity-90 hover:opacity-100">
              Admissions {admissions.phone.display}
            </a>
            <a
              href={school.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 link-underline opacity-90 hover:opacity-100"
            >
              School Portal <ArrowUpRight className="size-3" aria-hidden />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>

      <header
        ref={headerRef}
        className={cn(
          "sticky top-0 z-50 border-b bg-background transition-[border-color,box-shadow] duration-300",
          scrolled ? "border-border shadow-[0_1px_0_0_var(--border)]" : "border-transparent",
        )}
      >
        <div className="container-page flex h-[72px] items-center justify-between gap-6">
          <Link to="/" className="shrink-0" aria-label="All Grace Schools — home">
            <img
              src={brand.logo.src}
              alt="All Grace Schools"
              width={brand.logo.width}
              height={brand.logo.height}
              className="h-10 w-auto md:h-11"
            />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="relative rounded-md px-3 py-2 text-[14.5px] font-medium text-ink/75 transition-colors hover:text-ink data-[status=active]:text-ink"
                    activeProps={{ "aria-current": "page" }}
                  >
                    {({ isActive }: { isActive: boolean }) => (
                      <>
                        {l.label}
                        <span
                          aria-hidden
                          className={cn(
                            "absolute inset-x-3 -bottom-0.5 h-[2px] origin-left bg-tartan transition-transform duration-300",
                            isActive ? "scale-x-100" : "scale-x-0",
                          )}
                        />
                      </>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="admissions" className="hidden sm:inline-flex">
              <Link to="/admission-process" hash="contact-admissions">
                Contact Admissions
              </Link>
            </Button>
            <button
              ref={toggleRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-ink hover:bg-accent lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          hidden={!open}
          style={{ top: menuTop }}
          className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto bg-background lg:hidden"
        >
          <nav aria-label="Mobile" className="container-page flex min-h-full flex-col py-6">
            <ul className="divide-y divide-border border-y">
              {NAV_LINKS.map((l, i) => (
                <li
                  key={l.to}
                  className="animate-rise"
                  style={{ ["--delay" as string]: `${i * 40}ms` }}
                >
                  <Link
                    to={l.to}
                    className="flex items-center justify-between py-4 font-display text-2xl text-ink"
                    activeProps={{ className: "text-crest", "aria-current": "page" }}
                  >
                    {l.label}
                    <ArrowUpRight className="size-5 rotate-45 text-ink/40" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-3">
              <Button asChild variant="admissions" size="lg">
                <Link to="/admission-process" hash="contact-admissions">
                  Contact Admissions
                </Link>
              </Button>
              <Button asChild variant="line" size="lg">
                <a href={admissions.phone.tel}>
                  <Phone aria-hidden /> Call {admissions.phone.display}
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href={school.portalUrl} target="_blank" rel="noopener noreferrer">
                  School Portal <ArrowUpRight aria-hidden />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
