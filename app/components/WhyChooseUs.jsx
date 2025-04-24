"use client";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-900 text-gray-300 py-16 px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-semibold pb-2 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: false}}
        >
          Why Choose Us
        </motion.h2>
        <div className="relative flex items-center justify-center mb-8 pt-2">
          <div className="w-32 border-t-2 border-gray-600"></div>
        </div>
        <motion.p
          className="text-center text-lg mt-4 md:leading-relaxed max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: false}}
        >
            We strive to bring a solid analytical framework and generate reliable evidence to support our commitment for quality, learning, and knowledge management which enables us to work respectfully and collaboratively with the nuances associated with multiple geographies, cultures and socioeconomic settings.
        </motion.p>
      </div>
    </section>
  );
}
