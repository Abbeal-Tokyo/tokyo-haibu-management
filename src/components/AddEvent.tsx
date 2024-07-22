"use client";

import { createEvent } from "@/lib/actions/event";
import { useRef } from "react";
import { useFormStatus } from "react-dom";

const AddButton = () => {
  const { pending } = useFormStatus();
  return pending ? (
    <button disabled>Loading...</button>
  ) : (
    <button type="submit">Add</button>
  );
};

export const AddEvent = () => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <div className="flex flex-col gap-2 left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      <p>Add Event</p>
      <form
        action={async (formData) => {
          // await createEvent(formData);
          ref.current?.reset();
        }}
        ref={ref}
      >
        <div className="flex flex-row gap-2">
          <input className="text-black" type="text" name="title" />
          <AddButton />
        </div>
      </form>
    </div>
  );
};
