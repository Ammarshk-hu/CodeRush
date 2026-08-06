import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.1 },
      colors: ['#8b5cf6', '#06b6d4', '#ccff00', '#ffffff']
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Sequence', href: '#sequence' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Rules', href: '#rules' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-[#e2e2f0] py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo (CodeFusion 2024 inspired) */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-purple text-white flex items-center justify-center font-mono font-bold text-lg border-2 border-purple-light shadow-[3px_3px_0px_#ccff00] group-hover:scale-105 transition-transform">
              CR
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl font-extrabold tracking-tight text-graphite">
                  CODE<span className="text-purple ml-0.5">RUSH</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-lime text-graphite font-black">
                  2026
                </span>
              </div>
              <p className="text-[9px] font-mono tracking-wider text-gray-500 uppercase font-bold">
                CSI TCET DEPT OF COMP ENGG
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links (CodeFusion Glass Pill bar) */}
          <div className="hidden md:flex items-center gap-1 bg-white/90 backdrop-blur-md border border-[#e2e2f0] px-4 py-1.5 rounded-full shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-bold text-graphite/80 hover:bg-purple-light/30 hover:text-purple transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Buttons (CodeFusion Pill CTA with Arrow Circle Badge) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#payment"
              className="px-4 py-2.5 rounded-full text-xs font-bold font-mono border-2 border-[#e2e2f0] text-graphite hover:border-cyanAccent hover:text-cyanAccent bg-white transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Zap className="w-3.5 h-3.5 text-cyanAccent fill-cyanAccent" />
              Payment
            </a>
            <a
              href="#register"
              onClick={triggerConfetti}
              className="px-5 py-2.5 rounded-full text-xs font-extrabold font-mono bg-purple-gradient text-white shadow-[0_4px_20px_rgba(139,92,246,0.4)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2 group"
            >
              <span>Register Now</span>
              <div className="w-5 h-5 rounded-full bg-lime text-graphite flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-3 h-3 stroke-[3]" />
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-2xl bg-white border border-[#e2e2f0] text-graphite shadow-sm"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-purple" /> : <Menu className="w-6 h-6 text-graphite" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#e2e2f0] px-4 pt-3 pb-6 space-y-3 mt-2 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl font-bold text-xs text-graphite hover:bg-purple-light/20 hover:text-purple transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
            <a
              href="#payment"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2.5 rounded-xl font-mono text-xs font-bold border border-graphite text-graphite"
            >
              Payment Details
            </a>
            <a
              href="#register"
              onClick={() => {
                setMobileMenuOpen(false);
                triggerConfetti();
              }}
              className="w-full text-center px-4 py-2.5 rounded-xl font-mono text-xs font-extrabold bg-purple-gradient text-white"
            >
              Register Now (Unstop)
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
