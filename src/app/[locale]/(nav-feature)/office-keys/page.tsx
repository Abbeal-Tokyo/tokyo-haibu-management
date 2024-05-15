import { useTranslations } from "next-intl";

export default function OfficeKeys() {
  const t = useTranslations("officeKeys");
  return <h1>{t("title")}</h1>;
}
