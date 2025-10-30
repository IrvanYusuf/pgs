import { WhyWorkWithUsInterface } from "@/interfaces/why-work-with-us.interface";
import { motion } from "framer-motion";

export default function WhyWorkWithUs({ title, desc }: WhyWorkWithUsInterface) {
  return (
    <motion.div className="bg-card-background text-primary flex flex-col gap-8 px-8 py-12 h-full">
      <h2 className="text-[48px] font-semibold leading-none">{title}</h2>
      <p>{desc}</p>
    </motion.div>
  );
}
