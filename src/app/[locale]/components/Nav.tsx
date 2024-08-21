"use client";

import Button from "@/components/Button";
import { usePathname, useRouter } from "next/navigation";

type NavProps = Readonly<{
  navButtons: Array<{ id: number; href: string; content: React.JSX.Element }>;
}> &
  React.ComponentPropsWithRef<"nav">;

export const Nav = ({ className, navButtons }: NavProps) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className={className}>
      {navButtons.map(({ id, href, content }) => (
        <Button
          key={id}
          className="!rounded-r-none"
          onClick={() => router.push(href)}
          isSelected={pathname.includes(href)}
        >
          {content}
        </Button>
      ))}
    </nav>
  );
};
