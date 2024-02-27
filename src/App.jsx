import { BrowserRouter } from "react-router-dom";
import Navber from "./components/Navber";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact";
import Works from "./components/Works";
import StartsCanvas from "./components/canvas/Stars";
import Footer from "./components/Footer";
import SochialLink from "./components/SochialLink";


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navber />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <StartsCanvas />
        <Feedbacks />
        <SochialLink />
        <div className="relative z-0">
          <Contact />
          <StartsCanvas />


        </div>
        <Footer />

      </div>
    </BrowserRouter>
  );
};

export default App;
