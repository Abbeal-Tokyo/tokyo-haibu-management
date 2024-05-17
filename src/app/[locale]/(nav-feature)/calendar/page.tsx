"use client";
import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons/faCalendarDays";
import {
  Calendar as BCalendar,
  Views,
  dayjsLocalizer,
} from "react-big-calendar";
import dayjs from "dayjs";
import { useMemo } from "react";
// import jaLocal from "dayjs/locale/ja";
// import frLocal from "dayjs/locale/fr";

// dayjs.locale(frLocal);
const localizer = dayjsLocalizer(dayjs);

const Calendar = () => {
  const t = useTranslations("calendar");
  const { views }: { views: Array<keyof typeof Views> } = useMemo(
    () => ({
      views: Object.keys(Views).map((k) => Views[k]),
    }),
    [],
  );
  return (
    <div>
      <header>
        <h1 className="text-nowrap">
          <FontAwesomeIcon
            className="inline w-10 h-10 mx-4"
            icon={faCalendarDays}
          />
          {t("title")}
        </h1>
      </header>
      <BCalendar
        localizer={localizer}
        events={[]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={views}
      />
    </div>
  );
};

export default Calendar;
