import { CountUp } from "@/utils/AnimationUtils";
import {
  childVariants,
  imageChildVariants,
  imageParentVariants,
  parentVariants,
} from "@/utils/AnimationVariants";
import { motion } from "framer-motion";
import { FireIcon, LightBulbIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import MotionLayout from "../layout/MotionLayout";

const brandCount = 17;
const productCount = 32;
const AboutUsSection = () => {
  return (
    <MotionLayout>
      <motion.div
        id="about"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 px-4 md:px-8 py-12 gap-4 lg:gap-6 xl:gap-8 [@media(min-width:2000px)]:w-[1920px] mx-auto"
      >
        <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          exit="exit"
          className="bg-card-background md:col-span-2 lg:col-span-8 xl:col-span-8 p-4 flex flex-col gap-4 xl:justify-between text-card-foreground text-sm md:text-base lg:text-lg"
        >
          <div>
            <motion.h2
              variants={childVariants}
              className="text-xl md:text-3xl font-semibold text-primary"
            >
              We Drive Digital Transformation For Entrepreneurs and SMEs.
            </motion.h2>
            <motion.p variants={childVariants} className="mt-4">
              <span className="font-bold">Pershing Agency</span> is the digital
              arm of the{" "}
              <span className="font-bold">Pershing Global Solutions</span>,
              built to empower small and mid-sized businesses with creative and
              accessible solutions.
            </motion.p>
            <motion.p variants={childVariants} className="mt-4">
              At <span className="font-bold">Pershing Agency</span>, we believe
              in blending creativity with strategy. Our team combines global
              perspective with local insight, guiding companies through digital
              transformation with clarity, precision, and long-term vision.
            </motion.p>
            <div className="h-6" />
          </div>

          <motion.div
            variants={childVariants}
            className="flex flex-row items-center justify-start gap-4"
          >
            <div>
              <h3 className="text-[72px] font-thin">
                <CountUp
                  from={0}
                  to={brandCount}
                  duration={2}
                  delay={2}
                  ease="easeInOut"
                  format={(n) => Math.round(n).toString()}
                />
                +
              </h3>
              <p>Brands launched</p>
            </div>
            <div className="h-28 border-r border-card-foreground/25" />
            <div>
              <h3 className="text-[72px] font-thin">
                <CountUp
                  from={0}
                  to={productCount}
                  delay={2}
                  duration={2}
                  ease="easeInOut"
                  format={(n) => Math.round(n).toString()}
                />
                +
              </h3>
              <p>Products launched</p>
            </div>
          </motion.div>

          <div className="hidden items-center justify-between gap-4 xl:flex">
            <motion.div
              variants={childVariants}
              className="bg-card-background p-4 lg:col-span-4 lg:row-start-2 flex flex-col gap-2 text-card-foreground "
            >
              <motion.div variants={childVariants}>
                <FireIcon className="w-12 h-12 text-primary" />
              </motion.div>
              <motion.h3
                variants={childVariants}
                className="text-xl font-semibold text-primary"
              >
                Our philosophy
              </motion.h3>
              <motion.p variants={childVariants}>
                We design with intent, crafting visuals that inspire trust and
                deliver value
              </motion.p>
            </motion.div>
            <motion.div
              variants={childVariants}
              className="bg-card-background p-4 lg:col-span-4 lg:row-start-2 flex flex-col gap-2 text-card-foreground"
            >
              <LightBulbIcon className="w-12 h-12 text-primary" />
              <motion.h3
                className="text-xl font-semibold text-primary"
                variants={childVariants}
              >
                Our approach
              </motion.h3>
              <motion.p variants={childVariants}>
                We partner2 closely with clients to create smart, scalable
                solutions that make an impact.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          exit="exit"
          className="bg-card-background p-4 lg:col-span-4 lg:row-start-2 flex flex-col gap-2 text-card-foreground text-sm [@media(min-width:1200px)]:hidden"
        >
          <motion.div variants={childVariants}>
            <FireIcon className="w-12 h-12 text-primary" />
          </motion.div>
          <motion.h3
            variants={childVariants}
            className="text-xl font-semibold text-primary"
          >
            Our philosophy
          </motion.h3>
          <motion.p variants={childVariants}>
            We design with intent, crafting visuals that inspire trust and
            deliver value
          </motion.p>
        </motion.div>
        <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          exit="exit"
          className="bg-card-background p-4 lg:col-span-4 lg:row-start-2 flex flex-col gap-2 text-card-foreground text-sm [@media(min-width:1200px)]:hidden"
        >
          <motion.div variants={childVariants}>
            <LightBulbIcon className="w-12 h-12 text-primary" />
          </motion.div>
          <motion.h3
            variants={childVariants}
            className="text-xl font-semibold text-primary"
          >
            Our approach
          </motion.h3>
          <motion.p variants={childVariants}>
            We partner closely with clients to create smart, scalable solutions
            that make an impact.
          </motion.p>
        </motion.div>
        <motion.div
          variants={imageParentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          exit="exit"
          className="w-full h-96 lg:h-auto md:col-span-2 lg:col-span-4 lg:row-span-2 relative [@media(min-width:1200px)]:h-[80vh] overflow-hidden"
        >
          <motion.div
            variants={imageChildVariants}
            className="w-full h-full relative"
          >
            <Image
              src="/images/about-us.webp"
              alt="About Us Image"
              fill
              priority
              className="object-cover object-bottom"
            />
          </motion.div>
          <motion.h3
            variants={childVariants}
            className="absolute bottom-8 left-4 w-3/4 text-3xl font-semibold text-white"
          >
            Build Future, Create Value
          </motion.h3>
        </motion.div>
      </motion.div>
    </MotionLayout>
  );
};

export default AboutUsSection;
