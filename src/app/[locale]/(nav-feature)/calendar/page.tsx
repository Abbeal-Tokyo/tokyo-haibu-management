import { useTranslations } from "next-intl";

export default function Calendar() {
  const t = useTranslations("calendar");
  return <h1>{t("title")}</h1>;
}
