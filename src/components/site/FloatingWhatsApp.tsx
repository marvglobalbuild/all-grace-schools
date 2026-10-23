import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, ExternalLink, Clock, ShieldCheck } from "lucide-react";
import { admissions, whatsapp, school } from "@/content/school";

// Authentic WhatsApp SVG mark
function WhatsAppIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="0"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function handleClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleToggle = () => {
    setOpen((prev) => !prev);
    setHasUnread(false);
  };

  const primaryMessage = encodeURIComponent(
    `Hello, I would like to inquire about enrolling my child at ${school.name}.`
  );

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end print:hidden">
      {/* Popover Card */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Chat with All Grace Schools"
          className="mb-3 w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden rounded-2xl border border-ink/15 bg-card shadow-[0_20px_45px_-12px_rgba(10,26,64,0.35)] animate-rise"
          style={{ ["--delay" as string]: "0ms" }}
        >
          {/* Header */}
          <div className="bg-[#0b8043] px-5 py-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-full bg-white/20">
                  <WhatsAppIcon className="size-5 fill-white" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold leading-tight text-white">
                    {school.name}
                  </h3>
                  <p className="flex items-center gap-1.5 text-xs text-white/85">
                    <span className="size-2 rounded-full bg-emerald-300 animate-pulse" />
                    Online · {admissions.deskHours}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-1 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                aria-label="Close WhatsApp chat"
              >
                <X className="size-5" />
              </button>
            </div>
            <p className="mt-2.5 text-[12.5px] leading-relaxed text-white/90">
              Welcome to our Admissions Office. Start a chat with our admissions team on WhatsApp.
            </p>
          </div>

          {/* Body */}
          <div className="bg-[#efeae2] p-4">
            {/* Admissions Officer Primary Card */}
            <div className="rounded-xl bg-card p-3.5 shadow-sm border border-black/5">
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-800">
                    <ShieldCheck className="size-3" /> Recommended
                  </span>
                  <h4 className="mt-1 font-display text-base font-semibold text-ink">
                    {admissions.officer}
                  </h4>
                  <p className="text-xs text-muted-foreground">{admissions.role}</p>
                </div>
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <WhatsAppIcon className="size-4 fill-emerald-700" />
                </div>
              </div>
              <a
                href={`https://wa.me/2347089625023?text=${primaryMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-xs font-bold text-white shadow transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <WhatsAppIcon className="size-4 fill-white" /> Chat with Admissions
              </a>
            </div>

            {/* Other Contacts Accordion / Quick List */}
            <div className="mt-3 space-y-2">
              <p className="px-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Other School Contacts
              </p>
              {whatsapp.map((contact) => (
                <a
                  key={contact.name}
                  href={`${contact.href}?text=${encodeURIComponent(`Hello ${contact.name}, I am reaching out from the All Grace Schools website.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl bg-card px-3.5 py-2.5 text-xs text-ink shadow-sm transition hover:bg-white/80 hover:shadow"
                >
                  <div>
                    <span className="font-semibold text-ink">{contact.name}</span>
                    <span className="ml-1.5 text-[11px] text-muted-foreground">({contact.role})</span>
                    <p className="text-[11px] text-muted-foreground/80">{contact.number}</p>
                  </div>
                  <ExternalLink className="size-3.5 text-muted-foreground" />
                </a>
              ))}
            </div>

            {/* Fast Quick Links */}
            <div className="mt-3 rounded-lg border border-border/60 bg-white/60 p-2.5 text-[11.5px] text-muted-foreground">
              <div className="flex items-center gap-1.5 font-medium text-ink">
                <Clock className="size-3 text-muted-foreground" /> Admissions Desk Hours:
              </div>
              <p className="mt-0.5 text-ink/75">{admissions.deskHours}</p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={open}
        aria-haspopup="dialog"
        className="group relative flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-[0_8px_25px_-4px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 hover:bg-[#20ba59] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
        aria-label="Chat with Admissions on WhatsApp"
      >
        <div className="relative">
          <WhatsAppIcon className="size-6 fill-white" />
          {hasUnread && (
            <span className="absolute -top-1 -right-1 flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex size-3 rounded-full bg-amber-400" />
            </span>
          )}
        </div>
        <span className="font-sans text-sm font-semibold tracking-wide text-white drop-shadow-sm">
          Chat on WhatsApp
        </span>
      </button>
    </div>
  );
}
