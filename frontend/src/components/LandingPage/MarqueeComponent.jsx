import Card from "./Card";
import { marqueeData } from "../../../public/assets/data/Data";
import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  return (
    <>
      <div className="mt-28 mb-12 text-center">
        <div className="text-4xl font-semibold ">
          Explore{" "}
          <span className="bg-gradient-to-r from-website-color-200 to-website-color-700 bg-clip-text text-transparent">
            Ayurvedic
          </span>{" "}
          Plants
        </div>
      </div>

      <Marquee pauseOnHover={true} speed={50} >
        {marqueeData.map((data, index) => (
          <Card key={index} {...data} /> 
        ))}
      </Marquee>
    </>
  );
};

export default MarqueeComponent;
