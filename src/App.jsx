import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Startups from './pages/Startups';
import ServicesSection from './pages/ServicesSection';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ScrollToTop, { ScrollRestorer } from './components/ui/ScrollToTop';
import ParticleBackground from './components/ui/ParticleBackground';

function App() {
  return (
    <HashRouter>
      <ScrollRestorer />
      <ParticleBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/startups" element={<Startups />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </HashRouter>
  );
}

export default App;