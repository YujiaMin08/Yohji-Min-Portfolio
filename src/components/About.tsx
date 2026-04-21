import React from "react";
import { motion } from "motion/react";
import { GraduationCap, MapPin, Sparkles, BookOpen, Target } from "lucide-react";

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

  const highlights = [
    { icon: Sparkles, title: "AI Vision", text: "Passionate about transforming LLM capabilities into intuitive products." },
    { icon: BookOpen, title: "Storytelling", text: "Bridging the gap between technical complexity and emotional narrative." },
    { icon: Target, title: "Product Mindset", text: "Focused on user-centric design and data-driven decision making." },
  ];

  return (
    <section id="about" className="pt-48 pb-24 px-6 bg-brand-paper min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Left Column: Personal Brand */}
          <div className="space-y-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-7xl font-bold text-brand-dark mb-8 leading-tight">
                Synthesizing <span className="italic font-normal">Technology</span> & Art.
              </h2>
              <div className="space-y-6 text-xl font-light text-brand-muted leading-relaxed">
                <p>
                  I'm Yohji Min, a Junior at Northwestern University with a dual
                  focus in Computer Science and Radio/Television/Film. The mix
                  lets me approach AI product building with both technical
                  rigor and creative empathy.
                </p>
                <p>
                  From shipping GenUI learning canvases and desktop AI
                  companions at Microsoft AI, to scaling video generation and
                  data platforms at ByteDance, I like making tools that feel
                  a little bit magic to the people who use them.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {highlights.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="space-y-4 p-6 rounded-3xl bg-white border border-brand-dark/5 shadow-sm"
                >
                  <item.icon className="w-6 h-6 text-brand-dark" />
                  <h4 className="font-bold text-sm uppercase tracking-widest">{item.title}</h4>
                  <p className="text-xs text-brand-muted leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
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
