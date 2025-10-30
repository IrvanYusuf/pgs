"use client";
import { useCallback, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedHamburgerMenuProps {
  onButtonClick?: (isOpen: boolean) => void;
}

export default function AnimatedHamburgerMenu({
  onButtonClick,
}: AnimatedHamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = useCallback(() => {
    const newState = !isOpen;
    setIsOpen(newState);
    onButtonClick?.(newState);
  }, [isOpen, onButtonClick]);

  return (
    <motion.button
      aria-label="hamburger-button"
      className="relative w-10 h-10 hover:bg-primary/10 rounded-md"
      onClick={handleButtonClick}
      animate={isOpen ? "open" : "closed"}
      initial="closed"
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.span
        variants={{
          open: {
            rotate: "45deg",
            y: "5px",
          },
          closed: {
            rotate: "0deg",
          },
        }}
        style={{
          top: "40%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
        className="absolute h-1 w-8 bg-primary rounded-full"
      />
      <motion.span
        variants={{
          open: {
            rotate: "-45deg",
            y: "-7px",
          },
          closed: {
            rotate: "0deg",
          },
        }}
        style={{
          top: "70%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
        className="absolute h-1 w-8 bg-primary rounded-full"
      />
    </motion.button>
  );
}
