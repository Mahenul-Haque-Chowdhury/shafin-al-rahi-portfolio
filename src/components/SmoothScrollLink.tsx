"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type SmoothScrollLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children" | "className">;

export default function SmoothScrollLink({
  href,
  children,
  className,
  onClick,
  ...props
}: SmoothScrollLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    if (!href.startsWith("#")) return;

    const targetId = href.slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", href);
  };

  return (
    <a
      {...props}
      href={href}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
