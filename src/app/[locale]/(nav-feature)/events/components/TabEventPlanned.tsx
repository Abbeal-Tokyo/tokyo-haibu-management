import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons/faUtensils";

const TabEventPlanned = () => {
  const t = useTranslations("events");
  return (
    <section className="flex flex-col	gap-2 px-10 py-8">
      <button className="self-end w-40 px-4 py-3 rounded-lg text-center bg-tertiary hover:scale-up-center">
        + NEW EVENT{" "}
      </button>
      <header>
        <h2 className="text-nowrap">{t("tabPlannedSubtitle")}</h2>
      </header>
      <div>
        <article className="flex p-2 bg-background">
          <div className="flex flex-col items-center justify-between text-center mx-5">
            <FontAwesomeIcon className="w-10 h-10" icon={faUtensils} />
            MARCH 7 <br></br> 12:30
          </div>
          <div className="grow bg-white">
            Event name <br></br> Event venue <br></br> Event Adress
            <br></br>
            Person in charge
          </div>
        </article>
        <article></article>
      </div>
    </section>
  );
};

export default TabEventPlanned;
