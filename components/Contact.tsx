const mockContact = [
  {
    id: 1,
    name: "Location",
    value: "20 Charles St. New York, NY 10801",
  },
  {
    id: 2,
    name: "Phone",
    value: "+1 (929) 219-9089",
  },
  {
    id: 3,
    name: "Email",
    value: "shalaautobody@gmail.com",
  },
  {
    id: 4,
    name: "Owner",
    value: "Rinor Shala",
  },
];

export default function Contact() {
  return (
    <div className="bg-black py-12 px-32 text-white">
      <h1 className="flex items-center justify-center uppercase text-2xl">Contact Us</h1>
      <div className="grid grid-cols-2 gap-16 p-20">
        <div className="flex flex-col gap-12">
          {mockContact.map((item) => {
            return (
              <div key={item.id} className="gap-8">
                <h2 className="border w-fit px-6 py-2 bg-white text-black">
                  {item.name}
                </h2>
                <p>{item.value}</p>
              </div>
            );
          })}
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.347055929554!2d-73.7897444!3d40.908135699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28d9ec557806d%3A0xc7c63e0b06ebb2b4!2s20%20Charles%20St%2C%20New%20Rochelle%2C%20NY%2010801%2C%20USA!5e0!3m2!1sen!2s!4v1741383323820!5m2!1sen!2s"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
