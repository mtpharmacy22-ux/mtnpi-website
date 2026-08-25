import { ImageIcon } from "lucide-react";
import { asset } from "@/lib/asset";

/**
 * ImageSlot renders a real image when `src` is provided, and otherwise
 * renders a clearly-labelled placeholder so the client/developer knows
 * exactly which brochure photo needs to be dropped into `/public/images/...`.
 *
 * This project ships with placeholders because source images could not be
 * automatically extracted from the brochure PDF at build time. See
 * README.md → "Images still required" for the full list.
 */
export function ImageSlot({
  src,
  alt,
  label,
  path,
  className = "",
  aspect = "aspect-[4/3]",
}: {
  src?: string;
  alt: string;
  label: string;
  path: string;
  className?: string;
  aspect?: string;
}) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={asset(src)} alt={alt} className={`h-full w-full object-cover ${className}`} />;
  }

  return (
    <div
      className={`flex ${aspect} w-full flex-col items-center justify-center gap-2 border border-dashed border-forest-700/25 bg-skyline-200 px-4 text-center ${className}`}
      role="img"
      aria-label={alt}
    >
      <ImageIcon className="h-6 w-6 text-forest-700/40" strokeWidth={1.5} />
      <span className="font-mono text-[11px] uppercase tracking-wide text-forest-700/50">
        {label}
      </span>
      <span className="font-mono text-[10px] text-forest-700/35">{path}</span>
    </div>
  );
}
