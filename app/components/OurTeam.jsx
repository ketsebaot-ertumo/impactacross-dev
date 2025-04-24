"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "Kassahun K. Suleman(PhD)",
    position: "Founder & CEO",
    image: "/ourTeam.png",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    email: "kassahunks@abbabor.com",
  },
  {
    id: 2,
    name: "Mr. Abraham Getachew",
    position: "Operation Manager",
    image: "/ourTeam.png",
    linkedin: "https://linkedin.com/in/janimage",
    twitter: "https://twitter.com/janesmith",
    email: "abrahamg@abbabor.com"
  },
  {
    id: 3,
    name: "Zerihun Berhane(PhD)",
    position: "Research Associate",
    image: "/ourTeam.png",
    linkedin: "https://linkedin.com/in/janesmith",
    twitter: "https://twitter.com/janesmith",
    email: "test@abbabor.com"
  },
  {
    id: 4,
    name: "Ross Harvey",
    position: "Research Associate",
    image: "/ourTeam.png",
    linkedin: "https://linkedin.com/in/janesmith",
    twitter: "https://twitter.com/janesmith",
    email: "test@abbabor.com"
  },
  {
    id: 5,
    name: "Mr. Cyriaque Hakizimana",
    position: "Research Associate",
    image: "/ourTeam.png",
    linkedin: "https://linkedin.com/in/janesmith",
    twitter: "https://twitter.com/janesmith",
    email: "test@abbabor.com"
  },
  {
    id: 6,
    name: "Elise van der Mark",
    position: "Research Associate",
    image: "/ourTeam.png",
    linkedin: "https://linkedin.com/in/janesmith",
    twitter: "https://twitter.com/janesmith",
    email: "test@abbabor.com"
  },
];

export default function OurTeam() {
  return (
    <section id="team" className="py-16 px-6 text-gray-600 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-semibold mb-4 text-gray-800"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          Meet Our Team
        </motion.h2>
        <div className="relative flex items-center justify-center mb-8 pt-2">
          <div className="w-32 border-t-2 border-gray-400"></div>
        </div>
        <motion.p
          className="text-lg mt-4 leading-relaxed max-w-3xl mx-auto text-gray-600"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <i>
            ADC prides itself on bringing to our clients a team of highly qualified, energetic, and dynamic professionals. We have over 40 roster-based temporary and full-time multidisciplinary professionals, each specializing in their respective fields.
          </i>
        </motion.p>

        <div className="flex flex-wrap justify-center gap-12 mt-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className={`bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 w-80 text-center
                ${index === teamMembers.length - 1 && index % 2 === 0 ? "max-w-sm md:col-span-2 md:justify-self-center" : ""}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.4 }}
              viewport={{ once: false }}
            >
              <Link href={`/team-detail/${member.id}`} className="block">
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-full border-4 border-gray-200 shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.position}</p>
              </Link>
              
              <div className="flex justify-center gap-6 mt-4">
                <Link href={member.linkedin} target="_blank" prefetch={true}>
                  <FaLinkedin className="text-blue-600 text-2xl hover:text-blue-800 transition-colors" />
                </Link>
                <Link href={member.twitter} target="_blank" prefetch={true}>
                  <FaTwitter className="text-blue-400 text-2xl hover:text-blue-600 transition-colors" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
