import Image from "next/image";
import whitelogo from "../public/whitelogo.svg";
import { Divider } from "antd";

export default function Hero() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="../videos/banner.mp4" type="video/mp4" />
      </video>

      <div className="absolute bg-black bg-opacity-70 text-white px-6 sm:px-20 py-2 sm:py-4 flex flex-col items-center justify-center">
        <Image
          src={whitelogo}
          alt="logo"
          width={200}
          height={120}
          className="max-w-[200px] object-contain"
        />
        <div className="text-center">
          <Divider orientation="center" style={{ borderColor: "white" }}>
            <h1 className="text-4xl font-bold text-white font-dancingScript">
              Shala
            </h1>
          </Divider>
          <h1 className="text-3xl font-bold uppercase font-catamaran">
            Autorepair
          </h1>
          <h1 className="text-3xl font-bold uppercase font-catamaran">
            Bodyshop
          </h1>
          <p className="text-lg mt-2 font-dancingScript">
            Quality repairs, exceptional service.
          </p>
        </div>
      </div>
    </div>
  );
}
