/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Phone } from "@mui/icons-material";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="bg-gray-50 text-gray-600">
        <Head>
          <title>Contact Us</title>
          <meta name="description" content="Contact our team for any inquiries" />
        </Head>

        <header id="form" className="py-20 bg-gray-800 text-white text-center">
          <h1 className="text-5xl font-extrabold">Contact Us</h1>
          <p className="mt-4 text-xl">We&apos;re here to help! Drop us a message.</p>
        </header>

        <main className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <section className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-blue-600">Get in Touch</h2>
                <p className="text-lg text-gray-700">
                  Have questions or just want to say hello? We&apos;re happy to hear from you!
                </p>

                <h2 className="text-2xl font-semibold pt-2">Our Address</h2>
                <div>
                  <h3 className="font-semibold text-gray-900">Cape Town, South Africa</h3>
                  <p className="text-gray-700">
                    9 Vintage, 47 Falcon Street, D&apos;Urbanvalle <br />
                    Cape Town, 7550 <br />
                    South Africa
                  </p>
                  <li className="flex items-center space-x-2">
                    <Phone className="text-green-500 w-5 h-5" />
                    <a href="tel:+279876543210" className="hover:underline">+279876543210</a>
                  </li>
                </div>

                <div className="pt-2">
                  <h3 className="font-semibold text-gray-900">Addis Ababa, Ethiopia</h3>
                  <p className="text-gray-700">
                    Roadmap Building (Near Lem Hotel) <br />
                    Bole Sub city, Woreda 04 <br />
                    Addis Ababa, Ethiopia
                  </p>
                  <li className="flex items-center space-x-2">
                    <Phone className="text-green-500 w-5 h-5" />
                    <a href="tel:+251911364755" className="hover:underline">+251911364755</a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Phone className="text-green-500 w-5 h-5" />
                    <a href="tel:+251984811023" className="hover:underline">+251984811023</a>
                  </li>
                </div>
              </div>

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

// export default function Contact() {
//   return (
//     <>
//         <Header/>
//         <div className="bg-gray-50">
//           <Head>
//             <title>Contact Us</title>
//             <meta name="description" content="Contact our team for any inquiries" />
//           </Head>

//           <header id="form" className="py-20 bg-gray-800 text-white text-center">
//             <h1 className="text-5xl font-extrabold">Contact Us</h1>
//             <p className="mt-4 text-xl">We&apos;re here to help! Drop us a message.</p>
//           </header>

//           <main className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
//             <section className="py-16">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//                 <div className="space-y-4">
//                   <h2 className="text-4xl font-bold text-blue-600">Get in Touch</h2>
//                   <p className="text-lg text-gray-700">
//                     Have questions or just want to say hello? We&apos;re happy to hear from you!
//                   </p>

//                   <h2 className="text-2xl font-semibold text-blue-600 pt-2">Our Address</h2>
//                   <div>
//                     <h3 className="font-semibold text-gray-900">Cape Town, South Africa</h3>
//                     <p className="text-gray-700">
//                       9 Vintage, 47 Falcon Street, DUrbanvalle <br />
//                       Cape Town, 7550 <br />
//                       South Africa
//                     </p>
//                     <p className="text-gray-700">
//                       Phone: <a href="tel:+279876543210" className="text-blue-600 hover:text-blue-800">+279876543210</a>
//                     </p>
//                   </div>

//                   <div>
//                     <h3 className="font-semibold text-gray-900">Addis Ababa, Ethiopia</h3>
//                     <p className="text-gray-700">
//                       Roadmap Building (Near Lem Hotel) <br />
//                       Bole Sub city, Woreda 04 <br />
//                       Addis Ababa, Ethiopia
//                     </p>
//                     <p className="text-gray-700">
//                       Phone: <a href="tel:+251944272121" className="text-blue-600 hover:text-blue-800">+251944272121</a>
//                     </p>

//                   </div>
//                 </div>

//                 <div>
//                   <ContactForm/>
//                 </div>
//               </div>
//             </section>
//           </main>

//           <Footer/>
//         </div>
//     </>
//   )
// }

