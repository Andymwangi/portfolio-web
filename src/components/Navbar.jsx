import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/Andylogo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative mb-20 flex items-center justify-between py-6 px-4">
      <div className="flex items-center">
        <img className="mx-4 w-40" src={logo} alt="logo" />
      </div>
      <div className="hidden md:flex items-center justify-center gap-8 text-xl">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          offset={-70} // Adjust offset for sticky navbar
          className="hover:text-blue-500 cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          className="hover:text-blue-500 cursor-pointer"
        >
          About
        </Link>
        <Link
          to="technologies"
          smooth={true}
          duration={500}
          offset={-70}
          className="hover:text-blue-500 cursor-pointer"
        >
          Technologies
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          offset={-70}
          className="hover:text-blue-500 cursor-pointer"
        >
          Experience
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
          className="hover:text-blue-500 cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          className="hover:text-blue-500 cursor-pointer"
        >
          Contact
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={handleMenuToggle} className="text-2xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="absolute top-0 right-0 mt-16 w-full bg-gray-800 p-6 text-center md:hidden"
        >
          <Link
            to="hero"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleLinkClick}
            className="block my-2 text-white cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleLinkClick}
            className="block my-2 text-white cursor-pointer"
          >
            About
          </Link>
          <Link
            to="technologies"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleLinkClick}
            className="block my-2 text-white cursor-pointer"
          >
            Technologies
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleLinkClick}
            className="block my-2 text-white cursor-pointer"
          >
            Experience
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleLinkClick}
            className="block my-2 text-white cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleLinkClick}
            className="block my-2 text-white cursor-pointer"
          >
            Contact
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
