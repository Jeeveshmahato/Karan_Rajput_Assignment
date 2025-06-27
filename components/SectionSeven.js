"use client";

import Image from "next/image";
import { motion } from "framer-motion";
const SectionSeven = () => {
  return (
    <section className="relative w-full h-auto text-white py-8 bg-white">
      {/* Background Image */}
      <div className="relative w-full h-[700px]">
        <Image
          src="/sect7.png"
          alt="Section Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />{" "}
        <div className="absolute top-10 left-6 md:left-12 lg:left-25 bg-gray-200 text-black px-4 py-2 font-bold w-fit">
          LOGO
        </div>
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-20 text-center items-center space-y-6">
          <motion.div
            className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-20 text-center items-center space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold max-w-3xl leading-tight uppercase">
              dolor sit amet consectetur. Quis adipiscing purus egestas aliquam
              viverra mi. dolor sit amet consectetur. Quis adipiscing
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionSeven;
