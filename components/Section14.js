"use client";

import { motion } from "framer-motion";

import Image from "next/image";
//md:px-12
export default function Section14() {
  return (
    <section className="py-16 bg-white my-[70px] px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left Section */}
        <div className="max-w-xl">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              LOREM IPSUM DOLOR SIT AMET
            </h2>

            {/* Tabs */}
            <div className="flex border rounded overflow-hidden mb-6 w-full max-w-md">
              <button className="flex-1 px-4 py-2 bg-gray-100 font-semibold text-gray-800">
                Research
              </button>
              <button className="flex-1 px-4 py-2 bg-white font-semibold text-gray-800 border-l">
                Plan
              </button>
              <button className="flex-1 px-4 py-2 bg-white font-semibold text-gray-800 border-l">
                Design
              </button>
            </div>

            {/* Description Text */}
            <p className="text-gray-600 mb-4">
              Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
              Neque pellentesque donec et tellus ac varius tortor, bibendum.
              Nulla felis ac turpis at amet. Purus malesuada placerat arcu at
              enim elit in accumsan.
            </p>

            {/* Link */}
            <a
              href="#"
              className="text-blue-600 font-medium flex items-center gap-1 hover:underline"
            >
              Check tools
              <span>→</span>
            </a>
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="flex-shrink-0">
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/sect14.png"
              alt="Handshake"
              width={460}
              height={300}
              className="rounded shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
