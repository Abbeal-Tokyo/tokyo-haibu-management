"use client";
import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import clsx from "clsx";

type NavButtonProps = Readonly<{
  children: ReactNode;
  href: string;
  onClick?: MouseEventHandler | undefined;
}> &
  React.ComponentPropsWithRef<"button">;

export const NavButton = ({
  children,
  href,
  onClick,
  className,
}: NavButtonProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        "rounded-tl-lg rounded-bl-lg px-4 py-2 text-center text-white bg-secondary hover:scale-up-center",
        className,
      )}
    >
      {children}
    </Link>
  );
};
// px-[2%] py-[4%]
