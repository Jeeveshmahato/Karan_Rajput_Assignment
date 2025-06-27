"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LandingSection() {
  return (
    <div className="relative  md:min-h-screen bg-white overflow-hidden">
      {/* Background angled image */}
      <div className="absolute top-0 right-0 h-[90vh] w-5/12 hidden md:block z-0 clip-angle">
        <Image
          src="/hero.png"
          alt="Angled Motorcycle"
          fill
          className="object-cover object-right"
        />
        {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" /> to fade image from bottom*/}
      </div>

      {/* Content container */}
      <div className="relative z-10 px-6 md:px-12">
        {/* Header */}
        <header className="flex justify-between items-center py-6">
          <div className="bg-gray-200 text-black px-4 py-1 text-xl font-bold rounded">
            LOGO
          </div>
          <nav className="hidden md:flex gap-8 text-blue-700 font-medium">
            <a href="#" className="hover:underline">
              Lorem Ipsum <span>▼</span>
            </a>
            <a href="#" className="hover:underline">
              Lorem Ipsum <span>▼</span>
            </a>
            <a href="#" className="hover:underline">
              Lorem Ipsum <span>▼</span>
            </a>
          </nav>
          <button className="bg-white text-black shadow px-4 py-1 rounded font-semibold hover:bg-gray-100">
            Sign In
          </button>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center min-h-[70vh]">
          <motion.div
            className="w-full md:w-1/2 py-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-5xl font-black mb-6 text-gray-900 leading-tight">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="mb-8 text-gray-800 text-base">
              Lorem ipsum dolor sit amet consectetur. Enim netus cras congue
              quis elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi
              platea morbi libero imperdiet neque. Justo suspendisse tristique
              posuere quis eget viverra. Nunc euismod ultrices etiam nulla
              habitasse.
            </p>
            <form className="flex gap-2 mb-4 max-w-md">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-700 text-white px-6 py-3 rounded font-semibold flex items-center gap-2 hover:bg-blue-800 transition"
              >
                Submit <span className="text-lg">→</span>
              </button>
            </form>
            <div className="text-blue-700 font-medium flex items-center gap-2">
              <span className="text-xl">✔</span>
              No credit card required!
            </div>
          </motion.div>

          {/* Spacer to leave room for angled image on right */}
          <div className="hidden md:block w-1/2" />
        </section>
      </div>
    </div>
  );
}
