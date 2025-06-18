'use client';

import { ChevronDown, ChevronUp, Calendar, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllData } from '../lib/routes';
import Partners from './Partner';
import Loader from './Loader';

export default function ProjectsAndPartners() {
  const [openIndex, setOpenIndex] = useState(null);
  const [projectsData, setProjectsData] = useState({
    title: "Projects Overview",
    description: "With our deep industry expertise, multi-disciplinary capabilities and rigorous analysis, we deliver high-quality technical studies, evaluations, and project design services.",
    projects: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await getAllData('sections/values/project');
        const [data] = response;
        if (data) setProjectsData(data);
      } catch (error) {
        console.error('Failed to load project data:', error);
      }
    };

    fetchData();
  }, []);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);
  const [expanded, setExpanded] = useState(false);

  return (
    <section id='projects' className="scroll-mt-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto py-16 px-6 lg:px-0">
        <h2 className="text-4xl font-semibold text-center mb-4 sm:mb-8">{projectsData.title}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-800 mx-auto my-4 mb-8 rounded" />
        <div className="mb-6 hidden md:flex pt-2 max-w-4xl mx-auto text-center py-4 text-lg">
          <i>
            {projectsData?.description || `With our deep industry expertise, multi-disciplinary capabilities and rigorous analysis,
            we deliver high-quality technical studies, evaluations, and project design services.`}
          </i>
        </div>
        
        {!projectsData?.projects && (<Loader className="h-12 text-green" />)}

        {/* Timeline-style Projects */}
        <div className="space-y-8">
          {projectsData?.projects?.map((project, i) => (
            <div
              key={i}
              className="relative border-l-4 border-primary pl-6 pb-6 group hover:border-green-800 transition-all"
            >
              <div
                className="absolute left-[-10px] top-1 w-4 h-4 bg-green-800 rounded-full border-2 border-white z-10"
              />
              <button
                onClick={() => toggle(i)}
                className="w-full text-left focus:outline-none"
              >
                <div className="flex justify-between items-center space-x-1">
                  <h3 className="text:lg sm:text-xl font-semibold text-white">{project.title}</h3>
                  {openIndex === i ? <ChevronUp /> : <ChevronDown />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 text-gray-300"
                  >
                    <div className="flex items-center text-sm mb-1 gap-3">
                      {project?.client && (
                        <span className="flex items-center gap-1 text-green-800">
                          <User size={14} /> {project.client}
                        </span>
                      )}
                      {project?.date && (
                        <span className="flex items-center gap-1 text-green-800">
                          <Calendar size={14} /> {new Date(project.date).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                    <p>{project.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee scroll animation */}
      <style jsx>{`
        @keyframes scroll-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-slow {
          display: flex;
          width: max-content;
          animation: scroll-slow 30s linear infinite;
        }
      `}</style>
    </section>
  );
}



// 'use client';

// import { ChevronDown, ChevronUp } from "lucide-react";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { getAllData } from "../lib/routes";

// export default function ProjectsAndPartners() {
//   const projectData = [
//     {
//       title: "Projects Overview",
//       description: "With our deep industry expertise, multi-disciplinary capabilities and rigorous analysis, we deliver high-quality technical studies, evaluations, and project design services.",
//       projects: [
//         {
//           title: "Food Security, Natural Resources Governance and Sustainable Rural Development in Ethiopia",
//           client: "Protestant Agency for Diakonia and Development (Bread for the World)",
//           description: "A systematic review providing a comprehensive overview of food security, natural resources governance, and rural development in Ethiopia.",
//           date: Date.now(),
//         },
//         {
//           title: "Upscaling climate-smart agriculture in sub-Saharan Africa",
//           client: "South African Institute of International Affairs (SAIIA)",
//           description: "Policy insight exploring barriers to CSA practices and highlighting actions to promote them regionally.",
//           date: Date.now(),
//         },
//         {
//           title: "The interface between ABS and Biotrade in Namibia",
//           client: "SAIIA Occasional Paper",
//           description: "Study exploring the Namibian environmental policy context and synergy between biotrade and ABS under the CBD and Nagoya Protocol.",
//           date: Date.now(),
//         },
//       ]
//     }
//   ]

//   const logos = [
//     '/p1.png',
//     '/p2.png',
//     '/p3.png',
//     '/p4.png',
//     '/p5.png',
//     '/p9.png',
//     '/p7.png',
//     '/p8.png',
//     '/p6.png',
//   ];

//   const [openSection, setOpenSection] = useState(null);
//   const [projects, setProjects] = useState(projectData);
  
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const {data: response} = await getAllData("sections/values/project");
//         const [projectsData] = response;
//         if (projectsData) {
//           setProjects(projectsData);
//         }
//       } catch (err) {
//         console.error("Failed to load data:", err);
//       }
//     };

//     fetchData();
//   }, []);

//   const toggleSection = (index) => {
//     setOpenSection((prev) => (prev === index ? null : index));
//   };

//   return (
//     <section>
//       <div className="bg-gray-900 text-gray-400">

//         {/* Project List */}
//         <div className="max-w-6xl mx-auto py-12 px-8 lg:px-0 text-left">
//           <h2 className="text-4xl font-semibold text-center md:text-left pb-4">{projects?.title || "Projects Overview"}</h2>
//           <div className="relative flex md:hidden items-center py-4 justify-center md:justify-start md:pl-12">
//             <div className="w-40 border-t-2 border-gray-600"></div>
//           </div>
//           <div className="mb-6 hidden md:flex pt-2 max-w-[70%]">
//             <i>
//              {projects?.description || `With our deep industry expertise, multi-disciplinary capabilities and rigorous analysis,
//               we deliver high-quality technical studies, evaluations, and project design services.`}
//             </i>
//           </div>
          
//           <div className="grid grid-cols-1 items-center pt-4">
//             <div>
//               {projects?.projects?.map((project, index) => (
//                 <div key={index} className="mb-4 border p-2">
//                   <button
//                     onClick={() => toggleSection(index)}
//                     className="w-full flex justify-between items-center text-lg font-semibold focus:outline-none"
//                   >
//                     {project.title}
//                     {openSection === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//                   </button>
//                   {openSection === index && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       className="mt-2 text-gray-600"
//                     >
//                       {/* <ul className="list-disc pl-10 text-left">
//                         <li className="mt-1">{project?.client}</li>
//                         <li className="mt-1">{project?.description}</li>
//                         <li className="mt-1">{project?.date}</li> */}
//                         {/* {project?.points?.map((text, idx) => (
//                           <li key={idx} className="mt-1">{text}</li>
//                         ))} */}
//                       {/* </ul> */}
//                     </motion.div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* <div className="bg-gray-50 text-gray-600 py-12">
//           <div className="max-w-6xl mx-auto px-4">
//             <h2 className="text-4xl font-semibold text-center">Partners</h2>
//             <div className="relative flex items-center justify-center py-4">
//               <div className="w-32 border-t-2 border-gray-300"></div>
//             </div>
//             <p className="hidden md:flex text-lg text-center max-w-3xl mx-auto">
//               <i>
//                 With our deep industry expertise, multi-disciplinary capabilities and rigorous analysis,
//                 we deliver high-quality technical studies, evaluations, and project design services.
//               </i>
//             </p>

//             <div className="flex flex-wrap justify-center gap-6 items-center pt-6 md:pt-12">
//               {logos.map((src, index) => (
//                 <img
//                   key={index}
//                   src={src}
//                   alt={`Partner logo ${index + 1}`}
//                   className="h-22 w-auto object-contain transition rounded-xl"
//                 />
//               ))}
//             </div>
//           </div>
//         </div> */}

//       </div>
//     </section>
//   );
// }




// // 'use client';

// // import { ChevronDown, ChevronUp } from "lucide-react";
// // import { useState } from "react";
// // import { motion } from "framer-motion";

// // export default function ProjectsAndPartners() {
// //   const projects = [
// //     {
// //       title: "Food Security, Natural Resources Governance and Sustainable Rural Development in Ethiopia",
// //       date: "May 2018",
// //       client: "Protestant Agency for Diakonia and Development (Bread for the World)",
// //       description:
// //         "A systematic review providing a comprehensive overview of food security, natural resources governance, and rural development in Ethiopia."
// //     },
// //     {
// //       title: "Upscaling climate-smart agriculture in sub-Saharan Africa",
// //       client: "South African Institute of International Affairs (SAIIA)",
// //       description:
// //         "Policy insight exploring barriers to CSA practices and highlighting actions to promote them regionally."
// //     },
// //     {
// //       title: "The interface between ABS and Biotrade in Namibia",
// //       client: "SAIIA Occasional Paper",
// //       description:
// //         "Study exploring the Namibian environmental policy context and synergy between biotrade and ABS under the CBD and Nagoya Protocol."
// //     },
// //     {
// //       title: "Balancing conservation and mining in South-West Ethiopia",
// //       client: "SAIIA (funded by Norwegian MFA)",
// //       description:
// //         "A policy paper examining socio-ecological effects of mining and conservation, offering strategic recommendations."
// //     },
// //     {
// //       title: "External evaluation of 'From Local Voices to Regional Policies'",
// //       date: "July 2018",
// //       client: "Bread for the World / PADD",
// //       description:
// //         "Evaluation of HARP Phase I & II implemented in Kenya, Uganda, Ethiopia, and Sudan, measuring project impact and sustainability."
// //     },
// //     {
// //       title: "The Situation, Needs, and Prospects of Rural Youth in Southwest Ethiopia",
// //       date: "June 2018",
// //       client: "The David and Lucile Packard Foundation",
// //       description:
// //         "Research uncovering development challenges facing rural youth and strategies to improve their livelihoods."
// //     },
// //     {
// //       title: "Selected developing country experiences in addressing extreme poverty",
// //       date: "July 2017",
// //       client: "UNFAO, University of the Western Cape & SADC Research Centre",
// //       description:
// //         "A comparative study on poverty reduction strategies in Ethiopia, Ghana, and China and the role of social protection."
// //     },
// //     {
// //       title: "Baseline Survey of Community HIV Care and Treatment Activity",
// //       points: [
// //         "date: April 2018",
// //         "client: Joshua Social Development PLC",
// //         "description: Benchmarking success indicators for a community HIV treatment project in Ethiopia."
// //       ]
// //     },
// //     {
// //       title: "Terminal Evaluation of Gambella Zuria Food Security Improvement Project",
// //       points: [
// //         "date: January 2018",
// //         "client: Bread for the World &ndash; Ethiopia",
// //         "description: Evaluation on project efficiency, impact and recommendations for future programming."
// //       ]
// //     },
// //     {
// //       title: "Political reform in Ethiopia and its impacts on economy and civil society",
// //       points:[
// //         "date: November 2018",
// //         "client: The Protestant Agency for Diakonia and Development",
// //         "description:Systematic analysis of Ethiopia&apos;s political reform and its broader social implications."
// //       ]
// //     },
// //     {
// //       title: "Churches and socio-political transformation of Ethiopia",
// //       points: [
// //         "date: November 2018",
// //         "client: The Protestant Agency for Diakonia and Development",
// //         "description: A review paper on the role of churches in social and political change in Ethiopia."
// //       ]
// //     }
// //   ];

// //   const logos = [
// //     '/p1.png',
// //     '/p2.png',
// //     '/p3.png',
// //     '/p4.png',
// //     '/p5.png',
// //     '/p9.png',
// //     '/p7.png',
// //     '/p8.png',
// //     '/p6.png',
// //   ];

// //   const [openSection, setOpenSection] = useState(null);

// //   const toggleSection = (index) => {
// //     setOpenSection((prev) => (prev === index ? null : index));
// //   };

// //   return (
// //     <section>
// //       <div className="bg-gray-900 text-gray-400">

// //         {/* Project List */}
// //         <div className="max-w-6xl mx-auto py-6 px-8 lg:px-0 text-left">
// //           <h2 className="text-4xl font-semibold mb-8">Projects Overview</h2>
// //           <div className="relative flex items-center justify-center pt-4">
// //             <div className="w-32 border-t-2 border-gray-200 text-gray-100"></div>
// //           </div>
          
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
// //             <div>
// //               <p className="mb-6">
// //                 <i>ADC provides a full spectrum of consulting, research and advisory services for civil societies, the private sector, donor agencies and government departments. Our expertise and knowledge are wide reaching and we strive to develop innovative and strategic solutions to achieve the maximum value for our clients.</i>
// //               </p>
// //               {projects?.map((project, index) => (
// //                 <div key={index} className="mb-4 border-b pb-2">
// //                   <button
// //                     onClick={() => toggleSection(index)}
// //                     className="w-full flex justify-between items-center text-lg font-semibold focus:outline-none"
// //                   >
// //                     {project.title}
// //                     {openSection === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
// //                   </button>
// //                   {openSection === index && (
// //                     <motion.div
// //                       initial={{ opacity: 0, height: 0 }}
// //                       animate={{ opacity: 1, height: "auto" }}
// //                       exit={{ opacity: 0, height: 0 }}
// //                       className="mt-2 text-gray-600"
// //                     >
// //                       <ul className="list-disc pl-10 text-left">
// //                         {project?.points?.map((text, idx) => (
// //                           <li key={idx} className="mt-1">{text}</li>
// //                         ))}
// //                       </ul>
// //                     </motion.div>
// //                   )}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* <div className="max-w-6xl mx-auto py-12 text-gray-400 px-8 lg:px-0 grid grid-cols-1">
// //           <h2 className="text-4xl font-semibold text-center mb-8">Projects</h2>
// //           <div className="relative flex items-center justify-center pt-4">
// //             <div className="w-32 border-t-2 border-gray-200 text-gray-100"></div>
// //           </div> */}

// //           {/* {projects.map((project, idx) => (
// //             <div
// //               key={idx}
// //               className="p-6 rounded-2xl hover:shadow-lg transition border border-gray-50"
// //             >
// //               <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
// //               {project.client && (
// //                 <p className="text-sm mb-1">
// //                   <span className="font-medium">Client:</span> {project.client}
// //                 </p>
// //               )}
// //               {project.date && (
// //                 <p className="text-sm mb-1">
// //                   <span className="font-medium">Date:</span> {project.date}
// //                 </p>
// //               )}
// //               <p className="">{project.description}</p>
// //             </div>
// //           ))}*/}
// //         {/* </div>  */}

// //         <div className="bg-gray-50 text-gray-600 py-12">
// //           <div className="max-w-6xl mx-auto px-4">
// //             <h2 className="text-4xl font-semibold text-center mb-8">Partners</h2>
// //             <div className="relative flex items-center justify-center pt-4">
// //               <div className="w-32 border-t-2 border-gray-200"></div>
// //             </div>
// //             <p className="text-lg text-center max-w-3xl mx-auto mb-12">
// //               With our deep industry expertise, multi-disciplinary capabilities and rigorous analysis,
// //               we deliver high-quality technical studies, evaluations, and project design services.
// //             </p>

// //             {/* Partner Logos */}
// //             <div className="flex flex-wrap justify-center gap-6 items-center mb-16">
// //               {logos.map((src, index) => (
// //                 <img
// //                   key={index}
// //                   src={src}
// //                   alt={`Partner logo ${index + 1}`}
// //                   className="h-22 w-auto object-contain transition rounded-xl"
// //                 />
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }
