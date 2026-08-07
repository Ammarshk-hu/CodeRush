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

          {/* Floating 3D Tech Stack Logos (4K resolution with multiply blend mode for white transparency on light gradient) */}
          <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden mix-blend-multiply opacity-100">
            {/* Top Left Area - React */}
            <motion.img 
              src="/images/cute_tech_react.png" 
              alt="Floating React Logo"
              initial={{ y: 0, rotate: -5 }}
              animate={{ y: [0, -15, 0], rotate: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-[15%] w-32 md:w-48 opacity-95 scale-x-[-1]"
            />
            {/* Top Right Area - JS */}
            <motion.img 
              src="/images/cute_tech_js.png" 
              alt="Floating JS Logo"
              initial={{ y: 0, rotate: 10 }}
              animate={{ y: [0, 20, 0], rotate: [10, -5, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-16 right-[8%] w-40 md:w-56 opacity-100"
            />
            {/* Bottom Left Area - Python */}
            <motion.img 
              src="/images/cute_tech_python.png" 
              alt="Floating Python Logo"
              initial={{ y: 0, rotate: -15 }}
              animate={{ y: [0, -25, 0], rotate: [-15, 0, -15] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-32 left-[8%] w-36 md:w-52 opacity-95 scale-x-[-1]"
            />
            {/* Bottom Right Area - Node.js */}
            <motion.img 
              src="/images/cute_tech_node.png" 
              alt="Floating Node.js Logo"
              initial={{ y: 0, rotate: 5 }}
              animate={{ y: [0, -20, 0], rotate: [5, -10, 5] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-20 right-[15%] w-44 md:w-60 opacity-100"
            />
            
            {/* Background Mid-Left Area - JS (Duplicate, smaller, blurred) */}
            <motion.img 
              src="/images/cute_tech_js.png" 
              alt="Floating JS Logo 2"
              initial={{ y: 0, rotate: 20 }}
              animate={{ y: [0, 15, 0], rotate: [20, 5, 20] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-[40%] left-[3%] w-24 md:w-32 opacity-80 blur-[2px] scale-x-[-1]"
            />
            {/* Background Mid-Right Area - React (Duplicate, smaller, blurred) */}
            <motion.img 
              src="/images/cute_tech_react.png" 
              alt="Floating React Logo 2"
              initial={{ y: 0, rotate: -10 }}
              animate={{ y: [0, -15, 0], rotate: [-10, -25, -10] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
              className="absolute top-[50%] right-[4%] w-28 md:w-36 opacity-85 blur-[1px]"
            />
          </div>

          {/* CENTER HERO MAIN CONTENT */}
          <div className="my-auto text-center w-full max-w-5xl mx-auto space-y-5 sm:space-y-6 pt-10 sm:pt-14 pb-8 sm:pb-12 relative z-20 flex flex-col items-center justify-center px-2">
            
            {/* Top Organizer Line: Computer Society of India | Thakur College of Engineering (Premium Typography) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-1 text-center flex flex-col items-center justify-center"
            >
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-sans font-bold text-graphite tracking-tight">
                Computer Society of India
              </h2>
              <div className="flex items-center justify-center gap-2 text-xs sm:text-base font-sans font-medium text-gray-600">
                <span className="text-purple font-bold">TCET Chapter</span>
                <span className="text-gray-300 font-light">|</span>
                <span>Thakur College of Engineering</span>
              </div>
              <div className="pt-2">
                <span className="text-xs sm:text-sm font-mono tracking-[0.35em] text-gray-500 uppercase font-bold">
                  P R E S E N T S
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
