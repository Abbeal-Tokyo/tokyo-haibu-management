import { useTranslations } from "next-intl";
import { Link } from "./Link";
import type { PropsWithChildren } from "react";

export const Navigation = ({ children }: PropsWithChildren) => {
  const t = useTranslations("navigation");
  return (
    <div>
      <h2>{t("testServer")}</h2>
      <Link />
      {children}
    </div>
  );
};
