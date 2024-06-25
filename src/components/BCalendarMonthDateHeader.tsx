"use client";

import type { Components } from "react-big-calendar";
type BCalendarMonthDateHeaderProps = React.ComponentProps<
  NonNullable<NonNullable<Components["month"]>["dateHeader"]>
>;
export const BCalendarMonthDateHeader = ({
  label,
}: BCalendarMonthDateHeaderProps) => {
  return <div className="px-1 font-thin text-left"> {label} </div>;
};
