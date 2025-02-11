import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <About/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;