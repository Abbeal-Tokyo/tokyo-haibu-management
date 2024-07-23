import { getEvents } from "@/lib/actions/event";

export const EventsList = async () => {
  const events = await getEvents();

  return (
    <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
      <a
        href="#"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className="mb-3 text-2xl font-semibold">My Events</h2>
        {events.map((event) => (
          <li key={event.event_id} className="m-0 text-sm opacity-50">
            {event.title} - {event.type} - {event.start_date.toLocaleString()} -{" "}
            {event.end_date.toLocaleString()} -{" "}
            {event.location ? event.location.title : ""}
          </li>
        ))}
      </a>
    </div>
  );
};
