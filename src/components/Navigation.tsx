import { useTranslations } from "next-intl";
import NavButton from "./nav-button";

export const Navigation = ({ children }: React.PropsWithChildren) => {
  const t = useTranslations("navigation");
  return (
    <main className="flex h-full bg-background">
      <section className="flex flex-col basis-2/12">
        <header className="basis-2/12">
          <h2 className="text-center">{t("title")}</h2>
        </header>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav className="flex flex-col basis-8/12 grow gap-y-[10%] ml-10">
          <NavButton href="/calendar">{t("calendar")}</NavButton>
          <NavButton className="bg-tertiary" href="/events">
            {t("events")}
          </NavButton>
          <NavButton className="bg-tertiary" href="/office-keys">
            {t("office")}
          </NavButton>
        </nav>
        <footer className="flex items-center content-center	flex-auto">
          <button className="m-auto">{t("logout")}</button>
        </footer>
      </section>
      <section className="basis-10/12 bg-white p-14">{children}</section>
    </main>
  );
};
