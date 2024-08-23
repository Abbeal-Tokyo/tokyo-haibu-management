import { useTranslations } from "next-intl";
import Button from "./Button";
import FormEntry from "./FormEntry";
import React, { type ReactElement } from "react";

type FormProps = Readonly<{
  onValidate(): void;
  onCancel?(): void;
  children: ReactElement<typeof FormEntry>[];
}>;

const Form = (props: FormProps) => {
  const { onValidate, onCancel, children } = props;
  const tCommon = useTranslations("common");

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex flex-col text-sm w-full">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === FormEntry) {
            return child;
          }
        })}
      </div>
      <div className="w-full flex justify-end gap-4">
        {onCancel !== undefined && (
          <Button onClick={() => onCancel()} className="!bg-gray">
            {tCommon("cancel")}
          </Button>
        )}
        <Button onClick={() => onValidate()}>{tCommon("validate")}</Button>
      </div>
    </div>
  );
};

export default Form;
