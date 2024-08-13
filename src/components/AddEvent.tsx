"use client";

import type { EventForm } from "@/model/event";
import type { Location } from "@/model/location";
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
    location: formData.get("location")
      ? (formData.get("location") as unknown as number)
      : undefined,
  };
  createEvent(eventForm);
};

type AddEventProps = Readonly<{
  eventTypes: string[];
  locations: Location[];
}>;

export const AddEvent = ({ eventTypes, locations }: AddEventProps) => {
  const ref = useRef<HTMLFormElement>(null);
  eventTypes;
  locations;

  const getLocationOptions = () => {
    const locationOptions = locations.map((location) => {
      const id = location.location_id;
      return (
        <option key={id} value={Number(id)}>
          {location.title} - {location.address}
          {location.tags && location.tags.length > 0
            ? ` - Tags: ${location.tags} `
            : ""}
        </option>
      );
    });
    locationOptions.push(<option key={"undefined"} value={undefined} />);
    return locationOptions;
  };

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
            Available event types: {eventTypes ? eventTypes.join(", ") : ""}
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
          <div>
            Location:
            <select className="text-black" name="location">
              {getLocationOptions()}
            </select>
          </div>
          <AddButton />
        </div>
      </form>
    </div>
  );
};
