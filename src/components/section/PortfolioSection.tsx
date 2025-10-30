import { portfolioData } from "@/data/portfolio-data";
import {
  childVariants,
  imageChildVariants,
  imageParentVariants,
  parentVariants,
} from "@/utils/AnimationVariants";
import { motion } from "framer-motion";
import Image from "next/image";
import CustomVideoPlayer from "../common/CustomVideoPlayer";

const topPortfolios = portfolioData.slice(0, 2);
const downPortfolios = portfolioData.slice(2);

const PortfolioSection = () => {
  return (
    <div>
      <motion.div
        id="portfolio"
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        exit="exit"
        className="flex flex-col items-center justify-center gap-4 pt-12"
      >
        <motion.div
          variants={childVariants}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="bg-card-background py-1 px-6 font-semibold text-primary text-center">
            PORTFOLIO
          </h2>
        </motion.div>
        <motion.div
          variants={childVariants}
          className="flex flex-row items-center justify-center"
        >
          <h3 className="text-4xl font-semibold text-primary text-center">
            Real brands, real results
          </h3>
        </motion.div>
        <motion.div
          variants={childVariants}
          className="flex flex-row items-center justify-center"
        >
          <h3 className="text-2xl font-semibold text-card-foreground text-center">
            AI CONTENT CREATION
          </h3>
        </motion.div>
      </motion.div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-8 py-12 gap-4 lg:gap-6 xl:gap-8 [@media(min-width:2000px)]:w-[1920px] mx-auto">
        {topPortfolios.map((portfolioTop, index) => (
          <motion.div
            key={index}
            variants={imageParentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            exit="exit"
            className="overflow-hidden lg:col-span-2"
          >
            <motion.div
              variants={imageChildVariants}
              className="relative w-full md:h-[373px] aspect-video"
            >
              <CustomVideoPlayer
                src={portfolioTop.source}
                thumbnail={portfolioTop.thumnbail!}
              />
            </motion.div>
          </motion.div>
        ))}

        {downPortfolios.map((portfolioDown, index) => (
          <motion.div
            key={index}
            variants={imageParentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            exit="exit"
            className="overflow-hidden"
          >
            <motion.div
              variants={imageChildVariants}
              className="relative w-full h-[673px] aspect-video"
            >
              <Image
                style={{ objectFit: "cover", objectPosition: "top" }}
                src={portfolioDown.source}
                alt={`ai ${index + 3}`}
                fill
                priority
                className="h-full w-full object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
