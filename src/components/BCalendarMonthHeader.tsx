"use client";

import { useMemo } from "react";
import dayjs from "dayjs";
import type { Components } from "react-big-calendar";
type BCalendarMonthHeaderProps = React.ComponentProps<
  NonNullable<NonNullable<Components["month"]>["header"]>
>;
export const BCalendarMonthHeader = ({ date }: BCalendarMonthHeaderProps) => {
  const dateFormatted = useMemo(() => dayjs(date).format("dddd"), [date]);
  return <span className="font-thin"> {dateFormatted} </span>;
};
