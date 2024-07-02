import type { Views } from "react-big-calendar";

export type BCalendarViews = (typeof Views)[keyof typeof Views];
