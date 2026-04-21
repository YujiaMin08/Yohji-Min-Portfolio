import React from "react";
import { motion } from "motion/react";
import { GraduationCap, MapPin } from "lucide-react";

export const About = () => {
  const education = [
    {
      school: "Northwestern University",
      degree: "B.S. in Computer Science & Radio/Television/Film",
      date: "2024 - 2027",
      location: "Evanston, IL",
      details: ["Kappa Pi Beta member", "CISA President"],
      logo: "/logos/northwestern.png",
      link: "https://www.northwestern.edu/"
    },
    {
      school: "Emory University",
      degree: "B.S. in Computer Science & Film and Media",
      date: "2023 - 2024",
      location: "Oxford, GA",
      details: ["Grade: 4.0", "Emory Phi Eta Sigma member", "OCSA President"],
      logo: "/logos/emory-school.png",
      link: "https://www.emory.edu/"
    }
  ];

  return (
    <section id="about" className="pt-48 pb-24 px-6 bg-brand-paper min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Left Column: Personal Brand */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-6xl md:text-7xl font-bold text-brand-dark mb-8 leading-[1.05]">
                Turning ideas into{" "}
                <span className="italic font-normal">products</span> people
                truly need.
              </h2>
              <div className="space-y-6 text-lg md:text-xl font-light text-brand-muted leading-relaxed">
                <p>
                  I&apos;m Yohji Min, a Junior at Northwestern University
                  studying Computer Science and Radio/Television/Film. Years
                  spent living across China, Canada, and the United States have
                  given me a global lens on how people, cultures, and markets
                  actually use technology.
                </p>
                <p>
                  Across internships in traditional media, advertising, brand
                  consulting, software engineering, and AI product management,
                  I&apos;ve learned to translate between very different worlds
                  — between users and engineers, between strategy and
                  execution, between an idea and the product that ships.
                </p>
                <p>
                  My value sits in that integration of creativity, strategy,
                  and technology. In an era where the technical barriers to
                  building products keep falling, what matters most are
                  original ideas, deep user insight, and the discipline to
                  ship — and that&apos;s the kind of globally minded,
                  technically literate, creatively grounded product manager
                  I&apos;m becoming.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Academic Foundation */}
          <div className="space-y-16 lg:pt-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-[48px] p-12 border border-brand-dark/5 shadow-xl shadow-brand-dark/5"
            >
              <div className="flex items-center gap-3 text-brand-dark mb-12">
                <GraduationCap className="w-8 h-8" />
                <h3 className="text-2xl font-bold italic tracking-wide">Academic Foundation</h3>
              </div>
              
              <div className="space-y-16">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative pl-8 border-l border-brand-dark/10">
                    <div className="absolute top-0 -left-1.5 w-3 h-3 rounded-full bg-brand-dark" />
                    <div className="text-xs font-semibold text-brand-muted mb-3 tracking-[0.25em] uppercase">{edu.date}</div>
                    <div className="flex items-center gap-4 mb-2">
                      <a
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${edu.school} website`}
                        className="shrink-0 w-14 h-14 rounded-xl overflow-hidden border border-brand-dark/10 bg-white shadow-sm transition-transform hover:scale-105"
                      >
                        <img src={edu.logo} alt={`${edu.school} logo`} className="w-full h-full object-contain" />
                      </a>
                      <a
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl font-bold text-brand-dark transition-opacity hover:opacity-75"
                      >
                        {edu.school}
                      </a>
                    </div>
                    <div className="text-lg font-medium text-brand-muted">{edu.degree}</div>
                    <div className="mt-4 flex items-center gap-2 text-xs text-brand-muted font-bold tracking-widest uppercase">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </div>
                    {edu.details ? (
                      Array.isArray(edu.details) ? (
                        <div className="mt-6 space-y-1 text-brand-muted font-light leading-relaxed">
                          {edu.details.map((line, i) => (
                            <p key={i}>{line}</p>
                          ))}
                        </div>
                      ) : (
                        <p className="mt-6 text-brand-muted font-light leading-relaxed">
                          {edu.details}
                        </p>
                      )
                    ) : null}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
