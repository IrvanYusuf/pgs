import { Variants } from "framer-motion";

export const parentVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      delay: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.4,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      delay: 0.4,
    },
  },
};

export const childVariants: Variants = {
  hidden: { opacity: 0, y: -25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: 25,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

export const imageParentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      when: "beforeChildren",
    },
  },
  exit: { opacity: 0 },
};

export const imageChildVariants: Variants = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
  exit: { opacity: 0, scale: 1.2 },
};

export const listVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};
