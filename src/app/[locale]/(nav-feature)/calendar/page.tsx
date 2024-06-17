import { useTranslations } from "next-intl";

const Calendar = () => {
  const t = useTranslations("calendar");
  return <h1>{t("title")}</h1>;
};

export default Calendar;
