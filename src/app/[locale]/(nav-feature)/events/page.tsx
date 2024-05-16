import { useTranslations } from "next-intl";

export const Event = () => {
  const t = useTranslations("events");
  return <h1>{t("title")}</h1>;
};

export default Event;
