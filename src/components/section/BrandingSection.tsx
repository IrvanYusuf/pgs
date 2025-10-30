import {
  childVariants,
  imageChildVariants,
  imageParentVariants,
  parentVariants,
} from "@/utils/AnimationVariants";
import { motion } from "framer-motion";
import Image from "next/image";
import ButtonPrimary from "../common/ButtonPrimary";
import { brandingData } from "@/data/branding-data";
import Link from "next/link";
const BrandingSection = () => {
  return (
    <div>
      <motion.div
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        exit="exit"
        className="flex flex-col items-center justify-center gap-4 py-12"
      >
        <motion.div
          variants={childVariants}
          className="flex flex-row items-center justify-center"
        >
          <h2 className="text-2xl font-semibold text-card-foreground text-center">
            BRANDING, WEBSITE & SEO
          </h2>
        </motion.div>
      </motion.div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-2 px-4 md:px-8 gap-4 lg:gap-6 xl:gap-8 [@media(min-width:2000px)]:w-[1920px] mx-auto">
        {brandingData.map((branding, index) => (
          <motion.div
            key={index}
            variants={imageParentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            exit="exit"
            className="relative overflow-hidden border-2 border-slate-100 h-[300px] md:h-[400px] lg:h-[400px] object-bottom"
          >
            <motion.div
              variants={imageChildVariants}
              className="relative w-full h-full object-cover"
            >
              <Image
                src={branding.image}
                alt={branding.alt}
                fill
                priority
                className="h-full w-full object-cover"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        id="contact-us"
        variants={imageParentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        exit="exit"
        className="w-full relative overflow-hidden mt-10"
      >
        <motion.div
          variants={imageChildVariants}
          className="w-full relative lg:h-screen h-[70vh] overflow-hidden"
        >
          <Image
            src="/images/closing-image.webp"
            alt="closing image"
            fill
            priority
            className="object-cover object-center"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex flex-col items-center justify-center gap-4">
          <p className="text-white/70 lg:text-xl text-center px-8">
            READY TO MAKE YOUR MOVE?
          </p>
          <h3 className="text-white text-4xl font-semibold text-center px-8 sm:px-24">
            Turn Your Vision Into a Living Brand
          </h3>
          <p className="text-white/70 text-center lg:text-xl px-8 sm:px-24">
            From concept to execution, we help you craft, automate, and grow.
            Let’s create something that moves people — and results.
          </p>
          <Link href={"/contact-us"}>
            <ButtonPrimary>[ CONTACT US ]</ButtonPrimary>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default BrandingSection;
