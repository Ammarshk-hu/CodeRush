import React, { useState } from 'react';
import { Trophy, Award, Gift, Ticket, CheckCircle, Sparkles, Eye, Lock, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function Prizes() {
  const [scratchRevealed, setScratchRevealed] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#8b5cf6', '#06b6d4', '#ccff00', '#ffffff']
    });
  };

  const prizeCards = [
    {
      place: 'FIRST PRIZE',
      amount: '₹ TBD',
      tag: 'WINNER',
      icon: Trophy,
      iconColor: 'text-purple',
      bg: 'bg-purple text-white border-purple-light',
      shadow: 'shadow-[6px_6px_0px_#ccff00]',
      perks: ['Cash Prize & Winner Trophy', 'Official Winner Certificate', 'CSI TCET Swag Kit & Goodies', 'Exclusive Mentorship & Spotlight']
    },
    {
      place: 'SECOND PRIZE',
      amount: '₹ TBD',
      tag: '1ST RUNNER UP',
      icon: Award,
      iconColor: 'text-cyanAccent',
      bg: 'bg-white text-graphite border-[#e2e2f0]',
      shadow: 'shadow-[6px_6px_0px_#8b5cf6]',
      perks: ['Cash Prize', '1st Runner-Up Certificate', 'CSI Swag Kits', 'Industry Recognition Badges']
    },
    {
      place: 'THIRD PRIZE',
      amount: '₹ TBD',
      tag: '2ND RUNNER UP',
      icon: Gift,
      iconColor: 'text-amber-800',
      bg: 'bg-cream-200 text-graphite border-[#e2e2f0]',
      shadow: 'shadow-[6px_6px_0px_#06b6d4]',
      perks: ['Cash Prize', '2nd Runner-Up Certificate', 'CSI Swag Kits', 'Certificate of Merit']
    }
  ];

  return (
    <section id="prizes" className="py-20 md:py-28 relative z-10 bg-white/60 border-t border-[#e2e2f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-light/20 text-purple font-mono text-xs font-bold uppercase border border-purple/30">
            <Trophy className="w-3.5 h-3.5 text-purple" />
            REWARD MATRIX
          </div>
          <h2 className="text-4xl sm:text-6xl font-sans font-black font-extrabold tracking-tight text-graphite">
            MISSION <span className="purple-highlight">PRIZES</span>
          </h2>
          <p className="text-base sm:text-lg font-medium text-graphite/70">
            Top performers receive cash prizes, trophies, certificates, and exclusive recognition from CSI TCET.
          </p>
        </div>

        {/* Podium Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
          {prizeCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`p-8 rounded-3xl border-2 flex flex-col justify-between transition-all ${card.bg} ${card.shadow}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-extrabold uppercase border border-current bg-white/20">
                      {card.tag}
                    </span>
                    <div className="p-3 rounded-2xl bg-white/90 border border-current shadow-sm">
                      <IconComp className={`w-7 h-7 ${card.iconColor}`} />
                    </div>
                  </div>

                  <h3 className="text-xs font-mono font-bold uppercase opacity-80 tracking-widest">
                    {card.place}
                  </h3>
                  <div className="text-4xl sm:text-5xl font-sans font-black font-extrabold my-2">
                    {card.amount}
                  </div>
                  <p className="text-xs font-mono opacity-80 mb-6">
                    + SWAG & CERTIFICATES
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-current/20 text-xs sm:text-sm font-semibold">
                    {card.perks.map((perk, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={triggerConfetti}
                  className="w-full mt-8 py-3 rounded-xl bg-graphite text-white hover:bg-lime hover:text-graphite font-mono font-bold text-xs border-2 border-graphite transition-all flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4 text-lime" />
                  CLAIM VICTORY
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Mystery Perk Scratch Card */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="codefusion-card p-6 sm:p-8 text-center relative overflow-hidden border-2 border-dashed border-purple">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-light/20 text-purple text-xs font-mono font-bold uppercase mb-3">
              <Star className="w-3.5 h-3.5 fill-purple" />
              SPECIAL BENEFIT // SCRATCH TO REVEAL
            </div>
            
            <h3 className="text-2xl font-sans font-black font-bold text-graphite mb-2">
              MYSTERY REWARD CARD
            </h3>
            <p className="text-xs sm:text-sm text-graphite/70 max-w-md mx-auto mb-6">
              Click the card below to scratch off the security layer and unlock exclusive perks for all participating teams!
            </p>

            <div
              onClick={() => {
                setScratchRevealed(true);
                triggerConfetti();
              }}
              className={`p-6 sm:p-8 rounded-2xl cursor-pointer border-2 transition-all max-w-lg mx-auto ${
                scratchRevealed
                  ? 'bg-purple-gradient text-white border-purple-light shadow-[4px_4px_0px_#ccff00]'
                  : 'bg-graphite text-white border-purple hover:border-lime'
              }`}
            >
              {scratchRevealed ? (
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="space-y-2"
                >
                  <div className="inline-flex p-2 rounded-full bg-white text-purple">
                    <Sparkles className="w-6 h-6 fill-purple" />
                  </div>
                  <h4 className="font-sans font-black font-extrabold text-xl sm:text-2xl text-white">
                    FREE DIGITAL CERTIFICATES & MENTORSHIP
                  </h4>
                  <p className="text-xs font-mono text-purple-light font-bold">
                    All participants who submit valid projects receive Digital Certificates & Direct Feedback from CSI TCET Mentors!
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-2 py-3">
                  <div className="inline-flex p-3 rounded-full bg-[#181229] border border-purple text-lime">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div className="font-mono text-sm font-bold text-lime flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4" />
                    CLICK TO REVEAL MYSTERY BENEFIT
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Digital Ticket Pass Component */}
        <div className="max-w-3xl mx-auto">
          <div className="ulearn-card-dark p-6 sm:p-8 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 border-2 border-purple bg-graphite">
            
            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple text-white text-[10px] font-mono font-bold uppercase">
                <Ticket className="w-3.5 h-3.5 text-white" />
                DIGITAL ADMIT PASS
              </div>
              <h3 className="text-2xl sm:text-3xl font-sans font-black font-bold text-white">
                CODERUSH 1.0 — ADMIT ONE
              </h3>
              <p className="text-xs font-mono text-gray-400">
                DATE: 22 AUGUST 2026 • VENUE: TCET MUMBAI / ONLINE • ORGANIZER: CSI TCET
              </p>
            </div>

            <div className="flex flex-col items-center sm:items-end gap-3 flex-shrink-0">
              <div className="bg-white p-2 rounded-xl border border-purple">
                {/* Barcode */}
                <div className="flex gap-1 items-center h-10 px-2">
                  <div className="w-1.5 h-full bg-graphite"></div>
                  <div className="w-0.5 h-full bg-graphite"></div>
                  <div className="w-2 h-full bg-graphite"></div>
                  <div className="w-1 h-full bg-graphite"></div>
                  <div className="w-3 h-full bg-graphite"></div>
                  <div className="w-1 h-full bg-graphite"></div>
                  <div className="w-2 h-full bg-graphite"></div>
                  <div className="w-0.5 h-full bg-graphite"></div>
                </div>
              </div>
              <a
                href="#register"
                onClick={triggerConfetti}
                className="px-5 py-2.5 rounded-xl bg-purple-gradient text-white font-mono font-extrabold text-xs border border-purple-light hover:scale-105 transition-transform"
              >
                GET TICKET PASS
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
