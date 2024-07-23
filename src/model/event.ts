import type { event } from "@prisma/client";
import type { Location } from "@/model/location";

export type Event = event & {
  location: Location | undefined;
};

export type EventForm = {
  title: string;
  startDate: Date;
  endDate: Date;
  eventType: string;
  color?: string;
  location?: number;
};
