import React, { type ReactElement } from "react";

type FormEntryProps = Readonly<{
  label: string;
  children: ReactElement;
}>;

const FormEntry = (props: FormEntryProps) => {
  const { label, children } = props;
  return (
    <div className="flex gap-4 my-4">
      <div className="w-1/6 my-auto">{label}</div>
      {React.cloneElement(children, {
        className: `border border-tertiary rounded p-1 ${children.props.className ?? ""}`,
      })}
    </div>
  );
};

export default FormEntry;
