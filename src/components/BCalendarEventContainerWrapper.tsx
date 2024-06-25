"use client";

export const BCalendarEventContainerWrapper = ({
  children,
  //   ...props
}: React.ComponentProps<"div">) => {
  return <div className="px-1 mt-1"> {children}</div>;
};
