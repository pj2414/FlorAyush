import Team from "./Team";

const Intro = () => {
  return (
    <div className="mt-36 px-16">
      <div className="flex flex-col items-center gap-5 ">
        <div className="text-5xl font-semibold">
          Flor
          <span className="bg-gradient-to-r from-website-color-200 to-website-color-500 text-transparent bg-clip-text ">
            Ayush
          </span>
        </div>
        <div className="text-xl text-center">
          <span className="bg-gradient-to-r from-website-color-200 to-website-color-500 text-transparent bg-clip-text ">
            FlorAyush
          </span>{" "}
          is a leading provider of medicinal plants and herbal remedies. We are
          dedicated to promoting{" "}
          <span className="bg-gradient-to-r from-website-color-200 to-website-color-500 text-transparent bg-clip-text">
            natural healing
          </span>{" "}
          and wellness through the power of nature. Our extensive collection of
          plants includes a wide range of medicinal herbs and plants known for
          their therapeutic properties. Whether you're looking for skin care
          solutions, immune boosters, or mental wellness support, we have the
          perfect plant for you. Explore our collection and start your journey
          towards holistic health today.
        </div>
      </div>
      <Team/>
    </div>
  );
};

export default Intro;
