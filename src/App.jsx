// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar"; // <--- use Navbar directly
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/About";
import Services from "./components/Services/Services";
import VisionValues from "./components/VisionValues/VisionValues";
import Footer from "./components/Footer/Footer";
import ContactComponent from "./components/Contact/ContactComponent";
import ClientTestimonials from "./components/clientTestimonials/ClientTestimonials";

// Pages
const Home = () => <Hero />;

const About = () => <AboutUs />;

const ServicesPage = () => <Services />;

const Contact = () => (
  <div className="min-h-screen bg-slate-950 text-white pt-24">
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-orange-400 mb-8">Contact</h1>
      <ContactComponent />
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800">
        {/* Navbar imported here */}
        <Navbar />

        <Routes>
          {/* Home route only Hero */}
          <Route path="/" element={<Home />} />

          {/* Individual pages */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/vision-values" element={<VisionValues />} />
          <Route path="/testimonials" element={<ClientTestimonials />} />
          <Route path="/contact" element={<Contact />} />

          {/* Future pages you can add later */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
