import { type ReactElement, type ReactNode } from "react";
import dayjs from "dayjs";

type ItemProps = Readonly<{
  date?: Date;
  image: ReactElement;
  title: string;
  children?: ReactNode;
}>;

const Item = ({ date, image, title, children }: ItemProps) => {
  return (
    <article className="flex p-2 bg-background">
      <div className="flex flex-col items-center justify-between text-center mx-5">
        <div className="py-2">{image}</div>
        {date && (
          <div className="leading-tight">
            {dayjs(date).format("MMMM D").toUpperCase()}
            <br />
            {dayjs(date).format("H:mm")}
          </div>
        )}
      </div>
      <div className="grow bg-white p-2">
        <div className="font-semibold mb-2">{title}</div>
        <div className="text-sm">{children}</div>
      </div>
    </article>
  );
};

export default Item;
