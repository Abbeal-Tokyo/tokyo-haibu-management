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
    className={clsx(
      "rounded-tl-lg rounded-bl-lg px-4 py-2 text-center text-white bg-secondary hover:scale-up-center",
      { "bg-tertiary": active },
      className,
    )}
  >
    {children}
  </Link>
);
