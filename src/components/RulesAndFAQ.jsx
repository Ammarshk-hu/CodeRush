import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ShieldCheck, Zap, CreditCard, Users, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RulesAndFAQ() {
  const [openFaq, setOpenFaq] = useState(0);

  const rules = [
    'Maintain professional and respectful behavior toward all participants and organizers.',
    'Use of offensive, harmful, or inappropriate content is strictly prohibited.',
    'All submissions must be original work created during the 12-hour event duration.',
    'Plagiarism or copying complete external projects leads to immediate disqualification.',
    'Only registered members can be part of a team (team size: 1 to 4 members).',
    'Collaboration is allowed only within the same registered team.',
    'Teams with incomplete or inaccessible repository links may be disqualified.',
    'AI-generated content must be disclosed and should not form the entire submission.',
    'All team members must be present during the demo/presentation round.'
  ];

  const eligibility = [
    'Open to all college students and aspiring developers/designers across India.',
    'Students from ALL branches are welcome (CSE, IT, EXTC, Mechanical, Civil, etc.).',
    'Open to ALL academic years (First year to Final year).',
    'Both solo participants and teams up to 4 members can register.'
  ];

  const faqs = [
    {
      q: 'Who can participate in CodeRush 1.0?',
      a: 'Any college student from any branch or academic year across India. Both individuals and teams of up to 4 members are welcome.'
    },
    {
      q: 'What is the team size for CodeRush 1.0?',
      a: 'Teams can have 1 to 4 members. Solo participation is also allowed.'
    },
    {
      q: 'Is there a registration fee?',
      a: 'Registration details and fee structures are listed on the official Unstop portal. Check the Payment section for updates.'
    },
    {
      q: 'Do I need prior coding experience?',
      a: 'Not necessarily! CodeRush 1.0 includes dedicated Ideathon and UI/UX design tracks where coding is minimal. All skill levels are welcome.'
    },
    {
      q: 'Is the event online or offline?',
      a: 'CodeRush 1.0 is organized by CSI TCET (Dept of Computer Engineering). Official mode and venue details are updated on the portal.'
    },
    {
      q: 'What do I need to submit at the end of 12 hours?',
      a: 'A live demo link, Figma prototype, or presentation deck along with a brief project summary and GitHub repo link (if applicable).'
    },
    {
      q: 'Can I use pre-built templates or open-source code?',
      a: 'You can use open-source libraries and frameworks, but the core solution must be created during the event. Submitting full pre-built templates is prohibited.'
    },
    {
      q: 'Will mentors be available during the event?',
      a: 'Yes, mentors will be available during the hackathon for guidance, reviews, and technical feedback.'
    },
    {
      q: 'How will projects be judged?',
      a: 'Projects are evaluated on 5 key criteria: Innovation & Creativity, Design Quality (UI/UX), Feasibility, Presentation, and Real-world Impact.'
    },
    {
      q: 'Where do I register?',
      a: 'Click the "Register Now" button in the navigation bar to sign up directly on the official registration portal.'
    },
    {
      q: 'What if a team member drops out mid-event?',
      a: 'The remaining team members can still continue. Notify the CSI TCET organizers immediately in such cases.'
    },
    {
      q: 'Will participation certificates be provided?',
      a: 'Yes! All registered participants who submit valid projects will receive an official Digital Participation Certificate from CSI TCET.'
    }
  ];

  const triggerRegisterConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#8b5cf6', '#06b6d4', '#ccff00', '#ffffff']
    });
  };

  return (
    <section id="rules" className="py-20 md:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-light/20 text-purple font-mono text-xs font-bold uppercase border border-purple/30">
            <ShieldCheck className="w-3.5 h-3.5 text-purple" />
            PROTOCOL & FAQ
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold tracking-tight text-graphite">
            RULES & <span className="purple-highlight">BRIEFING</span>
          </h2>
          <p className="text-base sm:text-lg font-medium text-graphite/70">
            Review event guidelines, eligibility criteria, payment info, and frequently asked questions.
          </p>
        </div>

        {/* 2-Column Rules & Eligibility */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Rules Card */}
          <div className="codefusion-card p-8 bg-white/90 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-[#e2e2f0]">
              <ShieldCheck className="w-6 h-6 text-purple" />
              <h3 className="text-2xl font-serif font-bold text-graphite">
                RULES AND GUIDELINES
              </h3>
            </div>
            <ul className="space-y-3">
              {rules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-graphite/80 font-medium">
                  <span className="w-5 h-5 rounded-full bg-purple text-white font-mono font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    {idx + 1}
                  </span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Eligibility & Payment Card */}
          <div className="space-y-8">
            <div className="codefusion-card p-8 bg-white/90 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#e2e2f0]">
                <Users className="w-6 h-6 text-purple" />
                <h3 className="text-2xl font-serif font-bold text-graphite">
                  ELIGIBILITY CRITERIA
                </h3>
              </div>
              <ul className="space-y-3">
                {eligibility.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-graphite/80 font-medium">
                    <CheckCircle className="w-5 h-5 text-purple flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Payment Section */}
            <div id="payment" className="ulearn-card-dark p-8 relative overflow-hidden bg-graphite border-2 border-purple">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-purple text-white border border-purple-light">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-xl">REGISTRATION FEE</h4>
                  <p className="text-xs font-mono text-gray-400">OFFICIAL PAYMENT PORTAL</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
                Registration is processed securely via the Unstop platform. Confirm your team details and complete registration to receive your digital admit ticket pass.
              </p>

              <div id="register" className="pt-2">
                <a
                  href="https://unstop.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={triggerRegisterConfetti}
                  className="w-full py-3.5 rounded-full bg-purple-gradient text-white font-mono font-extrabold text-xs border border-purple-light shadow-[0_4px_20px_rgba(139,92,246,0.5)] hover:shadow-none transition-all flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4 fill-white" />
                  PROCEED TO UNSTOP REGISTRATION
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div id="faq" className="max-w-4xl mx-auto pt-8">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-serif font-bold text-graphite">
              FREQUENTLY ASKED QUESTIONS
            </h3>
            <p className="text-xs font-mono text-gray-500 mt-1 uppercase font-bold">
              CLICK ANY QUESTION TO EXPAND ANSWER
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="codefusion-card overflow-hidden transition-all bg-white/90"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-graphite hover:text-purple transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-purple font-bold">
                        Q{idx + 1}.
                      </span>
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-purple flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-purple fill-purple/20' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-graphite/80 leading-relaxed border-t border-[#e2e2f0] pt-4 bg-[#f8f8fc]/80 font-medium">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
