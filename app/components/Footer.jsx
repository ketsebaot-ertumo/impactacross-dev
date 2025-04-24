"use client";

import { Email, Facebook, Instagram, LinkedIn, Mail, Phone, Twitter } from "@mui/icons-material";
import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-8 text-sm">
      <div className="max-w-6xl mx-auto">
        <div className="hidden lg:flex lg:justify-between">

          {/* Company Information */}
          <div className="space-y-2">
            <img 
              src="/logo.png"
              alt="Company Logo" 
              className="h-14 w-14"
            />
            <p className="text-lg font-semibold text-blue-500 pt-2">ImpactAcross</p>
            <p className="font-semibold w-60 lg:w-60">If you have a Vision We will help you to turn it into reality.</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Support</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/resources" className="hover:text-white">Resources</a></li>
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <MapPin className="text-gray-400 w-5 h-5" />
                  <span>Addis Ababa, Ethiopia</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="text-gray-400 w-5 h-5" />
                  <span>Cape Town, 7550,South Africa</span> 
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="text-blue-600 w-5 h-5" />
                  <a href="mailto:info@abbabor.com" className="hover:underline">info@abbabor.com</a>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="text-green-500 w-5 h-5" />
                  <a href="tel:+251911364755" className="hover:underline">+251911364755</a>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="text-green-500 w-5 h-5" />
                  <a href="tel:+251984811023" className="hover:underline">+251984811023</a>
                </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
                <a href="https://facebook.com/" className="hover:text-blue-600"><Facebook /></a>
                <a href="https://twitter.com/" className="hover:text-sky-500"><Twitter /></a>
                <a href="https://www.linkedin.com/" className="hover:text-blue-600"><LinkedIn /></a>
                <a href="https://www.instagram.com/" className="hover:text-pink-500"><Instagram /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="lg:mt-8 text-center lg:border-t border-gray-700 lg:pt-6">
          <p>© {new Date().getFullYear()} ImpactAcross. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}







// "use client";

// import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-400 py-10 px-6 text-sm">
//       <div className="max-w-6xl mx-auto">
//         <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <img 
//                 src="data:image/png;base64,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" 
//                 alt="Company Logo"
//                 className="h-10 md:h-20 w-10 md:w-20 mb-4"
//             />
//             <p>
//               If you have a Vision We will help you to turn it into reality.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="font-semibold text-white">Quick Links</h3>
//             <ul className="mt-3 space-y-1">
//                 <li><a href="/about" className="hover:text-white">About Us</a></li>
//                 <li><a href="/services" className="hover:text-white">Services</a></li>
//                 <li><a href="/resources" className="hover:text-white">Resources</a></li>
//                 <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="font-semibold text-white">Contact Us</h3>
//             <ul className="mt-3 space-y-1">
//                 <li><p>Addis Ababa, Ethiopia</p></li>
//                 <li><p> Cape Town, 7550,South Africa</p></li>
//                 <li><p>Email: info@abbabor.com</p></li>
//                 <li><p>Phone: +251911364755</p></li>
//                 <li><p>Phone: +251984811023</p></li>
//             </ul>
//           </div>

//           {/* Social Media Links */}
//           <div>
//             <h3 className="text-lg font-semibold text-white">Follow Us</h3>
//             <div className="flex space-x-4 mt-3">
//                 <a href="https://facebook.com/" className="hover:text-white text-xl">
//                     <Facebook />
//                 </a>
//                 <a href="https://twitter.com/" className="hover:text-white text-xl">
//                     <Twitter />
//                 </a>
//                 <a href="https://www.linkedin.com/" className="hover:text-white text-xl">
//                     <LinkedIn />
//                 </a>
//                 <a href="https://www.instagram.com/" className="hover:text-white text-xl">
//                     <Instagram />
//                 </a>
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
//           &copy; {new Date().getFullYear()} ImpactAcross. All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }
