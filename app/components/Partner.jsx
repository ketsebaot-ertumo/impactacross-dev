// 'use client';

// import { useEffect, useRef, useState } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { getAllData } from "../lib/routes";
// import Loader from "./Loader";
// // import Loader from "./Loader";

// export default function Partners() {
//   const partnerData = [
//     {
//       title: "Partners",
//       description:
//         "At ImpactAcross, we believe sustainable impact comes from strong, collaborative partnerships that unite diverse expertise and perspectives. By working with global and local organizations, we co-create data-driven solutions that empower communities and drive lasting, inclusive development.",
//     },
//   ];

//   const [partners, setPartners] = useState(partnerData[0]);
//   const controls = useAnimation();
//   const containerRef = useRef();
//   const [direction, setDirection] = useState("right");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const {data: response} = await getAllData("sections/values/partner");
//         const [partnerData] = response;
//         if (partnerData) {
//             setPartners(partnerData);
//         }
//       } catch (err) {
//         // console.error("Failed to load data:", err);
//       }
//     };

//     fetchData();
//   }, []);

//   // if(!partnerData?.partners) return <Loader/>

//   useEffect(() => {
//     const scrollAnimation = () => {
//       const container = containerRef.current;
//       if (!container) return;

//       const maxScrollLeft = container.scrollWidth - container.clientWidth;
//       const scrollAmount = container.clientWidth / 2; 

//       if (direction === "right") {
//         controls.start({
//           x: -scrollAmount,
//           transition: { duration: 2, ease: "easeInOut" },
//         }).then(() => {
//           container.scrollLeft += scrollAmount;
//           if (container.scrollLeft >= maxScrollLeft) setDirection("left");
//         });
//       } else {
//         controls.start({
//           x: scrollAmount,
//           transition: { duration: 2, ease: "easeInOut" },
//         }).then(() => {
//           container.scrollLeft -= scrollAmount;
//           if (container.scrollLeft <= 0) setDirection("right");
//         });
//       }
//     };

//     const interval = setInterval(scrollAnimation, 2000);
//     return () => clearInterval(interval);
//   }, [direction, controls]);

//   return (
//     <section>
//       <div className="bg-gray-900 text-gray-400">
//         <div className="bg-gray-50 text-gray-600 py-12">
//           <div className="max-w-6xl mx-auto px-4">
//             <h2 className="text-4xl font-semibold text-center">{partners?.title}</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-800 mx-auto my-4 rounded" />
//             <p className="text-lg text-center max-w-4xl mx-auto my-6 italic hidden sm:block">
//               <i>{partners?.description}</i>
//             </p>

//             {!partners?.partners && (<Loader className="h-12 text-green" />)}

//             <motion.div
//               ref={containerRef}
//               className="flex overflow-x-auto gap-6 items-center pt-6 md:pt-12 overflow-y-hidden scrollbar-hide max-w-6xl mx-auto"
//               animate={controls}
//             >
//               {partners?.partners && partners?.partners.map((partner, index) => (
//                 <a
//                   key={index}
//                   href={partner.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-shrink-0"
//                 >
//                   <img
//                     src={partner.logo_url}
//                     alt={partner.name}
//                     className="h-24 w-auto object-contain transition rounded-xl hover:scale-110 duration-300"
//                   />
//                 </a>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { getAllData } from "../lib/routes";
import Loader from "./Loader";
// import Loader from "./Loader";

export default function Partners() {
  const partnerData = [
    {
      title: "Partners",
      description:
        "At ImpactAcross, we believe sustainable impact comes from strong, collaborative partnerships that unite diverse expertise and perspectives. By working with global and local organizations, we co-create data-driven solutions that empower communities and drive lasting, inclusive development.",
    },
  ];

  const [partners, setPartners] = useState(partnerData[0]);
  const controls = useAnimation();
  const containerRef = useRef();
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data: response} = await getAllData("sections/values/partner");
        const [partnerData] = response;
        if (partnerData) {
            setPartners(partnerData);
        }
      } catch (err) {
        // console.error("Failed to load data:", err);
      }
    };

    fetchData();
  }, []);

  // if(!partnerData?.partners) return <Loader/>

  useEffect(() => {
    const scrollAnimation = () => {
      const container = containerRef.current;
      if (!container) return;
  
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const scrollAmount = container.clientWidth / 2;
  
      const duration = 8; // ⬅ Set duration here (in seconds)
  
      if (direction === "right") {
        controls.start({
          x: -scrollAmount,
          transition: { duration, ease: "easeInOut" },
        }).then(() => {
          container.scrollLeft += scrollAmount;
          if (container.scrollLeft >= maxScrollLeft) setDirection("left");
        });
      } else {
        controls.start({
          x: scrollAmount,
          transition: { duration, ease: "easeInOut" },
        }).then(() => {
          container.scrollLeft -= scrollAmount;
          if (container.scrollLeft <= 0) setDirection("right");
        });
      }
    };
  
    const scrollDuration = 8 * 800 + 300; // ⬅ Interval = animation duration + a small buffer (300ms)
    const interval = setInterval(scrollAnimation, scrollDuration);
  
    return () => clearInterval(interval);
  }, [direction, controls]);  

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 text-gray-600 py-12">
        <h2 className="text-4xl font-semibold text-center">{partners?.title}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-800 mx-auto my-4 rounded" />
        <p className="text-lg text-center max-w-4xl mx-auto my-6 italic hidden sm:block">
          <i>{partners?.description}</i>
        </p>

        {!partners?.partners && (<Loader className="h-12 text-green" />)}

        {/* SCROLLING only applies here */}
        <div className="overflow-x-hidden overflow-y-hidden scrollbar-hide pt-6 md:pt-12">
          <motion.div
            ref={containerRef}
            className="flex gap-6 items-center"
            animate={controls}
          >
            {partners?.partners && partners?.partners.map((partner, index) => (
              <a
                key={index}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img
                  src={partner.logo_url}
                  alt={partner.name}
                  className="h-24 w-auto object-contain transition rounded-xl hover:scale-110 duration-300"
                />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* <div className="bg-gray-900 text-gray-400">
        <div className="bg-gray-50 text-gray-600 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-semibold text-center">{partners?.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-800 mx-auto my-4 rounded" />
            <p className="text-lg text-center max-w-4xl mx-auto my-6 italic hidden sm:block">
              <i>{partners?.description}</i>
            </p>

            {!partners?.partners && (<Loader className="h-12 text-green" />)}

            <motion.div
              ref={containerRef}
              className="flex overflow-x-auto gap-6 items-center pt-6 md:pt-12 overflow-y-hidden scrollbar-hide max-w-6xl mx-auto"
              animate={controls}
            >
              {partners?.partners && partners?.partners.map((partner, index) => (
                <a
                  key={index}
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0"
                >
                  <img
                    src={partner.logo_url}
                    alt={partner.name}
                    className="h-24 w-auto object-contain transition rounded-xl hover:scale-110 duration-300"
                  />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
