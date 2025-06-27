"use client";
import { motion } from "framer-motion";
const SectionEight = () => {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-24 bg-white text-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-12">
            REQUEST A QUOTE
          </h2>

          <form className="space-y-6">
            {/* Grid inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">E-mail</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Phone Number</label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Time Frame<span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none">
                  <option>Choose Time Frame</option>
                  {/* Add time frame options */}
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Size<span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none">
                  <option>Choose Size</option>
                  {/* Add size options */}
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Quantity<span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none">
                  <option>Choose Quantity</option>
                  {/* Add quantity options */}
                </select>
              </div>
            </div>

            {/* Project Description */}
            <div>
              <label className="block mb-1 font-medium">
                Please Describe Your Project
                <span className="text-red-500">*</span>
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-md px-4 py-2 min-h-[150px] resize-none focus:outline-none"
                placeholder="Choose a project type"
              />
            </div>

            {/* Terms */}
            <p className="text-sm text-center text-gray-600 mt-6">
              By submitting this form you agree to our{" "}
              <a href="#" className="text-blue-600 underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 underline">
                Privacy Policy
              </a>
              .
            </p>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="mt-6 bg-blue-700 text-white px-6 py-2 rounded-md shadow hover:bg-blue-800 transition-all"
              >
                Lorem Ipsum →
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionEight;
