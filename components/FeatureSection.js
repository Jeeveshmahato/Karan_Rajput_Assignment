"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FeatureSection() {
  return (
    <section className="bg-white px-4 md:px-12 py-20">
      <div className="max-w-8xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Content */}
        <motion.div
          className="md:w-1/2 p-8 md:p-12 space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-blue-700 font-semibold">Lorem ipsum dolor sit</p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            LOREM IPSUM
            <br />
            DOLOR SIT AMET
          </h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
            facilisis donec dui...
          </p>

          {/* Feature Blocks */}
          <div className="space-y-6">
            {[
              {
                src: "/mot1.png",
                alt: "Feature 1",
                text: "Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.",
              },
              {
                src: "/mot2.png",
                alt: "Feature 2",
                text: "Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.",
              },
              {
                src: "/mot3.png",
                alt: "Feature 3",
                text: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.",
              },
            ].map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <Image
                  src={feature.src}
                  alt={feature.alt}
                  width={80}
                  height={80}
                  className="rounded object-cover"
                />
                <p className="text-gray-800">{feature.text}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-6 items-center pt-4">
            <button className="bg-blue-700 text-white px-6 py-3 rounded font-semibold flex items-center gap-2 hover:bg-blue-800 transition">
              Lorem Ipsum <span className="text-lg">→</span>
            </button>
            <div className="flex items-center text-blue-700 gap-2 font-medium">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.50246 4.25722C9.19873 3.4979 8.46332 3 7.64551 3H4.89474C3.8483 3 3 3.8481 3 4.89453C3 13.7892 10.2108 21 19.1055 21C20.1519 21 21 20.1516 21 19.1052L21.0005 16.354C21.0005 15.5361 20.5027 14.8009 19.7434 14.4971L17.1069 13.4429C16.4249 13.1701 15.6483 13.2929 15.0839 13.7632L14.4035 14.3307C13.6089 14.9929 12.4396 14.9402 11.7082 14.2088L9.79222 12.2911C9.06079 11.5596 9.00673 10.3913 9.66895 9.59668L10.2363 8.9163C10.7066 8.35195 10.8305 7.57516 10.5577 6.89309L9.50246 4.25722Z"
                  stroke="#043898"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>123456789</span>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="md:w-1/2 self-stretch relative hidden md:block"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="h-full relative">
            <Image
              src="/twowheeler.png"
              alt="Motorcycles"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      <div className="h-2 w-full bg-gradient-to-r from-blue-800 via-green-500 to-purple-800 rounded-b" />
    </section>
  );
}
