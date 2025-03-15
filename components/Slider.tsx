"use client";
import Slider from "react-infinite-logo-slider";
import image1 from "../public/images/carlogo/Audi-Logo_2016.svg";
import image2 from "../public/images/carlogo/bmw-7.svg";
import image4 from "../public/images/carlogo/lamborghini.svg";
import image5 from "../public/images/carlogo/mercedes-benz-9.svg";
import image6 from "../public/images/carlogo/toyota-7.svg";
import image7 from "../public/images/carlogo/volkswagen-9.svg";
import image8 from "../public/images/carlogo/tesla-pure.svg";
import image9 from "../public/images/carlogo/porsche-2.svg";
import image10 from "../public/images/carlogo/maserati-5.svg";
import Image from "next/image";

const carLogos = [
  {
    id: 1,
    text: "Audi",
    image: image1,
  },
  {
    id: 2,
    text: "BMW",
    image: image2,
  },
  {
    id: 4,
    text: "Lamborghini",
    image: image4,
  },
  {
    id: 5,
    text: "Mercedes-Benz",
    image: image5,
  },
  {
    id: 6,
    text: "Toyota",
    image: image6,
  },
  {
    id: 7,
    text: "Volkswagen",
    image: image7,
  },
  {
    id: 8,
    text: "Tesla",
    image: image8,
  },
  {
    id: 9,
    text: "Porsche",
    image: image9,
  },
  {
    id: 10,
    text: "Maserati",
    image: image10,
  },
];

const SliderComponent = () => {
  return (
    <div className="py-10 sm:py-20 w-full">
    <Slider
      width="250px"
      duration={40}
      blurBorders={false}
      blurBorderColor={"#fff"}
    >
      {carLogos.map((item) => {
        return (
          <Slider.Slide key={item.id}>
            <Image src={item.image} alt={item.text} className="w-20 hover:opacity-100 opacity-50 grayscale-100 hover:grayscale-0" width={200} height={200} />
          </Slider.Slide>
        );
      })}
    </Slider>
    </div>
  );
};

export default SliderComponent;
