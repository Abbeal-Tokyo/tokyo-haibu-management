import { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { Views } from "react-big-calendar";
import dayjs from "dayjs";
import type { ManipulateType as DayJSManipulateType } from "dayjs";
import type { View } from "react-big-calendar";

import type { BCalendarViews } from "./BCalendarViews";

type CalendarProps = Readonly<{
  date: Date;
  view: BCalendarViews;
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
  const dateType = new Map<BCalendarViews, DayJSManipulateType>([
    ["week", "week"],
    ["month", "month"],
    ["day", "day"],
  ]);
  const viewButtons = [
    { id: 1, label: "Month", value: Views.MONTH },
    { id: 2, label: "Day", value: Views.DAY },
    { id: 3, label: "Week", value: Views.WEEK },
  ];
  const viewRadioGroupName = "views";
  const onViewButtonFocused = (selectedView: BCalendarViews) =>
    onViewChange(selectedView);
  const onNavigateButtonClick = (action: "back" | "forward") => {
    const type = dateType.get(view);
    // could have just passed view value but, as it is two different library (dayjs and React BigCalendar)...
    // I prefered to map
    if (!type) console.error("onNavigateButtonClick - type does not exist");
    const newDate =
      action === "back"
        ? dayjs(date).subtract(1, type).toDate()
        : dayjs(date).add(1, type).toDate();
    onNavigate(newDate);
  };
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
        {viewButtons.map(({ id, label, value }) => (
          <div key={id}>
            <input
              className="calendar-views-radio appearance-none"
              type="radio"
              id={value}
              name={viewRadioGroupName}
              value={value}
              defaultChecked={view == value}
              onFocus={() => onViewButtonFocused(value)}
            ></input>
            <label
              className="px-3 py-2 text-center bg-background opacity-40"
              htmlFor={value}
            >
              {label}
            </label>
          </div>
        ))}
      </div>
    </section>
  );
};
