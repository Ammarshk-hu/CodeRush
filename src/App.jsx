import React from 'react';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import ProcessCards from './components/ProcessCards';
import Tracks from './components/Tracks';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import RulesAndFAQ from './components/RulesAndFAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f7f2] text-graphite font-sans selection:bg-lime selection:text-graphite">
      <main>
        <Hero />
        <Marquee />
        <About />
        <ProcessCards />
        <Tracks />
        <Timeline />
        <Prizes />
        <RulesAndFAQ />
      </main>
      <Footer />
    </div>
  );
}
