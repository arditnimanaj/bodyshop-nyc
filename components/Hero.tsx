
export default function Hero() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="../videos/banner.mp4" type="video/mp4" />
      </video>

      {/* Black Overlay with Text */}
      <div className="absolute bg-black bg-opacity-70 text-white px-8 py-4">
        <h1 className="text-4xl font-bold text-center">Shala Body Shop</h1>
        <p className="text-lg text-center mt-2">Quality repairs, exceptional service.</p>
      </div>
    </div>
  );
}
