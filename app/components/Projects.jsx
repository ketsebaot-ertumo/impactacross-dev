'use client';

import { ChevronDown, ChevronUp, Calendar, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllData } from '../lib/routes';
import Partners from './Partner';
import Loader from './Loader';
import Link from 'next/link';

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
        // console.error('Failed to load project data:', error);
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
                  <h3 className="text:lg sm:text-xl font-semibold text-white line-clamp-2">{project.title}</h3>
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
                          <User size={14} /><span className='line-clamp-1'>{project.client}</span>
                        </span>
                      )}
                      {project?.date && (
                        <span className="flex items-center gap-1 text-green-800">
                          <Calendar size={14} /> {new Date(project.date).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                    <p className='line-clamp-2'>{project.description}</p>
                    <Link href={`/projects/${project?.id}`}><span className='italic text-gray-600'>see more</span></Link>
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
