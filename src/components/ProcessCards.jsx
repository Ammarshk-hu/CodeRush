import React, { useRef } from 'react';
import { UserPlus, Code2, Users2, TrendingUp, Sparkles, ArrowRight, ChevronsUp, ChevronsDown, Target } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function ProcessCards() {
  const containerRef = useRef(null);

  // Direct 1:1 scroll position tracking (NO spring lag, ZERO time lapse!)
  // Card emergence speed strictly follows user scroll speed (fast = fast, slow = slow)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "center 55%"]
  });

  const yRegister = useTransform(scrollYProgress, [0.0, 1.0], ["100%", "0%"]);
  const yBuild = useTransform(scrollYProgress, [0.0, 1.0], ["-100%", "0%"]);
  const yConnect = useTransform(scrollYProgress, [0.0, 1.0], ["100%", "0%"]);
  const yGrow = useTransform(scrollYProgress, [0.0, 1.0], ["-100%", "0%"]);

  const opacityAll = useTransform(scrollYProgress, [0.0, 0.5], [0, 1]);
  const opacityRegister = opacityAll;
  const opacityBuild = opacityAll;
  const opacityConnect = opacityAll;
  const opacityGrow = opacityAll;

  const processSteps = [
    {
      id: '001',
      title: 'REGISTER',
      icon: UserPlus,
      color: '#84cc16',
      badgeBg: 'bg-[#84cc16] border-[#65a30d] text-[#0f2900]',
      cardBg: 'bg-[#ecfccb]',
      textColor: 'text-[#1a2e05]',
      iconBg: 'bg-[#84cc16]/20 border-[#84cc16]/50 text-[#3f6212]',
      sparkleColor: 'text-[#4d7c0f]',
      arrowColor: 'text-[#84cc16]',
      arrowDirection: 'up',
      rotation: '-rotate-2',
      transformY: yRegister,
      opacity: opacityRegister,
      tagline: 'Sign up your team now. Share your innovative ideas to solve new problems.',
      svgPath: (
        <svg className="absolute bottom-2 right-2 w-14 h-14 opacity-30 text-[#4d7c0f] pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="14" height="17" rx="2" />
          <line x1="6" y1="8" x2="14" y2="8" />
          <line x1="6" y1="12" x2="14" y2="12" />
          <line x1="6" y1="16" x2="10" y2="16" />
          <path d="M18 14l3-3a1.5 1.5 0 0 0-2.12-2.12l-3 3V14h2.12z" />
        </svg>
      )
    },
    {
      id: '002',
      title: 'BUILD',
      icon: Code2,
      color: '#0284c7',
      badgeBg: 'bg-[#0284c7] border-[#0369a1] text-white',
      cardBg: 'bg-[#cff4fc]',
      textColor: 'text-[#083344]',
      iconBg: 'bg-[#0284c7]/20 border-[#0284c7]/50 text-[#0369a1]',
      sparkleColor: 'text-[#0284c7]',
      arrowColor: 'text-[#38bdf8]',
      arrowDirection: 'down',
      rotation: '-rotate-2',
      transformY: yBuild,
      opacity: opacityBuild,
      tagline: 'Code your solution using cutting edge tech. Overcome challenges and bring your idea to life.',
      svgPath: (
        <svg className="absolute bottom-2 right-2 w-14 h-14 opacity-30 text-[#0284c7] pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="5" width="16" height="10" rx="1" />
          <path d="M2 19h20v-2H2v2z" />
          <line x1="8" y1="9" x2="12" y2="9" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      )
    },
    {
      id: '003',
      title: 'CONNECT',
      icon: Users2,
      color: '#db2777',
      badgeBg: 'bg-[#db2777] border-[#be185d] text-white',
      cardBg: 'bg-[#ffe4e6]',
      textColor: 'text-[#831843]',
      iconBg: 'bg-[#db2777]/20 border-[#db2777]/50 text-[#9f1239]',
      sparkleColor: 'text-[#be185d]',
      arrowColor: 'text-[#f472b6]',
      arrowDirection: 'up',
      rotation: 'rotate-2',
      transformY: yConnect,
      opacity: opacityConnect,
      tagline: 'Collaborate with students across TCET & network with peers who can launch your project.',
      svgPath: (
        <svg className="absolute bottom-2 right-2 w-14 h-14 opacity-30 text-[#be185d] pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="18" r="3" />
          <line x1="12" y1="9" x2="6" y2="15" />
          <line x1="12" y1="9" x2="18" y2="15" />
          <line x1="9" y1="18" x2="15" y2="18" />
        </svg>
      )
    },
    {
      id: '004',
      title: 'GROW',
      icon: TrendingUp,
      color: '#9333ea',
      badgeBg: 'bg-[#9333ea] border-[#7e22ce] text-white',
      cardBg: 'bg-[#f3e8ff]',
      textColor: 'text-[#3b0764]',
      iconBg: 'bg-[#9333ea]/20 border-[#9333ea]/50 text-[#6b21a8]',
      sparkleColor: 'text-[#7e22ce]',
      arrowColor: 'text-[#c084fc]',
      arrowDirection: 'down',
      rotation: 'rotate-3',
      transformY: yGrow,
      opacity: opacityGrow,
      tagline: 'Levelup your skills with expert feedback. Win prizes and resume-boosting credentials.',
      svgPath: (
        <svg className="absolute bottom-2 right-2 w-14 h-14 opacity-30 text-[#7e22ce] pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2" />
          <path d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2" />
          <path d="M4 3h16v6a8 8 0 0 1-16 0V3z" />
          <path d="M12 17v4" />
          <path d="M8 21h8" />
        </svg>
      )
    }
  ];

  return (
    <section
      id="sequence"
      ref={containerRef}
      className="py-10 sm:py-12 md:py-14 bg-purple-doodle text-white border-y-4 border-purple relative z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 text-lime font-mono text-xs font-bold uppercase border border-lime/40 backdrop-blur-md">
            <Target className="w-3.5 h-3.5 text-lime" />
            THE SEQUENCE // MISSION STAGES
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-sans font-black tracking-tight text-white">
            FOUR STAGES TO <span className="text-lime">VICTORY</span>
          </h2>
          <p className="text-xs sm:text-sm font-medium text-gray-300 max-w-xl mx-auto">
            Review the 4 mission stages engineered for the CodeRush 1.0 webathon deck.
          </p>
        </div>

        {/* 4 Stage Cards Grid (Scroll-driven emerging cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-6xl mx-auto w-full px-2">
          {processSteps.map((step) => {
            const IconComp = step.icon;
            const isTopCover = step.arrowDirection === 'down';

            return (
              <div
                key={step.id}
                className="relative flex flex-col justify-between items-center w-full min-h-[370px] group cursor-pointer"
              >
                {/* TOP COVER POSITION (for BUILD & GROW) */}
                {isTopCover && (
                  <>
                    <div className={`w-full p-3.5 rounded-2xl border-2 text-white shadow-lg z-30 ${step.badgeBg} ${step.rotation} transition-transform group-hover:scale-105`}>
                      <div className="w-full flex items-center justify-between px-3 py-1.5 rounded-xl border border-dashed border-white/40 bg-black/10">
                        <div className="flex items-center gap-2">
                          <IconComp className="w-4 h-4 text-white" />
                          <span className="font-mono font-extrabold text-sm tracking-wider uppercase">
                            {step.title}
                          </span>
                        </div>
                        <span className="font-mono text-xs font-bold opacity-90">{step.id}</span>
                      </div>
                    </div>

                    <div className="my-2 z-20 flex flex-col items-center">
                      <ChevronsDown className={`w-5 h-5 ${step.arrowColor} animate-bounce`} />
                    </div>

                    {/* Emerging inner card with scroll transform */}
                    <div className="w-full h-[270px] overflow-hidden pointer-events-none flex items-center justify-center z-10">
                      <motion.div
                        style={{ y: step.transformY, opacity: step.opacity }}
                        className={`pointer-events-auto w-[94%] h-[270px] relative rounded-2xl border-4 border-white p-5 flex flex-col justify-between shadow-xl ${step.cardBg} ${step.rotation} transition-transform group-hover:rotate-0`}
                      >
                        <div className="flex items-center justify-between z-10">
                          <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${step.iconBg}`}>
                            <IconComp className="w-4 h-4" />
                          </div>
                          <Sparkles className={`w-4 h-4 ${step.sparkleColor}`} />
                        </div>

                        <div className="my-auto z-10 pr-1">
                          <p className={`text-xs sm:text-sm ${step.textColor} font-sans font-bold leading-relaxed`}>
                            {step.tagline}
                          </p>
                        </div>

                        {step.svgPath}
                      </motion.div>
                    </div>
                  </>
                )}

                {/* BOTTOM COVER POSITION (for REGISTER & CONNECT) */}
                {!isTopCover && (
                  <>
                    {/* Emerging inner card with scroll transform */}
                    <div className="w-full h-[270px] overflow-hidden pointer-events-none flex items-center justify-center z-10">
                      <motion.div
                        style={{ y: step.transformY, opacity: step.opacity }}
                        className={`pointer-events-auto w-[94%] h-[270px] relative rounded-2xl border-4 border-white p-5 flex flex-col justify-between shadow-xl ${step.cardBg} ${step.rotation} transition-transform group-hover:rotate-0`}
                      >
                        <div className="flex items-center justify-between z-10">
                          <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${step.iconBg}`}>
                            <IconComp className="w-4 h-4" />
                          </div>
                          <Sparkles className={`w-4 h-4 ${step.sparkleColor}`} />
                        </div>

                        <div className="my-auto z-10 pr-1">
                          <p className={`text-xs sm:text-sm ${step.textColor} font-sans font-bold leading-relaxed`}>
                            {step.tagline}
                          </p>
                        </div>

                        {step.svgPath}
                      </motion.div>
                    </div>

                    <div className="my-2 z-20 flex flex-col items-center">
                      <ChevronsUp className={`w-5 h-5 ${step.arrowColor} animate-bounce`} />
                    </div>

                    <div className={`w-full p-3.5 rounded-2xl border-2 text-white shadow-lg z-30 ${step.badgeBg} ${step.rotation} transition-transform group-hover:scale-105`}>
                      <div className="w-full flex items-center justify-between px-3 py-1.5 rounded-xl border border-dashed border-white/40 bg-black/10">
                        <div className="flex items-center gap-2">
                          <IconComp className="w-4 h-4" />
                          <span className="font-mono font-extrabold text-sm tracking-wider uppercase">
                            {step.title}
                          </span>
                        </div>
                        <span className="font-mono text-xs font-bold opacity-90">{step.id}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="text-center pt-4">
          <a
            href="#register"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#ccff00] text-[#0f0f15] font-mono font-extrabold text-sm border-2 border-white shadow-[4px_4px_0px_#8b5cf6] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            [ ENTER THE CODERUSH MAINFRAME ]
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
