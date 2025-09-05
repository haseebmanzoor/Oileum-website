// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/About";
import Services from "./components/Services/Services";
import VisionValues from "./components/VisionValues/VisionValues";
import Footer from "./components/Footer/Footer";
import ContactComponent from "./components/Contact/ContactComponent";
import Sustainability from "./components/Sustainability/Sustainability";
import Careers from "./components/Careers/Careers"; // <-- Added

// Pages
const Home = () => <Hero />;
const About = () => <AboutUs />;
const ServicesPage = () => <Services />;

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800 bg-white min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/vision-values" element={<VisionValues />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/careers" element={<Careers />} />{" "}
            {/* <-- Careers route */}
            <Route path="/contact" element={<ContactComponent />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
