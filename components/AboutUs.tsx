import { Divider } from "antd";
import Link from "next/link";
import aboutus from "../public/images/aboutusbg.png";

const mockAboutUs = [
  {
    id: 1,
    text: "At Shala Auto Bodyshop Repair, we specialize in restoring damaged vehicles to their original condition with precision and expertise. Utilizing advanced techniques, we ensure an exact match of colors, shades, and textures while upholding the highest standards of quality and safety.",
  },
];

export default function AboutUs() {
  return (
    <div
      className="relative w-full h-[600px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${aboutus.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="absolute rounded-lg mx-2 sm:mx-32 bg-white opacity-70 text-black px-4 sm:px-32 py-4 sm:py-4 flex flex-col items-center justify-center z-10">
        <div className="text-center">
          <Divider orientation="center" style={{ borderColor: "black" }}>
            <h1 className="text-4xl font-bold text-black font-dancingScript">
              About Us
            </h1>
          </Divider>
          <p className="text-md sm:text-2xl">
            <span>{mockAboutUs[0].text}</span>
          </p>
          <div className="flex items-center text-center justify-center gap-4 mt-8">
            <Link
              href="/services"
              className="bg-black text-white px-6 py-2 rounded-lg text-md uppercase font-bold"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="bg-black text-white px-8 py-2 rounded-lg text-md uppercase font-bold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
