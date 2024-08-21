import clsx from "clsx";
import { type ReactNode } from "react";

type ButtonProps = Readonly<{
  isSelected?: boolean;
  isDisabled?: boolean;
  className?: string;
  onClick(): void;
  children: ReactNode;
}>;

const Button = ({
  isSelected,
  isDisabled,
  className,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "bg-tertiary text-primaryOpacity70 text-center px-4 py-2 rounded-lg enabled:hover:scale-up-center " +
          className,
        { "!bg-secondary !text-gray": isSelected },
        { "!text-gray bg-opacity-50": isDisabled },
      )}
      disabled={isDisabled}
    >
      <>{children}</>
    </button>
  );
};

export default Button;
