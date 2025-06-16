"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { getAllData } from "../lib/routes";

const ITEMS_PER_PAGE = 3;

const defaultData = [
  {
    image: "/home2.jpg",
    title: "Analysis",
    description: "We conduct rigorous research and assessments to generate evidence that illuminates the interconnected challenges across sectors like health, environment, climate change, and development.",
  },
  {
    image: "/home2.jpg",
    title: "Strategy",
    description: "Our strategies are crafted to be forward-thinking, innovative, and actionable, ensuring they are adaptable to changing needs while driving long-term impact.",
  },
  {
    image: "/home2.jpg",
    title: "Action",
    description: "We translate strategies into impactful, on-the-ground initiatives, ensuring communities and institutions are empowered to drive sustainable, lasting change.",
  },
];

export default function WhatWeDo() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activePage, setActivePage] = useState(0);
  const [data, setData] = useState(defaultData);
  const [section, setSection] = useState({});
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getAllData("what-we-do-images");
        if (data) {
          setSection(data[0]?.section || {});
          setData(data);
        }
      } catch (err) {
        console.error("Failed to load data:", err);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const paginatedData = data.slice(
    activePage * ITEMS_PER_PAGE,
    (activePage + 1) * ITEMS_PER_PAGE
  );

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const containerWidth = container.offsetWidth;
      container.scrollTo({
        left: index * containerWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const containerWidth = container.offsetWidth;
      const currentIndex = Math.round(container.scrollLeft / containerWidth);
      setActivePage(currentIndex);
    }
  };

  useEffect(() => {
    const currentScrollRef = scrollRef.current;
    currentScrollRef?.addEventListener("scroll", handleScroll);
    return () => currentScrollRef?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-gray-50 text-gray-700 border-t border-gray-200 py-16">
      <div className="max-w-6xl mx-auto text-center px-6 md:px-8">
        <h2 className="text-4xl font-bold">{section?.title || "What We Do"}</h2>
        <div className="w-32 border-t-2 border-gray-300 mx-auto my-4"></div>
        <p className="max-w-2xl mx-auto text-lg italic">
          {section?.description || "Our approach integrates research, strategy, and action to create meaningful and lasting impact."}
        </p>
      </div>

      {/* Desktop: Grid with Pagination */}
      <div className="hidden lg:block max-w-6xl mx-auto mt-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paginatedData.map((item, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-md group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={item?.image_url || item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:brightness-50 transition-all duration-500"
              />
              <div
                className={`absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6 transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActivePage(index)}
              className={`w-4 h-4 rounded-full ${
                activePage === index ? "bg-gray-200" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet: Horizontal Scroll with Snap */}
      <div className="lg:hidden mt-12">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-6 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden"
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              className={`min-w-[280px] w-[90%] max-w-sm flex-shrink-0 border border-gray-200 bg-white shadow-md rounded-2xl overflow-hidden p-4 snap-center`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={item?.image_url || item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-sm mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 gap-2">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full ${
                activePage === index ? "bg-primary" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}




// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { getAllData } from "../lib/routes";

// const aboutData = [
//   {
//     image: "/home2.jpg",
//     title: "Analysis",
//     description: "We conduct rigorous research and assessments to generate evidence that illuminates the interconnected challenges across sectors like health, environment, climate change, and development.",
//   },
//   {
//     image: "/home2.jpg",
//     title: "Strategy",
//     description: "Our strategies are crafted to be forward-thinking, innovative, and actionable, ensuring they are adaptable to changing needs while driving long-term impact.",
//   },
//   {
//     image: "/home2.jpg",
//     title: "Action",
//     description: "We translate strategies into impactful, on-the-ground initiatives, ensuring communities and institutions are empowered to drive sustainable, lasting change.",
//   },
// ];

// export default function WhatWeDo() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const scrollRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [data, setData] = useState(aboutData);
//   const [section, setSection] = useState({});
  
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const {data} = await getAllData("what-we-do-images");
//         if (data) {
//           setSection(data?.[0].section)
//           setData(data);
//         }
//       } catch (err) {
//         console.error("Failed to load data:", err);
//       }
//     };

//     fetchData();
//   }, []);
  
//   const scrollToIndex = (index) => {
//     if (scrollRef.current) {
//       const container = scrollRef.current;
//       const containerWidth = container.offsetWidth;
//       container.scrollTo({
//         left: index * containerWidth,
//         behavior: "smooth",
//       });
//     }
//   };
  
//   const handleScroll = () => {
//     if (scrollRef.current) {
//       const container = scrollRef.current;
//       const containerWidth = container.offsetWidth;
//       const currentIndex = Math.round(container.scrollLeft / containerWidth);
//       setActiveIndex(currentIndex);
//     }
//   };
  

//   useEffect(() => {
//     const currentScrollRef = scrollRef.current;
//     currentScrollRef?.addEventListener("scroll", handleScroll);
//     return () => currentScrollRef?.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section>
//       {/* Large Screen Layout */}
//       <div className="hidden lg:block bg-gray-50 text-gray-600 py-16 px-8 border-gray-300 border-t">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-bold">{section?.title || "What We Do"}</h2>
//           <div className="relative flex items-center justify-center mb-8 pt-4">
//             <div className="w-32 border-t-2 border-gray-300"></div>
//           </div>
//           <p className="max-w-2xl mx-auto text-lg">
//             <i>{section?.description || "Our approach integrates research, strategy, and action to create meaningful and lasting impact."}</i>
//           </p>
//         </div>

//         <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {data.map((item, index) => (
//             <motion.div
//               key={index}
//               className="relative overflow-hidden rounded-2xl shadow-lg group"
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               whileHover={{ scale: 1.05 }}
//             >
//               <img
//                 // src={item.image}
//                 src={item?.image_url || item.image}
//                 alt={item?.title || item.title}
//                 className="w-full h-64 object-cover transition-all duration-500 ease-in-out group-hover:brightness-50"
//               />
//               <div
//                 className={`absolute inset-0 flex flex-col justify-center items-center px-6 text-center transition-opacity duration-500 ease-in-out ${
//                   hoveredIndex === index ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 <h3 className="text-gray-300 text-xl font-semibold">{item.title}</h3>
//                 <p className="text-gray-300 mt-2">{item.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Small & Medium Screen Layout */}
//       <div className="block lg:hidden bg-gray-50 text-gray-600 border-gray-300 border-t">
//         <div className="max-w-6xl mx-auto text-center px-6 md:px-8 pt-12 md:pb-8">
//           <h2 className="text-4xl font-bold px-8">What We Do</h2>
//           <div className="relative flex items-center justify-center mb-8 pt-4">
//             <div className="w-32 border-t-2 border-gray-300"></div>
//           </div>

//           <div
//             ref={scrollRef}
//             className="flex md:grid md:grid-cols-2 gap-4 lg:hidden gap-6 overflow-x-auto md:overflow-visible scroll-smooth snap-x px-6 md:px-0 [&::-webkit-scrollbar]:hidden"
//           >
//             {data.map((item, index) => (
//               <motion.div
//                 key={index}
//                 // className="min-w-[280px] w-[90%] md:w-auto flex-shrink-0 border border-gray-400 shadow-lg rounded-2xl overflow-hidden p-6 snap-center"
//                 className={`min-w-[280px] w-[100%] max-w-sm flex-shrink-0 border border-gray-400 shadow-lg rounded-2xl overflow-hidden p-6 snap-center
//                   ${index === data.length - 1 && index % 2 === 0 ? "md:col-span-2 md:justify-self-center" : ""}
//                 `}
//                 initial={{ opacity: 0, y: 0 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-lg" />
//                 <h3 className="text-xl md:text-2xl font-semibold mt-4">{item.title}</h3>
//                 <p className="mt-2">{item.description}</p>
//               </motion.div>
//             ))}
//           </div>

//           {/* Dots Navigation */}
//           <div className="md:hidden flex justify-center gap-2 py-8">
//             {data.map((_, index) => (
//               <button
//                 key={index}
//                 className={`w-3 h-3 rounded-full transition-colors duration-300 ${
//                   activeIndex === index ? "bg-blue-500" : "bg-gray-500"
//                 }`}
//                 onClick={() => scrollToIndex(index)}
//               ></button>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
