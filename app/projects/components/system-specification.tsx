import type { systems } from "../data";

type System = (typeof systems)[number];

export function SystemSpecification({
  system,
}: {
  system: System;
}) {
  return (
    <section className="grid gap-6 border-b border-[#1b1b3a]/20 py-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:py-10">
      <div className="grid grid-cols-[3rem_1fr] gap-3">
        <span className="pt-1 font-mono text-sm text-[#478d8d]">
          {system.number}
        </span>
        <div>
          <h3 className="text-3xl font-extrabold">{system.name}</h3>
          <p className="mt-2 text-sm text-[#676778]">{system.note}</p>
        </div>
      </div>
      <dl className="divide-y divide-[#1b1b3a]/10">
        {system.details.map(([label, value]) => (
          <div
            key={label}
            className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-3 py-3 text-sm sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-4 sm:text-base"
          >
            <dt className="text-[#676778]">{label}</dt>
            <dd className="font-semibold text-[#1b1b3a]">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
