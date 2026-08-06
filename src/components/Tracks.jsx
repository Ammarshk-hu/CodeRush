import React from 'react';
import { Globe, Palette, Lightbulb, Sparkles, Layers, Code, CheckCircle2, ShieldCheck, ArrowRight, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Tracks() {
  const tracks = [
    {
      id: '01',
      title: 'WEBATHON / WEB DESIGN',
      subtitle: 'FRONTEND & WEB DEVELOPMENT',
      description:
        'Build stunning, responsive, and highly functional web applications. Focus on user experience, performance optimization, clean code structure, and visual design excellence.',
      icon: Globe,
      color: 'border-lime text-lime bg-lime/10',
      badge: 'PRIMARY TRACK',
      highlights: ['Responsive Layouts', 'Interactive Elements', 'Modern Web Tech']
    },
    {
      id: '02',
      title: 'UI/UX DESIGN & PROTOTYPING',
      subtitle: 'DESIGN SYSTEMS & WIREFRAMES',
      description:
        'Design intuitive user interfaces and seamless digital experiences for web or mobile apps. Figma prototypes, wireframe user journeys, and component design systems welcome.',
      icon: Palette,
      color: 'border-cyanAccent text-cyanAccent bg-cyanAccent/10',
      badge: 'DESIGN TRACK',
      highlights: ['Figma Prototypes', 'User Centric Flow', 'Component Libraries']
    },
    {
      id: '03',
      title: 'IDEATHON & PITCH',
      subtitle: 'CONCEPT & STRATEGY',
      description:
        'Don\'t have a working codebase ready? Pitch your big technological idea! Present a clear problem statement, proposed digital solution, wireframes, and impact roadmap.',
      icon: Lightbulb,
      color: 'border-purple text-purple-light bg-purple/10',
      badge: 'INNOVATION TRACK',
      highlights: ['Problem Validation', 'Feasibility Deck', 'Impact Roadmap']
    },
    {
      id: '04',
      title: 'OPEN INNOVATION',
      subtitle: 'ANY CREATIVE TECH SOLUTION',
      description:
        'Not limited to standard web tracks. Any original, creative tech solution tackling a real-world problem is welcome — if it brings value and innovation, it belongs here.',
      icon: Sparkles,
      color: 'border-pinkAccent text-pinkAccent bg-pinkAccent/10',
      badge: 'WILD CARD',
      isSpecial: true,
      highlights: ['Cross Domain Ideas', 'Creative Tech', 'Unrestricted Scope']
    }
  ];

  const techStack = [
    'HTML5 / CSS3', 'JavaScript', 'React.js', 'Next.js', 'Figma',
    'Tailwind CSS', 'Node.js', 'Firebase', 'MongoDB', 'Bootstrap',
    'Vue.js', 'Flutter', 'Framer', 'TypeScript', 'Vite'
  ];

  return (
    <section id="tracks" className="py-20 md:py-28 relative z-10 bg-white/60 border-y border-[#e2e2f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (CodeFusion 2024 inspired: Choose Your Battlefield.) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-light/20 border border-purple/30 text-purple font-mono text-xs font-bold uppercase mb-4">
              <Layers className="w-3.5 h-3.5 text-purple" />
              CHALLENGE TRACKS
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold tracking-tight text-graphite">
              Choose Your <br className="hidden sm:block" />
              <span className="purple-highlight">Battlefield.</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg font-medium text-graphite/70 max-w-md">
            Select your track and engineer solutions that inspire. Designed for web developers, UI/UX designers, and visionary thinkers alike.
          </p>
        </div>

        {/* 4 Dark Bento Track Cards (CodeFusion 2024 Inspired Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={track.id}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="orbit-card p-8 flex flex-col justify-between relative overflow-hidden group bg-[#161224]"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-gray-400">
                      TRACK // {track.id}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-extrabold uppercase border ${track.color}`}>
                      {track.badge}
                    </span>
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-4 rounded-2xl border-2 ${track.color} shadow-lg group-hover:scale-105 transition-transform flex-shrink-0`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-white">
                        {track.title}
                      </h3>
                      <p className="text-xs font-mono font-bold text-purple-light uppercase">
                        {track.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 font-medium">
                    {track.description}
                  </p>
                </div>

                {/* Highlights Tags */}
                <div className="pt-4 border-t border-purple-light/20 flex flex-wrap gap-2">
                  {track.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-[#221b36] border border-purple-light/20 text-xs font-mono font-semibold text-gray-200 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime flex-shrink-0" />
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Authorized Tech Stack Box */}
        <div className="ulearn-card-dark p-8 sm:p-10 relative overflow-hidden bg-graphite border-2 border-purple">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-purple text-white border border-purple-light">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  AUTHORIZED TECH STACK
                </h3>
                <p className="text-xs font-mono text-gray-400">
                  RECOMMENDED ARCHITECTURES & FRAMEWORKS
                </p>
              </div>
            </div>
            <span className="text-xs font-mono text-lime font-bold uppercase tracking-wider">
              [ STACK PERMITTED: ANY MODERN TOOL ]
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-2">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3.5 py-2 rounded-xl bg-[#1c182b] border border-purple/30 text-xs sm:text-sm font-mono font-bold text-gray-200 hover:border-lime hover:text-lime transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
