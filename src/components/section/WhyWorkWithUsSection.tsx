import { parentVariants } from "@/utils/AnimationVariants";
import { motion } from "framer-motion";
import WhyWorkWithUs from "../card/WhyWorkWithUs";
import { whyWorkWithUsData } from "@/data/why-work-with-us-data";

const WhyWorkWithUsSection = () => {
  return (
    <div
      id="why-work-with-us"
      className="whyWorkWithUs flex flex-col items-center justify-start gap-4 bg-primary w-full py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="bg-black py-2 font-semibold text-white px-6 text-center"
      >
        WHY WORK WITH US
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
        className="text-[32px] md:text-[48px] lg:text-[64px] md:w-2/3 leading-none font-semibold text-white text-center"
      >
        Simple reasons why brands choose Pershing Agency
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-8 py-12 gap-4 lg:gap-6 xl:gap-8 [@media(min-width:2000px)]:w-[1920px] mx-auto">
        {whyWorkWithUsData.map((data) => (
          <motion.div
            key={data.title}
            variants={parentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            exit="exit"
            className="col-span-1 md:col-span-2 lg:col-span-1 h-full"
          >
            <WhyWorkWithUs title={data.title} desc={data.desc} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyWorkWithUsSection;
