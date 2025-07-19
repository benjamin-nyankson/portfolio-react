import { useState, useEffect, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import pdfFile from "../assets/Benjamin Nyankson_CV.pdf";

const NAV_ITEMS = ["Home", "About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string>(
    localStorage.getItem("activeNav") || "Home"
  );

  useEffect(() => {
    localStorage.setItem("activeNav", activeNav);
  }, [activeNav]);

  const handleNavClick = useCallback((item: string) => {
    setActiveNav(item);
    setNavOpen(false);
  }, []);

  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.target = "_blank";
    link.download = "Benjamin_Nyankson_Resume";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderNavLinks = (isMobile = false) =>
    NAV_ITEMS.map((item) => (
      <ScrollLink
        key={item}
        to={item.toLowerCase()}
        smooth
        duration={800}
        offset={-80}
        onClick={() => handleNavClick(item)}
        className={`cursor-pointer px-3 py-2 rounded-lg transition-all ${
          activeNav === item
            ? "bg-blue-600 text-white"
            : "hover:text-blue-400"
        } ${isMobile ? "block" : "border border-transparent hover:border-white"}`}
      >
        {item}
      </ScrollLink>
    ));

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold cursor-pointer">
          <ScrollLink to="home" smooth duration={800} offset={-80}>
            My Portfolio
          </ScrollLink>
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {renderNavLinks()}
          <button
            onClick={downloadPdf}
            className="border border-white hover:bg-blue-600 px-3 py-2 rounded-lg transition"
          >
            Download CV
          </button>
          <ScrollLink to="about" smooth duration={800} offset={-80}>
            <motion.img
              src="https://portfolio-website-rho-lovat.vercel.app/assets/profile_img-lj-22JYr.jpg"
              alt="Profile"
              className="rounded-full w-10 h-10 object-cover cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </ScrollLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setNavOpen((prev) => !prev)}
          className="md:hidden focus:outline-none"
        >
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-800 mt-3 rounded-lg px-4 py-3 space-y-3"
          >
            {renderNavLinks(true)}

            <button
              onClick={downloadPdf}
              className="block w-full border border-white hover:bg-blue-600 px-3 py-2 rounded-lg text-left transition"
            >
              Download CV
            </button>

            <ScrollLink to="about" smooth duration={800} offset={-80}>
              <motion.img
                src="https://portfolio-website-rho-lovat.vercel.app/assets/profile_img-lj-22JYr.jpg"
                alt="Profile"
                className="rounded-full w-10 h-10 object-cover"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              />
            </ScrollLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
