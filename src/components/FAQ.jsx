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
    <section id="faq" className="relative overflow-hidden bg-[#f8f8fc] py-24">
      {/* Subtle purple radial gradient wash */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.12)_0%,rgba(139,92,246,0)_70%)]" />

      {/* Very subtle floating blurred accent circles */}
      <div className="pointer-events-none absolute top-24 -left-24 h-72 w-72 rounded-full bg-[#8b5cf6] opacity-[0.08] blur-[110px]" />
      <div className="pointer-events-none absolute bottom-10 -right-16 h-80 w-80 rounded-full bg-[#06b6d4] opacity-[0.06] blur-[110px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#8b5cf6]/25 text-[#8b5cf6] text-xs font-bold uppercase tracking-widest shadow-sm">
            <Sparkles className="w-4 h-4 text-[#ccff00]" style={{ filter: "drop-shadow(0 0 4px rgba(204,255,0,0.5))" }} />
            Frequently Asked Questions
          </div>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-[#0f0f15] leading-tight">
            Got Questions?
            <br />
            <span className="text-[#8b5cf6]">We've Got Answers.</span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-[#5b6070] text-base md:text-lg leading-relaxed">
            Everything you need to know before participating in{" "}
            <span className="text-[#8b5cf6] font-semibold">CodeRush 1.0</span>.
            Still have questions? Reach out to our organizing team anytime.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                key={index}
                className={`group rounded-[28px] border bg-white/80 backdrop-blur-xl transition-all duration-500 overflow-hidden ${
                  isOpen
                    ? "border-[#8b5cf6]/60 shadow-[0_20px_50px_-12px_rgba(139,92,246,0.22)] -translate-y-0.5"
                    : "border-[#e6e3f5] shadow-[0_1px_2px_rgba(15,15,21,0.04)] hover:border-[#8b5cf6]/40 hover:shadow-[0_16px_40px_-16px_rgba(139,92,246,0.22)] hover:-translate-y-0.5"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full px-8 py-7 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-5">
                    <div
                      className={`h-12 w-12 rounded-2xl flex items-center justify-center font-bold transition-all duration-300 ${
                        isOpen
                          ? "bg-[#8b5cf6] text-white"
                          : "bg-[#f4f1ff] text-[#8b5cf6] group-hover:bg-[#8b5cf6] group-hover:text-white"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <h3
                        className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                          isOpen ? "text-[#0f0f15]" : "text-[#0f0f15]/90 group-hover:text-[#0f0f15]"
                        }`}
                      >
                        {faq.q}
                      </h3>
                      <p className="text-sm text-[#7b8090] mt-1">Click to view answer</p>
                    </div>
                  </div>

                  <div
                    className={`h-11 w-11 shrink-0 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isOpen ? "bg-[#8b5cf6] rotate-180" : "bg-[#f4f1ff] group-hover:bg-[#8b5cf6]/10"
                    }`}
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-colors duration-300 ${
                        isOpen ? "text-white" : "text-[#8b5cf6]"
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-8 pb-8 pt-2 border-t border-[#e6e3f5]">
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          <HelpCircle className="w-5 h-5 text-[#06b6d4]" />
                        </div>
                        <p className="text-[#4b5563] leading-8 text-base">{faq.a}</p>
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
