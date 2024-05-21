"use client";
import { useTranslations } from "next-intl";
import { useCallback, useMemo, useState } from "react";
import dayjs from "dayjs";
import {
  Calendar as BCalendar,
  Views,
  dayjsLocalizer,
} from "react-big-calendar";
import type { Event, View } from "react-big-calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons/faCalendarDays";

// import jaLocal from "dayjs/locale/ja";
// import frLocal from "dayjs/locale/fr";

// dayjs.locale(frLocal);
const localizer = dayjsLocalizer(dayjs);

// TO DO : DECOMPOSE BCALENDAR BEHAVIOR TO COMPONENT
const Calendar = () => {
  const t = useTranslations("calendar");
  type ViewArray = (typeof Views)[keyof typeof Views][];
  const { views }: { views: ViewArray } = useMemo(
    () => ({
      views: [Views.MONTH, Views.WEEK, Views.DAY],
    }),
    [],
  );
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<View>(Views.MONTH);
  const [eventList] = useState<Event[]>([
    {
      title: "Event 1",
      start: new Date("05/01/2024"),
      end: new Date("05/01/2024"),
    },
    {
      title: "Event 2",
      start: new Date("05/05/2024"),
      end: new Date("05/05/2024"),
    },
    { title: "Event 3", start: new Date(), end: new Date() },
  ]);

  const onNavigate = useCallback(
    (newDate: Date) => {
      console.log("Navigate");
      setDate(newDate);
    },
    [setDate],
  );
  const onViewButtonClicked = useCallback(
    (newView: View) => {
      console.log("on View : ", newView);
      setView(newView);
    },
    [setView],
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
        date={date}
        localizer={localizer}
        events={eventList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        view={view}
        views={views}
        onNavigate={onNavigate}
        onView={onViewButtonClicked}
      />
    </div>
  );
};

export default Calendar;
