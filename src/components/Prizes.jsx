import React, { useState, useRef, useEffect } from 'react';
import { Trophy, Award, Gift, CheckCircle, Sparkles, Star, Plus, Circle, Hexagon } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import confetti from 'canvas-confetti';
import ScratchCard from './ScratchCard';

// 1. TiltCard Component for 3D hover effect
const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      <div style={{ transform: "translateZ(30px)" }} className="w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};

// 2. SpotlightWrapper Component for cursor tracking glow
const SpotlightWrapper = ({ children, className }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(139, 92, 246, 0.25), transparent 80%)`,
        }}
      />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

// 3. Floating Background Elements
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div 
        animate={{ y: [0, -30, 0], rotate: [0, 45, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[5%] opacity-20 text-lime"
      >
        <Plus size={48} />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 40, 0], scale: [1, 1.2, 1] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[20%] right-[10%] opacity-10 text-purple"
      >
        <Circle size={64} />
      </motion.div>
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, -30, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] right-[5%] opacity-20 text-cyanAccent"
      >
        <Hexagon size={40} />
      </motion.div>
    </div>
  );
};

export default function Prizes() {
  const [scratchRevealed, setScratchRevealed] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 640);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

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
      iconColor: 'text-lime',
      bg: 'bg-[#140e28] text-white border-purple',
      shadow: 'shadow-[6px_6px_0px_#ccff00]',
      headerColor: 'text-lime',
      amountColor: 'text-white animate-shimmer',
      buttonStyle: 'bg-purple-gradient text-white border-none hover:opacity-90',
      perks: ['Cash Prize & Winner Trophy', 'Official Winner Certificate', 'CSI TCET Swag Kit & Goodies', 'Exclusive Mentorship & Spotlight'],
    },
    {
      place: 'SECOND PRIZE',
      amount: '₹ TBD',
      tag: '1ST RUNNER UP',
      icon: Award,
      iconColor: 'text-purple',
      bg: 'bg-cream-100/90 text-graphite border-cream-300',
      shadow: 'shadow-[6px_6px_0px_#8b5cf6]',
      headerColor: 'text-purple',
      amountColor: 'text-graphite',
      buttonStyle: 'bg-graphite text-white hover:bg-lime hover:text-graphite border-2 border-graphite',
      perks: ['Cash Prize', '1st Runner-Up Certificate', 'CSI Swag Kits', 'Industry Recognition Badges'],
    },
    {
      place: 'THIRD PRIZE',
      amount: '₹ TBD',
      tag: '2ND RUNNER UP',
      icon: Gift,
      iconColor: 'text-cyanAccent',
      bg: 'bg-cream-50 text-graphite border-cream-300',
      shadow: 'shadow-[6px_6px_0px_#06b6d4]',
      headerColor: 'text-cyanAccent',
      amountColor: 'text-graphite',
      buttonStyle: 'bg-graphite text-white hover:bg-cyanAccent hover:text-white border-2 border-graphite',
      perks: ['Cash Prize', '2nd Runner-Up Certificate', 'CSI Swag Kits', 'Certificate of Merit'],
    }
  ];

  // Variants for scroll-reveal stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <section id="prizes" className="py-20 md:py-28 relative z-10 bg-cream-100 border-t border-cream-300 overflow-hidden">
      
      {/* 4. Floating Elements */}
      <FloatingElements />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple/20 text-purple font-mono text-xs font-bold uppercase border border-purple/30">
              <Trophy className="w-3.5 h-3.5 text-purple" />
              REWARD MATRIX
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold tracking-tight text-graphite">
              MISSION <span className="text-purple">PRIZES</span>
            </h2>
            <p className="text-base sm:text-lg font-medium text-graphite/70">
              Top performers receive cash prizes, trophies, certificates, and exclusive recognition from CSI TCET.
            </p>
          </motion.div>

          {/* Podium Stack */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.1 }
              }
            }}
            className="flex flex-col sm:flex-row items-center sm:items-end justify-center w-full max-w-4xl mx-auto gap-8 sm:gap-0 mb-16"
          >
            {prizeCards.map((card, idx) => {
              const IconComp = card.icon;
              
              const isHovered = hoveredIndex === idx;
              const isSiblingHovered = hoveredIndex !== null && hoveredIndex !== idx;
              
              let restingRotate = idx === 0 ? 0 : (idx === 1 ? -8 : 8);
              let restingY = idx === 0 ? 0 : 12;
              let restingZ = idx === 0 ? 20 : 10;
              
              let animateState = {};
              if (!isDesktop) {
                animateState = {
                  opacity: 1, y: 0, scale: 1, rotate: 0, zIndex: 10,
                  transition: { type: "spring", stiffness: 120, damping: 14 }
                };
              } else {
                if (isHovered) {
                  animateState = { 
                    opacity: 1, y: -24, scale: 1.06, rotate: 0, zIndex: 50,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  };
                } else if (isSiblingHovered) {
                  let extraTilt = 0;
                  if (idx === 1) extraTilt = -2;
                  else if (idx === 2) extraTilt = 2;
                  else if (idx === 0) extraTilt = hoveredIndex === 1 ? 2 : -2;
                  
                  animateState = {
                    opacity: 0.85, y: restingY, scale: 0.96, rotate: restingRotate + extraTilt, zIndex: restingZ,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  };
                } else {
                  animateState = {
                    opacity: 1, y: restingY, scale: 1, rotate: restingRotate, zIndex: restingZ,
                    transition: { type: "spring", stiffness: 120, damping: 14 }
                  };
                }
              }

              let cardLayoutClasses = "w-full sm:w-72 lg:w-80 flex-shrink-0 relative ";
              if (idx === 0) cardLayoutClasses += "order-1 sm:order-2 "; 
              else if (idx === 1) cardLayoutClasses += "order-2 sm:order-1 sm:-mr-8 lg:-mr-10 ";
              else if (idx === 2) cardLayoutClasses += "order-3 sm:order-3 sm:-ml-8 lg:-ml-10 ";

              const floatDelay = idx === 0 ? '0s' : idx === 1 ? '0.7s' : '1.4s';

              return (
                <motion.div 
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 60, scale: 0.9, rotate: 0 },
                    show: animateState
                  }}
                  whileTap={{ scale: 0.97 }}
                  onHoverStart={() => isDesktop && setHoveredIndex(idx)}
                  onHoverEnd={() => isDesktop && setHoveredIndex(null)}
                  style={{ transformOrigin: "bottom center" }}
                  className={cardLayoutClasses}
                >
                  <div 
                    className={`h-full w-full animate-float ${isHovered ? '[animation-play-state:paused]' : ''}`}
                    style={{ animationDelay: floatDelay }}
                  >
                    <TiltCard className="h-full">
                      <div className={`h-full p-8 rounded-3xl border-2 flex flex-col justify-between transition-all ${card.bg} ${card.shadow}`}>
                        <div>
                        <div className="flex items-center justify-between mb-6">
                          <span className="px-3 py-1 rounded-full text-[10px] font-mono font-extrabold uppercase border border-current bg-white/20">
                            {card.tag}
                          </span>
                          <div className="p-3 rounded-2xl bg-white/90 border border-current shadow-sm">
                            <IconComp className={`w-7 h-7 ${card.iconColor}`} />
                          </div>
                        </div>

                        <h3 className={`text-xs font-mono font-bold uppercase opacity-80 tracking-widest ${card.headerColor || ''}`}>
                          {card.place}
                        </h3>
                        {/* 5. Animated Shimmer on Amount */}
                        <div className={`text-4xl sm:text-5xl font-serif font-extrabold my-2 ${card.amountColor || ''}`}>
                          {card.amount}
                        </div>
                        <p className="text-xs font-mono opacity-80 mb-6">
                          + SWAG & CERTIFICATES
                        </p>

                        <ul className="space-y-2.5 pt-4 border-t border-current/20 text-xs sm:text-sm font-semibold">
                          {card.perks.map((perk, i) => (
                            <li key={i} className="flex items-center gap-2 group">
                              <CheckCircle className={`w-4 h-4 flex-shrink-0 transition-transform group-hover:scale-110 ${card.headerColor || ''}`} />
                              <span className="transition-transform group-hover:translate-x-1">{perk}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        onClick={triggerConfetti}
                        className={`w-full mt-8 py-3 rounded-xl font-mono font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${card.buttonStyle}`}
                      >
                        <Sparkles className="w-4 h-4" />
                        CLAIM VICTORY
                      </button>
                    </div>
                  </TiltCard>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Interactive Mystery Perk Scratch Card */}
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto mb-12">
            <SpotlightWrapper className="p-6 sm:p-8 text-center border-2 border-purple bg-[#140e28] rounded-3xl shadow-[0_0_20px_rgba(139,92,246,0.2)]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple/20 text-purple text-xs font-mono font-bold uppercase mb-3">
                <Star className="w-3.5 h-3.5 fill-purple text-purple" />
                SPECIAL BENEFIT // SCRATCH TO REVEAL
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-lime mb-2">
                MYSTERY REWARD CARD
              </h3>
              <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto mb-6">
                Click the card below to scratch off the security layer and unlock exclusive perks for all participating teams!
              </p>

              <div className="max-w-lg mx-auto h-[250px] sm:h-[220px]">
                <ScratchCard onComplete={() => {
                  setScratchRevealed(true);
                  triggerConfetti();
                }}>
                  <div className="p-6 sm:p-8 rounded-2xl border-2 transition-all w-full h-full bg-purple-gradient text-white border-purple-light shadow-[4px_4px_0px_#ccff00] flex flex-col justify-center">
                    <motion.div
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      className="space-y-2"
                    >
                      <div className="inline-flex p-2 rounded-full bg-white text-purple">
                        <Sparkles className="w-6 h-6 fill-purple" />
                      </div>
                      <h4 className="font-serif font-extrabold text-xl sm:text-2xl text-white">
                        FREE DIGITAL CERTIFICATES & MENTORSHIP
                      </h4>
                      <p className="text-xs font-mono text-purple-light font-bold">
                        All participants who submit valid projects receive Digital Certificates & Direct Feedback from CSI TCET Mentors!
                      </p>
                    </motion.div>
                  </div>
                </ScratchCard>
              </div>
            </SpotlightWrapper>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
