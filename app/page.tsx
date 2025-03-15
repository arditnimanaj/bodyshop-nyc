'use client'
import AboutUs from "@/components/AboutUs";
import ChooseUs from "@/components/ChooseUs";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SliderComponent from "@/components/Slider";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../public/logo.svg"

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <ChooseUs />
      <Services />
      <SliderComponent/>
      <FloatingWhatsApp
        accountName="Shala Body Shop"
        phoneNumber="+38345317885"
        avatar={logo}
        darkMode={true}
        allowEsc={true}
        chatMessage="Welcome to Shala Body Shop. How can I help you?"
      />
    </div>
  );
}
