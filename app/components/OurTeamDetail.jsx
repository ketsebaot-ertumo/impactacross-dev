"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { useEffect } from "react";
import { Email } from "@mui/icons-material";

const teamMembers = [
  {
    id: 1,
    name: "Kassahun K. Suleman(PhD)",
    position: "Founder & CEO",
    image: "/ourTeam.png",
    description: 
      "Kassahun has a PhD in Development Studies from University of the Western Cape in South Africa.  With 13+ years of experience working in different countries around the world, he has deep domain expertise in a broad cross section of disciplines ranging from agricultural development and food systems, rural development, natural resources governance, climate change adaptation and rural economy. Having managed and executed large and complex rural development projects in Ethiopia and conducted scientific research in various African countries, he is now proud to consolidate his 13+ years of research and project/program management expertise with that of clients who have the same values and beliefs in evidence-based and high quality solutions.",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    email: "kassahunks@abbabor.com",
  },
  {
    id: 2,
    name: "Mr. Abraham Getachew",
    position: "Operation Manager",
    image: "/ourTeam.png",
    description: 
      "Mr. Abraham has more than 12 years of experience as organizational development expert, leadership and management advisor, country director for international organizations and project manager & coordinator for local organizations. Abraham is a great trainer, inspirational speaker, and strategist for both community and faith-based organizations in Ethiopia. With his leadership expertise, he has trained and inspired thousands across the country, initiated regional networks, and started indigenous business and ministry organizations. He&apos;s proven expertise in assessing the institutional and technical capacity of organizations, identifying gaps, and elevating the capacity of organizations in Ethiopia. Moreover, Mr. Abraham is known for both his expertise and passion of generously empowering people and organizations so that they may serve with excellence in their spheres of influence.",
    linkedin: "https://linkedin.com/in/janimage",
    twitter: "https://twitter.com/janesmith",
    email: "abrahamg@abbabor.com",
  },
  {
    id: 3,
    name: "Zerihun Berhane(PhD)",
    position: "Research Associate",
    image: "/ourTeam.png",
    description: "Zerihun Berhane has a PhD in Local Development and Global Dynamics from the University of Trento, Italy. He has two MA degrees&ndash;one in Globalization and Development from the University of Antwerp, Belgium and another in Development Studies with specialization in Rural livelihoods and Development from Addis Ababa University, Ethiopia. Zerihun has worked in various positions with organizations providing research, training, and capacity building services and undertaking qualitative and quantitative analyses and impact evaluation of programs. He has worked as a consultant in capacity assessment projects, conducted baseline surveys, mid-term and end-term evaluations, and served as a trainer for various organizations. His research areas include climate change adaptation, social protection, and livelihoods systems. So far, he has published six referred journal articles, a working paper, two blogs, several book reviews and technical reports and presented papers in many national and international conferences. Currently, Zerihun is working as an Assistant Professor in the Center for African and Oriental Studies at Addis Ababa University.",
    linkedin: "https://linkedin.com/in/janesmith",
    twitter: "https://twitter.com/janesmith",
    email: "test@abbabor.com",
  },
  {
    id: 4,
    name: "Ross Harvey",
    position: "Research Associate",
    image: "/ourTeam.png",
    description: "Ross graduated from the University of Cape Town (UCT) in 2005 with a Bachelor of Commerce in Philosophy, Politics and Economics, followed by an Honours and MPhil in Public Policy. He is currently pursuing a PhD in Economics at UCT. His research uses game theoretic analysis to explain why Angola and Nigeria diverge institutionally and display different political economy manifestations of the resource curse. From 2010-2011, he lectured in Political Economy at UCT&apos;s Political Studies Department. During 2012, Ross worked as a researcher in Parliament. Since June 2013, he has been a senior researcher with SAIIA&apos;s Governance of Africa&apos;s Resources Programme (GARP) in Cape Town. Ross hopes that his research will shape the institutional elements &ndash; norms, beliefs and rules &ndash; that motivate policymaker behaviour in a direction that benefits ordinary Africans.",
    linkedin: "https://linkedin.com/in/janesmith",
    twitter: "https://twitter.com/janesmith",
    email: "test@abbabor.com",
  },
  {
    id: 5,
    name: "Mr. Cyriaque Hakizimana",
    position: "Research Associate",
    image: "/ourTeam.png",
    description: "Mr Hakizimana is a researcher and PhD candidate in the Institute for Poverty, Land, and Agrarian Studies (PLAAS) at the University of Western Cape in South Africa. He is currently leading the Southern Africa Regional Hub of the Agricultural Policy Research in Africa (APRA) programme which aims to produce new information and insights into different pathways to agricultural commercialisation in order to assess their impacts and outcomes on rural poverty, women&apos;s and girl&apos;s empowerment and food and nutrition security in Sub-Saharan Africa. He has proven experience in conducting baseline studies, monitoring and evaluation assignments as well as policy and strategy analysis for national and international donors, government agencies and universities across Africa.",
    linkedin: "https://linkedin.com/in/janesmith",
    twitter: "https://twitter.com/janesmith",
    email: "test@abbabor.com",
  },
  {
    id: 6,
    name: "Elise van der Mark",
    position: "Research Associate",
    image: "/ourTeam.png",
    description: "Elise van der Mark is a Dutch anthropologist with a specialisation in Social Development in Sub-Saharan Africa. Elise obtained her Master degree Cum Laude in International Development Studies after her two bachelors in Cultural Anthropology and Visual Marketing. Before being awarded an EU scholarship for her PhD, she was self-employed conducting research, managing projects, and providing copy-writing services in Zimbabwe, South Africa and the Netherlands. She is currently pursuing her PhD at the University of the Western Cape (SA) in conjunction with the VU University Amsterdam (NL). Her focus lies on women empowerment and agency, gender relations, unpaid care work, and disability in poverty contexts. Particularly participatory action research has been at the forefront of all her research as she believes research should always be a vehicle for positive change.",
    linkedin: "https://linkedin.com/in/janesmith",
    twitter: "https://twitter.com/janesmith",
    email: "test@abbabor.com",
  },
];

