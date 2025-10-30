import Link from "next/link";
import { cn } from "@/utils/utils";

export default function NavLinkTransparent({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if it's an anchor link (starts with #)
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Get navbar height to offset scroll position
        const navHeight = 80; // Approximate navbar height
        const elementPosition = targetElement.offsetTop - navHeight;

        // Smooth scroll to the element
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center transition-transform duration-300 hover:scale-110",
        className
      )}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
