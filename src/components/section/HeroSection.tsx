import Image from "next/image";
import { motion } from "framer-motion";
import MotionLayout from "../layout/MotionLayout";

const HeroSection = () => {
  return (
    <MotionLayout>
      <motion.div
        id="home"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center w-full h-screen overflow-hidden z-10 relative"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
          className="w-full h-full relative overflow-hidden"
        >
          <Image
            src="/images/home.webp"
            alt="Home Image"
            fill
            priority
            // sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 1.4 }}
          className="absolute bottom-1/4 lg:bottom-1/6 left-4 w-3/4 text-4xl md:text-[72px] lg:text-[96px] 2xl:text-[160px] z-10"
        >
          <h1 className="font-bold text-white">Where Brands Meets Growth</h1>
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full h-1/5 md:h-1/3 z-20 bg-linear-to-b from-transparent to-white pointer-events-none" />
      </motion.div>
    </MotionLayout>
  );
};

export default HeroSection;
