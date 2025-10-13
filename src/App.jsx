// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/About";
import Services from "./components/Services/Services";
import VisionValues from "./components/VisionValues/VisionValues";
import Footer from "./components/Footer/Footer";
import ContactComponent from "./components/Contact/ContactComponent";
import Sustainability from "./components/Sustainability/Sustainability";
import Careers from "./components/Careers/Careers";
import Clients from "./components/client/Clients";
import ServiceDetail from "./components/Services/ServiceDetail"; // ✅ new import

// Pages
const Home = () => (
  <>
    <Hero />
  </>
);

const About = () => <AboutUs />;
const ServicesPage = () => <Services />;

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans text-gray-800 bg-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home key="home" />} />
            <Route path="/about" element={<About key="about" />} />
            <Route path="/services" element={<ServicesPage key="services" />} />
            {/* ✅ New dynamic route */}
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route
              path="/vision-values"
              element={<VisionValues key="vision-values" />}
            />
            <Route
              path="/sustainability"
              element={<Sustainability key="sustainability" />}
            />
            <Route path="/careers" element={<Careers key="careers" />} />
            <Route path="/clients" element={<Clients key="clients" />} />
            <Route
              path="/contact"
              element={<ContactComponent key="contact" />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
