/* eslint-disable react/no-unescaped-entities */
"use client";

import Head from "next/head";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Phone } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { getLatestData } from "../lib/routes";

const fallbackData = {
  logo_url: "https://res.cloudinary.com/dq6mvqivd/image/upload/v1749714702/ImpactAcross/owner/logo1_ekrjmf.png",
  primary_color: "#007A33",
  name: "ImpactAcross",
  title: "Development Research and Consultancy PLC",
  email: "info@impactacross.com",
  links: [
    { label: "linkedin", url: "https://linkedin.com/in/" },
    { label: "twitter", url: "https://twitter.com/" },
    { label: "facebook", url: "https://linkedin.com/in/" },
    { label: "instagram", url: "https://www.instagram.com/" },
  ],
  phones: [
    { id: "1", number: "+251984811023" },
    { id: "2", number: "+251911364755" },
  ],
  locations: [
    { id: "1", address: "Addis Ababa, Ethiopia" },
    { id: "2", address: "7550, Cape Town, South Africa" },
  ],
};

export default function Contact() {
  const [data, setData] = useState(fallbackData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getLatestData("owners");
        if (data) setData(data);
      } catch (err) {
        console.error("Failed to load data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="bg-gray-50 text-gray-600">
        <Head>
          <title>Contact Us</title>
          <meta name="description" content="Contact our team for any inquiries" />
        </Head>

        <header className="py-20 bg-gray-800 text-white text-center">
          <h1 className="text-5xl font-extrabold">Contact Us</h1>
          <p className="mt-4 text-xl">We're here to help! Drop us a message.</p>
        </header>

        <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* LEFT: Contact Info */}
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-blue-600">Get in Touch</h2>
                <p className="text-lg text-gray-700">
                  Have questions or just want to say hello? We're happy to hear from you!
                </p>

                <div className="space-y-2">
                  <h2 className="text-xl font-semibold pt-2">Our Address</h2>
                  {fallbackData.locations.map((location, i) => (
                    <div key={location.id || i}>
                      {/* <h3 className="font-semibold text-gray-900">{location.address}</h3> */}
                      <p className="text-gray-700">{location.address}</p>
                    </div>
                  ))}

                  <div className="pt-6 space-y-2">
                    <h3 className="text-xl font-semibold">Phone Numbers</h3>
                    {fallbackData.phones.map((phone, i) => (
                      <div key={phone.id || i} className="flex items-center space-x-2">
                        <Phone className="text-green-500 w-5 h-5" />
                        <a href={`tel:${phone.number}`} className="hover:underline">
                          {phone.number}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT: Contact Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}



// import Head from "next/head";
// import ContactForm from "../components/ContactForm";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { Phone } from "@mui/icons-material";
// import { getLatestData } from "../lib/routes";

// const fallbackData = {
//   logo_url: "https://res.cloudinary.com/dq6mvqivd/image/upload/v1749714702/ImpactAcross/owner/logo1_ekrjmf.png",
//   primary_color: "#007A33",
//   name: "ImpactAcross",
//   title: "Development Research and Consultancy PLC",
//   email: "info@impactacross.com",
//   links: [
//       {
//           label: "linkedin",
//           url: "https://linkedin.com/in/",
//       },
//       {
//           label: "twitter",
//           url: "https://twitter.com/",
//       },
//       {
//           label: "facebook",
//           url: "https://linkedin.com/in/",
//       },
//       {
//           label: "instagram",
//           url: "https://www.instagram.com/",
//       }
//   ],
//   phones: [
//       {
//           id: "y8d47dyjrd4338q3trg0d",
//           owner_id: "fcciuxdzhlemjomgmlirl",
//           number: "+251984811023",
//       },
//       {
//           id: "38okyxvlzey8gceu31agi",
//           owner_id: "fcciuxdzhlemjomgmlirl",
//           number: "+251911364755",
//       }
//   ],
//   locations: [
//       {
//           id: "fcwg3upe6c6u75uwiiuo8",
//           owner_id: "fcciuxdzhlemjomgmlirl",
//           address: "Addis Ababa, Ethiopia",
//       },
//       {
//           id: "u9bcc6dcygjbj6d8ku3qf",
//           owner_id: "fcciuxdzhlemjomgmlirl",
//           address: "7550, Cape Town, South Africa",
//       }
//   ]
// }

// export default function Contact() {
//   const [data, setData] = useState(fallbackData);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const {data} = await getLatestData("owners");
//         console.log(data)
//         if (data) {
//           setData(data);
//         }
//       } catch (err) {
//         console.error("Failed to load data:", err);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <Header />
//       <div className="bg-gray-50 text-gray-600">
//         <Head>
//           <title>Contact Us</title>
//           <meta name="description" content="Contact our team for any inquiries" />
//         </Head>

//         <header id="form" className="py-20 bg-gray-800 text-white text-center">
//           <h1 className="text-5xl font-extrabold">Contact Us</h1>
//           <p className="mt-4 text-xl">We&apos;re here to help! Drop us a message.</p>
//         </header>

//         <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//           <section className="py-16">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//               <div className="space-y-4">
//                 <h2 className="text-4xl font-bold text-blue-600">Get in Touch</h2>
//                 <p className="text-lg text-gray-700">
//                   Have questions or just want to say hello? We&apos;re happy to hear from you!
//                 </p>

//                 <h2 className="text-2xl font-semibold pt-2">Our Address</h2>
//                 <div>
//                   <h3 className="font-semibold text-gray-900">Cape Town, South Africa</h3>
//                   <p className="text-gray-700">
//                     9 Vintage, 47 Falcon Street, D&apos;Urbanvalle <br />
//                     Cape Town, 7550 <br />
//                     South Africa
//                   </p>
//                   <li className="flex items-center space-x-2">
//                     <Phone className="text-green-500 w-5 h-5" />
//                     <a href="tel:+279876543210" className="hover:underline">+279876543210</a>
//                   </li>
//                 </div>

//                 <div className="pt-2">
//                   <h3 className="font-semibold text-gray-900">Addis Ababa, Ethiopia</h3>
//                   <p className="text-gray-700">
//                     Roadmap Building (Near Lem Hotel) <br />
//                     Bole Sub city, Woreda 04 <br />
//                     Addis Ababa, Ethiopia
//                   </p>
//                   <li className="flex items-center space-x-2">
//                     <Phone className="text-green-500 w-5 h-5" />
//                     <a href="tel:+251911364755" className="hover:underline">+251911364755</a>
//                   </li>
//                   <li className="flex items-center space-x-2">
//                     <Phone className="text-green-500 w-5 h-5" />
//                     <a href="tel:+251984811023" className="hover:underline">+251984811023</a>
//                   </li>
//                 </div>
//               </div>

//               <div>
//                 <ContactForm />
//               </div>
//             </div>
//           </section>
//         </main>

//         <Footer />
//       </div>
//     </>
//   );
// }

