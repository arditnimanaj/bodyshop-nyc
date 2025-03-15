import Image from "next/image"
import logo from "../../public/logo.svg"


export default function Contact() {
  return (
    <div className="gap-20 flex flex-col items-center justify-center min-w-full">
      <div className="flex flex-col items-center py-20 justify-center gap-16 bg-gray-300">
         <h1>Get In Touch</h1>
      </div>
      <div className="flex justify-center gap-20 text-center items-center">
       <div className="flex flex-col justify-center text-center items-center">
        <Image src={logo} alt="logo" width={50} height={50} className="mb-0" />
        <h1>Location</h1>
        <p>20 Charles St. New York, NY 10801</p>
       </div>
       <div className="flex flex-col justify-center text-center items-center">
       <Image src={logo} alt="logo" width={50} height={50} className="mb-0" />
        <h1>Phone</h1>
        <p>+1 (929) 219-9089</p>
       </div>
       <div className="flex flex-col justify-center text-center items-center">
       <Image src={logo} alt="logo" width={50} height={50} className="mb-0" />
        <h1>Email</h1>
        <p>shalaautobody@gmail.com</p>
       </div>
      </div>
      <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.347055929554!2d-73.7897444!3d40.908135699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28d9ec557806d%3A0xc7c63e0b06ebb2b4!2s20%20Charles%20St%2C%20New%20Rochelle%2C%20NY%2010801%2C%20USA!5e0!3m2!1sen!2s!4v1741383323820!5m2!1sen!2s"
            className="w-full h-[500px] rounded-lg shadow-md"
            loading="lazy"
          ></iframe>
    </div>
  );
}