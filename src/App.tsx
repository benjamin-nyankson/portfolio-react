import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
// import { Analytics } from '@vercel/analytics/next';
// import { inject } from "@vercel/analytics";
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  // inject()
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <About/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />

    </div>
  );
};

export default App;