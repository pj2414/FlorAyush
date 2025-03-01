import { IconPlant } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NavLinksUrl from "./NavlinksUrl";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isAuthenticated = localStorage.getItem("auth") === "true";
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    const confirm = window.confirm("Do you want to logout?")
    if(confirm){ localStorage.removeItem("auth");
      localStorage.removeItem("jwt");
      navigate("/auth");
    }
    return;
   
  };

  return (
    <div
      className={`fixed top-0 w-full z-50 h-20 px-6 flex items-center justify-between transition-colors duration-300 ${
        isScrolled ? "bg-black" : ""
      }`}
    >
      {/* ICONS AND LOGO */}
      <Link to="/" className="flex items-center gap-1 cursor-pointer">
        <IconPlant stroke={1.8} className="h-9 w-9" />
        <div className="text-3xl font-semibold">
          Flor
          <span className="bg-gradient-to-r from-website-color-200 to-website-color-500 text-transparent bg-clip-text font-bold">
            Ayush
          </span>
        </div>
      </Link>

      {/* HAMBURGER MENU FOR SMALL SCREENS */}
      <div
        className="lg:hidden cursor-pointer z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </div>

      {/* NAV LINKS */}
      {isAuthenticated && (
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row lg:static absolute top-20 left-0 w-full lg:w-auto bg-black lg:bg-transparent items-center lg:gap-5 z-40`}
        >
          <NavLinksUrl />
        </div>
      )}

      {/* LOGIN/LOGOUT BUTTON */}
      <div>
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="bg-gradient-to-r from-website-color-200 to-website-color-500 text-black py-1 px-5 rounded-md font-bold"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/auth"
            className="bg-gradient-to-r from-website-color-200 to-website-color-500 text-black py-1 px-5 rounded-md font-bold"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
