"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getAllData } from "../lib/routes";

export default function OurExpertise() {
  const [data, setData] = useState({});
      
      useEffect(() => {
        const fetchData = async () => {
          try {
            const {data} = await getAllData("sections/values/expertise");
            if (data) {
              const [newData] = data;
              setData(newData);
            }
          } catch (err) {
            console.error("Failed to load data:", err);
          }
        };
    
        fetchData();
      }, []);

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
          {data?.title || "Our Expertise"}
        </motion.h2>
        
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-800 mx-auto my-4 rounded" />

        <motion.p
          className="text-center text-lg mt-4 md:leading-relaxed max-w-6xl mx-auto line-clamp-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: false}}
        >
          {data?.description || "Our Solutions is powered by a network of results-oriented, passionate professionals who bring targeted expertise across sectors. We bring the right mix of knowledge and skills to every project, ensuring holistic, integrated responses that create measurable impact. We connect partners and clients with tailored guidance and knowledge to address the world&apos;s most critical issues."}
        </motion.p>
      </div>
    </section>
  );
}
