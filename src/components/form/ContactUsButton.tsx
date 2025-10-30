import { cn } from "@/utils/utils";

interface ContactUsButtonProps {
  onButtonClick?: () => void;
  className?: string;
}
export default function ContactUsButton({
  onButtonClick,
  className,
}: ContactUsButtonProps) {
  return (
    <button
      aria-label="contact-us-btn"
      onClick={onButtonClick}
      className={cn(
        "text-white cursor-pointer bg-primary text-sm lg:text-base font-semibold px-2 lg:px-4 py-2 ",
        className
      )}
    >
      [ CONTACT US ]
    </button>
  );
}