export default function OurTeamDetail() {
  const { id } = useParams();
  const member = teamMembers.find((member) => member.id === parseInt(id));

  useEffect(() => {
    if (!member) notFound();
  }, [member]);

  if (!member) return notFound();
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-6 py-12 text-gray-600"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <Image
          src={member.image}
          alt={member.name}
          width={400}
          height={400}
          className="rounded-3xl shadow-xl object-cover"
        />

        <div>
          <h1 className="text-4xl font-semibold mb-2">{member.name}</h1>
          <p className="text-lg font-semibold mb-6">
            {member.position}
          </p>

          <div className="flex items-center gap-4 text-gray-600 mb-6">
            {member.linkedin && (
              <Link
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition"
              >
                <FaLinkedin size={24} />
              </Link>
            )}
            {member.twitter && (
              <Link
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500 hover:text-sky-600 transition"
              >
                <FaTwitter size={24} />
              </Link>
            )}
            {member.email && (
              <Link
                href={`mailto:${member.email}`}
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-700 transition"
              >
                <Email size={24}/>
              </Link>
            )}
          </div>

          <p className="leading-relaxed whitespace-pre-line text-justify">
            <i>{member.description}</i>
          </p>
        </div>
      </div>
    </motion.section>
  );

  // return (
  //   <>
  //     <motion.div
  //       initial={{ opacity: 0, y: 30 }}
  //       animate={{ opacity: 1, y: 0 }}
  //       transition={{ duration: 0.5 }}
  //       className="max-w-5xl mx-auto px-4 py-10"
  //     >
  //       <div className="flex flex-col md:flex-row items-center gap-8">
  //         <Image
  //           src={member?.image}
  //           alt={member?.name}
  //           width={300}
  //           height={300}
  //           className="rounded-2xl shadow-md w-64 h-64"
  //         />

  //         <div className="text-center md:text-left">
  //           <h2 className="text-3xl font-bold text-gray-800">{member?.name}</h2>
  //           <p className="text-primary font-medium mb-4">{member?.position}</p>

  //           {/* <p className="text-gray-600 leading-relaxed whitespace-pre-line mb-4">
  //             {member?.description}
  //           </p> */}

  //           <div className="flex items-center justify-center md:justify-start gap-4 mt-4 text-gray-600">
  //             {member?.linkedin && (
  //               <Link
  //                 href={member?.linkedin}
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //                 className="hover:text-blue-700 transition"
  //               >
  //                 <FaLinkedin size={24} />
  //               </Link>
  //             )}
  //             {member?.twitter && (
  //               <Link
  //                 href={member?.twitter}
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //                 className="hover:text-sky-500 transition"
  //               >
  //                 <FaTwitter size={24} />
  //               </Link>
  //             )}
  //             {member?.email && (
  //               <Link
  //                 href={`mailto:${member?.email}`}
  //                 className="hover:text-orange-600 transition text-sm"
  //               >
  //                 {member?.email}
  //               </Link>
  //             )}
  //           </div>

  //         </div>
  //       </div>
  //       <p className="text-gray-900 leading-relaxed whitespace-pre-line mb-4">
  //             {member?.description}
  //           </p>
  //     </motion.div>
  //   </>
  // );
}
