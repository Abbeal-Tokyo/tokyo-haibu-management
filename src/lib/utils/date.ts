import dayjs from "dayjs";

export const getFirstDayOfWeek = (date: Date) => {
  return dayjs(date).subtract(date.getDay(), "day");
};

export const getLastDayOfWeek = (date: Date) => {
  return dayjs(date).add(6 - date.getDay(), "day");
};
