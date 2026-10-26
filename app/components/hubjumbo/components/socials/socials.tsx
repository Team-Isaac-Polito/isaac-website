import { ReactElement } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

interface SocialProps {
    name: string,
    href: string,
    icon: ReactElement
}

export function Socials() {
  const socialLinks: SocialProps[] = [
    { name: "LinkedIn", href: "https://it.linkedin.com/company/team-isaac-polito", icon: <FaLinkedin /> },
    { name: "GitHub", href: "https://github.com/Team-Isaac-Polito", icon: <FaGithub /> },
    { name: "Instagram", href: "https://www.instagram.com/team_isaac_polito/", icon: <FaInstagram /> },
  ];

  return (
    <ul className="flex my-4 flex-wrap items-center justify-center gap-4 sm:gap-6">
      {socialLinks.map((social) => (
        <li key={social.name}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-lg sm:text-xl transition-all duration-300 hover:scale-110 shadow-md backdrop-blur-sm"
          >
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}