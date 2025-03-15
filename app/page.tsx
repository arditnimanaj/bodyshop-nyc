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
      <AboutUs />
      <ChooseUs />
      <Services />
      <SliderComponent />
    </div>
  );
}
