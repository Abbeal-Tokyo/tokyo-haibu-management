import Link from "next/link";
import { ReactNode } from "react";

type NavButtonProps = Readonly<
    {children: ReactNode, href: string }
> & React.ComponentPropsWithRef<"button">

export default function NavButton({ children, href, className }: NavButtonProps ): React.JSX.Element {
    return (
        <Link href={href} className={`${className} rounded-tl-lg rounded-bl-lg px-4 py-2 text-center text-white bg-secondary`}>
            {children}
        </Link>
    )
}
// px-[2%] py-[4%]