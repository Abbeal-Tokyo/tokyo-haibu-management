import { useTranslations } from "next-intl";

const OfficeKeys = () => {
  const t = useTranslations("officeKeys");
  return <h1>{t("title")}</h1>;
};

export default OfficeKeys;
