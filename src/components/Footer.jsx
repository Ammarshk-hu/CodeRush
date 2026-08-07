import React from 'react';
import { ArrowUp, Instagram, Linkedin, Mail, Github, Headphones, ArrowRight } from 'lucide-react';
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0c0919] text-white relative z-10 pt-24 pb-16 border-t-4 border-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="relative overflow-hidden mb-20 rounded-[32px] bg-gradient-to-r from-[#6d28d9] via-[#8b5cf6] to-[#4f46e5] py-14 px-8 md:py-18 md:px-12 text-center shadow-[0_0_60px_rgba(139,92,246,0.35)]">

  {/* Background Glow */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#ccff00]/10 rounded-full blur-3xl"></div>

  <div className="relative z-10">
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
      Ready for CodeRush 1.0?
    </h2>

    <p className="mt-6 max-w-3xl mx-auto text-white text-base md:text-lg leading-relaxed">
      Team up, build innovative solutions, and showcase your skills at
      <span className="whitespace-nowrap"> CSI TCET's 12-hour </span>
      Webathon & Designathon.
    </p>

    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6">
      <a
        href="#register"
        className="px-10 py-4 rounded-full bg-[#ccff00] text-black font-bold hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_25px_rgba(204,255,0,0.6)] transition-all duration-300"
      >
        Register Now
      </a>

      <a
        href="#about"
        className="px-10 py-4 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-[#140e28] hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_30px_rgba(204,255,0,0.6)] transition-all duration-300"
        >
          Learn More
      </a>
    </div>
  </div>

</div>
        
        <div className="grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-10 pb-12 border-b border-white/10 items-center">

  {/* Brand Info */}
  <div className="space-y-4 text-center lg:text-left">

    <div className="flex items-center justify-center lg:justify-start gap-3">

      <div className="relative group">
        <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl bg-[#ccff00] opacity-90 transition-all duration-300 group-hover:scale-110"></div>

        <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#9b87ff] via-[#8b5cf6] to-[#6d28d9] border border-white/20 flex items-center justify-center shadow-[0_0_25px_rgba(139,92,246,0.75)] group-hover:scale-105 group-hover:shadow-[0_0_35px_rgba(139,92,246,1)] transition-all duration-300">
          <span className="font-black text-lg text-white">CR</span>
        </div>
      </div>

      <div>
        <h3 className="font-sans text-[30px] font-black text-white">
          CODE<span className="text-purple-light">RUSH</span> 2026
        </h3>

        <p className="text-xs font-mono text-gray-300">
          Organized by CSI (Dept of Computer Engineering — TCET)
        </p>
      </div>

    </div>

    <p className="text-sm text-gray-400 max-w-sm mx-auto lg:mx-0 leading-relaxed">
      CodeRush 1.0 is CSI TCET's flagship 12-hour Webathon & Designathon, where students collaborate, innovate, and transform ideas into impactful digital solutions.
    </p>

    <div className="flex justify-center lg:justify-start gap-3 pt-2">

      <a href="https://www.linkedin.com/company/csi-tcet/" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-[#181329] border border-purple-light/20 text-gray-300 hover:text-lime hover:border-lime hover:-translate-y-1 transition-all">
        <Linkedin className="w-4 h-4" />
      </a>

      <a href="https://www.instagram.com/tcet_csi?igsh=cmk3MmE1ZXJydGI0" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-[#181329] border border-purple-light/20 text-gray-300 hover:text-lime hover:border-lime hover:-translate-y-1 transition-all">
        <Instagram className="w-4 h-4" />
      </a>

      <a
  href="mailto:csitcettech07@gmail.com"
  className="p-2.5 rounded-xl bg-[#181329] border border-purple-light/20 text-gray-300 hover:text-lime hover:border-lime hover:-translate-y-1 transition-all"
>
  <Mail className="w-4 h-4" />
</a>

      <a href="https://github.com/AyushRBuilds/CodeRush.git" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-[#181329] border border-purple-light/20 text-gray-300 hover:text-lime hover:border-lime hover:-translate-y-1 transition-all">
        <Github className="w-4 h-4" />
      </a>

    </div>

  </div>

 {/* Contact CTA */}

<div className="w-full max-w-[760px] ml-auto">

  <div className="relative overflow-hidden rounded-[36px]
  bg-gradient-to-br from-[#120b1f] to-[#1d1235]
  border border-purple-500/40
  px-8 py-7
  shadow-[0_0_45px_rgba(139,92,246,.28)]">

   

   <div className="grid grid-cols-[72px_1fr_200px] items-center gap-8">

      {/* Icon */}
      <div className="contents">

  <div className="w-16 h-16 rounded-full border-2 border-purple-500 flex items-center justify-center justify-self-center shadow-[0_0_25px_rgba(139,92,246,.45)]">
    <Headphones className="w-8 h-8 text-[#ccff00]" />
  </div>

  <div>

   <h2 className="text-3xl font-extrabold tracking-tight text-white leading-none">
      QUESTIONS?
    </h2>

    <p className="mt-3 text-[15px] leading-6 text-gray-400 max-w-[260px]">
      We're here to help!
    </p>

    <p className="text-gray-400 mt-2">
      Reach out to our team.
    </p>

  </div>

</div>
      

      {/* Button */}
      <a
        href="#contact"
        className="justify-self-end inline-flex items-center justify-center gap-2 w-[200px] h-[64px] rounded-full bg-[#ccff00] text-black text-lg font-bold hover:scale-105 transition-all shadow-[0_0_35px_rgba(204,255,0,.45)]"
      >
        Contact Us
        <ArrowRight className="w-5 h-5" />
      </a>

    </div>

  </div>

</div>
</div> {/* End Grid */}
        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <p>© 2026 CodeRush 1.0. All Rights Reserved. Organized by CSI TCET.</p>
          
          <button
            onClick={scrollToTop}
            className="group p-2.5 rounded-xl bg-[#181329] border border-purple-light/20 text-gray-300 hover:bg-purple hover:text-white hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300 flex items-center gap-2 font-bold"
            >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 text-lime group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </footer>
  );
}