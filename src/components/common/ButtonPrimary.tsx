import { cn } from "@/utils/utils";
import { ReactNode } from "react";

interface ButtonPrimaryProps {
  onButtonClick?: () => void;
  className?: string;
  children?: ReactNode;
}

const ButtonPrimary = ({
  onButtonClick,
  className,
  children,
}: ButtonPrimaryProps) => {
  return (
    <button
      aria-label="btn-primary"
      onClick={onButtonClick}
      className={cn(
        "text-white cursor-pointer bg-primary text-sm lg:text-base font-semibold px-2 lg:px-4 py-2 ",
        className
      )}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
