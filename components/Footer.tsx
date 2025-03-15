  "use client";
  import { useIsMobile } from "@/hooks/use-mobile";
  import Image from "next/image";
  import Link from "next/link";
  import bmwImage from "../public/images/bmw.webp";

  export default function Footer() {
    const isMobile = useIsMobile();

    return (
      <div className="bg-gray-100 w-full px-6 sm:px-32 flex flex-col items-center py-10">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full gap-6 sm:gap-12">
          <div className="flex flex-col items-center sm:items-start w-full sm:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.347055929554!2d-73.7897444!3d40.908135699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28d9ec557806d%3A0xc7c63e0b06ebb2b4!2s20%20Charles%20St%2C%20New%20Rochelle%2C%20NY%2010801%2C%20USA!5e0!3m2!1sen!2s!4v1741383323820!5m2!1sen!2s"
              className="rounded-lg shadow-md"
              loading="lazy"
              
            ></iframe>
          </div>

          <div className="flex flex-col sm:flex-row sm:gap-12 w-full sm:w-1/2 items-center sm:items-start">
            <div className="flex flex-col gap-4 sm:w-1/2">
              <div className="text-center sm:text-left">
                <h1 className="font-semibold text-lg">Location</h1>
                <span className="block">20 Charles St. New York, NY 10801</span>
              </div>

              <div className="flex flex-col text-center sm:text-left">
                <h1 className="font-semibold text-lg">Contact</h1>
                <span>+1 (929) 219-9089</span>
                <span>shalaautobody@gmail.com</span>
              </div>
            </div>

            <div className="flex flex-col items-center sm:items-start gap-4 sm:w-1/2">
              <div className="flex flex-col text-center sm:text-left">
                <h1 className="font-semibold text-lg">Links</h1>
                <Link href="/">Home</Link>
                <Link href="/services">Services</Link>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact Us</Link>
              </div>

              {/* Logo */}
              <div className="flex justify-center">
              <h1>logo test</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Divider */}
        <div className="relative mt-8 w-full flex flex-col items-center">
          <div className="relative z-10">
            <Image
              src={bmwImage}
              alt="bmw"
              width={200}
              height={200}
              className="w-[150px] sm:w-[200px] h-auto grayscale-40"
            />
          </div>
          <div className="w-[100%] border-t border-gray-400 -mt-6 sm:-mt-8 opacity-50"></div>
        </div>
      </div>
    );
  }
