"use client";
import { motion } from "framer-motion";
const SectionEleven = () => {
  return (
    <section className="bg-white py-20 text-center">
      {/* Logo */}
     <motion.div
  className="mb-6"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.4 }}
>

        <div className="inline-block bg-gray-300 px-6 py-3 text-2xl font-bold text-black">
          LOGO
        </div>
   </motion.div>

   <motion.h2
  className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
  viewport={{ once: true, amount: 0.4 }}
>
  LOREM IPSUM DOLOR SIT AMET <br />
  CONSECTETUR. DUI.
</motion.h2>

<motion.p
  className="text-gray-700 text-lg max-w-2xl mx-auto mb-8"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
  viewport={{ once: true, amount: 0.4 }}
>
  Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
</motion.p>

<motion.button
  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition shadow-md"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
  viewport={{ once: true, amount: 0.4 }}
>
  Loerum Ipsum
  <svg
    className="ml-2 w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</motion.button>
    </section>
  );
};

export default SectionEleven;
