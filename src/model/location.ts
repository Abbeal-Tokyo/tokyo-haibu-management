import type { location } from "@prisma/client";

export type Location = Omit<location, "tags"> & { tags: string[] };

export type LocationForm = {
  name: string;
  address: string;
  tags: string[];
};
