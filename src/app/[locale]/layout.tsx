import "@/app/globals.css";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Root } from "./components/Root";
import AuthenticationProvider from "@/providers/AuthenticationProvider";

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

const RootLayout = ({ params: { locale }, children }: Readonly<Props>) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const messages = useMessages();
  return (
    <html>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AuthenticationProvider>
            <Root>{children}</Root>
          </AuthenticationProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
