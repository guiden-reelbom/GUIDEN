/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import SocialProof from './components/SocialProof';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import BrandAssets from './pages/BrandAssets';
import ScrollToTop from './components/ScrollToTop';

function Home() {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Process />
        <Portfolio />
        <SocialProof />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/brand-assets" element={<BrandAssets />} />
      </Routes>
    </Router>
  );
}
