import React from 'react';
import { ArrowUp, Instagram, Linkedin, Twitter, Github, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0c0919] text-white relative z-10 pt-16 pb-12 border-t-4 border-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-purple-light/20">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple text-white flex items-center justify-center font-mono font-bold text-lg border-2 border-purple-light shadow-[3px_3px_0px_#ccff00]">
                CR
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold tracking-tight text-white">
                  CODE<span className="text-purple-light">RUSH</span> 2026
                </h3>
                <p className="text-xs font-mono text-gray-400">
                  Organized by CSI (Dept of Computer Engineering — TCET)
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed font-medium">
              CodeRush 1.0 is a 12-hour hackathon bringing together developers, designers, and creative thinkers to build solutions for Web Design, UI/UX, and Ideathons.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#181329] border border-purple-light/20 text-gray-300 hover:text-lime hover:border-lime transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#181329] border border-purple-light/20 text-gray-300 hover:text-lime hover:border-lime transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#181329] border border-purple-light/20 text-gray-300 hover:text-lime hover:border-lime transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#181329] border border-purple-light/20 text-gray-300 hover:text-lime hover:border-lime transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold text-lime uppercase tracking-widest">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300 font-medium">
              <li><a href="#home" className="hover:text-purple-light transition-colors">01. Home</a></li>
              <li><a href="#about" className="hover:text-purple-light transition-colors">02. About Sequence</a></li>
              <li><a href="#sequence" className="hover:text-purple-light transition-colors">03. Mission Stages</a></li>
              <li><a href="#tracks" className="hover:text-purple-light transition-colors">04. Challenge Tracks</a></li>
              <li><a href="#timeline" className="hover:text-purple-light transition-colors">05. Mission Timeline</a></li>
            </ul>
          </div>

          {/* Col 3: Resources & Legal */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs font-bold text-lime uppercase tracking-widest">
              RESOURCES & LEGAL
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300 font-medium">
              <li><a href="#prizes" className="hover:text-purple-light transition-colors">Prizes & Reward Matrix</a></li>
              <li><a href="#rules" className="hover:text-purple-light transition-colors">Eligibility & Rules</a></li>
              <li><a href="#payment" className="hover:text-purple-light transition-colors">Payment & Portal Info</a></li>
              <li><a href="#faq" className="hover:text-purple-light transition-colors">Frequently Asked Questions</a></li>
            </ul>

            <div className="pt-3">
              <span className="inline-block px-3 py-1 rounded-lg bg-purple-light/10 border border-purple-light/30 text-purple-light font-mono text-[11px]">
                ORGANIZED BY CSI TCET • 2026
              </span>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <p>© 2026 CodeRush 1.0. All Rights Reserved. Organized by CSI TCET.</p>
          
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#181329] border border-purple-light/20 text-gray-300 hover:text-white hover:bg-purple transition-all flex items-center gap-1.5 font-bold"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 text-lime" />
          </button>
        </div>

      </div>
    </footer>
  );
}
