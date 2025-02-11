import { motion } from "framer-motion";
import SocialMedia from "./Social";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row items-center justify-center text-white container px-4 mx-auto py-16"
    >
      {/* Left Content */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left py-10 w-full">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-medium"
        >
          Hi, I am
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[#FD6F00] text-3xl font-extrabold"
        >
          Benjamin Nyankson
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="lg:text-8xl text-6xl font-extrabold"
        >
          FRONT-END
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="sm:text-5xl lg:text-8xl font-extrabold bg-gradient-to-r from-[#FD6F00] via-[#ffaf00] to-[#ff6b81] inline-block text-transparent bg-clip-text"
        >
          DEVELOPER
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="mt-4 text-xl text-gray-300 max-w-xl"
        >
          I specialize in crafting seamless user interfaces and delightful
          experiences with React.js & Vue.js. Passionate about building
          accessible and engaging web applications.
        </motion.p>

        {/* CTA Button using ScrollLink */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="mt-10">
          <ScrollLink
            to="projects" // The ID of the section you want to scroll to
            smooth={true} // Enables smooth scrolling
            duration={500} // Scroll duration in ms
            offset={-50} // Adjust the scroll position (optional)
            className="mt-6 bg-[#FD6F00] text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-[#ff8c00] transition-all cursor-pointer"
          >
            View My Work
          </ScrollLink>
        </motion.div>
      </div>

      {/* Right Content */}
      <div className="w-full flex flex-col items-center sm:hidden md:hidden lg:flex justify-center lg:justify-end mt-10 lg:mt-0">
        <motion.img
          src="https://portfolio-website-rho-lovat.vercel.app/assets/profile_img-lj-22JYr.jpg"
          alt="Profile"
          className="rounded-lg border-4 w-[280px] lg:w-[400px] object-cover shadow-lg hover:rotate-1 transition-transform duration-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <SocialMedia />
      </div>
    </section>
  );
};

export default Hero;
