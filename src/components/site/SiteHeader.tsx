import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone, ArrowUpRight, ArrowRight } from "lucide-react";

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
            Play Group, Kindergarten and Grade School · {school.city}, {school.state}
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
          scrolled ? "border-border shadow-[0_1px_3px_0_rgba(0,0,0,0.05)]" : "border-border/50",
        )}
      >
        <div className="container-page flex h-[74px] sm:h-[80px] md:h-[84px] items-center justify-between gap-3 sm:gap-6">
          <Link to="/" className="shrink-0" aria-label="All Grace Schools — home">
            <img
              src={brand.logo.src}
              alt="All Grace Schools"
              width={brand.logo.width}
              height={brand.logo.height}
              className="h-11 sm:h-12 md:h-13 lg:h-14 w-auto max-h-[56px] object-contain transition-transform"
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

          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Mobile WhatsApp Quick Circle (modeled after reference) */}
            <a
              href={`https://wa.me/2347089625023?text=${encodeURIComponent("Hello All Grace Schools, I would like to inquire about admissions.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-9 items-center justify-center rounded-full bg-[#25D366]/15 text-[#0b8043] border border-[#25D366]/30 transition-transform active:scale-95 lg:hidden"
              aria-label="Chat on WhatsApp"
            >
              <svg className="size-4.5 fill-[#0b8043]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z" />
              </svg>
            </a>

            {/* Mobile Apply Pill Action (matching red pill toggle in screenshot) */}
            <Link
              to="/admission-process"
              hash="contact-admissions"
              className="flex items-center gap-1 rounded-full bg-[#C8161D] px-3 py-1.5 text-[11.5px] font-bold text-white shadow-xs transition-transform active:scale-95 lg:hidden"
            >
              <span>Apply</span>
              <ArrowRight className="size-3" />
            </Link>

            {/* Desktop Admissions Button */}
            <Button asChild variant="admissions" className="hidden lg:inline-flex">
              <Link to="/admission-process" hash="contact-admissions">
                Contact Admissions
              </Link>
            </Button>

            {/* Mobile Menu Button (modeled on screenshot's clean rounded box) */}
            <button
              ref={toggleRef}
              type="button"
              className="flex size-9 sm:size-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-ink shadow-xs transition-colors hover:bg-gray-50 active:scale-95 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
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
