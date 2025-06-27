"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { src: "/9.png", alt: "Hero" },
  { src: "/10.png", alt: "Honda" },
  { src: "/7.png", alt: "Bajaj" },
  { src: "/2.png", alt: "TVS" },
  { src: "/1.png", alt: "Royal Enfield" },
  { src: "/5.png", alt: "Yamaha" },
  { src: "/11.png", alt: "KTM" },
  { src: "/6.png", alt: "Ather" },
  { src: "/4.png", alt: "Ola Electric" },
  { src: "/12.png", alt: "Revolt" },
  { src: "/3.png", alt: "Ultraviolette" },
  { src: "/8.png", alt: "Tork Motors" },
];

const SectionFive = () => {
  return (
    <section className="py-16 bg-white text-black text-center">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          LOREM IPSUM DOLOR SIT AMET <br className="hidden md:block" />
          CONSECTETUR. COMMODO LEO AMET.
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
         {logos.map((logo, index) => (
  <motion.div
    key={index}
    className="flex items-center justify-center"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.5,
      ease: "easeOut",
      delay: index * 0.05,
    }}
    viewport={{ once: true, amount: 0.2 }}
  >
    <Image
      src={logo.src}
      alt={logo.alt}
      width={100}
      height={50}
      className="object-contain max-h-12"
    />
  </motion.div>
))}

        </div>
      </div>
    </section>
  );
};

export default SectionFive;
