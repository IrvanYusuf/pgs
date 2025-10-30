import { CountUp } from "@/utils/AnimationUtils";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import ContactUsButton from "../form/ContactUsButton";
import { ServiceDataInterface } from "@/interfaces/service.interfaces";

const imageParentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
  exit: { opacity: 0 },
};
const imageChildVariants: Variants = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
  exit: { opacity: 0, scale: 1.2 },
};
export default function ServiceCard({
  tag,
  title,
  desc,
  image,
  points,
  count,
  countDesc,
  onButtonClick,
}: ServiceDataInterface) {
  return (
    <motion.div className="flex flex-col items-start justify-between text-card-foreground w-full h-full gap-4 bg-card-background p-4">
      <motion.div className="flex flex-col items-start justify-start gap-4 flex-1 overflow-hidden">
        <div className="flex flex-row items-center justify-start gap-4">
          <p>{tag}</p>
        </div>
        <motion.div
          variants={imageParentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          exit="exit"
          className="relative w-full aspect-video overflow-hidden"
        >
          <motion.div
            variants={imageChildVariants}
            className="w-full h-full relative"
          >
            <Image
              src={image}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        </motion.div>
        <div className="flex flex-row items-start justify-between gap-4">
          <div className="flex flex-col items-start justify-start gap-2 flex-3">
            <h2 className="text-3xl font-semibold text-primary">{title}</h2>
            <p>{desc}</p>
          </div>
          <div className="h-full border-r border-card-foreground/25" />
          <div className="flex flex-col items-start justify-start flex-2">
            <h3 className="text-[52px] font-thin m-0 p-0">
              <CountUp
                from={0}
                to={count}
                duration={2}
                ease="easeInOut"
                format={(n) => Math.round(n).toString()}
              />
              +
            </h3>
            <p className="text-sm text-card-foreground">{countDesc}</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-1">
          {points!.map((point, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-start gap-2"
            >
              <CheckCircleIcon className="w-6 h-6 text-primary" />
              <p>{point}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <ContactUsButton
        onButtonClick={onButtonClick ? onButtonClick : () => {}}
      />
    </motion.div>
  );
}
