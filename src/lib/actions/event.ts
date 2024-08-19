"use server";

import type { Event, EventForm } from "@/model/event";
import { type Prisma } from "@prisma/client";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export const getEvents = async (
  getOptions: Omit<Prisma.eventFindManyArgs, "include">,
): Promise<Event[]> => {
  return await prisma.event
    .findMany({
      include: {
        location: { include: { tags: true } },
      },
      ...getOptions,
    })
    .then((events) => {
      return events.map((event) => {
        return {
          ...event,
          location: event.location
            ? {
                ...event.location,
                tags: event.location.tags.map((tag) => tag.tag_name),
              }
            : undefined,
        };
      });
    });
};

export const getIncomingEvents = async (): Promise<Event[]> => {
  return await getEvents({
    where: {
      end_date: {
        gte: new Date(),
      },
    },
    orderBy: { start_date: "asc" },
  });
};

export const getEventTypes = async (): Promise<string[]> => {
  return await prisma.event_type
    .findMany()
    .then((eventTypes) => eventTypes.map((eventType) => eventType.type_name));
};

export const createEvent = async (data: EventForm) => {
  validateEventForm(data);
  const event: Prisma.eventCreateInput = {
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
  if (data.location) {
    event.location = {
      connect: { location_id: data.location },
    };
  }
  await prisma.event.create({ data: event });
  revalidatePath("/events");
};

export const deleteEvent = async (eventId: bigint): Promise<void> => {
  await prisma.event.delete({ where: { event_id: eventId } });
};

const validateEventForm = (data: EventForm) => {
  const errorMessages: string[] = [];
  if (!data.eventType) errorMessages.push("event type is not defined");
  if (!data.startDate || !data.endDate)
    errorMessages.push("date is not defined");
  if (data.endDate < data.startDate)
    errorMessages.push("end date should be before start date");
  if (errorMessages.length > 0)
    throw new Error("Validation error: " + errorMessages.join("; "));
};
