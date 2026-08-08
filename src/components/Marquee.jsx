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
    <section className="w-full bg-[#140e28] px-1 sm:px-2 md:px-3 pb-0 relative z-20">
      {/* Continuing the outer border from Hero */}
      <div className="w-full relative bg-[#140e28] border-x-4 border-[#2d1b54] border-t-0 border-b-0 px-0 pb-16">
        
        {/* The extended Matte background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMTQwZTI4Ij48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMzZDI1NmUiPjwvcmVjdD4KPC9zdmc+')] pointer-events-none"></div>

        {/* The Marquee content */}
        <div className="relative z-20 overflow-hidden space-y-6 pt-12 pb-12">
          {/* Tape 1: Lime Tape angled slightly */}
          <div className="bg-lime border-y-2 border-graphite py-3 shadow-[0_0_30px_rgba(204,255,0,0.2)] transform -rotate-2 scale-105">
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
          <div className="bg-graphite border-y-2 border-lime py-3 shadow-[0_0_30px_rgba(0,0,0,0.5)] transform rotate-2 scale-105">
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
      </div>
      
      {/* Organic Torn Paper Edge at the Bottom (Spanning full width to cover padding) */}
      <svg 
        viewBox="0 0 1200 100" 
        preserveAspectRatio="none" 
        className="absolute bottom-0 left-0 right-0 w-full h-12 sm:h-16 md:h-20 z-30 block overflow-visible"
      >
        <path 
          d="M0,100 L0,50 L45,85 L120,40 L210,90 L280,30 L360,75 L420,25 L500,80 L580,15 L650,70 L730,25 L810,85 L890,20 L960,70 L1040,15 L1110,80 L1200,45 L1200,100 Z" 
          fill="#f7f7f2" 
        />
        <polyline 
          points="0,50 45,85 120,40 210,90 280,30 360,75 420,25 500,80 580,15 650,70 730,25 810,85 890,20 960,70 1040,15 1110,80 1200,45" 
          fill="none" 
          stroke="#2d1b54" 
          strokeWidth="4" 
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </section>
  );
}
