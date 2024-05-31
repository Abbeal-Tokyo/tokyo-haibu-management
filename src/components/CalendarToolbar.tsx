"use client";
import { useCallback, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { Views } from "react-big-calendar";
import dayjs from "dayjs";

import type { View } from "react-big-calendar";
import type { BCalendarView } from "./BCalendarView";
import type { ManipulateType } from "dayjs";

// import Link from "next/link";
// import type { ReactNode } from "react";
// import clsx from "clsx";

type CalendarProps = Readonly<{
  date: Date;
  view: BCalendarView;
  onNavigate: (newDate: Date) => void;
  onViewChange: (newView: View) => void;
}>;

export const CalendarToolbar = ({
  date,
  view,
  onNavigate,
  onViewChange,
}: CalendarProps) => {
  const title = useMemo(() => dayjs(date).format("YYYY"), [date]);
  const subtitle = useMemo(() => dayjs(date).format("MMMM"), [date]);
  const viewButtons = useMemo(
    () => [
      { label: "Month", value: Views.MONTH },
      { label: "Day", value: Views.DAY },
      { label: "Week", value: Views.WEEK },
    ],
    [],
  );
  const viewRadioGroupName = "views";
  const onViewButtonFocused = useCallback(
    (selectedView: BCalendarView) => onViewChange(selectedView),
    [onViewChange],
  );
  const onNavigateButtonClick = useCallback(
    (action: "back" | "forward") => {
      let type: ManipulateType = "month";
      // could have just passed view value but, as it is two different library (dayjs and Bigcalendar)...
      // I prefered to map
      console.log("view action", view);
      switch (view) {
        case "month":
          type = "month";
          break;
        case "day":
          type = "day";
          break;
        case "week":
          type = "week";
          break;
      }
      const newDate =
        action === "back"
          ? dayjs(date).subtract(1, type).toDate()
          : dayjs(date).add(1, type).toDate();
      onNavigate(newDate);
    },
    [date, view, onNavigate],
  );
  return (
    <section className="grid grid-cols-3 mb-5">
      <header className="col-start-2 flex flex-col items-center gap-y-4">
        <h2 className="text-center">
          {title}
          <br></br>
          {subtitle}
        </h2>
        <section className="flex gap-x-2">
          <button
            className="rounded-xl px-3 py-2 text-center text-primary bg-background hover:scale-up-center"
            onClick={() => onNavigateButtonClick("back")}
          >
            <FontAwesomeIcon className="inline w-4 h-4" icon={faChevronLeft} />
          </button>
          <button
            className="rounded-xl px-3 py-2 text-center text-primary bg-background hover:scale-up-center"
            onClick={() => onNavigateButtonClick("forward")}
          >
            <FontAwesomeIcon className="inline w-4 h-4" icon={faChevronRight} />
          </button>
        </section>
      </header>
      <div className="flex items-end justify-end">
        {viewButtons.map(({ label, value }, index) => (
          <>
            <input
              key={value + index}
              className="calendar-views-radio appearance-none"
              type="radio"
              id={value}
              name={viewRadioGroupName}
              value={value}
              defaultChecked={view == value}
              onFocus={() => onViewButtonFocused(value)}
            ></input>
            <label
              key={value + index}
              className="px-3 py-2 text-center bg-background opacity-40"
              htmlFor={value}
            >
              {label}
            </label>
          </>
        ))}
      </div>
    </section>
  );
};
