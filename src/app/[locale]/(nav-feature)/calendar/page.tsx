"use client";
import { useTranslations } from "next-intl";
import { useCallback } from "react";
import dayjs from "dayjs";
import {
  Calendar as BCalendar,
  Views,
  dayjsLocalizer,
} from "react-big-calendar";
import type { CalendarProps, Event } from "react-big-calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons/faCalendarDays";
import { CalendarToolbar } from "./components/CalendarToolbar";
import type { BCalendarViews } from "./components/BCalendarViews";
import { BCalendarMonthHeader } from "./components//BCalendarMonthHeader";
import { BCalendarMonthDateHeader } from "./components/BCalendarMonthDateHeader";
import { BCalendarMonthEvent } from "./components//BCalendarMonthEvent";
import { BCalendarEventContainerWrapper } from "./components/BCalendarEventContainerWrapper";
import useCalendar from "./useCalendar";

type BCalendarEventPropGetter = NonNullable<CalendarProps["eventPropGetter"]>;
type ViewArray = BCalendarViews[];

const localizer = dayjsLocalizer(dayjs);

const Calendar = () => {
  const t = useTranslations("calendar");
  const { views }: { views: ViewArray } = {
    views: [Views.MONTH, Views.WEEK, Views.DAY],
  };
  const eventPropGetter = useCallback<BCalendarEventPropGetter>(
    (event: Event) => ({
      className: "bg-event1",
      ...(event.title?.toString().includes("Nomikai") && {
        className: "bg-event2",
      }),
    }),
    [],
  );

  const { date, view, eventList, onNavigate, onViewChange } = useCalendar();

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
