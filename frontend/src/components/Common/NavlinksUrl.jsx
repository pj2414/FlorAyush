import { Link, useLocation } from "react-router-dom";

const NavLinksUrl = () => {
  const location = useLocation();
  const links = [
    { name: "Order Plants", url: "order-plants" },
    { name: "Explore Plants", url: "explore-plants" },
    { name: "Mentors", url: "mentors" },
    { name: "About Us", url: "about" },
    {name:"Cart",url:"cart"}
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-5 h-full items-center text-mine-shaft-100">
      {links.map((link, index) => (
        <div
          key={index}
          className={`${
            location.pathname === "/" + link.url? "border-website-color-700 bg-gradient-to-r from-website-color-100 to-website-color-500 bg-clip-text text-transparent drop-shadow-[0_5px_15px_rgba(0,120,255,3)]" : "border-transparent"}`}
        >
          <Link to={link.url}>{link.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinksUrl;
