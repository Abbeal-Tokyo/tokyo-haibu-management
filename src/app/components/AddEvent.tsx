"use client";

import { createEvent } from "@/lib/actions/event";

export const AddEvent = () => (
  <div className="flex flex-col gap-2 left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    <p>Add Event</p>
    <form action={createEvent}>
      <div className="flex flex-row gap-2">
        <input className="text-black" type="text" name="title" />
        <button type="submit">Add</button>
      </div>
    </form>
  </div>
);
