'use client'
import SliderComponent from "@/components/Slider";
import { Divider } from "antd";
import image1 from "../../public/images/services/body-repair-painting.png";
import image2 from "../../public/images/services/collision-repair.jpg";
import image3 from "../../public/images/services/presicion-frame.webp";
import image4 from "../../public/images/services/Insurance-Claim-Assistance_m.webp";
import image5 from "../../public/images/services/paint-correction.jpg";
import image6 from "../../public/images/services/ceramic-coating.jpg";
import image7 from "../../public/images/services/buffin-polishing_slide6.jpg";
import image8 from "../../public/images/services/computer.jpg";
import image9 from "../../public/images/services/paintless-dent.jpg";
import Image from "next/image";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const servicesData = [
  {
    id: 1,
    image: image1,
    title: "Body Repair and Painting",
    text: "We specialize in professional body repair and precision painting to restore your vehicle's appearance. Whether it's minor scratches, dents, or full-body damage, our expert technicians ensure a seamless finish with color matching and high-quality paint application.",
  },
  {
    id: 2,
    image: image2,
    title: "Collision Repair Specialists",
    text: "Accidents happen, but we make the repair process stress-free. Our collision repair services cover everything from structural damage to cosmetic restoration, ensuring your car is safe, roadworthy, and looks as good as new.",
  },
  {
    id: 3,
    image: image3,
    title: "Precision Frame Straightening",
    text: "Using state-of-the-art equipment, we restore your vehicle's frame to factory specifications. Proper frame alignment is crucial for safety and performance, ensuring your car drives straight and handles correctly after an accident.",
  },
  {
    id: 4,
    image: image4,
    title: "All Insurance Claims Handled",
    text: "Dealing with insurance after an accident can be frustrating. We work directly with your insurance provider to streamline the claims process, ensuring quick approvals and high-quality repairs without the hassle.",
  },
  {
    id: 5,
    image: image5,
    title: "Paint Correction",
    text: "Over time, your vehicle’s paint can develop swirl marks, scratches, and oxidation. Our professional paint correction service removes imperfections and restores a deep, glossy finish, bringing back your car’s original shine.",
  },
  {
    id: 6,
    image: image6,
    title: "Ceramic Coating",
    text: "Protect your vehicle with a high-end ceramic coating that adds a durable, hydrophobic layer to your paint. This long-lasting treatment repels water, dirt, and UV rays while enhancing your car’s shine and reducing maintenance needs.",
  },
  {
    id: 7,
    image: image7,
    title: "Buffing & Polishing",
    text: "Our expert buffing and polishing services remove surface scratches, oxidation, and dullness, leaving your vehicle with a smooth, mirror-like finish. Ideal for restoring your car’s aesthetic appeal and maintaining its value.",
  },
  {
    id: 8,
    image: image8,
    title: "Computer Diagnostics",
    text: "Modern vehicles rely on complex electronic systems. Our advanced diagnostic tools accurately identify engine issues, electrical faults, and performance problems, helping us provide precise and efficient repairs to keep your car running smoothly.",
  },
  {
    id: 9,
    image: image9,
    title: "Paintless Dent Removal",
    text: "Dents and dings can be frustrating, but our paintless dent removal (PDR) technique eliminates them without damaging your car’s factory paint. A fast, cost-effective solution to restore your vehicle’s sleek appearance.",
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Run the animation only once
    });
  }, []);
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="font-dancingScript text-4xl">Our services</h1>
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3 px-10">
        {servicesData.map((item) => (
          <div key={item.id} className="flex flex-col items-center" data-aos="fade-up">
            <Divider style={{ borderColor: "blue" }}>
              <h2 className="font-cormorant text-2xl text-primary">
                {item.title}
              </h2>
            </Divider>
            <div className="relative w-full h-64 overflow-hidden rounded-md transition-transform duration-300 ease-in-out hover:scale-105">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="flex flex-col justify-between  mt-4 items-center gap-4">
              <p className="mt-2 text-center font-catamaran font-text-4xl font-bold text-primary">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <SliderComponent />
    </div>
  );
}
