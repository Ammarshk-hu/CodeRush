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
    <section id="home" className="relative h-dvh min-h-dvh max-h-screen w-full bg-[#140e28] p-1 sm:p-2 md:p-3 overflow-hidden flex flex-col justify-center items-center">
      
      {/* Outer Dark Purple Frame (Exact Fit Full Height & Width) */}
      <div className="w-full h-full flex-1 relative rounded-[24px] sm:rounded-[36px] bg-[#140e28] p-1.5 sm:p-2.5 border-4 border-[#2d1b54] shadow-[0_20px_50px_rgba(20,14,40,0.4)] flex flex-col justify-between overflow-hidden">
        
        {/* Inner Clean Light Canvas */}
        <div className="relative flex-1 rounded-[18px] sm:rounded-[30px] bg-[#f8f8fc] flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden">
          
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

          {/* Top Notch: CSI TCET Logo Badge (Transparent Canvas Inverted Corner Curves) */}
          <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 bg-[#140e28] px-6 sm:px-8 py-2 rounded-b-2xl border-b-2 border-x-2 border-[#2d1b54] z-30 flex items-center justify-center gap-2.5 shadow-lg">
            {/* Left inverted curve */}
            <div className="absolute top-0 -left-6 w-6 h-6 pointer-events-none bg-[radial-gradient(circle_at_0%_100%,transparent_24px,#140e28_24.5px)]"></div>
            {/* Right inverted curve */}
            <div className="absolute top-0 -right-6 w-6 h-6 pointer-events-none bg-[radial-gradient(circle_at_100%_100%,transparent_24px,#140e28_24.5px)]"></div>

            <div className="w-7 h-7 rounded-lg bg-purple text-white flex items-center justify-center font-mono font-bold text-xs border border-lime shadow-[0_0_10px_#ccff00]">
              CR
            </div>
            <span className="font-mono text-xs font-black tracking-widest text-white uppercase">
              CSI TCET
            </span>
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

          {/* Left Vertical Notch Panel: Vertical Countdown Timer (Transparent Canvas Inverted Corner Curves) */}
          <div className="absolute top-20 -left-0.5 hidden md:flex flex-col items-center bg-[#140e28] py-6 px-6 sm:px-7 rounded-r-[36px] border-r-2 border-y-2 border-[#2d1b54] z-30 space-y-3.5 shadow-2xl min-w-[95px]">
            {/* Top inverted curve */}
            <div className="absolute -top-6 left-0 w-6 h-6 pointer-events-none bg-[radial-gradient(circle_at_100%_0%,transparent_24px,#140e28_24.5px)]"></div>
            {/* Bottom inverted curve */}
            <div className="absolute -bottom-6 left-0 w-6 h-6 pointer-events-none bg-[radial-gradient(circle_at_100%_100%,transparent_24px,#140e28_24.5px)]"></div>

            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-mono font-black text-lime tracking-tight">{timeLeft.days}</div>
              <div className="text-[10px] font-mono text-gray-400 font-extrabold uppercase tracking-wider mt-0.5">DAYS</div>
            </div>
            <div className="w-10 h-[1px] bg-purple-light/30"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-mono font-black text-white tracking-tight">{timeLeft.hours}</div>
              <div className="text-[10px] font-mono text-gray-400 font-extrabold uppercase tracking-wider mt-0.5">HOURS</div>
            </div>
            <div className="w-10 h-[1px] bg-purple-light/30"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-mono font-black text-lime tracking-tight">{timeLeft.minutes}</div>
              <div className="text-[10px] font-mono text-gray-400 font-extrabold uppercase tracking-wider mt-0.5">MINS</div>
            </div>
            <div className="w-10 h-[1px] bg-purple-light/30"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-mono font-black text-white tracking-tight">{timeLeft.seconds}</div>
              <div className="text-[10px] font-mono text-gray-400 font-extrabold uppercase tracking-wider mt-0.5">SECS</div>
            </div>
          </div>

          {/* CENTER HERO MAIN CONTENT */}
          <div className="my-auto text-center w-full max-w-5xl mx-auto space-y-5 sm:space-y-6 pt-10 sm:pt-14 pb-8 sm:pb-12 relative z-20 flex flex-col items-center justify-center px-2">
            
            {/* Top Organizer Line: Computer Society of India | Thakur College of Engineering */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-1.5 text-center"
            >
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-sans font-black text-graphite tracking-wide">
                Computer Society of India
              </h2>
              <p className="text-xs sm:text-sm lg:text-base font-mono font-bold text-purple uppercase tracking-wider">
                Thakur College of Engineering
              </p>
              <div className="pt-1.5">
                <span className="text-[10px] sm:text-xs font-mono tracking-widest text-gray-500 uppercase font-black px-3.5 py-1 rounded-full bg-white border border-[#e2e2f0] shadow-sm">
                  PRESENTS
                </span>
              </div>
            </motion.div>

            {/* Main Title: CODERUSH */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative space-y-3 text-center w-full max-w-full overflow-hidden"
            >
              <div className="inline-block text-[11px] sm:text-xs lg:text-sm font-mono font-extrabold uppercase tracking-widest text-purple px-3.5 py-1 rounded-full bg-purple-light/20 border border-purple/30">
                WEBATHON & DESIGNATHON
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] font-sans font-black tracking-tight text-graphite leading-tight text-center w-full max-w-full">
                Code<span className="text-purple bg-gradient-to-r from-purple via-purple-light to-cyanAccent bg-clip-text text-transparent">Rush</span>
              </h1>

              <p className="text-sm sm:text-xl lg:text-2xl font-sans font-black text-graphite tracking-wide pt-1 text-center">
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

          {/* Bottom Left Notch: Social Links (Transparent Canvas Inverted Corner Curves) */}
          <div className="absolute -bottom-0.5 -left-0.5 z-30 hidden sm:flex items-center gap-2 bg-[#140e28] p-3 sm:p-3.5 rounded-tr-3xl border-t-2 border-r-2 border-[#2d1b54] shadow-xl">
            {/* Top inverted curve */}
            <div className="absolute -top-6 left-0 w-6 h-6 pointer-events-none bg-[radial-gradient(circle_at_100%_0%,transparent_24px,#140e28_24.5px)]"></div>
            {/* Right inverted curve */}
            <div className="absolute bottom-0 -right-6 w-6 h-6 pointer-events-none bg-[radial-gradient(circle_at_100%_0%,transparent_24px,#140e28_24.5px)]"></div>

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

          {/* Bottom Right Notch: Prize Pool & Join Now Button (Transparent Canvas Inverted Corner Curves) */}
          <div className="absolute -bottom-0.5 -right-0.5 bg-[#140e28] p-3.5 sm:p-4 rounded-tl-3xl border-t-2 border-l-2 border-[#2d1b54] z-30 flex items-center gap-4 shadow-xl">
            {/* Top inverted curve */}
            <div className="absolute -top-6 right-0 w-6 h-6 pointer-events-none bg-[radial-gradient(circle_at_0%_100%,transparent_24px,#140e28_24.5px)]"></div>
            {/* Left inverted curve */}
            <div className="absolute bottom-0 -left-6 w-6 h-6 pointer-events-none bg-[radial-gradient(circle_at_0%_0%,transparent_24px,#140e28_24.5px)]"></div>
            <div className="text-right">
              <div className="text-2xl sm:text-3xl font-sans font-black text-white leading-none">
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
