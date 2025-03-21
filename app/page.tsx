"use client";
import AboutUs from "@/components/AboutUs";
import ChooseUs from "@/components/ChooseUs";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SliderComponent from "@/components/Slider";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ChooseUs />
      <div className="shadow-2xl">
      <AboutUs />
      </div>
      <Services />
      <SliderComponent />
    </div>
  );
}
