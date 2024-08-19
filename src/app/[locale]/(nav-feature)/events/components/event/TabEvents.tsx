import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons/faUtensils";
import Item from "@/components/Item";
import PaginatedList from "@/components/PaginatedList";
import { getIncomingEvents } from "@/lib/actions/event";
import { getTranslations } from "next-intl/server";

const TabEvents = async () => {
  const items = await getIncomingEvents().then((events) =>
    events.map((event) => (
      <Item
        key={event.event_id}
        title={event.title as string}
        date={event.start_date}
        image={<FontAwesomeIcon className="w-10 h-10" icon={faUtensils} />}
      >
        <div className="font-semibold">{event.location?.title}</div>
        {event.location?.address}
      </Item>
    )),
  );

  const t = await getTranslations("events");
  return (
    <section className="flex flex-col	gap-3 px-10 py-8">
      <header>
        <h2 className="text-nowrap">{t("eventTab.incomingEvents")}</h2>
      </header>
      <div>
        <PaginatedList elements={items} />
      </div>
    </section>
  );
};

export default TabEvents;
