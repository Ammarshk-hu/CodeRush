import React from 'react';
import { Database, Terminal, Zap, CheckCircle2, Code2, Users2, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const eventDetails = [
    { label: 'EVENT TYPE', value: '12-Hour Webathon & Hackathon' },
    { label: 'MODE', value: 'Individual / Team Participation' },
    { label: 'TEAM SIZE', value: '1 to 4 Members' },
    { label: 'ORGANIZER', value: 'CSI (Dept of Comp Engg - TCET)' },
    { label: 'REGISTRATION', value: 'Open Now (Unstop Portal)' },
  ];

  const bentoFeatureCards = [
    {
      title: 'Create',
      subtitle: 'Spin up bold ideas before doubt catches up.',
      badge: '01 // IGNITE',
      icon: Code2,
      color: 'border-cyanAccent text-cyanAccent',
      bg: 'bg-cyanAccent/10'
    },
    {
      title: 'Connect',
      subtitle: 'Find your crew, split the chaos, multiply momentum.',
      badge: '02 // UNITE',
      icon: Users2,
      color: 'border-purple text-purple',
      bg: 'bg-purple/10'
    },
    {
      title: 'Deliver',
      subtitle: 'Cross the finish line with something worth showing off.',
      badge: '03 // ELEVATE',
      icon: Sparkles,
      color: 'border-lime text-graphite',
      bg: 'bg-lime'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (CodeFusion 2024 inspired: More Than Just Code.) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-light/20 border border-purple/30 text-purple font-mono text-xs font-bold uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-purple animate-ping"></span>
              ABOUT THE CODERUSH1.0
            </div>
            <h2 className="text-4xl sm:text-6xl font-sans font-black font-extrabold tracking-tight text-graphite">
              Where Ideas <br className="hidden sm:block" />
              Meet <span className="purple-highlight">Motion.</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg font-medium text-graphite/70 max-w-lg">
            One night, zero limits — coders and designers racing the clock to turn sparks of ideas into something real.
          </p>
        </div>

        {/* 3 Bento Feature Cards (CodeFusion 2024 Inspired: Create, Connect, Deliver) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {bentoFeatureCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="codefusion-card p-8 flex flex-col justify-between relative overflow-hidden group min-h-[280px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest">
                      {card.badge}
                    </span>
                    <div className={`p-3 rounded-2xl border-2 ${card.color} ${card.bg}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-sans font-black font-extrabold text-graphite mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-graphite/70 font-medium">
                    {card.subtitle}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#e2e2f0] flex items-center justify-between text-xs font-mono font-bold text-purple">
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section: CodeRush Core Database (Details Grid) */}
        <div id="details" className="pt-6">
          <div className="codefusion-card p-8 sm:p-12 relative overflow-hidden bg-white/90">
            
            {/* Banner Top */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#e2e2f0]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-purple text-white flex items-center justify-center border-2 border-purple-light shadow-[3px_3px_0px_#ccff00]">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-sans font-black font-extrabold text-graphite">
                    CODERUSH CORE DATABASE
                  </h3>
                  <p className="text-xs font-mono text-purple font-semibold">
                    ACCESS GRANTED // MISSION BRIEFING PROTOCOLS ESTABLISHED
                  </p>
                </div>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-lime text-graphite font-mono text-xs font-black border border-graphite self-start sm:self-auto">
                AUTHENTICATED
              </span>
            </div>

            {/* Grid Table */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {eventDetails.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#f8f8fc] border-2 border-[#e2e2f0] hover:border-purple transition-all group"
                >
                  <div className="text-[10px] font-mono font-bold text-gray-500 tracking-wider uppercase mb-1">
                    {item.label}
                  </div>
                  <div className="text-base font-sans font-black font-bold text-graphite group-hover:text-purple transition-colors">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
