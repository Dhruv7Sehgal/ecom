import React from "react";
import { Amazon } from "@/assets/images";

const Footer = () => {
  return (
    <footer className="bg-black w-full">
      <div className="flex justify-between w-full p-6 ">
        <div className="p-6">
          <Image
            src={Amazon}
            alt="logo"
            width={290}
            height={290}
            className="px-9 py-4"
          />
        </div>
        <div className="flex gap-10  h-full flex-wrap ">
          <div>
            <h3 className=" mb-9  text-xs font-semibold text-[17px] uppercase text-white">
              Support
            </h3>
            <ul>
              <li className="mb-4">
                <a
                  className=" text-base font-medium text-white hover:text-yellow-500"
                  href="#"
                >
                  Account
                </a>
              </li>
              <li className="mb-4">
                <a
                  className=" text-base font-medium text-white hover:text-yellow-500"
                  href="#"
                >
                  Help
                </a>
              </li>
              <li className="mb-4">
                <a
                  className=" text-base font-medium text-white hover:text-yellow-500"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className=" text-base font-medium text-white hover:text-yellow-500"
                  href="#"
                >
                  Customer Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="tracking-px mb-9  text-xs font-semibold text-[17px] uppercase text-white">
              Support
            </h3>
            <ul>
              <li className="mb-4">
                <a
                  className=" text-base font-medium text-white hover:text-yellow-500"
                  href="#"
                >
                  Account
                </a>
              </li>
              <li className="mb-4">
                <a
                  className=" text-base font-medium text-white hover:text-yellow-500"
                  href="#"
                >
                  Help
                </a>
              </li>
              <li className="mb-4">
                <a
                  className=" text-base font-medium text-white hover:text-yellow-500"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className=" text-base font-medium text-white hover:text-yellow-500"
                  href="#"
                >
                  Customer Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="tracking-px mb-9  text-xs font-semibold text-[17px] uppercase text-white ">
              Legals
            </h3>
            <ul>
              <li className="mb-4">
                <a
                  className=" text-base font-medium text-white hover:text-yellow-500"
                  href="#"
                >
                  Terms &amp; Conditions
                </a>
              </li>
              <li className="mb-4">
                <a
                  className=" text-base font-medium text-white hover:text-yellow-500"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className=" text-base font-medium text-white hover:text-yellow-500"
                  href="#"
                >
                  Licensing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/T0wqVsT9FAk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-100  py-12 dark:bg-gray-800">
//       <div className="container mx-auto grid grid-cols- max-w-7xl  gap-8">
//         <div className="flex flex-col gap-4">
//           <Link
//             className="flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-50"
//             href="#"
//           >
//             <MountainIcon className="h-6 w-6" />
//             <span>Acme Inc</span>
//           </Link>
//           <p className="text-gray-500 dark:text-gray-400">
//             Beautifully designed components that you can copy and paste into
//             your apps.
//           </p>
//         </div>
//         <div className="grid gap-2">
//           <h4 className="font-medium text-gray-900 dark:text-gray-50">
//             Navigation
//           </h4>
//           <nav className="grid gap-2">
//             <Link
//               className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
//               href="#"
//             >
//               Home
//             </Link>
//             <Link
//               className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
//               href="#"
//             >
//               Shop
//             </Link>
//             <Link
//               className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
//               href="#"
//             >
//               About
//             </Link>
//             <Link
//               className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
//               href="#"
//             >
//               Contact
//             </Link>
//           </nav>
//         </div>
//         <div className="grid gap-2">
//           <h4 className="font-medium text-gray-900 dark:text-gray-50">
//             Social
//           </h4>
//           <div className="flex gap-3">
//             <Link
//               className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
//               href="#"
//             >
//               <TwitterIcon className="h-5 w-5" />
//             </Link>
//             <Link
//               className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
//               href="#"
//             >
//               <FacebookIcon className="h-5 w-5" />
//             </Link>
//             <Link
//               className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
//               href="#"
//             >
//               <InstagramIcon className="h-5 w-5" />
//             </Link>
//             <Link
//               className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
//               href="#"
//             >
//               <LinkedinIcon className="h-5 w-5" />
//             </Link>
//           </div>
//         </div>
//         <div className="grid gap-2">
//           <h4 className="font-medium text-gray-900 dark:text-gray-50">Legal</h4>
//           <nav className="grid gap-2">
//             <Link
//               className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
//               href="#"
//             >
//               Terms of Service
//             </Link>
//             <Link
//               className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
//               href="#"
//             >
//               Privacy Policy
//             </Link>
//             <Link
//               className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
//               href="#"
//             >
//               Refund Policy
//             </Link>
//           </nav>
//         </div>
//       </div>
//       <div className="container mx-auto max-w-7xl mt-12 flex items-center justify-between px-4 sm:px-0">
//         <p className="text-xs text-gray-500 dark:text-gray-400">
//           © 2024 Acme Inc. All rights reserved.
//         </p>
//         <div className="flex gap-4 text-gray-500 dark:text-gray-400">
//           <Link
//             className="hover:text-gray-900 dark:hover:text-gray-50"
//             href="#"
//           >
//             <TwitterIcon className="h-5 w-5" />
//           </Link>
//           <Link
//             className="hover:text-gray-900 dark:hover:text-gray-50"
//             href="#"
//           >
//             <FacebookIcon className="h-5 w-5" />
//           </Link>
//           <Link
//             className="hover:text-gray-900 dark:hover:text-gray-50"
//             href="#"
//           >
//             <InstagramIcon className="h-5 w-5" />
//           </Link>
//           <Link
//             className="hover:text-gray-900 dark:hover:text-gray-50"
//             href="#"
//           >
//             <LinkedinIcon className="h-5 w-5" />
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// }

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
