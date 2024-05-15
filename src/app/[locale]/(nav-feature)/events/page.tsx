import { useTranslations } from "next-intl";

export default function Event() {
  const t = useTranslations("events");
  return <h1>{t("title")}</h1>;
}
