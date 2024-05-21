"use client";

import { NavButton } from "./NavButton";
import { usePathname } from "next/navigation";

type NavProps = Readonly<{
  navButtons: Array<{ id: number; href: string; content: React.JSX.Element }>;
}> &
  React.ComponentPropsWithRef<"nav">;

export const Nav = ({ className, navButtons }: NavProps) => {
  const pathname = usePathname();
  return (
    <nav className={className}>
      {navButtons.map(({ id, href, content }) => (
        <NavButton active={pathname.includes(href)} key={id} href={href}>
          {content}
        </NavButton>
      ))}
    </nav>
  );
};
