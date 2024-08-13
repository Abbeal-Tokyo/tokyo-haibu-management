import { useEffect, useState } from "react";
import { type Event, type View, Views } from "react-big-calendar";
import { getEvents } from "@/lib/actions/event";

const useCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<View>(Views.MONTH);
  const [eventList, setEventList] = useState<Event[]>([]);

  useEffect(() => {
    getEvents()
      .then((events) =>
        events.map((event) => {
          return {
            title: event.title,
            start: event.start_date ?? undefined,
            end: event.end_date ?? undefined,
          };
        }),
      )
      .then((events) => setEventList(events));
  }, []);

  return {
    date,
    view,
    eventList,
    onNavigate: (newDate: Date) => setDate(newDate),
    onViewChange: (newView: View) => setView(newView),
  };
};

export default useCalendar;
