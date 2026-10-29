import Image from "next/image";

interface PrototypeCardProps {
  image: string;
  imageAlt: string;
  label: string;
  name: string;
  subtitle: string;
  description: string;
  reversed?: boolean;
}

export function PrototypeCard({
  image,
  imageAlt,
  label,
  name,
  subtitle,
  description,
  reversed = false,
}: PrototypeCardProps) {
  return (
    <article className={`group ${reversed ? "md:mt-16" : ""}`}>
      <div className="project-photo relative aspect-4/3 overflow-hidden bg-[#f6f5f0]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 768px) 48vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span
          className={`absolute left-4 top-4 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] ${
            reversed ? "bg-[#478d8d] text-white" : "bg-[#f6f5f0]"
          }`}
        >
          {label}
        </span>
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4 border-b border-[#1b1b3a]/25 pb-4">
        <h3 className="text-3xl font-extrabold">{name}</h3>
        <span className="text-sm font-semibold text-[#4f4f60]">{subtitle}</span>
      </div>
      <p className="mt-4 max-w-xl leading-relaxed text-[#4f4f60]">
        {description}
      </p>
    </article>
  );
}
