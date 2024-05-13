import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "./locale-config";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  const lang = locale as (typeof locales)[number];
  if (!locales.includes(lang)) notFound();
  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
