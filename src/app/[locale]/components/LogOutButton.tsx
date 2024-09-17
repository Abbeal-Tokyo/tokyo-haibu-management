"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons/faRightFromBracket";
import { useTranslations } from "next-intl";
import { signOut } from "next-auth/react";

const LogOutButton = () => {
  const t = useTranslations("navigation");

  return (
    <button className="m-auto" onClick={() => signOut()}>
      {/* TO DO: decide on ICON library */}
      <FontAwesomeIcon className="inline w-6 h-6" icon={faRightFromBracket} />
      {t("logout")}
    </button>
  );
};

export default LogOutButton;
