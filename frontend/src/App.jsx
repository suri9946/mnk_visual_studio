import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatWeCreate from './components/WhatWeCreate';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PrivacyModal from './components/PrivacyModal';
import TermsModal from './components/TermsModal';

function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <div className="overflow-x-hidden bg-white text-dark">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <WhatWeCreate />
        <Portfolio />
        <CTA />
        <Contact />
      </main>
      <Footer 
        onPrivacyClick={() => setIsPrivacyOpen(true)}
        onTermsClick={() => setIsTermsOpen(true)}
      />
      <WhatsAppButton />

      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </div>
  );
}

export default App;
