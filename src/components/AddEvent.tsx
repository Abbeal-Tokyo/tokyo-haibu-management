"use client";

import { type EventForm } from "@/app/model/event";
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

const validateForm = (formData: FormData) => {
  const eventForm: EventForm = {
    title: formData.get("title")?.toString() as string,
    eventType: formData.get("eventType")?.toString() as string,
    startDate: new Date(formData.get("startDate")?.toString() as string),
    endDate: new Date(formData.get("endDate")?.toString() as string),
  };
  createEvent(eventForm);
};

export const AddEvent = (props: { eventTypes: string[] }) => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <div className="flex flex-col gap-2 left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      <p>Add Event</p>
      <form
        action={(formData) => {
          validateForm(formData);
          ref.current?.reset();
        }}
        ref={ref}
      >
        <div className="flex flex-col gap-2">
          <div>
            Event name:
            <input className="text-black" type="text" name="title" required />
          </div>
          <div>
            Event type:
            <input
              className="text-black"
              type="text"
              name="eventType"
              required
            />
          </div>
          <div>
            Available event types:{" "}
            {props.eventTypes ? props.eventTypes.join(", ") : ""}
          </div>
          <div>
            Start date:
            <input
              className="text-black"
              type="text"
              name="startDate"
              required
            />
          </div>
          <div>
            End date:
            <input className="text-black" type="text" name="endDate" required />
          </div>
          <AddButton />
        </div>
      </form>
    </div>
  );
};
