"use client";
import Link from "next/link";
import type { ReactNode } from "react";
import clsx from "clsx";

type NavButtonProps = Readonly<{
  active: boolean;
  children: ReactNode;
  href: string;
}> &
  React.ComponentPropsWithRef<"button">;

export const NavButton = ({
  active = false,
  children,
  href,
  className,
}: NavButtonProps) => (
  <Link
    href={href}
    className={clsx(`select-button !rounded-r-none ${className}`, {
      active: active,
    })}
  >
    {children}
  </Link>
);
