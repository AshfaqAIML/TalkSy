/**
 * Internal brand-asset renderers — exact-size canvases screenshotted into
 * /public by scripts/generate-brand-assets.sh (OG image, manifest icons,
 * apple touch icon). All four routes are noindex and excluded from the
 * sitemap; they exist so the PNGs are generated with the real brand
 * fonts (Fraunces / Plus Jakarta Sans) instead of hand-editing bitmaps.
 */

export function OgImageCanvas() {
  return (
    <div
      className="relative flex h-[630px] w-[1200px] flex-col justify-between overflow-hidden bg-[#062b28] p-16 text-[#e8fbf7]"
      style={{
        backgroundImage: "radial-gradient(rgba(125,210,197,0.22) 1px, transparent 1px)",
        backgroundSize: "26px 26px",
      }}
    >
      {/* Rising trail motif — first words becoming a conversation */}
      <div aria-hidden="true" className="absolute bottom-24 right-20 flex items-end gap-4">
        <span className="h-4 w-4 rounded-full bg-[#0c443f] ring-2 ring-[#7dd2c5]/40" />
        <span className="mb-4 h-6 w-6 rounded-full bg-[#7dd2c5]/60" />
        <span className="mb-10 h-8 w-8 rounded-full bg-[#7dd2c5]" />
        <span className="mb-16 flex h-16 w-16 items-center justify-center rounded-full bg-[#e8b44b]">
          <span className="h-5 w-5 rounded-full bg-[#062b28]" />
        </span>
      </div>

      <div className="flex items-center gap-6">
        <svg viewBox="0 0 64 64" width="96" height="96" fill="none" aria-hidden="true">
          <rect width="64" height="64" rx="17" className="fill-[#177e76]" />
          <path d="M17 50 C 15 55 11 58 5 59.5 C 12 61.5 19 59 23 54.5 Z" className="fill-[#177e76]" />
          <circle cx="19" cy="44" r="3.2" className="fill-[#e8fbf7]" />
          <circle cx="28.5" cy="36" r="3.2" className="fill-[#e8fbf7]" />
          <circle cx="38" cy="27.5" r="3.2" className="fill-[#e8fbf7]" opacity="0.9" />
          <circle cx="46.5" cy="18" r="6.6" className="fill-[#e8b44b]" />
          <circle cx="46.5" cy="18" r="2.4" className="fill-[#177e76]" />
        </svg>
        <span className="font-display text-[72px] font-semibold leading-none tracking-tight text-[#e8fbf7]">
          TalkSy
          <span className="ml-1 inline-block h-[16px] w-[16px] rounded-full bg-[#e8b44b]" aria-hidden="true" />
        </span>
      </div>

      <div>
        <p className="max-w-[760px] font-display text-[44px] font-medium leading-[1.15] text-[#e8fbf7]">
          From your first English word to confident communication.
        </p>
        <p className="mt-6 text-[26px] text-[#7dd2c5]">
          Structured CEFR-aligned courses · Listening · Speaking · Reading · Writing
        </p>
      </div>
    </div>
  );
}

export function IconCanvas({ size }: { size: number }) {
  return (
    // The page behind the mark shares the tile colour, so the mark's
    // rounded corners blend into a full-bleed square (maskable-safe).
    <div className="flex h-screen w-screen items-center justify-center bg-[#177e76]">
      <svg viewBox="0 0 64 64" width={size} height={size} fill="none" aria-hidden="true">
        <rect width="64" height="64" rx="17" className="fill-[#177e76]" />
        <path d="M17 50 C 15 55 11 58 5 59.5 C 12 61.5 19 59 23 54.5 Z" className="fill-[#177e76]" />
        <circle cx="19" cy="44" r="3.2" className="fill-[#e8fbf7]" />
        <circle cx="28.5" cy="36" r="3.2" className="fill-[#e8fbf7]" />
        <circle cx="38" cy="27.5" r="3.2" className="fill-[#e8fbf7]" opacity="0.9" />
        <circle cx="46.5" cy="18" r="6.6" className="fill-[#e8b44b]" />
        <circle cx="46.5" cy="18" r="2.4" className="fill-[#177e76]" />
      </svg>
    </div>
  );
}
