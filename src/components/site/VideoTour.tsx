import { useState } from "react";
import { Play, X, ExternalLink } from "lucide-react";
import { school } from "@/content/school";
import { photos } from "@/content/images";
import { cn } from "@/lib/utils";

export function VideoTourSection({ className }: { className?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className={cn("py-20 md:py-28 bg-card border-y", className)}>
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Virtual Campus Experience</p>
          <h2 className="display-lg mt-4">
            See All Grace Schools in action.
          </h2>
          <p className="lede mt-4">
            Take an authentic video tour of our campus, facilities, and classroom lessons in Uyo, Akwa Ibom State.
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-4xl overflow-hidden rounded-2xl border-4 border-background bg-ink shadow-photo">
          {isPlaying ? (
            <div className="relative aspect-video w-full bg-black">
              <video
                src="/media/school-video.mp4"
                controls
                autoPlay
                playsInline
                poster="/media/hero-campus.jpeg"
                className="h-full w-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <div className="relative aspect-video w-full overflow-hidden group">
              <img
                src={photos.campus.src}
                alt="All Grace Schools Campus Tour Video Preview"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent flex flex-col justify-end p-6 md:p-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center rounded-full bg-tartan/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                      Official Tour
                    </span>
                    <h3 className="mt-2 font-display text-xl md:text-2xl text-white">
                      All Grace Schools Video Presentation
                    </h3>
                    <p className="mt-1 text-sm text-white/80 hidden sm:block">
                      Discover our learning spaces, pupils, and educational methodology.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    className="flex size-16 md:size-20 shrink-0 items-center justify-center rounded-full bg-tartan text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-white hover:text-crest focus-visible:outline-2 focus-visible:outline-white cursor-pointer"
                    aria-label="Play video tour"
                  >
                    <Play className="size-7 md:size-9 fill-current ml-1" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="/media/school-video.mp4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-crest transition-colors"
          >
            Open video in full screen <ExternalLink className="size-3" />
          </a>
        </div>
      </div>
    </section>
  );
}

/** Modal dialog for viewing video from buttons anywhere on the site */
export function VideoModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="All Grace Schools Video Tour"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-rise"
    >
      <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl border border-white/20">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black/90 transition cursor-pointer"
          aria-label="Close video"
        >
          <X className="size-6" />
        </button>
        <div className="aspect-video w-full bg-black">
          <video
            src="/media/school-video.mp4"
            controls
            autoPlay
            playsInline
            poster="/media/hero-campus.jpeg"
            className="h-full w-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
