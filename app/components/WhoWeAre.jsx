"use client";

import { useEffect, useState } from "react";
import { getLatestData } from "../lib/routes";

export default function WhoWeAre() {
  const [data, setData] = useState({});
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const {data} = await getLatestData("admin/who-we-are-contents");
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
    <section id="about" className="scroll-mt-24 max-w-6xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-4xl font-semibold text-gray-600 leading-tight animate-fade-in">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg animate-fade-in delay-200">
            {data?.description1 || `Abbabor Development Consult (ADC) is an Ethiopia-based consulting firm dedicated to 
            providing research solutions that empower governments and development organizations in achieving social and 
            economic progress.`} <br /><br />
            {data?.description2 || `Our expertise lies in designing, monitoring, and evaluating strategies aligned with 
            local and global development objectives. Through evidence-based policy and rigorous 
            research, we strive to create meaningful impact and sustainable solutions for Africa&apos;s 
            future.`}
          </p>
        </div>

        {/* Image Section */}
        <div className="relative group">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src={data?.image_url || "/whoWeAre.png"}
              alt="Who We Are"
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
