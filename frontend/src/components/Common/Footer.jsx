import {
  IconBrandInstagram,
  IconBrandLinkedinFilled,
  IconBrandTelegram,
  IconPlant,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { footerLinks } from "../../../public/assets/data/Data";

const Footer = () => {
  return (
    <div>
      <div className="pb-5 mt-20 flex  justify-around ">
        <div className="w-1/4 flex flex-col gap-4 ">
          <div className="flex text-white gap-1 items-center cursor-pointer ">
            <Link to={"/"}>
              <IconPlant stroke={1.8} className="h-6  w-6  " />
            </Link>
            <div className="text-xl font-semibold">
              Flor
              <span className="bg-gradient-to-r from-website-color-200 to-website-color-700  text-transparent bg-clip-text font-bold">
                Ayush
              </span>
            </div>
          </div>
          <div className="text-sm ">
           From: Loops & OOPS
          </div>
          <div className="text-website-color-500 flex gap-4 [&>div]:bg-slate-900 [&>div]:p-2 [&>div]:rounded-full   [&>div]:cursor-pointer hover:[&>div]:bg-slate-800">
            <div>
              <IconBrandLinkedinFilled />
            </div>
            <div>
              <IconBrandTelegram />
            </div>
            <div>
              <IconBrandInstagram />
            </div>
          </div>
        </div>

        <div className="flex gap-x-52 ">
          {footerLinks.map((items, index) => (
            <div key={index}>
              <div className="text-xl bg-gradient-to-r from-website-color-200 to-website-color-700  text-transparent bg-clip-text font-bold">
                {items.title}
              </div>
              {items.links.map((link, index) => (
                <div key={index}>
                  <p className="text-white text-sm mt-1 cursor-pointer hover:text-website-color-700 hover:translate-x-2 transition ease-in-out duration-300">
                    {link}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
