import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/Services/Services";
import VisionValues from "./components/VisionValues/VisionValues";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <VisionValues />
      <Footer />
    </div>
  );
}

export default App;
