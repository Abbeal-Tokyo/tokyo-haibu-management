import "@/app/globals.css";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Navigation } from "@/components/navigation";

type Props = React.PropsWithChildren<{
  params: { locale: string };
}>;

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

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
