import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, FileText, Rocket, Code2, Users, PackageCheck, Trophy, AlertTriangle, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Timeline() {
  const [activeTab, setActiveTab] = useState('timeline');

  const scheduleEvents = [
    {
      time: 'LIVE NOW',
      title: 'Registration & Team Formation',
      desc: 'Register your team of 1–4 members on the official Unstop portal.',
      status: 'active',
      icon: CheckCircle2,
      iconColor: 'text-emerald-500'
    },
    {
      time: '22 AUG — 09:00 AM',
      title: 'Problem Statements Release',
      desc: 'Detailed challenge tracks and problem statements published.',
      status: 'upcoming',
      icon: FileText,
      iconColor: 'text-cyan-500'
    },
    {
      time: '22 AUG — 10:00 AM',
      title: 'Event Kickoff & Opening',
      desc: 'Welcome speech, briefing rules, and opening ceremony.',
      status: 'upcoming',
      icon: Rocket,
      iconColor: 'text-lime-hover'
    },
    {
      time: '22 AUG — 10:30 AM',
      title: 'Hacking Sprint Commences',
      desc: '12-hour continuous hacking clock begins. Build, design, and prototype!',
      status: 'upcoming',
      icon: Code2,
      iconColor: 'text-emerald-500'
    },
    {
      time: '22 AUG — 03:00 PM',
      title: 'Mid-Sprint Mentor Review',
      desc: 'Optional mentor check-in session for feedback and design guidance.',
      status: 'upcoming',
      icon: Users,
      iconColor: 'text-amber-500'
    },
    {
      time: '22 AUG — 09:00 PM',
      title: 'Final Submission Deadline',
      desc: 'All project links, Figma prototypes, GitHub repos, and decks must be submitted.',
      status: 'deadline',
      icon: PackageCheck,
      iconColor: 'text-red-500'
    },
    {
      time: '22 AUG — 10:00 PM',
      title: 'Judging & Closing Ceremony',
      desc: 'Winner announcements, prize distribution, and closing remarks.',
      status: 'upcoming',
      icon: Trophy,
      iconColor: 'text-amber-400'
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
    <section id="timeline" className="py-20 md:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lime text-graphite text-xs font-mono font-bold uppercase border border-graphite">
            <Clock className="w-3.5 h-3.5 text-graphite" />
            MISSION TIMELINE
          </div>
          <h2 className="text-4xl sm:text-6xl font-sans font-black font-extrabold tracking-tight text-graphite">
            CHALLENGE <span className="lime-highlight">NODES</span>
          </h2>
          <p className="text-base sm:text-lg font-medium text-graphite/70">
            22 August 2026 • 12-Hour Non-Stop Hackathon Roadmap
          </p>
        </div>

        {/* Tab Switcher (No Emojis - Vector Lucide Icons) */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-white border border-[#e2e2dd] shadow-sm">
            <button
              onClick={() => setActiveTab('timeline')}
              className={`px-6 py-2.5 rounded-full text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                activeTab === 'timeline'
                  ? 'bg-lime text-graphite border border-graphite shadow-sm'
                  : 'text-graphite/70 hover:text-graphite'
              }`}
            >
              <Calendar className="w-4 h-4 text-graphite" />
              Event Schedule
            </button>
            <button
              onClick={() => setActiveTab('submission')}
              className={`px-6 py-2.5 rounded-full text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                activeTab === 'submission'
                  ? 'bg-lime text-graphite border border-graphite shadow-sm'
                  : 'text-graphite/70 hover:text-graphite'
              }`}
            >
              <FileText className="w-4 h-4 text-graphite" />
              Submission Protocol
            </button>
          </div>
        </div>

        {/* Tab 1: Event Schedule */}
        <AnimatePresence mode="wait">
          {activeTab === 'timeline' && (
            <motion.div
              key="timeline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto space-y-4"
            >
              {scheduleEvents.map((evt, idx) => {
                const IconComponent = evt.icon;
                return (
                  <div
                    key={idx}
                    className={`ulearn-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all ${
                      evt.status === 'deadline'
                        ? 'border-2 border-red-500 bg-red-50/50'
                        : evt.status === 'active'
                        ? 'border-2 border-lime bg-lime/10'
                        : 'bg-white'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-cream-200 border border-[#e2e2dd] flex items-center justify-center flex-shrink-0">
                        <IconComponent className={`w-6 h-6 ${evt.iconColor}`} />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-extrabold text-graphite/60 uppercase tracking-wider">
                          {evt.time}
                        </span>
                        <h3 className="text-lg sm:text-xl font-sans font-black font-bold text-graphite">
                          {evt.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-graphite/70 mt-1">
                          {evt.desc}
                        </p>
                      </div>
                    </div>

                    <div className="self-end sm:self-center">
                      {evt.status === 'active' && (
                        <span className="px-3 py-1 rounded-full bg-emerald-500 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                          LIVE NOW
                        </span>
                      )}
                      {evt.status === 'deadline' && (
                        <span className="px-3 py-1 rounded-full bg-red-500 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                          HARD DEADLINE
                        </span>
                      )}
                      {evt.status === 'upcoming' && (
                        <span className="px-3 py-1 rounded-full bg-cream-300 text-graphite font-mono text-[10px] font-bold uppercase">
                          SCHEDULED
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}

          {/* Tab 2: Submission Protocol */}
          {activeTab === 'submission' && (
            <motion.div
              key="submission"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              <div className="ulearn-card p-8 sm:p-10 bg-white">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#e2e2dd]">
                  <ShieldCheck className="w-6 h-6 text-graphite" />
                  <div>
                    <h3 className="text-2xl font-sans font-black font-bold text-graphite">
                      REQUIRED SUBMISSION FIELDS
                    </h3>
                    <p className="text-xs font-mono text-graphite/60 uppercase">
                      EVERY SUBMISSION MUST INCLUDE THE FOLLOWING DATA
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {submissionFields.map((field, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-cream-100 border border-[#e2e2dd] flex items-center gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-lime text-graphite font-mono font-bold text-xs flex items-center justify-center border border-graphite">
                        {idx + 1}
                      </span>
                      <span className="text-sm font-semibold text-graphite">
                        {field}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hard Deadline Warning Card */}
              <div className="p-6 rounded-2xl bg-amber-50 border-2 border-amber-400 flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-sans font-black font-bold text-amber-900 text-lg">
                    STRICT DEADLINE ENFORCEMENT
                  </h4>
                  <p className="text-xs sm:text-sm text-amber-800 mt-1">
                    Submissions close precisely at <strong>22 August 2026, 09:00 PM IST</strong>. Late submissions or broken demo/Figma links will lead to disqualification. Ensure your team submits early!
                  </p>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
