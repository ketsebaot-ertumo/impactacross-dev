"use client";

import { motion } from "framer-motion";

export default function OurExpertise() {
  return (
    <section className="bg-gray-900 text-white py-16 px-8 md:px-12">
      <div className="max-w-screen-lg mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold pb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: false}}
        >
          Our Expertise
        </motion.h2>
        <div className="relative flex items-center justify-center mb-8 pt-2">
          <div className="w-32 border-t-2 border-gray-700"></div>
        </div>
        <motion.p
          className="text-center text-lg mt-4 md:leading-relaxed max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: false}}
        >
          CHED Solutions is powered by a network of results-oriented, passionate professionals who bring targeted expertise across sectors. We bring the right mix of knowledge and skills to every project, ensuring holistic, integrated responses that create measurable impact. We connect partners and clients with tailored guidance and knowledge to address the world&apos;s most critical issues.
        </motion.p>
      </div>
    </section>
  );
}
