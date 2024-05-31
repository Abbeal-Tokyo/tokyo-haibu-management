import { useTranslations } from "next-intl";
import { Nav } from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons/faRightFromBracket";

export const Navigation = ({ children }: React.PropsWithChildren) => {
  const t = useTranslations("navigation");
  return (
    <main className="flex h-full bg-background">
      <section className="flex flex-col basis-2/12">
        <header className="flex justify-center items-center basis-2/12">
          <h2 className="text-center">{t("title")}</h2>
        </header>
        {/*  Used recommendation from https://react.dev/reference/react/Children#accepting-an-array-of-objects-as-a-prop */}
        <Nav
          className="flex flex-col basis-8/12 grow gap-y-[10%] ml-10"
          navButtons={[
            { id: 1, href: "/calendar", content: <>{t("calendar")}</> },
            { id: 2, href: "/events", content: <>{t("events")}</> },
            { id: 3, href: "/office-keys", content: <>{t("office")}</> },
          ]}
        ></Nav>
        <footer className="flex items-center content-center	flex-auto">
          {/* TO DO: decide on ICON library */}
          <button className="m-auto">
            <FontAwesomeIcon
              className="inline w-6 h-6"
              icon={faRightFromBracket}
            />
            {t("logout")}
          </button>
        </footer>
      </section>
      <section className="basis-10/12 overflow-scroll	bg-white p-[5%]">
        {children}
      </section>
    </main>
  );
};
