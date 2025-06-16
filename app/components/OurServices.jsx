"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllData } from "../lib/routes";

const image = "https://res.cloudinary.com/dq6mvqivd/image/upload/v1749803292/ImpactAcross/owner/test_g250va.jpg";
const serviceData = [
  {
    title: "",
    description:"",
    services: [
      {
        image,
        title: "Surveys & statistical analysis",
        content: "Members of our statistical teams are also members of the relevant internationally recognised statistical and actuarial associations. We conduct relevant statistical tests and analysis to ensure the most useful and appropriate insights are captured. We present our findings in ways that engage a broad variety of readers including those who are more and less comfortable with statistics.",
        slug: "survey-statistical-analysis",
      },
      {
        image,
        title: "Programme Monitoring & Evaluation",
        content: "The growing demands for Monitoring and Evaluation in Africa are driven by civil society organisations and decision-makers in the region increasingly wanting to use evidence.",
        slug: "programme-monitoring-evaluation",
      },
      {
        image,
        title: "Strategy & Programme Planning ",
        content: "The emphasis on achieving development outcomes means that development strategies need to be clearly articulated.",
        slug: "strategy-programme-planning",
      },
      {
        image,
        title: "Training & Capacity Building",
        content: "ADC offers training solutions and interventions that are designed to achieve positive impact and result.",
        slug: "training-capacity-building",
      },
      {
        image,
        title: "Strategy & Programme Planning ",
        content: "The emphasis on achieving development outcomes means that development strategies need to be clearly articulated.",
        slug: "strategy-programme-planning",
      },
    ]

  },
]
// const Servicedata = [
//     {
//       image,
//       title: "Surveys & statistical analysis",
//       content: "Members of our statistical teams are also members of the relevant internationally recognised statistical and actuarial associations. We conduct relevant statistical tests and analysis to ensure the most useful and appropriate insights are captured. We present our findings in ways that engage a broad variety of readers including those who are more and less comfortable with statistics.",
//       slug: "survey-statistical-analysis",
//     },
//     {
//       image,
//       title: "Programme Monitoring & Evaluation",
//       content: "The growing demands for Monitoring and Evaluation in Africa are driven by civil society organisations and decision-makers in the region increasingly wanting to use evidence.",
//       slug: "programme-monitoring-evaluation",
//     },
//     {
//       image,
//       title: "Strategy & Programme Planning ",
//       content: "The emphasis on achieving development outcomes means that development strategies need to be clearly articulated.",
//       slug: "strategy-programme-planning",
//     },
//     {
//       image,
//       title: "Training & Capacity Building",
//       content: "ADC offers training solutions and interventions that are designed to achieve positive impact and result.",
//       slug: "training-capacity-building",
//     },
//     {
//       image,
//       title: "Strategy & Programme Planning ",
//       content: "The emphasis on achieving development outcomes means that development strategies need to be clearly articulated.",
//       slug: "strategy-programme-planning",
//     },
// ];

export default function OurSectorialFocus() {

    const [data, setData] = useState(serviceData);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const {data: res} = await getAllData("sections/values/service");
          const [data] = res;
          if (data) {
            setData(data);
          }
        } catch (err) {
          console.error("Failed to load data:", err);
        }
      };
  
      fetchData();
    }, []);

    return (
      <section id="services" className="scroll-mt-24 bg-gray-50 text-gray-600 md:pt-6 pt-4">
        <div className="max-w-6xl mx-auto py-12 px-2 md:px-8">
          <h2 className="text-4xl font-bold text-center">{data?.title || "Our Services"}</h2>
          <div className="relative flex items-center justify-center pt-4">
            <div className="w-32 border-t-2 border-gray-300"></div>
          </div>
          <p className="md:leading-relaxed max-w-4xl mx-auto text-center my-6 pb-8 text-lg">
            <i>{data?.description || "Our services are informed by our professional orientation and experience both in Ethiopia and abroad. We have specialized in the following key development sectors."}</i>
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {data?.services?.map((item, index) => (
            <motion.div
                key={index}
                id={item.id}
                // ${index === data.length - 1 && index % 2 === 0 ? "md:col-span-2 lg:col-span-3 md:justify-self-center" : ""}
                className={`max-w-sm w-[90%] border border-gray-300 shadow-lg rounded-4xl overflow-hidden p-6 mx-6 md:mx-0 hover:shadow-2xl transition-all duration-300`}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={`/services/${item?.id || item.slug}`} className="text-blue-600">
                  <div className="flex justify-center">
                    <img src={item?.image_url || item.image} alt={item?.title} className="rounded-lg"/>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mt-4">{item?.title}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
}  
