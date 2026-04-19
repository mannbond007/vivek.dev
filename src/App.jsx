import Navbar from "./components/layout/Navbar";
import AboutMe from "./components/sections/AboutMe";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience ";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import TechnologySection from "./components/sections/TechStack";
import Testimonials from "./components/sections/Testimonials";
import CustomCursor from "./components/layout/CustomCursor";


const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <CustomCursor />
      <Navbar />
      <Hero />
      <AboutMe />
      <TechnologySection />
      <Experience/>
      <Testimonials/>
      <Certifications/>
      <Services/>
      <Projects/>
      <Contact />
      <Footer />
      
    </div>
  );
};

export default App;
