import React from 'react';
import { UserPlus, Code2, Users2, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProcessCards() {
  const processSteps = [
    {
      id: '01',
      title: 'REGISTER',
      angle: '-rotate-6 sm:-rotate-8',
      offsetY: 'translate-y-4 sm:translate-y-6',
      icon: UserPlus,
      color: 'text-lime',
      tagline: 'Sign up your team now. Share your innovative ideas to solve new problems.'
    },
    {
      id: '02',
      title: 'BUILD',
      angle: '-rotate-2 sm:-rotate-3',
      offsetY: '-translate-y-2 sm:-translate-y-4',
      icon: Code2,
      color: 'text-cyanAccent',
      tagline: 'Code your solution using cutting edge tech. Overcome challenges and bring your idea to life.'
    },
    {
      id: '03',
      title: 'CONNECT',
      angle: 'rotate-2 sm:rotate-3',
      offsetY: 'translate-y-2 sm:translate-y-4',
      icon: Users2,
      color: 'text-lime',
      tagline: 'Collaborate with students across TCET & network with peers who can launch your project.'
    },
    {
      id: '04',
      title: 'GROW',
      angle: 'rotate-6 sm:rotate-8',
      offsetY: '-translate-y-3 sm:-translate-y-6',
      icon: TrendingUp,
      color: 'text-pinkAccent',
      tagline: 'Level up your skills with expert feedback. Win prizes and resume-boosting credentials.'
    }
  ];

  return (
    <section id="sequence" className="py-24 md:py-32 relative z-10 bg-purple-doodle text-white border-y-4 border-purple overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-light/20 text-lime font-mono text-xs font-bold uppercase border border-purple-light/40">
            <Sparkles className="w-4 h-4 fill-lime text-lime" />
            THE SEQUENCE // MISSION STAGES
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold tracking-tight text-white">
            FOUR STAGES TO <span className="text-lime">VICTORY</span>
          </h2>
          <p className="text-base sm:text-lg font-medium text-gray-300">
            Review the 4 mission stages engineered for the CodeRush 1.0 webathon deck.
          </p>
        </div>

        {/* 4 Angled Deck Cards (Exact Recreation of 4636668e3738cd2b6a494ff8644c0618.webp with Purple Doodle Theme) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 max-w-6xl mx-auto px-2">
          {processSteps.map((step) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={step.id}
                whileHover={{ scale: 1.08, rotate: 0, y: -16, zIndex: 30 }}
                transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                className={`relative group orbit-card p-6 sm:p-7 flex flex-col justify-between items-center text-center shadow-2xl transition-all ${step.angle} ${step.offsetY} min-h-[420px] hover:border-lime cursor-pointer`}
              >
                {/* 3D Glowing Neon Swirl Ribbon Ribbon */}
                <svg
                  className="absolute -inset-5 w-[calc(100%+40px)] h-[calc(100%+40px)] pointer-events-none z-10 overflow-visible"
                  viewBox="0 0 280 440"
                  fill="none"
                >
                  {/* Top-Left Loop */}
                  <path
                    d="M 220 -10 C 140 -25, 20 0, -10 50 C -30 90, 0 130, 80 135 C 160 140, 245 80, 270 30"
                    stroke="#ccff00"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="orbit-ribbon-glow opacity-80 group-hover:opacity-100 transition-opacity"
                  />

                  {/* Bottom-Right Loop */}
                  <path
                    d="M -15 320 C -25 380, 40 430, 140 435 C 230 440, 285 390, 290 320 C 295 250, 230 220, 150 240"
                    stroke="#ccff00"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="orbit-ribbon-glow opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </svg>

                {/* Card Top: Handwritten Yellow/Lime Script Title */}
                <div className="w-full pt-2 z-20">
                  <h3 className={`font-handwriting text-4xl sm:text-5xl font-bold tracking-wider ${step.color} text-center transform -rotate-2 group-hover:scale-110 transition-transform`}>
                    {step.title}
                  </h3>
                </div>

                {/* Card Center: App Icon Badge */}
                <div className="my-6 z-20">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#1d1633] border-2 border-purple-light/40 group-hover:border-lime flex flex-col items-center justify-center p-3 shadow-inner group-hover:shadow-[0_0_25px_rgba(204,255,0,0.3)] transition-all">
                    <div className="w-12 h-12 rounded-xl bg-[#120d24] border border-purple-light/20 flex items-center justify-center mb-1">
                      <IconComp className="w-7 h-7 text-lime" />
                    </div>
                    <span className="text-[9px] font-mono font-bold tracking-widest text-lime uppercase">
                      CODERUSH
                    </span>
                  </div>
                </div>

                {/* Card Bottom: Clean Description */}
                <div className="w-full pb-2 z-20">
                  <p className="text-xs sm:text-sm text-gray-300 font-sans font-medium leading-relaxed max-w-[220px] mx-auto text-center">
                    {step.tagline}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-20 text-center">
          <a
            href="#register"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-lime text-graphite font-mono font-extrabold text-sm border-2 border-white shadow-[4px_4px_0px_#8b5cf6] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            [ ENTER THE CODERUSH MAINFRAME ]
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
