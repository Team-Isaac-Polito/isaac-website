import type { TeamMember } from "../team_areas";
import Image from "next/image";
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { initials } from "./utils";

export function MemberCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  return (
    <article className="team-member-card group">
      <div className="team-member-photo relative aspect-[4/5] overflow-hidden bg-[#262647]">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={`Ritratto di ${member.name}`}
            fill
            sizes="(min-width: 1280px) 352px, (min-width: 768px) 40vw, 84vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div
            aria-label={`Foto non disponibile: ${member.name}`}
            role="img"
            className="isaac-pattern isaac-pattern-dark flex h-full items-center justify-center text-7xl font-black tracking-tight text-white/70"
          >
            {initials(member.name)}
          </div>
        )}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#10102a]/90 via-transparent to-[#10102a]/15"
        />
        <span className="absolute left-5 top-5 font-mono text-sm text-white/80">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="absolute inset-x-5 bottom-5">
          <h3 className="text-3xl font-extrabold leading-tight tracking-tight text-white">
            {member.name}
          </h3>
          <p className="mt-2 text-sm font-semibold uppercase leading-relaxed tracking-[0.12em] text-[#a6d9cd]">
            {member.role}
          </p>
        </div>
      </div>
      <div className="flex min-h-16 items-center justify-between border border-t-0 border-white/15 bg-white/[0.04] px-5 py-3">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
          Team Isaac
        </span>
        <div className="flex items-center gap-2">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Profilo LinkedIn di ${member.name}`}
              className="team-member-contact"
            >
              <FaLinkedinIn aria-hidden="true" />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              aria-label={`Scrivi a ${member.name}`}
              className="team-member-contact"
            >
              <FaEnvelope aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}