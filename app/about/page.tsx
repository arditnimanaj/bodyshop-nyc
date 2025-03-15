"use client";
import { Divider } from "antd";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
export default function About() {
  useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration
        easing: 'ease-in-out', // Easing function
        once: true, // Run the animation only once
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
         <div key={item.id} className="flex flex-col items-center gap-4 border rounded-md bg-black text-white px-6 py-12 h-full" data-aos="flip-right">
         <CountUp  duration={4} end={item.value} suffix="+" className="text-4xl flex font-bold font-dancingScript text-primary items-center gap-2" />
         <h2 className="text-2xl font-cormorant text-white uppercase">{item.title}</h2>
         <p className="text-lg text-white font-catamaran min-h-[100px] flex-grow">{item.text}</p>
       </div>
        ))}
      </div>

      <Divider style={{ borderColor: "black" }}>
        <h2 className="text-3xl font-cormorant text-gray-900">Our Mission</h2>
      </Divider>
      <p className="text-center text-lg text-gray-700 max-w-2xl leading-relaxed">
        Our mission is to provide high-quality auto body repair services with
        honesty and integrity. We use state-of-the-art technology to ensure the
        best results for our customers.
      </p>

      <Divider style={{ borderColor: "black" }}>
        <h2 className="text-3xl font-cormorant text-gray-900">Meet Our Team</h2>
      </Divider>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-primary">Rinor Shala</h3>
          <p className="text-gray-600">Founder & Lead Technician</p>
        </div>
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
