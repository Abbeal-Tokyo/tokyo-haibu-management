"use client";
import { useTranslations } from "next-intl";
import { useCallback, useMemo, useState } from "react";
import dayjs from "dayjs";
import {
  Calendar as BCalendar,
  Views,
  dayjsLocalizer,
} from "react-big-calendar";
import type { CalendarProps, Event, View } from "react-big-calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons/faCalendarDays";
import { CalendarToolbar } from "@/components/CalendarToolbar";
import type { BCalendarView } from "@/components/BCalendarView";
import { BCalendarMonthHeader } from "@/components/BCalendarMonthHeader";
import { BCalendarMonthDateHeader } from "@/components/BCalendarMonthDateHeader";
import { BCalendarMonthEvent } from "@/components/BCalendarMonthEvent";
import { BCalendarEventContainerWrapper } from "@/components/BCalendarEventContainerWrapper";

type BCalendarEventPropGetter = NonNullable<CalendarProps["eventPropGetter"]>;
// import jaLocal from "dayjs/locale/ja";
// import frLocal from "dayjs/locale/fr";

// dayjs.locale(frLocal);
const localizer = dayjsLocalizer(dayjs);

// TO DO : DECOMPOSE BCALENDAR BEHAVIOR TO COMPONENT
const Calendar = () => {
  const t = useTranslations("calendar");
  type ViewArray = BCalendarView[];
  const { views }: { views: ViewArray } = useMemo(
    () => ({
      views: [Views.MONTH, Views.WEEK, Views.DAY],
    }),
    [],
  );
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<View>(Views.MONTH);
  // TO DO: ADD REAL LIST FROM BACK END
  const [eventList] = useState<Event[]>([
    {
      title: "Default event",
      start: new Date("06/01/2024"),
      end: new Date("06/01/2024"),
    },
    {
      title: "Lunch",
      start: new Date(2024, 5, 6, 12, 30, 0),
      end: new Date(2024, 5, 6, 13, 30, 0),
    },
    {
      title: "Nomikai",
      start: new Date(2024, 5, 6, 18, 30, 0),
      end: new Date(2024, 5, 6, 19, 30, 0),
    },
    { title: "Event 4", start: new Date(), end: new Date() },
  ]);

  const eventPropGetter = useCallback<BCalendarEventPropGetter>(
    (event) => ({
      className: "bg-event1",
      ...(event.title?.toString().includes("Nomikai") && {
        className: "bg-event2",
      }),
    }),
    [],
  );
  const onNavigate = useCallback(
    (newDate: Date) => {
      console.log("Navigate to : ", newDate);
      setDate(newDate);
    },
    [setDate],
  );
  const onViewChange = useCallback(
    (newView: View) => {
      console.log("on View : ", newView);
      setView(newView);
    },
    [setView],
  );

  return (
    <>
      <header>
        <h1 className="text-nowrap">
          <FontAwesomeIcon
            className="inline w-10 h-10 mx-4"
            icon={faCalendarDays}
          />
          {t("title")}
        </h1>
      </header>
      <CalendarToolbar
        view={view}
        date={date}
        onNavigate={onNavigate}
        onViewChange={onViewChange}
      ></CalendarToolbar>
      <BCalendar
        toolbar={false}
        date={date}
        localizer={localizer}
        events={eventList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        view={view}
        views={views}
        eventPropGetter={eventPropGetter}
        components={{
          eventWrapper: BCalendarEventContainerWrapper,
          // dateCellWrapper: BCalendarEventContainerWrapper,
          // dayColumnWrapper: BCalendarEventContainerWrapper,
          // timeSlotWrapper: BCalendarEventContainerWrapper,
          // timeGutterHeader: BCalendarEventContainerWrapper,
          // resourceHeader: BCalendarEventContainerWrapper,
          month: {
            event: BCalendarMonthEvent,
            header: BCalendarMonthHeader,
            dateHeader: BCalendarMonthDateHeader,
          },
        }}
      />
    </>
  );
};

export default Calendar;
