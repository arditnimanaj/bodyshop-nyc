"use client";
import Image from "next/image";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import logo from "../public/logo.svg";

export default function Footer() {
  const isMobile = useIsMobile();

  return (
    <div className="bg-gray-200 w-full px-4 sm:px-20 flex flex-col items-center pt-10 pb-6">
      <div className="w-full flex flex-col sm:flex-row justify-between gap-6">
        <div className="w-full sm:w-1/3 flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.347055929554!2d-73.7897444!3d40.908135699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28d9ec557806d%3A0xc7c63e0b06ebb2b4!2s20%20Charles%20St%2C%20New%20Rochelle%2C%20NY%2010801%2C%20USA!5e0!3m2!1sen!2s!4v1741383323820!5m2!1sen!2s"
            width={isMobile ? 300 : 500}
            height={isMobile ? 300 : 300}
            loading="lazy"
          />
        </div>

        <div className="flex flex-col sm:flex-row w-full sm:w-2/3 justify-between gap-2">
          <div className="text-center items-center gap-2 flex flex-col">
            <h2 className="font-semibold text-lg bg-black text-white p-2 w-fit mx-auto sm:mx-0">
              Contact
            </h2>
            <p className="text-md mt-2">20 Charles St, New York, NY 10801</p>
            <a
              href="tel:+19292199089"
              className="block text-blue-600 hover:underline "
            >
              +1 (929) 219-9089
            </a>
            <a
              href="mailto:shalaautobody@gmail.com"
              className="block text-blue-600 hover:underline"
            >
              shalaautobody@gmail.com
            </a>
          </div>

          <div className="text-center ">
            <h2 className="font-semibold text-lg bg-black text-white p-2 w-fit mx-auto sm:mx-0">
              Quick Links
            </h2>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/" className="text-blue-600 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-blue-600 hover:underline"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-600 hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-600 hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left gap-2">
            <h2 className="font-semibold text-lg bg-black text-white p-2 w-fit mx-auto sm:mx-0">
              Opening Hours
            </h2>
            <p className="mt-2 flex flex-col text-center">
              <strong>Mon - Fri:</strong> 9:00 AM - 7:00 PM
            </p>
            <p className="flex flex-col text-center">
              <strong>Saturday:</strong> 9:00 AM - 12:00 PM
            </p>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-gray-400 mt-6 pt-4 text-center">
        <Image
          src={logo}
          alt="logo"
          width={150}
          height={50}
          className="mx-auto"
        />
        <p className="text-sm text-gray-600 mt-2">
          &copy; {new Date().getFullYear()} Shala Auto Repair. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}
