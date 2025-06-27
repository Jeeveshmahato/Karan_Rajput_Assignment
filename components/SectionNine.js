"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SectionNine = () => {
  return (
    <section className="bg-gray-50 my-[40px]">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        {/* Left Content */}
        <motion.div
  className="flex flex-col justify-center px-6 py-12"
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
>

        <div className="flex flex-col justify-center px-6 py-12">
          <p className="text-blue-600 font-semibold mb-2">Lorem Ipsum</p>
          <h2 className="text-3xl text-black md:text-4xl font-bold mb-4 leading-tight">
            Lorem Ipsum Dolor <br /> Sit Amet
          </h2>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi
            suspendisse convallis. Urna a urna lectus donec felis risus duis
            pellentesque. Pellentesque ultricies ipsum.
          </p>

          {/* App Store Buttons */}
          <div className="flex items-center gap-4">
            <Image
              src="/googleplay.png"
              alt="Get it on Google Play"
              width={150}
              height={50}
            />
            <Image
              src="/app.png"
              alt="Download on the App Store"
              width={150}
              height={50}
            />
          </div>
        </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
  className="relative w-full h-full min-h-[600px]"
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
  viewport={{ once: true, amount: 0.3 }}
>
  <Image
    src="/Photo.png"
    alt="Mobile App"
    fill
    className="object-cover"
  />
</motion.div>
      </div>
    </section>
  );
};

export default SectionNine;
