import { Divider } from "antd";
import Link from "next/link";
import aboutus from "../public/images/aboutusbg.png";

const mockAboutUs = [
  {
    id: 1,
    text: "At Shala Auto Bodyshop Repair, we are committed to delivering top-quality auto body repair and restoration services with precision, care, and expertise. With years of experience in the industry, we specialize in everything from collision repair and paint correction to frame straightening and ceramic coating. Whether it's a minor dent or a major collision, we handle every job with professionalism and attention to detail. Contact us today to schedule your appointment and get the repair of your dreams.",
    shortText: "At Shala Auto Bodyshop Repair, we specialize in restoring a damaged vehicle to its original finish, matching colours, shades, and textures exactly, in a safe and environmentally responsible manner.",
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
            <span className="sm:hidden">{mockAboutUs[0].shortText}</span>
            <span className="hidden sm:flex">{mockAboutUs[0].text}</span>
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
