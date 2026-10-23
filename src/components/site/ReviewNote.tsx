import { REVIEW_ITEMS, SHOW_REVIEW_NOTES, type ReviewKey } from "@/content/school";
import { cn } from "@/lib/utils";

/** Visible placeholder for information the school still needs to confirm. */
export function ReviewNote({ item, className }: { item: ReviewKey; className?: string }) {
  if (!SHOW_REVIEW_NOTES) return null;
  return (
    <aside
      className={cn(
        "rounded-md border border-dashed border-review-foreground/40 bg-review px-4 py-3 text-[13px] leading-relaxed text-review-foreground",
        className,
      )}
      aria-label="Content awaiting confirmation from the school"
    >
      <span className="mr-2 font-semibold uppercase tracking-[0.12em] text-[11px]">To confirm</span>
      {REVIEW_ITEMS[item]}
    </aside>
  );
}
