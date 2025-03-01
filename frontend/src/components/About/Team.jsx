import { teamData } from "../../../public/assets/data/Data";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className="my-36 px-16">
      <div className="flex flex-col items-center gap-5 ">
        <div className="text-5xl font-semibold">
          Our
          <span className="bg-gradient-to-r from-website-color-200 to-website-color-500 text-transparent bg-clip-text ">
            {" "}
            Team
          </span>
        </div>
      </div>
      <div className="flex justify-around mt-10">
        {teamData.sort(()=>Math.random() -0.5).map((data, index) => (
          <TeamCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Team;
