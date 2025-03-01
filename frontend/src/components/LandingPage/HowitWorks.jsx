const   HowitWorks = () => {
    return (
      <div className="mt-20 px-6">
        {/* Heading */}
        <div className="text-center text-mine-shaft-50">
          <h2 className="text-4xl font-semibold">
            How&nbsp;
            <span className="bg-gradient-to-r from-website-color-200 to-website-color-700 bg-clip-text text-transparent">
              FlorAyush
            </span>{" "}
            Works
          </h2>
          <p className="mt-4 text-lg text-mine-shaft-100">
            Discover the seamless process behind <span className="bg-gradient-to-r from-website-color-200 to-website-color-700 bg-clip-text text-transparent">FlorAyush's</span>  mission to educate
            and engage with nature's medicinal plants.
          </p>
        </div>
  
        {/* Workflow Section */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-10">
          {/* Description Section */}
          <div className="max-w-xl text-center md:text-left">
            <p className="text-lg text-mine-shaft-100">
              <span className="bg-gradient-to-r from-website-color-200 to-website-color-700 bg-clip-text text-transparent">FlorAyush</span> operates through an integrated workflow of data sourcing,
              3D modeling, and accessible educational resources, creating a
              cohesive and user-friendly experience that facilitates learning
              about medicinal plants.
            </p>
            <p className="mt-4 text-lg text-mine-shaft-200">
              By combining technology with <span className="bg-gradient-to-r from-website-color-200 to-website-color-700 bg-clip-text text-transparent">Ayurveda</span>, we aim to bridge the gap
              between traditional knowledge and modern accessibility.
            </p>
          </div>
  
          {/* Workflow Image */}
          <div className="w-full sm:w-auto relative">
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <img
              src="/assets/images/workflow.png" 
              alt="Workflow of FlorAyush"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default HowitWorks;
  