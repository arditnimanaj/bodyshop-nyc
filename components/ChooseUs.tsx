import image1 from "../public/images/chooseus/quality-4-svgrepo-com.svg";
import image2 from "../public/images/chooseus/price-tag-svgrepo-com.svg";
import image3 from "../public/images/chooseus/help-svgrepo-com.svg";
import image4 from "../public/images/chooseus/garage-svgrepo-com.svg";
import Image from "next/image";
import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css'; // Make sure to import the AOS styles
import { Divider } from "antd";
const chooseUsData = [
  {
    title: "Best Quality",
    description:
      "We use top-grade materials and industry-leading techniques to ensure your vehicle looks and performs like new. Our certified technicians have years of experience in providing premium auto body repair services.",
    image: image1,
  },
  {
    title: "Best Price",
    description:
      "We offer competitive pricing without compromising on quality. Our transparent pricing model ensures that you get the best value for your money, with no hidden costs or surprises.",
    image: image2,
  },
  {
    title: "Quick Support",
    description:
      "Our dedicated team is available to assist you promptly. From free estimates to real-time repair updates, we make the process hassle-free and efficient.",
    image: image3,
  },
  {
    title: "Modern Workshop",
    description:
      "Equipped with state-of-the-art technology and tools, our workshop ensures precision and efficiency in every repair. We stay ahead with the latest advancements in auto body repair techniques.",
    image: image4,
  },
];

export default function ChooseUs() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Run the animation only once
    });
  }, []);

  return (
    <div className="bg-gray-100 py-10 px-2 sm:py-22 sm:px-12 flex flex-col items-center shadow-xl">
      <Divider style={{ borderColor: "black" }}>
        <h1 className=" text-4xl font-bold font-dancingScript">Why Choose Us</h1>
      </Divider>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-4 px-4 sm:py-10 p-2">
          {chooseUsData.map((item, index) => (
            <div key={index}  data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} className="border rounded-lg p-4 flex flex-col items-center gap-4 w-full text-center shadow-2xl">
              <Image src={item.image} alt={item.title} width={100} height={100} className="rounded-md" />
              <h2 className="text-lg font-semibold uppercase font-catamaran">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
