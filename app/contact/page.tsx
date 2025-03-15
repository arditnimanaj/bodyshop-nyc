"use client";
import Image from "next/image";
import { Divider } from "antd";
import logo1 from "../../public/mail-2-svgrepo-com.svg";
import logo2 from "../../public/phone-svgrepo-com.svg";
import logo3 from "../../public/pin-drop-svgrepo-com.svg";
import logo4 from "../../public/user-2-svgrepo-com.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const contactData = [
  {
    id: 1,
    image: logo1,
    name: "Email",
    value: "shalaautobody@gmail.com",
  },
  {
    id: 2,
    image: logo2,
    name: "Phone",
    value: "+1 (929) 219-9089",
  },
  {
    id: 3,
    image: logo3,
    name: "Address",
    value: "20 Charles St. New York, NY 10801",
  },
  {
    id: 4,
    image: logo4,
    name: "Owner",
    value: "Rinor Shala",
  },
];

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 overflow-hidden gap-4">
      <div className="flex flex-col items-center py-10 justify-center w-full px-2">
        <Divider style={{ borderColor: "black" }}>
          <h1 className="font-dancingScript text-4xl">Get in touch with us</h1>
        </Divider>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 px-8">
        {contactData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center max-w-full gap-4 text-center px-4 py-4 border rounded-lg shadow-md bg-white w-full"
            data-aos={item.id % 2 === 0 ? "fade-left" : "fade-right"}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={50}
              height={50}
              className="rounded-md"
            />
            <h2 className="font-cormorant text-2xl text-primary">
              {item.name}
            </h2>
            <span className="font-catamaran text-lg font-bold text-primary max-w-full text-center break-words">
              {item.value}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full px-2">
        <Divider style={{ borderColor: "black" }}>
          <span className="font-dancingScript text-4xl font-bold text-primary">
            Or visit us at
          </span>
        </Divider>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 border rounded-lg shadow-md bg-black text-white px-8 py-4 font-catamaran">
        <h1 className="font-bold uppercase">Opening Hours</h1>
        <span>Monday - Friday: 9:00 AM - 7:00 PM</span>
        <span>Saturday: 9:00 AM - 12:00 PM</span>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.347055929554!2d-73.7897444!3d40.908135699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28d9ec557806d%3A0xc7c63e0b06ebb2b4!2s20%20Charles%20St%2C%20New%20Rochelle%2C%20NY%2010801%2C%20USA!5e0!3m2!1sen!2s!4v1741383323820!5m2!1sen!2s"
        className="w-full h-[500px] rounded-lg shadow-md p-10"
        loading="lazy"
      />
    </div>
  );
}
