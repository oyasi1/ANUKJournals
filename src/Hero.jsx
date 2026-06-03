import ANUK1 from "./ANUK1.png";

const HeroSection = () => {
  return (
    <div 
      className="relative w-full bg-center bg-no-repeat flex items-center justify-center 
                 h-[800px] sm:h-[900px] md:h-[1000px] lg:h-[1200px] xl:h-[1400px]"
      style={{ 
        backgroundImage: `url(${ANUK1})`,
        backgroundSize: "70%", // Adjust this value to zoom out more/less
        backgroundPosition: "center",
      }}
    >
      {/* Optional: Add overlay if needed */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
        </h1>
        <p className="text-lg md:text-xl">
        </p>
      </div>
    </div>
  );
};

export default HeroSection;