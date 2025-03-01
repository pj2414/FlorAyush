import {
    IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedinFilled,
} from "@tabler/icons-react";

const TeamCard = ({name,role,linkedIn,instagram,github}) => {
  return (
    <div className="flex flex-col gap-2 border border-website-color-500 w-56 items-center px-1 py-3 rounded-xl">
      <div className=" rounded-md">
        <img
          src={`/assets/images/${name.split(" ")[0].toLowerCase()}.jpg`}
          alt=""
          className="w-40 rounded-md"
        />
      </div>
      <div className="flex flex-col items-center">
        <div>{name}</div>
        <div>{role}</div>
      </div>
      <div>
        <div className="text-website-color-500 flex gap-4 [&>div]:bg-slate-900 [&>div]:p-2 [&>div]:rounded-full   [&>div]:cursor-pointer hover:[&>div]:bg-slate-800">
          <div>
            <a href={linkedIn} target="_blank">
              {" "}
              <IconBrandLinkedinFilled />
            </a>
          </div>
          <div>
            <a href={instagram} target="_blank">
              <IconBrandInstagram />
            </a>
          </div>
          <div>
            <a href={github} target="_blank">
             <IconBrandGithub/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
