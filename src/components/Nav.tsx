"use client";

import { useState } from "react";
import { NavButton } from "./NavButton";
import { usePathname } from "next/navigation";

type NavProps = Readonly<{
  navButtons: Array<{ id: number; href: string; content: React.JSX.Element }>;
}> &
  React.ComponentPropsWithRef<"nav">;

export const Nav = ({ className, navButtons }: NavProps) => {
  const pathname = usePathname();
  const defaultCurrent =
    navButtons.find((navButton) => pathname.includes(navButton.href))?.id || 0;
  const [activeNav, setActiveNav] = useState(defaultCurrent);

  // Function to handle button click and update state
  const handleButtonClick = (navButtonId: number) => {
    console.log("Current nav : ", activeNav);
    console.log("New nav : ", navButtonId);
    setActiveNav(navButtonId);
  };
  return (
    <nav className={className}>
      {navButtons.map(({ id, href, content }) => (
        <NavButton
          className={activeNav === id ? "bg-tertiary" : undefined}
          key={id}
          href={href}
          onClick={() => handleButtonClick(id)}
        >
          {content}
        </NavButton>
      ))}
    </nav>
  );
};
