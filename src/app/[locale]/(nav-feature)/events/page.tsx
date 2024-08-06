import Tabs from "@/components/Tabs";
import { faChampagneGlasses } from "@fortawesome/free-solid-svg-icons/faChampagneGlasses";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import TabEventPlanned from "./components/TabEventPlanned";
import TabPlaces from "./components/TabPlaces";

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
      <section className="min-h-full mx-24 my-9">
        <Tabs
          tabs={[
            {
              id: "tab-event-planned",
              idPanel: "tabpanel-event-planned",
              title: t("tabPlannedTitle"),
              content: <TabEventPlanned></TabEventPlanned>,
            },
            {
              id: "tab-places",
              idPanel: "tabpanel-places",
              title: t("tabPlacesTitle"),
              content: <TabPlaces></TabPlaces>,
            },
          ]}
        ></Tabs>
      </section>
    </>
  );
};

export default Event;
