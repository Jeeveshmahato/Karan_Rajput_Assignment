"use client";

import Image from "next/image";
import { motion } from "framer-motion";
const SectionTen = () => {
  return (
    <section className="bg-[#f4f8ff] py-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 md:px-8">
        {/* Left Section */}
        <motion.div
          className="flex flex-col justify-between h-full space-y-8"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col justify-between h-full space-y-8">
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase mb-2">
                No Limits
              </p>
              <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                Lorem ipsum dolor sit amet
              </h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae
                porttitor pharetra tempor quis arcu. Ipsum nullam.
              </p>
              <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md font-medium transition">
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
              </button>
            </div>

            {/* Left image column at bottom */}
            <div className="grid grid-cols-2 gap-2 mt-10">
              <div className="col-span-1">
                <Image
                  src="/img3.png"
                  alt="Bottom Left 1"
                  width={200}
                  height={200}
                  className="w-full h-auto object-cover rounded"
                />
              </div>
              <div className="col-span-1">
                <Image
                  src="/img4.png"
                  alt="Bottom Left 2"
                  width={200}
                  height={200}
                  className="w-full h-auto object-cover rounded"
                />
              </div>
            </div>

            {/* Center tall image */}
            {/* <div className="mt-6">
            <Image
              src="/img1.png"
              alt="Center Tall"
              width={400}
              height={600}
              className="w-full h-auto object-cover rounded"
            />
          </div> */}
          </div>
        </motion.div>

        {/* Right Section with image collage */}
        <motion.div
          className="grid grid-cols-2 gap-2 auto-rows-[150px]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-2 gap-2 auto-rows-[150px]">
            <Image
              src="/img2.png"
              alt="Right Top 1"
              width={400}
              height={200}
              className="w-full h-full object-cover rounded"
            />
            <Image
              src="/img5.png"
              alt="Right Top 2"
              width={400}
              height={200}
              className="w-full h-full object-cover rounded"
            />
            <Image
              src="/img6.png"
              alt="Right Mid"
              width={400}
              height={200}
              className="w-full h-full object-cover rounded"
            />
            <Image
              src="/mot2.png"
              alt="Right Bottom 1"
              width={400}
              height={200}
              className="w-full h-full object-cover rounded"
            />
            <Image
              src="/twowheeler.png"
              alt="Right Bottom 2"
              width={400}
              height={200}
              className="w-full h-full object-cover rounded"
            />
          </div>
        </motion.div>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/img1.png"
            alt="Center Tall"
            width={400}
            height={600}
            className="w-full h-auto object-cover rounded"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SectionTen;
