const Herosection = () => {
  return (
    <>
      <div className=" flex justify-center items-center min-h-screen px-4  text-white">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          autoPlay
          loop
          muted
        >
          <source src="/assets/video/example.mp4" type="video/mp4" />
        
        </video>

        {/* Overlay for video tint */}
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mt-20 ">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Explore our{" "}
            <span className="bg-gradient-to-r from-website-color-200 to-website-color-700 bg-clip-text text-transparent drop-shadow-[0_5px_15px_rgba(64, 242, 87, 0.8)]">
              Ayurvedic
            </span>{" "}
            Legacy
          </h1>
          <p className="mt-8 text-base sm:text-lg md:text-xl   font-light text-gray-300">
            Embark on a 3D Landscape Adventure at <span className="bg-gradient-to-r from-website-color-200 to-website-color-700 bg-clip-text text-transparent font-semibold">FlorAyush </span> Explore vibrant
            terrains of medicinal plants, brought to life in stunning detail,
            and experience nature like never before.
          </p>
          <button
  onClick={() => window.location.href = "florayush://"}
  className="hover:drop-shadow-[0_5px_15px_rgba(64, 242, 87, 0.8)] mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-website-color-200 to-website-color-500 text-black font-semibold text-sm sm:text-lg rounded-lg shadow-lg hover:bg-azure-radiance-800 transition-all duration-300"
>
  Enter Metaverse
</button>
        </div>

        {/* Glowing Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-80 h-80 bg-website-color-900 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute top-1/4 left-2/4 w-96 h-96 bg-website-color-800 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-website-color-900 rounded-full blur-3xl opacity-30"></div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
