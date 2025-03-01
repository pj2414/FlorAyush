// import Plants from "../components/Exploreplants/Plants";
// import {marqueeData} from "../../public/assets/data/Data"
// import Card from "../components/LandingPage/Card"
// const ExplorePlants = () => {
//   return (
//     <div className="mt-32 px-16">
//       <Plants />
//       <div className="flex flex-wrap justify-center gap-10">
//       {marqueeData.map((data, index) => (
//         <Card key={index} {...data} />
//       ))}
//       </div>
     
//     </div>
//   );
// };

// export default ExplorePlants;
import Plants from "../components/Exploreplants/Plants";
import { marqueeData } from "../../public/assets/data/Data";
import Card from "../components/LandingPage/Card";

const ExplorePlants = () => {
  return (
    <div className="mt-32 px-16">
      <Plants />
      <div className="flex flex-wrap justify-center gap-10">
        {marqueeData.map((data, index) => (
          <Card 
            key={index} 
            name={data.name}
            description={data.description}
            price={data.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ExplorePlants;