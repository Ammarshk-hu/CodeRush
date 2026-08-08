import React, { useState } from "react";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";

const faqs = [
  {
    q: "Who can participate in CodeRush 1.0?",
    a: "Any college student from any branch or academic year across India. Both individuals and teams of up to 4 members are welcome.",
  },
  {
    q: "What is the team size for CodeRush 1.0?",
    a: "Teams can have 1 to 4 members. Solo participation is also allowed.",
  },
  {
    q: "Is there a registration fee?",
    a: "Registration details and fee structures are listed on the official Unstop portal. Check the Payment section for updates.",
  },
  {
    q: "Do I need prior coding experience?",
    a: "Not necessarily! CodeRush 1.0 includes dedicated Ideathon and UI/UX design tracks where coding is minimal. All skill levels are welcome.",
  },
  {
    q: "Is the event online or offline?",
    a: "CodeRush 1.0 is organized by CSI TCET (Dept of Computer Engineering). Official mode and venue details are updated on the portal.",
  },
  {
    q: "What do I need to submit at the end of 12 hours?",
    a: "A live demo link, Figma prototype, or presentation deck along with a brief project summary and GitHub repo link (if applicable).",
  },
  {
    q: "Can I use pre-built templates or open-source code?",
    a: "You can use open-source libraries and frameworks, but the core solution must be created during the event. Submitting full pre-built templates is prohibited.",
  },
  {
    q: "Will mentors be available during the event?",
    a: "Yes, mentors will be available during the hackathon for guidance, reviews, and technical feedback.",
  },
  {
    q: "How will projects be judged?",
    a: "Projects are evaluated on Innovation, UI/UX, Feasibility, Presentation and Real-world Impact.",
  },
  {
    q: "Where do I register?",
    a: 'Click the "Register Now" button available on the website.',
  },
  {
    q: "What if a team member drops out mid-event?",
    a: "The remaining members may continue after informing the organizers.",
  },
  {
    q: "Will participation certificates be provided?",
    a: "Yes! Every eligible participant will receive an official participation certificate.",
  },
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section id="faq" className="relative overflow-hidden bg-[#f8f8fc] py-16 md:py-20">
      {/* Subtle purple radial gradient wash */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.12)_0%,rgba(139,92,246,0)_70%)]" />

      {/* Very subtle floating blurred accent circles */}
      <div className="pointer-events-none absolute top-24 -left-24 h-72 w-72 rounded-full bg-[#8b5cf6] opacity-[0.08] blur-[110px]" />
      <div className="pointer-events-none absolute bottom-10 -right-16 h-80 w-80 rounded-full bg-[#06b6d4] opacity-[0.06] blur-[110px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#8b5cf6]/25 text-[#8b5cf6] text-xs font-bold uppercase tracking-widest shadow-sm">
            <Sparkles className="w-4 h-4 text-[#ccff00]" style={{ filter: "drop-shadow(0 0 4px rgba(204,255,0,0.5))" }} />
            Frequently Asked Questions
          </div>

          <h2 className="mt-4 text-3xl md:text-5xl font-black text-[#0f0f15] leading-tight">
            Got Questions?
            <br />
            <span className="text-[#8b5cf6]">We've Got Answers.</span>
          </h2>

          <p className="mt-3 max-w-lg mx-auto text-[#5b6070] text-sm md:text-base leading-relaxed">
            Everything you need to know before participating in{" "}
            <span className="text-[#8b5cf6] font-semibold">CodeRush 1.0</span>.
          </p>
        </div>

        <div className="space-y-3.5 max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                key={index}
                className={`group rounded-2xl border bg-white/90 backdrop-blur-xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#8b5cf6]/60 shadow-[0_12px_30px_-8px_rgba(139,92,246,0.18)]"
                    : "border-[#e6e3f5] shadow-sm hover:border-[#8b5cf6]/40 hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full px-5 sm:px-6 py-4 flex items-center justify-between text-left gap-4"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`h-9 w-9 rounded-xl flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 shrink-0 ${
                        isOpen
                          ? "bg-[#8b5cf6] text-white"
                          : "bg-[#f4f1ff] text-[#8b5cf6] group-hover:bg-[#8b5cf6] group-hover:text-white"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3
                      className={`text-sm sm:text-base font-bold transition-colors duration-300 ${
                        isOpen ? "text-[#0f0f15]" : "text-[#0f0f15]/90 group-hover:text-[#8b5cf6]"
                      }`}
                    >
                      {faq.q}
                    </h3>
                  </div>

                  <div
                    className={`h-8 w-8 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? "bg-[#8b5cf6] rotate-180" : "bg-[#f4f1ff] group-hover:bg-[#8b5cf6]/10"
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-colors duration-300 ${
                        isOpen ? "text-white" : "text-[#8b5cf6]"
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-4 pt-2 border-t border-[#e6e3f5]">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5">
                          <HelpCircle className="w-4 h-4 text-[#06b6d4] shrink-0" />
                        </div>
                        <p className="text-[#4b5563] leading-relaxed text-xs sm:text-sm">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
