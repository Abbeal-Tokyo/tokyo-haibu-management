import { EventForm } from "@/components/EventForm";
import { EventsList } from "@/components/EventsList";
import { useTranslations } from "next-intl";

const Event = () => {
  const t = useTranslations("events");
  return (
    <div className="flex flex-col gap-4">
      <h1>{t("title")}</h1>
      <EventForm />
      <EventsList />
    </div>
  );
};

export default Event;
