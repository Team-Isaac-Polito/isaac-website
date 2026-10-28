import type { ReactNode } from "react";

interface IsaacButtonProps {
  text: string;
  href?: string;
  icon?: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

function ButtonContent({
  text,
  icon,
}: Pick<IsaacButtonProps, "text" | "icon">) {
  return (
    <>
      {icon && (
        <span aria-hidden="true" className="isaac-cta-leading-icon">
          {icon}
        </span>
      )}
      <span className="isaac-cta-label">{text.trim()}</span>
      <span aria-hidden="true" className="isaac-cta-arrow">
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12h13m-5-5 5 5-5 5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </span>
    </>
  );
}

export function IsaacButton({
  text,
  href,
  icon,
  className = "",
  target,
  rel,
}: IsaacButtonProps) {
  const buttonClassName = `isaac-cta ${className}`.trim();

  if (href) {
    return (
      <a className={buttonClassName} href={href} target={target} rel={rel}>
        <ButtonContent text={text} icon={icon} />
      </a>
    );
  }

  return (
    <button className={buttonClassName} type="button">
      <ButtonContent text={text} icon={icon} />
    </button>
  );
}