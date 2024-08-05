import type { event } from "@prisma/client";

export type Event = event;

export type EventForm = {
  title: string;
  startDate: Date;
  endDate: Date;
  eventType: string;
  color?: string;
};
