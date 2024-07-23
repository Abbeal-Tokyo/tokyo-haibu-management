import { AddEvent } from "./AddEvent";
import { getEventTypes } from "@/lib/actions/event";
import { getLocations } from "@/lib/actions/location";

export const EventForm = async () => {
  const eventTypes = await getEventTypes();
  const locations = await getLocations();

  return (
    <>
      <AddEvent eventTypes={eventTypes} locations={locations} />
    </>
  );
};
