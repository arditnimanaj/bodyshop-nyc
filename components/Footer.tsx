"use client";
import Image from "next/image";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import logo from "../public/logo.svg";
import { Divider } from "antd";
export default function Footer() {
  const isMobile = useIsMobile();

  return (
    <div className="bg-gray-100 w-full px-4 sm:px-32 flex flex-col items-center py-10">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full gap-6 sm:gap-12">
        <div className="flex flex-col items-center sm:items-start w-full sm:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.347055929554!2d-73.7897444!3d40.908135699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28d9ec557806d%3A0xc7c63e0b06ebb2b4!2s20%20Charles%20St%2C%20New%20Rochelle%2C%20NY%2010801%2C%20USA!5e0!3m2!1sen!2s!4v1741383323820!5m2!1sen!2s"
            className="rounded-lg shadow-md"
            width={isMobile ? "100%" : "500px"}
            height={isMobile ? "300px" : "500px"}
            loading="lazy"
          ></iframe>
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-12 w-full sm:w-1/2 items-center sm:items-start gap-12">
          <div className="flex flex-col gap-4 sm:w-1/2">
            <div className="text-center flex flex-col items-center sm:text-left gap-2">
              <h1 className="font-semibold text-md sm:text-lg bg-black text-white p-2 w-fit">
                Location
              </h1>
              <span className="block">20 Charles St. New York, NY 10801</span>
            </div>

            <div className="flex flex-col text-center sm:text-left items-center gap-2">
              <h1 className="font-semibold text-md sm:text-lg bg-black text-white w-fit px-2 py-2">
                Contact
              </h1>
              <a type="tel" href="tel:+1 (929) 219-9089">
                +1 (929) 219-9089
              </a>
              <a type="mailto" href="mailto:shalaautobody@gmail.com">
                shalaautobody@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between w-full gap-4">
            <div className="flex flex-col text-center gap-2">
              <h1 className="font-semibold text-md sm:text-lg border bg-black text-white p-2 items-center ">
                Links
              </h1>
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <h1 className="font-semibold text-md sm:text-lg border bg-black text-white p-2 items-center w-fit ">
                Opening Hours
              </h1>
              <span className="font-bold uppercase">Monday - Friday: </span>
              <span>9:00 AM - 7:00 PM</span>
              <span className="font-bold uppercase">Saturday: </span>
              <span>9:00 AM - 12:00 PM</span>
            </div>
          </div>
        </div>
      </div>
      <Divider>
        <Image
          src={logo}
          alt="bmw"
          width={400}
          height={400}
          className="object-contain"
        />
      </Divider>
    </div>
  );
}
