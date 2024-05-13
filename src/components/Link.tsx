"use client";

import { useTranslations } from "next-intl";

export const Link = () => {
  const t = useTranslations("navigation");
  return <h4>{t("testClient")}</h4>;
};
