"use client";
import { motion } from "framer-motion";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur",
    answer: "",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="bg-[#f9f9f9] py-16">
      <motion.div
        className="max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          FREQUENTLY ASKED QUESTIONS (FAQS)
        </h2>

        <div className="divide-y divide-gray-300">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="py-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div key={index} className="py-6">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleIndex(index)}
                >
                  <h3 className="text-base font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  {activeIndex === index ? (
                    <Minus className="w-5 h-5 text-black" />
                  ) : (
                    <Plus className="w-5 h-5 text-black" />
                  )}
                </div>

                {activeIndex === index && faq.answer && (
                  <p className="text-gray-700 mt-3 text-sm">{faq.answer}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FaqSection;
