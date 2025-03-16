import { Divider } from "antd";
import Link from "next/link";

const mockAboutUs = [
  {
    id: 1,
    text: "At Shala Auto Bodyshop Repair, we are committed to delivering top-quality auto body repair and restoration services with precision, care, and expertise. With years of experience in the industry, we specialize in everything from collision repair and paint correction to frame straightening and ceramic coating. Whether it's a minor dent or a major collision, we handle every job with professionalism and attention to detail. Contact us today to schedule your appointment and get the repair of your dreams.",
    shortText: "At Shala Auto Bodyshop Repair, we specialize in restoring a damaged vehicle to its original finish, matching colours, shades, and textures exactly, in a safe and environmentally responsible manner.",
  },
];

export default function AboutUs() {
  return (
    <div className="bg-black px-2 py-10 sm:py-32 sm:px-32">
      <div className="container mx-auto flex flex-col items-center justify-center gap-8">
        <Divider
          orientation="center"
          style={{ borderColor: "white", margin: "0px" }}
        >
          <h1 className="text-4xl font-bold text-white font-dancingScript">
            About Us
          </h1>
        </Divider>
        <p className="text-center text-white sm:text-lg">
          {/** Render short text for smaller screens */}
          <span className="sm:hidden">{mockAboutUs[0].shortText}</span>
          <span className="hidden sm:flex">{mockAboutUs[0].text}</span>
        </p>
        <div className="flex items-center text-center justify-center gap-4">
          <Link
            href="/services"
            className="bg-white text-black px-8 py-2 rounded-lg uppercase font-bold"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="bg-white text-black px-8 py-2 rounded-lg uppercase font-bold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
