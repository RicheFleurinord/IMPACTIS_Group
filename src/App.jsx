import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Startups from './pages/Startups';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ScrollToTop, { ScrollRestorer } from './components/ui/ScrollToTop';
import ParticleBackground from './components/ui/ParticleBackground';

function App() {
  return (
    <BrowserRouter>
      <ScrollRestorer />
      <ParticleBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/startups" element={<Startups />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;