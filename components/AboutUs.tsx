import Link from "next/link";

const mockAboutUs = [
  {
    id: 1,
    text: "At Shala Auto Bodyshop Repair, we are committed to delivering top-quality auto body repair and restoration services with precision, care, and expertise. With years of experience in the industry, we specialize in everything from collision repair and paint correction to frame straightening and ceramic coating. Our skilled technicians use state-of-the-art equipment and the latest repair techniques to restore your vehicle to its original condition. Whether it's a minor dent or a major collision, we handle every job with the highest level of professionalism and attention to detail. We pride ourselves on our ability to provide exceptional customer service and ensure a smooth repair process every time. So, whether you're looking to buy a new vehicle or simply want to refresh your car, look no further than Shala Auto Bodyshop Repair. Contact us today to schedule your appointment and get the repair of your dreams. Located in New Rochelle, NY, our shop is trusted by the local community for reliability, honesty, and outstanding craftsmanship. Our mission is simple: to get you back on the road safely and with confidence.",
  },
];

export default function AboutUs() {
  return (
    <div className="bg-black px-10 py-10 sm:py-32 sm:px-32">
      <div className="container mx-auto flex flex-col items-center justify-center gap-16">
        <h1 className="text-4xl font-bold text-center text-white">About Us</h1>
        <p className="text-center text-white">
          {mockAboutUs[0].text}
        </p>
        <div className="flex  items-center justify-center gap-4">
          <Link href="/services" className="bg-white text-black px-8 py-2 rounded-lg">
            Our Services
          </Link>
          <Link href="/contact" className="bg-white text-black px-8 py-2 rounded-lg">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
