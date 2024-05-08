import type { Metadata } from "next";

import "./globals.css";
import NavButton from "@/app/components/nav-button";


export const metadata: Metadata = {
  title: "Tokyo Haibu Management",
  description: "Manage Tokyo hive !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex h-full bg-background">
          <section className="flex flex-col basis-2/12">
            <h2 className="basis-2/12 text-center"> Hive Manager </h2>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav className="flex flex-col basis-8/12 grow gap-y-[10%] ml-10">
              <NavButton href="/calendar">CALENDAR</NavButton>
              <NavButton className="bg-tertiary" href="/events">EVENTS</NavButton>
              <NavButton className="bg-tertiary" href="/office-keys">OFFICE</NavButton>
            </nav>
            <button> Log Out</button>
          </section>
          <section className="basis-10/12 bg-white">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
