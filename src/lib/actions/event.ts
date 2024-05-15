"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export const getEvents = async () => {
  const data = await prisma.event.findMany();
  return data;
};

export const createEvent = async (data: FormData) => {
  const title = data.get("title")?.toString();
  await prisma.event.create({ data: { title } });
  revalidatePath("/events");
};
