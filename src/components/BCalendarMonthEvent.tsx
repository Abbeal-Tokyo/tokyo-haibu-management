"use client";

import { useMemo } from "react";
import dayjs from "dayjs";
import type { Components } from "react-big-calendar";
type BCalendarMonthEventProps = React.ComponentProps<
  NonNullable<NonNullable<Components["month"]>["event"]>
>;
export const BCalendarMonthEvent = ({
  event,
  title,
}: BCalendarMonthEventProps) => {
  const startDate = event.start;
  console.log("startDate : ", startDate);
  const startDateDisplayed = useMemo(
    () => (startDate ? dayjs(startDate).format("HH:mm") : null),
    [startDate],
  );
  const displayedLabel = startDateDisplayed
    ? `${startDateDisplayed} - ${title}`
    : title;
  return <div className="text-black"> {displayedLabel} </div>;
};
