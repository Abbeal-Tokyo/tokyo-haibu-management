import type { Metadata } from "next";

import "@/app/globals.css";
import { unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Navigation } from "@/components/navigation";

type Props = React.PropsWithChildren<{
  params: { locale: string };
}>;

// TODO: use translation library
export const metadata: Metadata = {
  title: "Tokyo Haibu Management",
  description: "Manage Tokyo hive !",
};

export default function RootLayout({
  params: { locale },
  children,
}: Readonly<Props>) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const messages = useMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navigation>{children}</Navigation>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
