import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import pdfFile from "../assets/Benjamin Nyankson_CV.pdf";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];
  const [navOpen, setNavOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string | null>(
    localStorage.getItem("activeNav") || "Home"
  );

  useEffect(() => {
    if (activeNav) {
      localStorage.setItem("activeNav", activeNav);
    }
  }, [activeNav]);

  const handleNavClick = (item: string) => {
    setActiveNav(item);
    setNavOpen(false); // Close mobile menu on selection
  };

  function downloadPdf() {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.target = "_blank";
    link.download = "Benjamin_Nyankson_Resume";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <nav className="fixed w-full bg-gray-900 text-white p-4 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold cursor-pointer">
          <ScrollLink
            to="home"
            smooth={true}
            duration={800}
            offset={-80}
          >
            My Portfolio
          </ScrollLink>
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <ScrollLink
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={800}
              offset={-80} // Adjust offset for fixed navbar
              className={`cursor-pointer border border-transparent px-3 py-2 rounded-lg transition-all ${
                activeNav === item
                  ? "bg-blue-600 hover:border-white hover:bg-transparent"
                  : "hover:border-white"
              }`}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </ScrollLink>
          ))}

          <button
            onClick={downloadPdf}
            className="border-white border hover:bg-blue-600 px-3 py-2 rounded-lg transition"
          >
            Download CV
          </button>

          <ScrollLink to="about" smooth={true} duration={800} offset={-80}>
            <motion.img
              src="https://portfolio-website-rho-lovat.vercel.app/assets/profile_img-lj-22JYr.jpg"
              alt="Profile"
              className="rounded-full size-10 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </ScrollLink>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setNavOpen(!navOpen)} className="md:hidden">
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation with Animation */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-800 mt-4 p-4 space-y-4"
          >
            {navItems.map((item) => (
              <ScrollLink
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={800}
                offset={-80}
                className={`block px-3 py-2 rounded-lg cursor-pointer hover:text-blue-400 transition ${
                  activeNav === item ? "bg-blue-600" : ""
                }`}
                onClick={() => handleNavClick(item)}
              >
                {item}
              </ScrollLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
