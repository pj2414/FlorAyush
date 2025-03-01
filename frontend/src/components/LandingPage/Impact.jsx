import { impactData } from "../../../public/assets/data/Data";

const Impact = () => {
  return (
    <div>
      <div className="mt-28 mb-12 text-center">
        <div className="text-4xl font-semibold ">
          Our{" "}
          <span className="bg-gradient-to-r from-website-color-200 to-website-color-700 bg-clip-text text-transparent">
            Impacts
          </span>{" "}
        </div>
      </div>
      <div className="flex  justify-around">
        {impactData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col gap-2  border border-website-color-700 items-center text-mine-shaft-100 w-64  p-5 rounded-lg cursor-pointer hover:cursor-pointer "
          >
            <div className="text-lg font-semibold bg-gradient-to-r from-website-color-200 to-website-color-700 bg-clip-text text-transparent">
              {data.head}
            </div>
            <div className="text-sm text-center text-mine-shaft-100">
              {data.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Impact;
