import type { Views } from "react-big-calendar";

export type BCalendarView = (typeof Views)[keyof typeof Views];
