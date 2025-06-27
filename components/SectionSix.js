"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    image: "/monument.png",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    image: "/statue.png",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    image: "/girl.png",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    image: "/oranges.png",
  },
];

const SectionSix = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <h5 className="text-blue-600 font-semibold mb-2">
            Lorem ipsum dolor sit amet
          </h5>
          <h2 className="text-3xl md:text-4xl text-black font-bold mb-4">
            LOREM IPSUM DOLOR SIT
          </h2>
          <p className="text-gray-700 max-w-3xl">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
            facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget
            integer in nam. Non nisi iaculis at felis aliquet. Hendrerit tellus
            at purus lectus.
          </p>
        </div>

        {/* Cards */}
        <div className="pl-4 ml-3 sm:pl-12">
          {" "}
          {/* Adjust padding-left here */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
            {cards.map((card, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <motion.div
                  key={index}
                  className="rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="w-full h-48 relative">
                    <Image
                      src={card.image}
                      alt="Card image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{card.desc}</p>
                    <a
                      href="#"
                      className="text-blue-600 text-sm font-medium hover:underline"
                    >
                      Learn More
                    </a>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
