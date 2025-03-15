import React, { useState } from "react";
import {
  CButton,
  CCollapse,
  CCard,
  CCardBody,
} from "@coreui/react";
import {DownOutlined} from "@ant-design/icons";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import "aos/dist/aos.css";
import image1 from "../public/images/services/body-repair-painting.png";
import image2 from "../public/images/services/collision-repair.jpg";
import image3 from "../public/images/services/presicion-frame.webp";
import image4 from "../public/images/services/Insurance-Claim-Assistance_m.webp";
import image5 from "../public/images/services/paint-correction.jpg";
import image6 from "../public/images/services/ceramic-coating.jpg";
import image7 from "../public/images/services/buffin-polishing_slide6.jpg";
import image8 from "../public/images/services/computer.jpg";
import image9 from "../public/images/services/paintless-dent.jpg";
import Link from "next/link";
import { Divider } from "antd";

const servicesData = [
  {
    id: 1,
    title: "Body Repair and Painting",
    image: image1,
    text: "Expert repairs and flawless paint matching to restore your vehicle’s look.",
  },
  {
    id: 2,
    title: "Collision Repair Specialists",
    image: image2,
    text: "From minor dents to major accidents, we restore your car to pre-collision condition.",
  },
  {
    id: 3,
    title: "Precision Frame Straightening",
    image: image3,
    text: "Advanced technology to restore your vehicle’s frame to factory specs.",
  },
  {
    id: 4,
    title: "All Insurance Claims Handled",
    image: image4,
    text: "We work with all insurers to make the repair process hassle-free.",
  },
  {
    id: 5,
    title: "Paint Correction",
    image: image5,
    text: "Remove scratches, swirls, and imperfections for a showroom finish.",
  },
  {
    id: 6,
    title: "Ceramic Coating",
    image: image6,
    text: "Long-lasting protection with a deep gloss finish to keep your car looking new.",
  },
  {
    id: 7,
    title: "Buffing & Polishing",
    image: image7,
    text: "Restore shine and eliminate surface scratches for a flawless appearance.",
  },
  {
    id: 8,
    title: "Computer Diagnostics",
    image: image8,
    text: "Advanced scans to detect and resolve engine and electronic issues.",
  },
  {
    id: 9,
    title: "Paintless Dent Removal",
    image: image9,
    text: "Quick and cost-effective dent repairs without damaging your paint.",
  },
];

export default function Services() {
  const isMobile = useIsMobile();
  const [visibleService, setVisibleService] = useState(0); // Initially, no service is visible

  const toggleVisibility = (id:number) => {
    setVisibleService(visibleService === id ? 0 : id);
  };

  return (
    <div className="px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 font-dancingScript">
        Our Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full" data-aos="flip-right">
        {servicesData.map((item) =>  
          isMobile ? (
            <div key={item.id} className="px-2 py-2">
              <CButton
                color="primary"
                className="w-full flex gap-4 items-center bg-gray-100 pl-5 rounded-md shadow-md "
                onClick={() => toggleVisibility(item.id)}
              >
                <DownOutlined />
                <Divider style={{ borderColor: "black" ,paddingRight:"50px"}}>
                  <h2 className="font-cormorant text-gray-700 text-2xl">
                    {item.title}
                  </h2>
                </Divider>
              </CButton>
              {visibleService === item.id && (
                <CCollapse visible={true} data-aos="fade-up">
                  <CCard className="mt-3">
                    <CCardBody>
                      <div className="relative w-full h-64 overflow-hidden rounded-md">
                        <Image
                          src={item.image}
                          alt={item.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md"
                        />
                      </div>
                      <div className="flex flex-col justify-between mt-4 items-center gap-4">
                        <h2 className="text-2xl uppercase font-cormorant">{item.title}</h2>
                        <p className="text-md font- text-center p-2">{item.text}</p>
                      </div>
                    </CCardBody>
                  </CCard>
                </CCollapse>
              )}
            </div>
          ) : (
            <div key={item.id} className="border rounded-lg shadow-lg p-4 flex flex-col items-center">
              <div className="relative w-full h-64 overflow-hidden rounded-md transition-transform duration-300 ease-in-out hover:scale-105">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col justify-between mt-4 items-center gap-4">
                <h2 className="text-lg font-cormorant">{item.title}</h2>
                <p className="mt-2 text-sm text-center">{item.text}</p>
              </div>
            </div>
          )
        )}
      </div>

      <div className="flex items-center justify-center mt-8">
        <Link
          className="hover:text-blue-400 transition-all duration-300 ease-in-out border rounded-2xl p-4 bg-black text-white"
          href="/services"
        >
          View More Services
        </Link>
      </div>
    </div>
  );
}
