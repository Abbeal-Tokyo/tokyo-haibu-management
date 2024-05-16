import { useTranslations } from "next-intl";

export const OfficeKeys = () => {
  const t = useTranslations("officeKeys");
  return <h1>{t("title")}</h1>;
};

export default OfficeKeys;
