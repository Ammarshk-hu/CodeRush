import React, { useRef } from 'react';
import { UserPlus, Code2, Users2, TrendingUp, Sparkles, ArrowRight, ChevronsUp, ChevronsDown, Target } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function ProcessCards() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 22,
    restDelta: 0.001
  });

  // Ease-out deceleration keyframe ranges: cards emerge fast initially, then slow down dramatically towards the end!
  const scrollRange = [0.05, 0.25, 0.50, 0.72, 0.88, 0.98];

  // REGISTER ↑ (starts below cover, decelerates to smooth landing at 0%)
  const yRegister = useTransform(smoothProgress, scrollRange, ["100%", "50%", "22%", "7%", "1.5%", "0%"]);
  // BUILD ↓ (starts above cover, decelerates to smooth landing at 0%)
  const yBuild = useTransform(smoothProgress, scrollRange, ["-100%", "-50%", "-22%", "-7%", "-1.5%", "0%"]);
  // CONNECT ↑ (starts below cover, decelerates to smooth landing at 0%)
  const yConnect = useTransform(smoothProgress, scrollRange, ["100%", "50%", "22%", "7%", "1.5%", "0%"]);
  // GROW ↓ (starts above cover, decelerates to smooth landing at 0%)
  const yGrow = useTransform(smoothProgress, scrollRange, ["-100%", "-50%", "-22%", "-7%", "-1.5%", "0%"]);

  return (
    <section
      id="sequence"
      ref={containerRef}
      className="relative h-[320vh] bg-purple-doodle text-white border-y-4 border-purple"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-6 sm:py-8 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 z-20 pt-2 sm:pt-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 text-lime font-mono text-xs font-bold uppercase border border-lime/40 backdrop-blur-md">
            <Target className="w-4 h-4 text-lime" />
            THE SEQUENCE // MISSION STAGES
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight text-white">
            FOUR STAGES TO <span className="text-lime">VICTORY</span>
          </h2>
          <p className="text-xs sm:text-base font-medium text-gray-300 max-w-xl mx-auto">
            Review the 4 mission stages engineered for the CodeRush 1.0 webathon deck.
          </p>
        </div>

        {/* 4 Stage Columns Grid (Exact 1-Row Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 max-w-6xl mx-auto w-full my-auto px-2 relative items-center">
          
          {/* ==================== COLUMN 1: REGISTER ==================== */}
          <div className="relative h-[430px] sm:h-[460px] flex flex-col justify-between items-center w-full">
            {/* Inner Light Card (Top Position) - Emerges UP */}
            <div className="absolute inset-x-0 top-0 bottom-16 overflow-hidden pointer-events-none flex items-center justify-center z-10">
              <motion.div
                style={{ y: yRegister }}
                className="pointer-events-auto w-[92%] h-[320px] sm:h-[350px] relative rounded-2xl bg-[#ecfccb] border-4 border-white p-5 flex flex-col justify-between shadow-[0_10px_30px_rgba(255,255,255,0.2)] -rotate-2 transform transition-transform"
              >
                {/* Card Header: Icon + Sparkles */}
                <div className="flex items-center justify-between z-10">
                  <div className="w-11 h-11 rounded-xl bg-[#84cc16]/20 border border-[#84cc16]/50 flex items-center justify-center">
                    <UserPlus className="w-5 h-5 text-[#3f6212]" />
                  </div>
                  <Sparkles className="w-5 h-5 text-[#4d7c0f]" />
                </div>
                {/* Card Body Text */}
                <div className="my-auto z-10 pr-2">
                  <p className="text-xs sm:text-sm text-[#1a2e05] font-sans font-bold leading-relaxed">
                    Sign up your team now. Share your innovative ideas to solve new problems.
                  </p>
                </div>
                {/* Card Background Graphic: Form / Paper & Pen Line Art */}
                <svg className="absolute bottom-3 right-3 w-20 h-20 opacity-30 text-[#4d7c0f] pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="4" width="14" height="17" rx="2" />
                  <line x1="6" y1="8" x2="14" y2="8" />
                  <line x1="6" y1="12" x2="14" y2="12" />
                  <line x1="6" y1="16" x2="10" y2="16" />
                  <path d="M18 14l3-3a1.5 1.5 0 0 0-2.12-2.12l-3 3V14h2.12z" />
                </svg>
              </motion.div>
            </div>

            {/* Middle Element: Lime Neon Arrow UP */}
            <div className="absolute bottom-16 z-20 flex flex-col items-center">
              <ChevronsUp className="w-6 h-6 text-[#84cc16] animate-bounce" />
            </div>

            {/* Bottom Element: Darker Lime Ticket Badge Cover */}
            <div className="absolute bottom-0 z-30 w-full p-3 sm:p-3.5 rounded-2xl bg-[#84cc16] border-2 border-[#65a30d] text-[#0f2900] shadow-[0_6px_20px_rgba(132,204,22,0.4)] flex items-center justify-between -rotate-2">
              <div className="w-full flex items-center justify-between px-3 py-1.5 rounded-xl border border-dashed border-[#3f6212]/50 bg-black/10">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#0f2900]" />
                  <span className="font-mono font-extrabold text-sm sm:text-base tracking-wider uppercase">
                    REGISTER
                  </span>
                </div>
                <span className="font-mono text-xs font-extrabold opacity-90">001</span>
              </div>
            </div>
          </div>

          {/* ==================== COLUMN 2: BUILD ==================== */}
          <div className="relative h-[430px] sm:h-[460px] flex flex-col justify-between items-center w-full">
            {/* Top Element: Darker Cyan Ticket Badge Cover */}
            <div className="absolute top-0 z-30 w-full p-3 sm:p-3.5 rounded-2xl bg-[#0284c7] border-2 border-[#0369a1] text-white shadow-[0_6px_20px_rgba(2,132,199,0.4)] flex items-center justify-between -rotate-2">
              <div className="w-full flex items-center justify-between px-3 py-1.5 rounded-xl border border-dashed border-white/40 bg-black/10">
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-white" />
                  <span className="font-mono font-extrabold text-sm sm:text-base tracking-wider uppercase">
                    BUILD
                  </span>
                </div>
                <span className="font-mono text-xs font-bold opacity-90">002</span>
              </div>
            </div>

            {/* Middle Element: Cyan Neon Arrow DOWN */}
            <div className="absolute top-16 z-20 flex flex-col items-center">
              <ChevronsDown className="w-6 h-6 text-[#38bdf8] animate-bounce" />
            </div>

            {/* Inner Light Card (Bottom Position) - Emerges DOWN */}
            <div className="absolute inset-x-0 top-16 bottom-0 overflow-hidden pointer-events-none flex items-center justify-center z-10">
              <motion.div
                style={{ y: yBuild }}
                className="pointer-events-auto w-[92%] h-[320px] sm:h-[350px] relative rounded-2xl bg-[#cff4fc] border-4 border-white p-5 flex flex-col justify-between shadow-[0_10px_30px_rgba(255,255,255,0.2)] -rotate-2 transform transition-transform"
              >
                {/* Card Header: Icon + Sparkles */}
                <div className="flex items-center justify-between z-10">
                  <div className="w-11 h-11 rounded-xl bg-[#0284c7]/20 border border-[#0284c7]/50 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-[#0369a1]" />
                  </div>
                  <Sparkles className="w-5 h-5 text-[#0284c7]" />
                </div>
                {/* Card Body Text */}
                <div className="my-auto z-10 pr-2">
                  <p className="text-xs sm:text-sm text-[#083344] font-sans font-bold leading-relaxed">
                    Code your solution using cutting edge tech. Overcome challenges and bring your idea to life.
                  </p>
                </div>
                {/* Card Background Graphic: Laptop / Code Line Art */}
                <svg className="absolute bottom-3 right-3 w-20 h-20 opacity-30 text-[#0284c7] pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="4" y="5" width="16" height="10" rx="1" />
                  <path d="M2 19h20v-2H2v2z" />
                  <line x1="8" y1="9" x2="12" y2="9" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* ==================== COLUMN 3: CONNECT ==================== */}
          <div className="relative h-[430px] sm:h-[460px] flex flex-col justify-between items-center w-full">
            {/* Inner Light Card (Top Position) - Emerges UP */}
            <div className="absolute inset-x-0 top-0 bottom-16 overflow-hidden pointer-events-none flex items-center justify-center z-10">
              <motion.div
                style={{ y: yConnect }}
                className="pointer-events-auto w-[92%] h-[320px] sm:h-[350px] relative rounded-2xl bg-[#ffe4e6] border-4 border-white p-5 flex flex-col justify-between shadow-[0_10px_30px_rgba(255,255,255,0.2)] rotate-2 transform transition-transform"
              >
                {/* Card Header: Icon + Sparkles */}
                <div className="flex items-center justify-between z-10">
                  <div className="w-11 h-11 rounded-xl bg-[#db2777]/20 border border-[#db2777]/50 flex items-center justify-center">
                    <Users2 className="w-5 h-5 text-[#9f1239]" />
                  </div>
                  <Sparkles className="w-5 h-5 text-[#be185d]" />
                </div>
                {/* Card Body Text */}
                <div className="my-auto z-10 pr-2">
                  <p className="text-xs sm:text-sm text-[#831843] font-sans font-bold leading-relaxed">
                    Collaborate with students across TCET & network with peers who can launch your project.
                  </p>
                </div>
                {/* Card Background Graphic: Network Nodes Line Art */}
                <svg className="absolute bottom-3 right-3 w-20 h-20 opacity-30 text-[#be185d] pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="18" r="3" />
                  <line x1="12" y1="9" x2="6" y2="15" />
                  <line x1="12" y1="9" x2="18" y2="15" />
                  <line x1="9" y1="18" x2="15" y2="18" />
                </svg>
              </motion.div>
            </div>

            {/* Middle Element: Pink Neon Arrow UP */}
            <div className="absolute bottom-16 z-20 flex flex-col items-center">
              <ChevronsUp className="w-6 h-6 text-[#f472b6] animate-bounce" />
            </div>

            {/* Bottom Element: Darker Pink Ticket Badge Cover */}
            <div className="absolute bottom-0 z-30 w-full p-3 sm:p-3.5 rounded-2xl bg-[#db2777] border-2 border-[#be185d] text-white shadow-[0_6px_20px_rgba(219,39,119,0.4)] flex items-center justify-between rotate-2">
              <div className="w-full flex items-center justify-between px-3 py-1.5 rounded-xl border border-dashed border-white/40 bg-black/10">
                <div className="flex items-center gap-2">
                  <Users2 className="w-5 h-5 text-white" />
                  <span className="font-mono font-extrabold text-sm sm:text-base tracking-wider uppercase">
                    CONNECT
                  </span>
                </div>
                <span className="font-mono text-xs font-bold opacity-90">003</span>
              </div>
            </div>
          </div>

          {/* ==================== COLUMN 4: GROW ==================== */}
          <div className="relative h-[430px] sm:h-[460px] flex flex-col justify-between items-center w-full">
            {/* Top Element: Darker Purple Ticket Badge Cover */}
            <div className="absolute top-0 z-30 w-full p-3 sm:p-3.5 rounded-2xl bg-[#9333ea] border-2 border-[#7e22ce] text-white shadow-[0_6px_20px_rgba(147,51,234,0.4)] flex items-center justify-between rotate-3">
              <div className="w-full flex items-center justify-between px-3 py-1.5 rounded-xl border border-dashed border-white/40 bg-black/10">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-white" />
                  <span className="font-mono font-extrabold text-sm sm:text-base tracking-wider uppercase">
                    GROW
                  </span>
                </div>
                <span className="font-mono text-xs font-bold opacity-90">004</span>
              </div>
            </div>

            {/* Middle Element: Purple Neon Arrow DOWN */}
            <div className="absolute top-16 z-20 flex flex-col items-center">
              <ChevronsDown className="w-6 h-6 text-[#c084fc] animate-bounce" />
            </div>

            {/* Inner Light Card (Bottom Position) - Emerges DOWN */}
            <div className="absolute inset-x-0 top-16 bottom-0 overflow-hidden pointer-events-none flex items-center justify-center z-10">
              <motion.div
                style={{ y: yGrow }}
                className="pointer-events-auto w-[92%] h-[320px] sm:h-[350px] relative rounded-2xl bg-[#f3e8ff] border-4 border-white p-5 flex flex-col justify-between shadow-[0_10px_30px_rgba(255,255,255,0.2)] rotate-3 transform transition-transform"
              >
                {/* Card Header: Icon + Sparkles */}
                <div className="flex items-center justify-between z-10">
                  <div className="w-11 h-11 rounded-xl bg-[#9333ea]/20 border border-[#9333ea]/50 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#6b21a8]" />
                  </div>
                  <Sparkles className="w-5 h-5 text-[#7e22ce]" />
                </div>
                {/* Card Body Text */}
                <div className="my-auto z-10 pr-2">
                  <p className="text-xs sm:text-sm text-[#3b0764] font-sans font-bold leading-relaxed">
                    Levelup your skills with expert feedback. Win prizes and resume-boosting credentials.
                  </p>
                </div>
                {/* Card Background Graphic: Trophy Cup & Stars Line Art */}
                <svg className="absolute bottom-3 right-3 w-20 h-20 opacity-30 text-[#7e22ce] pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2" />
                  <path d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2" />
                  <path d="M4 3h16v6a8 8 0 0 1-16 0V3z" />
                  <path d="M12 17v4" />
                  <path d="M8 21h8" />
                </svg>
              </motion.div>
            </div>
          </div>

        </div>

        {/* Action Button */}
        <div className="text-center z-20 pb-2 sm:pb-3">
          <a
            href="#register"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-2xl bg-[#ccff00] text-[#0f0f15] font-mono font-extrabold text-xs sm:text-sm border-2 border-white shadow-[4px_4px_0px_#8b5cf6] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            [ ENTER THE CODERUSH MAINFRAME ]
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}





