import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, Trophy, Users, Zap, Palette, Terminal, Play, Plus, Github, Globe, Linkedin, Instagram, Code2, Cpu, Laptop, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function Hero() {
  // Target Date: 22 August 2026, 10:00 AM IST
  const targetDate = new Date('2026-08-22T10:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: d < 10 ? `0${d}` : `${d}`,
          hours: h < 10 ? `0${h}` : `${h}`,
          minutes: m < 10 ? `0${m}` : `${m}`,
          seconds: s < 10 ? `0${s}` : `${s}`
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => setInterval(updateCountdown, 1000);
  }, []);

  const handleRegisterClick = () => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#8b5cf6', '#06b6d4', '#ccff00', '#ffffff']
    });
  };

  return (
    <section id="home" className="relative w-full py-2 sm:py-4 px-2 sm:px-6 lg:px-8 bg-[#f8f8fc] flex flex-col items-center justify-center">
      
      {/* Outer Dark Purple Rounded Frame with White Space Margins (Exact Match to designathon.gdgcace.in) */}
      <div className="w-full max-w-7xl relative rounded-[32px] sm:rounded-[40px] bg-[#140e28] p-3 sm:p-4 border-4 border-[#2d1b54] shadow-[0_20px_50px_rgba(20,14,40,0.4)] flex flex-col overflow-hidden">
        
        {/* Inner Clean Light Canvas with Holographic Color Effect */}
        <div className="relative flex-1 rounded-[24px] sm:rounded-[32px] bg-[#f8f8fc] border-2 border-purple-light/30 flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden min-h-[540px] sm:min-h-[580px]">
          
          {/* Iridescent Holographic Wave Top Blur Overlay */}
          <div className="absolute top-0 left-0 right-0 h-[380px] holo-top-banner pointer-events-none z-0"></div>

          {/* Clean Light Perspective Grid Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.25) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          ></div>

          {/* Top Notch: CSI TCET Logo Badge + Embedded Nav Links */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-[#140e28] px-6 sm:px-10 py-2.5 rounded-b-3xl border-b-2 border-x-2 border-purple-light/50 z-30 flex items-center justify-center gap-4 shadow-md">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-purple text-white flex items-center justify-center font-mono font-bold text-sm border border-lime shadow-[0_0_10px_#ccff00]">
                CR
              </div>
              <span className="font-mono text-xs font-black tracking-widest text-white uppercase hidden sm:inline">
                CSI TCET
              </span>
            </div>

            {/* Quick Links inside top notch */}
            <div className="hidden lg:flex items-center gap-3 text-[11px] font-mono font-bold text-gray-300 pl-2 border-l border-purple-light/30">
              <a href="#about" className="hover:text-lime transition-colors">ABOUT</a>
              <a href="#sequence" className="hover:text-lime transition-colors">SEQUENCE</a>
              <a href="#tracks" className="hover:text-lime transition-colors">TRACKS</a>
              <a href="#timeline" className="hover:text-lime transition-colors">TIMELINE</a>
              <a href="#prizes" className="hover:text-lime transition-colors">PRIZES</a>
              <a href="#faq" className="hover:text-lime transition-colors">FAQ</a>
            </div>
          </div>

          {/* Top Right Notch: Plus (+) Action Button */}
          <div className="absolute top-4 right-4 z-30">
            <button
              onClick={handleRegisterClick}
              className="w-10 h-10 rounded-2xl bg-white/90 backdrop-blur-md border-2 border-purple-light/50 hover:border-purple text-graphite flex items-center justify-center hover:rotate-90 transition-all shadow-md group"
              aria-label="Action Menu"
            >
              <Plus className="w-5 h-5 text-purple group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Left Vertical Notch Panel: Vertical Countdown Timer */}
          <div className="absolute top-20 left-0 hidden md:flex flex-col items-center bg-[#140e28] py-5 px-3.5 rounded-r-3xl border-r-2 border-y-2 border-purple-light/50 z-30 space-y-3 shadow-xl">
            <div className="text-center">
              <div className="text-xl font-mono font-black text-lime">{timeLeft.days}</div>
              <div className="text-[9px] font-mono text-gray-400 font-bold uppercase">DAYS</div>
            </div>
            <div className="w-6 h-[1px] bg-purple-light/30"></div>
            <div className="text-center">
              <div className="text-xl font-mono font-black text-white">{timeLeft.hours}</div>
              <div className="text-[9px] font-mono text-gray-400 font-bold uppercase">HOURS</div>
            </div>
            <div className="w-6 h-[1px] bg-purple-light/30"></div>
            <div className="text-center">
              <div className="text-xl font-mono font-black text-lime">{timeLeft.minutes}</div>
              <div className="text-[9px] font-mono text-gray-400 font-bold uppercase">MINS</div>
            </div>
            <div className="w-6 h-[1px] bg-purple-light/30"></div>
            <div className="text-center">
              <div className="text-xl font-mono font-black text-white">{timeLeft.seconds}</div>
              <div className="text-[9px] font-mono text-gray-400 font-bold uppercase">SECS</div>
            </div>
          </div>

          {/* REAL GENERATED 3D FLOATING ASSETS (100% TRANSPARENT PNGs WITHOUT ANY BACKGROUND) */}
          
          {/* Floating Asset 1: 3D Code Laptop (/laptop.png) */}
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-16 left-12 lg:left-24 z-20 hidden lg:block w-36 h-36 pointer-events-none drop-shadow-[0_15px_30px_rgba(139,92,246,0.3)]"
          >
            <img src="/laptop.png" alt="CodeRush 3D Laptop" className="w-full h-full object-contain" />
          </motion.div>

          {/* Floating Asset 2: 3D UI/UX Figma Design Palette (/palette.png) */}
          <motion.div
            animate={{ y: [0, 14, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute top-20 right-12 lg:right-28 z-20 hidden lg:block w-36 h-36 pointer-events-none drop-shadow-[0_15px_30px_rgba(6,182,212,0.3)]"
          >
            <img src="/palette.png" alt="CodeRush 3D Palette" className="w-full h-full object-contain" />
          </motion.div>

          {/* Floating Asset 3: 3D Code Brackets (/brackets.png) */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-20 right-16 lg:left-[80%] z-20 hidden lg:block w-32 h-32 pointer-events-none drop-shadow-[0_15px_30px_rgba(204,255,0,0.35)]"
          >
            <img src="/brackets.png" alt="CodeRush 3D Code Brackets" className="w-full h-full object-contain" />
          </motion.div>

          {/* Floating Asset 4: CodeFusion Periodic Glass Card (CR 26) */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-20 left-16 lg:left-28 z-20 hidden lg:flex flex-col items-center p-3.5 rounded-2xl bg-white/80 backdrop-blur-xl border border-purple-light/40 shadow-md pointer-events-none"
          >
            <div className="flex items-center justify-between w-full text-[8px] font-mono font-bold text-gray-500 gap-3">
              <span>&lt;/&gt;</span>
              <span>2026</span>
            </div>
            <div className="text-2xl font-mono font-black text-purple my-0.5">CR</div>
            <div className="text-[9px] font-mono font-bold text-white bg-purple px-2 py-0.5 rounded-full">
              26 HACKS
            </div>
          </motion.div>

          {/* CENTER HERO MAIN CONTENT */}
          <div className="my-auto text-center max-w-4xl mx-auto space-y-6 pt-10 sm:pt-14 pb-8 sm:pb-12 relative z-20">
            
            {/* Top Organizer Line: Computer Society of India | Thakur College of Engineering */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-1.5"
            >
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-graphite tracking-wide">
                Computer Society of India
              </h2>
              <p className="text-xs sm:text-base font-mono font-bold text-purple uppercase tracking-wider">
                Thakur College of Engineering
              </p>
              <div className="pt-2">
                <span className="text-[11px] font-mono tracking-widest text-gray-500 uppercase font-black px-4 py-1 rounded-full bg-white border border-[#e2e2f0] shadow-sm">
                  PRESENTS
                </span>
              </div>
            </motion.div>

            {/* Main Title: CODERUSH */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative space-y-2"
            >
              <div className="inline-block text-xs sm:text-sm font-mono font-extrabold uppercase tracking-widest text-purple px-4 py-1 rounded-full bg-purple-light/20 border border-purple/30">
                WEBATHON & DESIGNATHON
              </div>

              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-serif font-black tracking-tight text-graphite uppercase leading-tight">
                CODE<span className="text-purple bg-gradient-to-r from-purple via-purple-light to-cyanAccent bg-clip-text text-transparent">RUSH</span>
              </h1>

              <p className="text-base sm:text-2xl font-serif font-extrabold text-graphite tracking-wide pt-1">
                Where Code <span className="purple-highlight">RUSHES.</span> Impact <span className="lime-highlight">explodes.</span>
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3"
            >
              <a
                href="#register"
                onClick={handleRegisterClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-purple-gradient text-white text-base font-mono font-extrabold shadow-[0_6px_25px_rgba(139,92,246,0.5)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>JOIN CODERUSH NOW</span>
                <div className="w-6 h-6 rounded-full bg-lime text-graphite flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              </a>

              <a
                href="#about"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-graphite text-base font-mono font-bold border-2 border-[#e2e2f0] hover:border-purple hover:text-purple transition-all text-center shadow-sm"
              >
                [ EXPLORE SEQUENCE ]
              </a>
            </motion.div>

          </div>

          {/* Bottom Left Notch: Social Links */}
          <div className="absolute bottom-4 left-4 z-30 hidden sm:flex items-center gap-2 bg-[#140e28] p-2.5 rounded-2xl border-2 border-purple-light/40 shadow-md">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-xl text-gray-300 hover:text-lime hover:bg-white/10 transition-all" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://tcetmumbai.in" target="_blank" rel="noreferrer" className="p-2 rounded-xl text-gray-300 hover:text-lime hover:bg-white/10 transition-all" aria-label="Website">
              <Globe className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-xl text-gray-300 hover:text-lime hover:bg-white/10 transition-all" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-xl text-gray-300 hover:text-lime hover:bg-white/10 transition-all" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          {/* Bottom Right Notch: Prize Pool & Join Now Button */}
          <div className="absolute bottom-0 right-0 bg-[#140e28] p-3.5 sm:p-4 rounded-tl-3xl border-t-2 border-l-2 border-purple-light/40 z-30 flex items-center gap-4 shadow-xl">
            <div className="text-right">
              <div className="text-2xl sm:text-3xl font-serif font-black text-white leading-none">
                ₹50<span className="text-sm font-mono text-lime font-bold">K</span>
              </div>
              <div className="text-[9px] font-mono text-gray-400 font-bold uppercase tracking-wider mt-0.5">
                PRIZE POOL
              </div>
            </div>

            <a
              href="#register"
              onClick={handleRegisterClick}
              className="px-5 py-3 rounded-2xl bg-purple-gradient text-white font-mono font-black text-xs border border-purple-light shadow-[0_4px_15px_rgba(139,92,246,0.6)] hover:bg-lime hover:text-graphite transition-all flex items-center gap-1.5"
            >
              JOIN NOW
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
