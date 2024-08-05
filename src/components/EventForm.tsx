import { getEventTypes } from "@/lib/actions/event";
import { AddEvent } from "./AddEvent";

export const EventForm = async () => {
  const eventTypes = await getEventTypes();

  return (
    <>
      <AddEvent eventTypes={eventTypes} />
    </>
  );
};
