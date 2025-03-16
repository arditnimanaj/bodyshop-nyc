"use client";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import service1 from "../../public/images/service1.png";
import service2 from "../../public/images/service2.png";
import service3 from "../../public/images/service3.png";
import service4 from "../../public/images/service4.png";

const mockAboutSatisfied = [
  {
    id: 1,
    title: "Years of Experience",
    value: 5,
    text: "Over 5 years of experience in the automotive industry, we have a proven track record of delivering top-quality repairs and restorations to our customers.",
  },
  {
    id: 2,
    title: "Satisfied Customers",
    value: 200,
    text: "More than 300 satisfied customers have left us with their vehicles in perfect condition, thanks to our dedication and commitment to quality.",
  },
  {
    id: 3,
    title: "Projects Completed",
    value: 300,
    text: "We have completed over 300 projects for our customers, ensuring that every vehicle is restored to its original condition and functionality.",
  },
];

const info = [
  {
    title: "full auto service",
    description: "We work with quality and attention to detail.",
    image: service1,
  },
  {
    title: "customer service",
    description: "We offer an excellent customer service.",
    image: service2,
  },
  {
    title: "Efficiency",
    description: "We work fast and efficiently.",
    image: service3,
  },
  {
    title: "Affordable",
    description: "Best bang for the buck.",
    image: service4,
  },
];

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div className="flex flex-col items-center px-2 py-12 bg-gray-100">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold font-dancingScript text-primary mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed px-6">
          At Shala Auto Body, we pride ourselves on delivering top-quality
          automotive repair and restoration services. Our team of experts
          ensures that every vehicle we work on is restored to its original
          beauty and functionality.
        </p>
      </div>

      <div className="my-12 w-full max-w-4xl px-4 sm:px-0 gap-8 items-center text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center">
        {mockAboutSatisfied.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-4 border rounded-md bg-black text-white px-6 py-12 h-full"
            data-aos="flip-right"
          >
            <CountUp
              duration={4}
              end={item.value}
              suffix="+"
              className="text-4xl flex font-bold font-dancingScript text-primary items-center gap-2"
            />
            <h2 className="text-2xl font-cormorant text-white uppercase">
              {item.title}
            </h2>
            <p className="text-lg text-white font-catamaran min-h-[100px] flex-grow">
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 py-12">
        {info.map((info) => {
          return (
            <div
              key={info.title}
              className="justify-center items-center flex flex-col text-center"
            >
              <div className="border rounded-full p-3 items-center bg-gray-200">
                <Image
                  src={info.image}
                  alt={info.title}
                  className="w-8 h-8 opacity-50"
                ></Image>
              </div>
              <h1 className="uppercase font-bold font-chivo"> {info.title}</h1>
              <span className="text-gray-500 font-montserrat">
                {info.description}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-12 w-full flex justify-center">
        <a
          href="/contact"
          className="bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}
