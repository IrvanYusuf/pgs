import { childVariants, parentVariants } from "@/utils/AnimationVariants";
import { motion } from "framer-motion";
import ServiceCard from "../card/ServiceCard";
import { servicesData } from "@/data/service-data";
const ServiceSection = () => {
  return (
    <div>
      <motion.div
        id="services"
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        exit="exit"
        className="flex flex-col items-center justify-center gap-4"
      >
        <motion.div
          variants={childVariants}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="bg-card-background py-1 px-6 font-semibold text-primary text-center">
            SERVICES
          </h2>
        </motion.div>
        <motion.div
          variants={childVariants}
          className="flex flex-row items-center justify-center gap-4 text-card-foreground"
        >
          <p>CLARITY MEETS CREATIVITY</p>
        </motion.div>
        <motion.div
          variants={childVariants}
          className="flex flex-row items-center justify-center"
        >
          <h3 className="text-4xl font-semibold text-primary text-center">
            Making ideas unforgettable
          </h3>
        </motion.div>
      </motion.div>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-8 py-12 gap-4 lg:gap-6 xl:gap-8 [@media(min-width:2000px)]:w-[1920px] mx-auto">
        {servicesData.map((service) => (
          <motion.div
            key={service.index}
            variants={parentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            exit="exit"
          >
            <ServiceCard
              key={service.index}
              index={service.index}
              tag={service.tag}
              title={service.title}
              desc={service.desc}
              image={service.image}
              count={service.count}
              countDesc={service.countDesc}
              points={service.points}
              onButtonClick={() => {
                console.log(`Clicked on ${service.title}`);
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServiceSection;
