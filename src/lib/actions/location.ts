"use server";

import type { Location, LocationForm } from "@/model/location";
import { type Prisma } from "@prisma/client";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export const getLocations = async (): Promise<Location[]> => {
  return await prisma.location
    .findMany({
      include: {
        tags: true,
      },
    })
    .then((locations) => {
      return locations.map((location) => {
        return {
          ...location,
          tags: location.tags.map((tag) => tag.tag_name),
        };
      });
    });
};

export const createLocation = async (data: LocationForm): Promise<void> => {
  validateLocationForm(data);
  const location: Prisma.locationCreateInput = {
    title: data.name,
    address: data.address,
    tags: {
      create: data.tags.map((tag) => {
        return {
          tag: {
            connectOrCreate: {
              create: { tag_name: tag.toLowerCase() },
              where: { tag_name: tag.toLowerCase() },
            },
          },
        };
      }),
    },
  };
  await prisma.location.create({ data: location });
  revalidatePath("/events");
};

export const deleteLocation = async (locationId: bigint): Promise<void> => {
  prisma.location.delete({ where: { location_id: locationId } });
};

const validateLocationForm = (data: LocationForm) => {
  const errorMessages: string[] = [];
  if (!data.name) errorMessages.push("Venue name is missing");
  if (!data.address) errorMessages.push("Venue address is missing");
  if (errorMessages.length > 0)
    throw new Error("Validation error: " + errorMessages.join("; "));
};
