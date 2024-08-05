"use server";

import type { Event, EventForm } from "@/app/model/event";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export const getEvents = async (): Promise<Event[]> => {
  return await prisma.event.findMany();
};

export const getEventTypes = async (): Promise<string[]> => {
  return await prisma.event_type
    .findMany()
    .then((eventTypes) => eventTypes.map((eventType) => eventType.type_name));
};

export const createEvent = async (data: EventForm) => {
  validateEventForm(data);
  const event = {
    title: data.title,
    start_date: data.startDate,
    end_date: data.endDate,
    event_type: {
      connectOrCreate: {
        create: { type_name: data.eventType.toLowerCase() },
        where: { type_name: data.eventType.toLowerCase() },
      },
    },
    color: data.color,
  };
  await prisma.event.create({ data: event });
  revalidatePath("/events");
};

export const deleteEvent = async (eventId: bigint): Promise<void> => {
  await prisma.event.delete({ where: { event_id: eventId } });
};

const validateEventForm = (data: EventForm) => {
  const errorMessages: string[] = [];
  if (!data.eventType) errorMessages.push("event type is not defined");
  if (data.endDate < data.startDate)
    errorMessages.push("end date should be before start date");
  if (errorMessages.length > 0)
    throw new Error("Validation error: " + errorMessages.join("; "));
};
