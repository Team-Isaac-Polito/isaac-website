import type { EventEdition } from "../team-events";

interface EventGallerySummaryProps {
  editions: EventEdition[];
  editionCount: number;
  photoCount: number;
}

export function EventGallerySummary({
  editions,
  editionCount,
  photoCount,
}: EventGallerySummaryProps) {
  return (
    <>
      <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#478d8d]">
            I ricordi, anno dopo anno
          </p>
          <h2
            id="gallery-title"
            className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl"
          >
            Ogni edizione, una nuova storia.
          </h2>
        </div>
        <div className="flex gap-3">
          <StatCard value={editionCount} label="edizioni" />
          <StatCard value={photoCount} label="momenti" />
        </div>
      </div>
      <nav aria-label="Vai a un'edizione" className="mb-12 flex flex-wrap gap-3">
        {editions.map((edition) => (
          <a
            key={edition.year}
            href={`#edition-${edition.year}`}
            className="rounded-full border border-[#1b1b3a]/15 px-5 py-2 text-sm font-semibold transition-colors hover:border-[#478d8d] hover:bg-[#478d8d] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#478d8d]"
          >
            {edition.year}
          </a>
        ))}
      </nav>
    </>
  );
}

function StatCard({ value, label }: { value: number; label: string }) {
  return (
    <div className="rounded-2xl border border-[#1b1b3a]/10 bg-white px-5 py-4 shadow-sm">
      <span className="block text-2xl font-extrabold">{value}</span>
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#676778]">
        {label}
      </span>
    </div>
  );
}
