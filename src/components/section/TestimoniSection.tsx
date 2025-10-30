import { childVariants, parentVariants } from "@/utils/AnimationVariants";
import { motion } from "framer-motion";
import TestimonyCard from "../card/TestimonyCard";
import { testimonyData } from "@/data/testimoni-data";

const TestimoniSection = () => {
  return (
    <div>
      <motion.div
        id="testimonials"
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        exit="exit"
        className="flex flex-col items-center justify-center gap-4 py-12"
      >
        <motion.div
          variants={childVariants}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="bg-card-background py-1 px-6 font-semibold text-primary text-center">
            TESTIMONIAL
          </h2>
        </motion.div>
        <motion.div
          variants={childVariants}
          className="flex flex-row items-center justify-center gap-4 text-card-foreground"
        >
          <p>REAL FEEDBACK</p>
        </motion.div>
        <motion.div
          variants={childVariants}
          className="flex flex-row items-center justify-center"
        >
          <h3 className="text-4xl font-semibold text-primary text-center">
            What our clients say
          </h3>
        </motion.div>
      </motion.div>
      {/* Seamless infinite sliding testimony carousel */}
      <motion.div
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        exit="exit"
        className="md:w-3/4 [@media(min-width:1920px)]:w-[1880px] mx-auto overflow-hidden relative py-4"
      >
        <div className="relative w-full">
          <motion.div
            className="flex flex-row"
            style={{ width: "fit-content" }}
            initial={{ x: 0 }}
            animate={{
              x: [0, "-25%"],
            }}
            transition={{
              duration: 16,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Duplicate testimonyData to achieve seamless loop */}
            {[
              ...testimonyData,
              ...testimonyData,
              ...testimonyData,
              ...testimonyData,
            ].map((data, idx) => (
              <div key={`${data.name}-${idx}`} className="shrink-0 ml-4">
                <TestimonyCard
                  image={data.image}
                  name={data.name}
                  title={data.title}
                  rate={data.rate}
                  testimony={data.testimony}
                />
              </div>
            ))}
          </motion.div>
          {/* Gradient fade on sides for nicer effect */}
          {/* Gradient fade on sides for nicer effect */}
          {/* Gradient fade on sides */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-16 bg-linear-to-r from-[--fade-from] via-[--fade-via] to-transparent z-10" />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-linear-to-l from-[--fade-from] via-[--fade-via] to-transparent z-10" />
        </div>
      </motion.div>
    </div>
  );
};

export default TestimoniSection;
