"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import logo from "../public/logo.svg";
import image1 from "../public/pin-svgrepo-com.svg";
import image2 from "../public/phone-svgrepo-com.svg";
import image3 from "../public/mail-2-svgrepo-com.svg";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import { CaretRightOutlined } from "@ant-design/icons";
const menuComponents = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Contact", path: "/contact" },
];

const navInfo = [
  {
    id: 1,
    name: "Location",
    value: "20 Charles St. New York, NY 10801",
    href: "https://www.google.com/maps/place/20+Charles+St+New+York,+NY+10801/@40.908135699999995,-73.7897444,17.78z/data=!3m1!4b1!4m5!3m4!1s0x89c28d9ec557806d:0xc7c63e0b06ebb2b4!8m2!3d40.9081357!4d-73.7897444",
    image: image1,
  },
  {
    id: 2,
    name: "Phone",
    value: "+1 (929) 219-9089",
    type: "tel",
    image: image2,
  },
  {
    id: 3,
    name: "Email",
    value: "shalaautobody@gmail.com",
    type: "email",
    image: image3,
  },
];

const Header = () => {
  const [sideBar, setSideBar] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="">
      <div className="flex justify-between px-4 sm:px-12 py-2  sm:py-2 bg-black text-white min-w-full ">
        {navInfo.map((info) => {
          if (isMobile && info.name === "Location") return null;
          return (
            <div
              key={info.id}
              className="flex text-xs font-catamaran md:text-sm items-center gap-2 justify-center"
            >
              <Image
                src={info.image}
                alt={info.name}
                width={info.name === "Phone" ? 25 : 30}
                height={info.name === "Phone" ? 25 : 30}
              />
              {info.href ? (
                <a href={info.href} target="_blank" rel="noopener noreferrer">
                  {info.value}
                </a>
              ) : info.type ? (
                <a
                  href={`${info.type === "tel" ? "tel:" : "mailto:"}${
                    info.value
                  }`}
                >
                  {info.value}
                </a>
              ) : (
                <span>{info.value}</span>
              )}
            </div>
          );
        })}
      </div>

      <div
        className={`fixed top-0 left-0 z-20 h-full w-full bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${
          sideBar ? "translate-x-0" : "-translate-x-full"
        } sm:hidden`}
      >
        <div className="flex flex-col items-start gap-6 p-6 w-full justify-between h-full">
          <div className="flex flex-col gap-6 w-full flex-grow">
            <button
              onClick={() => setSideBar(false)}
              className="self-end text-xl font-bold"
            >
              ✕
            </button>
            <ul className="flex flex-col gap-4 items-start w-full">
              {menuComponents.map((component) => (
                <Link
                  key={component.id}
                  href={component.path}
                  onClick={() => setSideBar(false)}
                  className="w-full"
                >
                  <li className="border p-2 border-gray-500 rounded-lg flex justify-between w-full hover:bg-gray-200 transition-all duration-300 uppercase text-lg font-extrabold font-cormorant">
                    {component.name}
                    <CaretRightOutlined />
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex justify-center mb-4 mx-auto">
            <Image
              src={logo}
              alt="logo"
              width={300}
              height={300}
              className="mb-0"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-12 justify-between items-center max-h-[120px] px-4 bg-gray-100">
        <div className="inline sm:hidden">
          <Button
            className="bg-black text-white text-xl"
            onClick={() => setSideBar(true)}
          >
            ☰
          </Button>
        </div>
        <Image
          src={logo}
          alt="logo"
          width={200} // Adjust width as needed
          height={200} // Reduce height to control the header size
          className="sm:hidden object-contain"
        />

        <Image
          src={logo}
          alt="logo"
          width={200} // Adjust width as needed
          height={200} // Reduce height to control the header size
          className="hidden sm:flex object-contain"
        />
        <ul className="gap-12 justify-end hidden sm:flex">
          {menuComponents.map((component) => (
            <li key={component.id}>
              <a
                href={component.path}
                className="font-bold text-gray-700 hover:text-gray-900 transition-all duration-300 ease-in-out uppercase"
              >
                {component.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
