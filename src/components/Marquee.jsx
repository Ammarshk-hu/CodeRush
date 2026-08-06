import React from 'react';

export default function Marquee() {
  const items = [
    'CODERUSH 1.0',
    'CSI TCET DEPT OF COMPUTER ENGG',
    '22 AUGUST 2026',
    '12 HOURS NON-STOP',
    'WEBATHON & UI/UX',
    'IDEATHON PITCH',
    'OPEN INNOVATION',
    'REGISTER ON UNSTOP',
  ];

  return (
    <div className="py-10 overflow-hidden relative z-20 space-y-4">
      {/* Tape 1: Lime Tape angled slightly */}
      <div className="bg-lime border-y-2 border-graphite py-3 shadow-md transform -rotate-1">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...items, ...items, ...items, ...items].map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-4 text-sm sm:text-base font-mono font-extrabold text-graphite mx-4 tracking-wider uppercase"
            >
              <span>{item}</span>
              <span className="text-graphite font-black">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Tape 2: Dark Tape angled opposite */}
      <div className="bg-graphite border-y-2 border-lime py-3 shadow-md transform rotate-1">
        <div className="flex whitespace-nowrap animate-marquee-reverse">
          {[...items, ...items, ...items, ...items].map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-4 text-sm sm:text-base font-mono font-extrabold text-lime mx-4 tracking-wider uppercase"
            >
              <span>{item}</span>
              <span className="text-lime font-black">⚡</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
