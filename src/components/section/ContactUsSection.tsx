"use client";
import { motion } from "framer-motion";
import { FilloutStandardEmbed } from "@fillout/react";

const ContactUsSection = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-4 bg-primary w-full py-28">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="bg-black py-2 font-semibold text-white px-6 text-center"
      >
        CONTACT US
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
        className="text-[32px] md:text-[48px] lg:text-[64px] md:w-2/3 leading-none font-semibold text-white text-center"
      >
        Whether you&apos;re ready to start a project or just exploring ideas,
        we&apos;d love to hear from you.
      </motion.h3>

      <div className="mt-10 w-full flex justify-center">
        <div style={{ width: "80%", height: "500px" }}>
          <FilloutStandardEmbed filloutId="mJ6SQ8vyXgus" />
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
