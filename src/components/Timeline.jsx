import React, { useState } from 'react';
import { Calendar, FileText, Clock, CheckCircle2, Rocket, Code2, Users, PackageCheck, Trophy, AlertTriangle, ShieldCheck, Laptop, Gift, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Timeline() {
  const [activeTab, setActiveTab] = useState('timeline');

  const scheduleEvents = [
    {
      time: 'LIVE NOW',
      title: 'Registration & Team Formation',
      desc: 'Register your team of 1–4 members on the Unstop portal.',
      status: 'active',
      icon: Laptop,
      tagText: 'LIVE NOW',
      tagColor: 'bg-[#ccff00] text-gray-900',
    },
    {
      time: '22 AUG — 09:00 AM',
      title: 'Problem Statements Release',
      desc: 'Detailed challenge tracks and problem statements published.',
      status: 'upcoming',
      icon: FileText,
      tagText: 'SCHEDULED',
      tagColor: 'bg-[#ccff00]/20 text-gray-900',
    },
    {
      time: '22 AUG — 10:00 AM',
      title: 'Event Kickoff & Opening',
      desc: 'Welcome speech, briefing rules, and opening ceremony.',
      status: 'upcoming',
      icon: Users,
      tagText: 'SCHEDULED',
      tagColor: 'bg-[#ccff00]/20 text-gray-900',
    },
    {
      time: '22 AUG — 10:30 AM',
      title: 'Hacking Sprint Commences',
      desc: '12-hour continuous hacking clock begins. Build, design, and prototype!',
      status: 'active',
      icon: Code2,
      tagText: 'HACKING SPRINT',
      tagColor: 'bg-[#ccff00] text-gray-900',
    },
    {
      time: '22 AUG — 03:00 PM',
      title: 'Mid-Sprint Mentor Review',
      desc: 'Optional mentor check-in session for feedback and design guidance.',
      status: 'upcoming',
      icon: Lightbulb,
      tagText: 'MENTOR MEET',
      tagColor: 'bg-[#ccff00]/20 text-gray-900',
    },
    {
      time: '22 AUG — 09:00 PM',
      title: 'Final Submission Deadline',
      desc: 'All project links, Figma prototypes, GitHub repos, and decks must be submitted.',
      status: 'deadline',
      icon: PackageCheck,
      tagText: 'HARD DEADLINE',
      tagColor: 'bg-red-500 text-white',
    },
    {
      time: '22 AUG — 10:00 PM',
      title: 'Judging & Closing Ceremony',
      desc: 'Winner announcements, prize distribution, and closing remarks.',
      status: 'upcoming',
      icon: Trophy,
      tagText: 'REWARDS AWAIT',
      tagColor: 'bg-[#ccff00] text-gray-900',
    }
  ];

  const submissionFields = [
    'Project Title & Team Name',
    'Track Selected (Webathon / UI-UX / Ideathon / Open)',
    'Problem Statement Addressed',
    'Solution Summary (100–200 words)',
    'Live Demo / Figma Prototype Link',
    'Presentation Deck (PPT or PDF file)',
    'GitHub Repository Link (if code implementation)'
  ];

  return (
    <section id="timeline" className="py-20 md:py-32 relative z-10 overflow-hidden bg-[#fafafa]">

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#ccff00]/10 blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#ccff00]/5 blur-[150px]"></div>
      </div>

      <div className="max-w-[100vw] mx-auto relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ccff00]/20 text-gray-900 text-xs font-mono font-bold uppercase border border-[#ccff00]/40 shadow-sm"
          >
            <Clock className="w-4 h-4" />
            MISSION TIMELINE
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-serif font-extrabold tracking-tight text-gray-900"
          >
            THE NEON <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-[#99cc00]">PATH</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg font-medium text-gray-600"
          >
            22 August 2026 • 12-Hour Non-Stop Hackathon Roadmap
          </motion.p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10 px-4">
          <div className="inline-flex p-1.5 rounded-full bg-white border border-gray-200 shadow-lg shadow-gray-200/50 relative z-20">
            <button
              onClick={() => setActiveTab('timeline')}
              className={`px-6 py-3 rounded-full text-sm font-mono font-bold transition-all flex items-center gap-2 ${activeTab === 'timeline'
                  ? 'bg-gradient-to-r from-[#ccff00] to-[#b3e600] text-gray-900 border border-[#ccff00] shadow-md transform scale-105'
                  : 'text-gray-500 hover:text-gray-800'
                }`}
            >
              <Calendar className="w-4 h-4" />
              Event Schedule
            </button>
            <button
              onClick={() => setActiveTab('submission')}
              className={`px-6 py-3 rounded-full text-sm font-mono font-bold transition-all flex items-center gap-2 ${activeTab === 'submission'
                  ? 'bg-gradient-to-r from-[#ccff00] to-[#b3e600] text-gray-900 border border-[#ccff00] shadow-md transform scale-105'
                  : 'text-gray-500 hover:text-gray-800'
                }`}
            >
              <FileText className="w-4 h-4" />
              Submission Protocol
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'timeline' && (
            <motion.div
              key="timeline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full overflow-x-auto overflow-y-hidden pb-10 custom-scrollbar scroll-smooth"
            >
              {/* Horizontal Scrollable Container */}
              <div className="relative w-[3000px] h-[750px] mx-auto mt-10">

                {/* Tech Doodle Background Image */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: "url('/tech_doodle_bg.png')",
                    backgroundSize: "contain",
                    backgroundRepeat: "repeat-x",
                    backgroundPosition: "center",
                  }}
                ></div>

                {/* Floating Animated Illustrations */}
                <motion.div
                  animate={{ y: [0, -30, 0], rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 left-[400px] w-80 h-80 opacity-90 pointer-events-none z-0 mix-blend-multiply"
                >
                  <img src="/floating_vr_user.png" alt="VR User" className="w-full h-full object-contain drop-shadow-xl" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 25, 0], rotate: [0, -3, 3, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-10 left-[1600px] w-96 h-96 opacity-90 pointer-events-none z-0 mix-blend-multiply"
                >
                  <img src="/floating_laptop_user.png" alt="Laptop User" className="w-full h-full object-contain drop-shadow-xl" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute top-20 left-[2500px] w-80 h-80 opacity-90 pointer-events-none z-0 mix-blend-multiply"
                >
                  <img src="/running_breakthrough.png" alt="Breakthrough User" className="w-full h-full object-contain drop-shadow-xl" />
                </motion.div>

                {/* SVG Curvy Golden Path */}
                <svg
                  className="absolute top-0 left-0 w-full h-full pointer-events-none drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]"
                  viewBox="0 0 3000 750"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 0 300 L 250 300 C 450 300, 450 500, 650 500 C 850 500, 850 300, 1050 300 C 1250 300, 1250 500, 1450 500 C 1650 500, 1650 300, 1850 300 C 2050 300, 2050 500, 2250 500 C 2450 500, 2450 300, 2650 300 L 3000 300"
                    stroke="url(#goldenGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    className="timeline-line-glow"
                  />
                  <defs>
                    <linearGradient id="goldenGradient" x1="0" y1="0" x2="3000" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor='#ccff00' />
                      <stop offset="20%" stopColor='#ccff00' />
                      <stop offset="50%" stopColor='#ccff00' />
                      <stop offset="80%" stopColor='#ccff00' />
                      <stop offset="100%" stopColor='#ccff00' />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Event Nodes */}
                {scheduleEvents.map((evt, idx) => {
                  const IconComponent = evt.icon;
                  const isTop = idx % 2 === 0;
                  const xPos = 250 + idx * 400; // 250, 650, 1050, 1450...
                  const yPos = isTop ? 300 : 500;

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8, y: isTop ? 20 : -20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="absolute flex flex-col items-center"
                      style={{
                        left: `${xPos}px`,
                        top: `${yPos}px`,
                        transform: 'translate(-50%, -50%)',
                        width: '320px',
                        height: '56px'
                      }}
                    >

                      {/* Node Center Marker */}
                      <div className="absolute w-14 h-14 rounded-full border-4 border-white bg-[#ccff00] shadow-xl flex items-center justify-center z-30 neon-path-glow">
                        <IconComponent className="w-6 h-6 text-gray-900" />
                      </div>

                      {/* Content Card Positioned Outside to avoid overlap */}
                      <div className={`absolute neon-card p-6 rounded-3xl w-full z-20 transition-transform duration-300 hover:scale-[1.02] group bg-white shadow-xl ${evt.status === 'active' ? 'ring-2 ring-[#ccff00] ring-offset-4 ring-offset-[#fafafa]' : ''}`}
                        style={{
                           [isTop ? 'bottom' : 'top']: '100%',
                           [isTop ? 'marginBottom' : 'marginTop']: '24px' // Gap between marker and card
                        }}
                      >

                        {/* Connecting Line */}
                        <div className="absolute left-1/2 -translate-x-1/2 w-1.5 bg-[#ccff00] -z-10 rounded-full"
                          style={{
                            height: '24px',
                            [isTop ? 'bottom' : 'top']: '-24px',
                          }}></div>

                        {/* Top floating Tag */}
                        <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider mb-4 border shadow-sm ${evt.tagColor} ${evt.status === 'active' ? 'border-[#b3e600]' : 'border-transparent'}`}>
                          {evt.tagText}
                        </div>

                        <div className="flex flex-col gap-2">
                          <span className="text-xs font-mono font-bold text-gray-600 uppercase tracking-widest bg-[#ccff00]/20 px-2 py-1 rounded-md self-start">
                            {evt.time}
                          </span>
                          <h3 className="text-xl font-serif font-extrabold text-gray-900 leading-tight">
                            {evt.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-2 font-medium relative z-10">
                            {evt.desc}
                          </p>
                        </div>

                        {/* Decorative Icon Background */}
                        <div className="absolute -bottom-2 -right-2 opacity-5 pointer-events-none transform group-hover:scale-110 transition-transform z-0">
                          <IconComponent className="w-28 h-28 text-gray-900" />
                        </div>
                      </div>

                    </motion.div>
                  );
                })}

                {/* Bottom Finishing Gift Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", bounce: 0.5 }}
                  className="absolute w-24 h-24 rounded-full bg-[#ccff00] border-8 border-[#fafafa] shadow-2xl flex items-center justify-center neon-path-glow z-30"
                  style={{
                    left: '2900px',
                    top: '300px',
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <Gift className="w-10 h-10 text-gray-900" />
                </motion.div>

              </div>
            </motion.div>
          )}

          {/* Tab 2: Submission Protocol */}
          {activeTab === 'submission' && (
            <motion.div
              key="submission"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto space-y-8 px-4"
            >
              <div className="neon-card p-8 sm:p-12 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ccff00]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#ccff00]/30 relative z-10">
                  <div className="p-3 bg-[#ccff00]/20 rounded-xl text-gray-900">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900">
                      REQUIRED SUBMISSION FIELDS
                    </h3>
                    <p className="text-xs font-mono text-gray-600 font-semibold uppercase mt-1">
                      EVERY SUBMISSION MUST INCLUDE THE FOLLOWING DATA
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                  {submissionFields.map((field, idx) => (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      key={idx}
                      className="p-5 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#ccff00]/20 flex items-start gap-4 hover:bg-white hover:border-[#ccff00] transition-all shadow-sm hover:shadow-md"
                    >
                      <span className="w-8 h-8 flex-shrink-0 rounded-full bg-[#ccff00] text-gray-900 font-mono font-bold text-sm flex items-center justify-center shadow-sm">
                        {idx + 1}
                      </span>
                      <span className="text-sm font-semibold text-gray-800 pt-1">
                        {field}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hard Deadline Warning Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-8 rounded-3xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 flex items-start gap-6 shadow-lg shadow-red-900/5 relative overflow-hidden"
              >
                <div className="absolute right-0 top-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="p-3 bg-white rounded-xl shadow-sm border border-red-100 text-red-500 flex-shrink-0">
                  <AlertTriangle className="w-8 h-8" />
                </div>
                <div className="relative z-10">
                  <h4 className="font-serif font-bold text-red-900 text-xl">
                    STRICT DEADLINE ENFORCEMENT
                  </h4>
                  <p className="text-sm text-red-800 mt-2 leading-relaxed max-w-2xl font-medium">
                    Submissions close precisely at <strong className="font-extrabold text-red-950 bg-red-100 px-2 py-0.5 rounded">22 August 2026, 09:00 PM IST</strong>. Late submissions or broken demo/Figma links will lead to disqualification. Ensure your team submits early!
                  </p>
                </div>
              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
