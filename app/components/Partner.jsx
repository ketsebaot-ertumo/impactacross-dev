'use client';

import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAllData } from "../lib/routes";

export default function Partners() {
  const partnerData = [
    {
      title: "Partners",
      description: "With our deep industry expertise, multi-disciplinary capabilities and rigorous analysis, we deliver high-quality technical studies, evaluations, and project design services.",
      partners: [
        {
            name: "EOC-DICAC",
            logo_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fet.linkedin.com%2Fcompany%2Feoc-dicac&psig=AOvVaw12CBHQNRw2BD2jwdN7QmlR&ust=1749750955453000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjr39346Y0DFQAAAAAdAAAAABAE",
          },
          {
            name: "EECMY DASSC",
            logo_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdata.unhcr.org%2Fen%2Fpartners%2Fview%2F770&psig=AOvVaw2Y2DccFX_Xg0VvQ9VjM1bn&ust=1749751076500000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLDTsvP46Y0DFQAAAAAdAAAAABAE",
          },
          {
            name: "NABU ",
            logo_url: "https://www.google.com/imgres?q=NABU&imgurl=https%3A%2F%2Fwww.birdlife.org%2Fwp-content%2Fuploads%2F2021%2F04%2FGermany.png&imgrefurl=https%3A%2F%2Fwww.birdlife.org%2Fpartners%2Fgermany-nature-and-biodiversity-conservation-union-nabu%2F&docid=jpyOfBOvKtM4nM&tbnid=a67GGaf9h-6MpM&vet=12ahUKEwiTtLH6-OmNAxVyRfEDHdHRG4MQM3oECBcQAA..i&w=300&h=300&hcb=2&ved=2ahUKEwiTtLH6-OmNAxVyRfEDHdHRG4MQM3oECBcQAA",
          },
          {
            name: "CARE",
            logo_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2Fdownload-hd-care-logo-care-international-logo-png-clipart-and-use-the-free-clipart-for-your-creative-project--680043612469246819%2F&psig=AOvVaw09YNSW6IuxcVXEeJ-5zMgR&ust=1749751205588000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOi_0M_56Y0DFQAAAAAdAAAAABAV",
          },
          {
            name: "PAPDA",
            logo_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.chsalliance.org%2Fabout%2Four-members%2Fpartnership-for-pastoralist-development-association%2F&psig=AOvVaw2mq4sYKfIOfYuCNoXADk_L&ust=1749751376212000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCk_IH66Y0DFQAAAAAdAAAAABAE",
          },
          {
            name: "Wako Gutu Foundation",
            logo_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wakogutufoundation.org%2F&psig=AOvVaw3zxD4ESJI2weSJ1od2J-ul&ust=1749751410464000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOiRwJH66Y0DFQAAAAAdAAAAABAE",
          },
          {
            name: "Bread for the World/PADD",
            logo_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBread_for_the_World&psig=AOvVaw35gLf242rFvFgbdcWwMSbr&ust=1749751456324000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCsvrv66Y0DFQAAAAAdAAAAABAm",
          },
          {
            name: "David and Lucile Packard Foundation",
            logo_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.packard.org%2F&psig=AOvVaw0Id0hYQhjJbP97o-uJzqs0&ust=1749751568233000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOjztev66Y0DFQAAAAAdAAAAABAE",
          },
          {
            name: "BBC Media Action",
            logo_url: "https://www.google.com/imgres?q=BBC%20Media%20Action&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100066895532351&imgrefurl=https%3A%2F%2Fwww.facebook.com%2FBBCMediaActionET%2F&docid=QY4z78MV7DJcRM&tbnid=V36zMOcrkk2QKM&vet=12ahUKEwj84eiB--mNAxXVRfEDHaO-AkEQM3oECBcQAA..i&w=624&h=624&hcb=2&ved=2ahUKEwj84eiB--mNAxXVRfEDHaO-AkEQM3oECBcQAA",
          },
      ]
    }
  ]

  const logos = [
    '/p1.png',
    '/p2.png',
    '/p3.png',
    '/p4.png',
    '/p5.png',
    '/p9.png',
    '/p7.png',
    '/p8.png',
    '/p6.png',
  ];

  const [partners, setPartners] = useState(partnerData);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data: response} = await getAllData("sections/values/partner");
        const [partnerData] = response;
        if (partnerData) {
            setPartners(partnerData);
        }
      } catch (err) {
        console.error("Failed to load data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="bg-gray-900 text-gray-400">

        <div className="bg-gray-50 text-gray-600 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-semibold text-center">{partners?.title || "Partners"}</h2>
            <div className="relative flex items-center justify-center py-4">
              <div className="w-32 border-t-2 border-gray-300"></div>
            </div>
            <p className="text-lg text-center max-w-4xl mx-auto line-clamp-2 my-6 sm:my-2">
              <i>
                {partners?.description || `With our deep industry expertise, multi-disciplinary capabilities and rigorous analysis,
                we deliver high-quality technical studies, evaluations, and project design services.`}
              </i>
            </p>

            {/* Partner Logos */}
            <div className="flex overflow-x-auto justify-center gap-6 items-center pt-6 md:pt-12">
              {partners?.partners && partners?.partners.map((src, index) => (
                <img
                  key={index}
                  src={src?.logo_url}
                  alt={`P-logo ${index + 1}`}
                  className="h-22 w-auto object-contain transition rounded-xl"
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
