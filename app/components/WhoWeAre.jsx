"use client";

import { useEffect, useState } from "react";
import { getLatestData } from "../lib/routes";

export default function WhoWeAre() {
  const [data, setData] = useState({});
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const {data} = await getLatestData("who-we-are-contents");
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
    <section id="about" className="scroll-mt-24 max-w-6xl mx-auto px-6 pt-6 sm:pt-12">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> */}
      <div className="sm:flex justify-between gap-6 sm:gap-12 items-center space-y-2">
        {/* Text Section */}
        <div className="space-y-6 max-w-xl w-full">
          <h2 className="text-4xl font-semibold text-gray-600 leading-tight animate-fade-in">
            Who We Are
          </h2>
          <div className="w-26 h-1 bg-gradient-to-r from-primary to-green-800 my-4 rounded" />
          <p className="text-gray-700 leading-relaxed text-lg animate-fade-in delay-200">
            {data?.description1 || `ImpactAcross Development Research and Consultancy PLC is an Ethiopia-based firm (with a liaison office in Cape Town, South Africa) committed to helping governments, donors, and development organizations drive sustainable progress across Africa.`}
          </p>
          <p className="text-gray-700 leading-relaxed text-lg animate-fade-in delay-200">
            {data?.description2 || `At ImpactAcross, our name reflects our mission—to generate meaningful, data-driven change across sectors, stakeholders, and geographies. We deliver evidence-based insights, strategic solutions, and expert guidance to address today’s most pressing development challenges.`}
          </p>
        </div>

        {/* Image Section */}
        <div className="relative group">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={data?.image_url || "https://res.cloudinary.com/dq6mvqivd/image/upload/v1750087594/ImpactAcross/images/photo_5944760772829759238_x_s1jd7a.jpg"}
              alt="Who We Are"
              className="max-h-[60vh]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}






// "use client";

// import Image from "next/image";

// export default function WhoWeAre() {
//   return (
//     <div className="max-w-screen-lg mx-auto py-16 md:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 md:px-0">
//             <div>
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//                     Who We Are
//                 </h2>
//                 <p className="text-justify md:text-left text-gray-600 leading-relaxed text-lg">
//                 Abbabor Development Consult (ADC) is an Ethiopia based consulting firm 
//                 which provides research solutions that improve the ability of government and development 
//                 organizations to advance on social and economic objectives for a better future. We design, 
//                 monitor, evaluate and align strategies that support local and global objectives and development plans. 
//                 We are driven by a passion to make a difference by contributing to a better future for Africa. We 
//                 believe evidence-based policy and the use of rigorous, timely and relevant research is the surest way 
//                 to improve policy and programming. Our role in enhancing the capabilities of people of Ethiopia is to 
//                 provide research solutions for development. Our insights and analytics inform the policies, strategies 
//                 and programmes of governments, donors and civil society working to enhance the social and economic 
//                 potential of people living in the continent. We called the consulting firm Abbabor because we aspire to 
//                 create sustainable solutions which will &apos;make the difference&apos; and not just &apos;be different&apos;.
//                 </p>
//             </div>
//             <div className="relative">
//                 <img
//                     src="/whoWeAre.png"
//                     alt="Who We Are"
//                 />
//             </div>
//         </div>
//     </div>
//   );
// }
