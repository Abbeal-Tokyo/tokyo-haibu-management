import { createEvent, getEventTypes } from "@/lib/actions/event";
import { useEffect, useState } from "react";

const useEventForm = () => {
  const [availableEventTypes, setAvailableEventTypes] = useState<string[]>([]);
  const [title, setTitle] = useState<string>("");
  const [eventType, setEventType] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  useEffect(() => {
    getEventTypes().then((types) => setAvailableEventTypes(types));
  }, []);

  const createNewEvent = async () => {
    await createEvent({
      title,
      eventType,
      startDate: startDate as Date,
      endDate: endDate as Date,
    });
  };

  return {
    availableTypes: availableEventTypes,
    setTitle: (title: string) => setTitle(title),
    setType: (type: string) => setEventType(type),
    setStartDate: (date: Date) => setStartDate(date),
    setEndDate: (date: Date) => setEndDate(date),
    submit: () => createNewEvent(),
  };
};

export default useEventForm;
