'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';
import { getAllData } from '../lib/routes';
import Loader from './Loader';

const team = [
  {
    id: '1',
    name: "Kassahun K. Suleman(PhD)",
    position: "Founder & CTO",
    email: "kassahunks@impactacross.com",
    linkedin: "https://linkedin.com/in/",
    facebook: "https://facebook.com",
    image_url: "https://res.cloudinary.com/dq6mvqivd/image/upload/v1749649749/ImpactAcross/owner/ourTeam_bkkp8t.png",
  }
];

export default function OurTeam() {
  const scrollRef = useRef(null);
  const [currentScroll, setCurrentScroll] = useState(0);
  const scrollStep = 240; 
  const [data, setData] = useState(team);
  const [founderIndex, setFounderIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await getAllData("sections/values/team");
        const [result] = response;
        setData(result || fallback[0]);
        // Find founder index
        const founderIdx = (result?.teams || fallback[0].teams).findIndex(
          member => member.position.toLowerCase().includes('founder')
        );
        setFounderIndex(founderIdx >= 0 ? founderIdx : 0);
      } catch {
        setData(fallback[0]);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const container = scrollRef.current;

      const newScroll = container.scrollLeft + scrollStep;

      if (newScroll >= container.scrollWidth - container.clientWidth) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
        setCurrentScroll(0);
      } else {
        container.scrollTo({ left: newScroll, behavior: 'smooth' });
        setCurrentScroll(newScroll);
      }
    }, 3000); // Increased interval for slower scrolling

    return () => clearInterval(interval);
  }, []);

  return (
    <section id='teams' className="scroll-mt-24 py-16 bg-gray-100 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-600 mb-6">{data?.title || "Meet Our Team"}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-800 mx-auto my-4 rounded" />
        <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto px-2 italic">{data?.description || "ImpactAcross is powered by a passionate, diverse team dedicated to driving data-driven change across key development sectors. We combine local knowledge with global expertise to deliver innovative, impactful solutions grounded in integrity and partnership."}</p>

        {!data?.teams && (<Loader className="h-12 text-green" />)}

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar px-4 scroll-smooth items-center pt-2"
        >
          {data?.teams?.map((member, index) => (
            <Link 
              href={`/team-detail/${member?.id}`} 
              key={index} 
              className="block"
              // onClick={() => router.push(`/team-detail/${member?.id}`)}
            >
              <InViewZoomCard 
                member={member} 
                isFounder={index === founderIndex}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function InViewZoomCard({ member, isFounder }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ 
            scale: isFounder ? 1.18 : 1.15, 
            opacity: 1,
            zIndex: isFounder ? 10 : 1
          });
        } else {
          controls.start({ 
            scale: isFounder ? 1 : 0.9, 
            opacity: isFounder ? 0.9 : 0.8
          });
        }
      },
      {
        root: document.querySelector('.scroll-container'),
        threshold: 0.5,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [controls, isFounder]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ scale: isFounder ? 1 : 0.9, opacity: isFounder ? 0.9 : 0.8 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className={`${isFounder ? 'min-w-[280px] max-w-[280px]' : 'min-w-[200px] max-w-[200px]'} 
        bg-white rounded-xl p-6 shadow-md flex-shrink-0 relative hover:shadow-lg transition-shadow`}
    >
      {isFounder && (
        <div className="absolute top-1 right-0 bg-green-700 text-xs font-bold px-2 py-1 rounded-full">
          Founder
        </div>
      )}
      <Image
        src={member.image_url}
        alt={member.name}
        width={isFounder ? 120 : 100}
        height={isFounder ? 120 : 100}
        className="mx-auto rounded-full border-4 border-gray-200"
      />
      <h3 className={`mt-4 font-semibold ${isFounder ? 'text-xl text-gray-900' : 'text-gray-800'}`}>
        {member.name}
      </h3>
      <p className={`${isFounder ? 'text-base font-medium' : 'text-sm'} text-gray-500`}>
        {member.position}
      </p>
      <div className="flex justify-center gap-3 mt-3" onClick={(e) => e.stopPropagation()}>
        <span onClick={() => router.push(member.linkedin)}>
          <FaLinkedin className="text-blue-600 text-xl hover:text-blue-800" />
        </span>
        <span onClick={() => router.push(member.facebook)}>
          <FaFacebook className="text-blue-500 text-xl hover:text-blue-700" />
        </span>
      </div>
    </motion.div>
  );
}
