import Tabs from "@/components/Tabs";
import { faChampagneGlasses } from "@fortawesome/free-solid-svg-icons/faChampagneGlasses";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import TabEvents from "./components/event/TabEvents";
import TabPlaces from "./components/location/TabPlaces";

const Event = () => {
  const t = useTranslations("events");
  return (
    <>
      <header>
        <h1 className="text-nowrap">
          <FontAwesomeIcon
            className="inline w-10 h-10 mx-4"
            icon={faChampagneGlasses}
          />
          {t("title")}
        </h1>
      </header>
      <section className="min-h-full mx-auto my-9 max-w-4xl">
        <Tabs
          tabs={[
            {
              id: "tab-event-planned",
              idPanel: "tabpanel-event-planned",
              title: t("eventTab.title"),
              content: <TabEvents />,
            },
            {
              id: "tab-places",
              idPanel: "tabpanel-places",
              title: t("tabPlacesTitle"),
              content: <TabPlaces />,
            },
          ]}
        ></Tabs>
      </section>
    </>
  );
};

export default Event;
