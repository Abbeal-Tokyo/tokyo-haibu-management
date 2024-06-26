import { AddEvent } from "@/components/AddEvent";
import { EventsList } from "@/components/EventsList";
import { useTranslations } from "next-intl";

const Event = () => {
  const t = useTranslations("events");
  return (
    <div className="flex flex-col gap-4">
      <h1>{t("title")}</h1>
      <AddEvent />
      <EventsList />
    </div>
  );
};

export default Event;
