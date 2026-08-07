import React from "react";
import { User, Phone } from "lucide-react";


const contacts = [
  {
    name: "Jay Kakadiya",
    role: "Chairperson",
    phone: "+91 96191 86578",
  },
  {
    name: "Stuti Asopa",
    role: "Vice - Chairperson",
    phone: "+91 99872 50555",
  },
  {
    name: "Ved Patil",
    role: "Event Manager",
    phone: "+91 77150 28637",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-[#f8f9ff] to-[#eef2ff] py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 left-0 w-96 h-96 bg-violet-300/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-300/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.4em] font-bold text-[#7c5cff]">
  GET IN TOUCH
</p>

<h2 className="mt-4 text-6xl md:text-7xl font-black tracking-tight text-[#111827]">
  Contact Us
</h2>

<p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
  Have questions about registrations, payments or the event?
  Our organizing team is always happy to help.
</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {contacts.map((person, index) => (
            <div
              key={index}
              className="group rounded-3xl bg-white border border-gray-200 p-8 text-center shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <div className="mx-auto w-16 h-16 rounded-full bg-violet-100 flex items-center justify-center">

                <User className="w-8 h-8 text-[#7c5cff]" />

              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {person.name}
              </h3>

              <p className="text-gray-500 mt-1">
                {person.role}
              </p>

              <div className="w-full h-px bg-gray-200 my-6"></div>

              <a
                href={`tel:${person.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7c5cff] px-6 py-3 text-white font-semibold hover:bg-[#6846ff] transition-all"
              >
                <Phone className="w-5 h-5" />
                {person.phone}
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}