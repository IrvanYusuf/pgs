"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpIcon } from "@heroicons/react/16/solid";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Saat user scroll, cek posisi
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      className="fixed z-50 right-6 bottom-6"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
    >
      <button
        aria-label="btn-scroll-top"
        onClick={scrollToTop}
        className="flex items-center justify-center w-12 h-12 rounded-full shadow-md hover:opacity-90 text-white transition-all bg-primary cursor-pointer"
      >
        <ArrowUpIcon width={24} height={24} />
      </button>
    </motion.div>
  );
};

export default ScrollToTop;
