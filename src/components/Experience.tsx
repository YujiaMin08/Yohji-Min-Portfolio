import React from "react";
import { motion } from "motion/react";
import { ExternalLink, GraduationCap, MapPin } from "lucide-react";

interface ExperienceItemProps {
  date: string;
  role: string;
  company: string;
  description: string;
  link: string;
  logo: string;
  location?: string;
  /** When `company` is abbreviated (e.g. city only), use for logo `alt` text */
  logoAlt?: string;
  isFirst?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps & { index: number }> = ({ date, role, company, description, link, logo, location, logoAlt, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      className={`relative mb-24 last:mb-0 w-full flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Content Side */}
      <div className={`flex-1 w-full flex ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
        <div className={`w-full max-w-xl space-y-6 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
          <div className="space-y-3">
            <div className="text-xs font-semibold tracking-[0.25em] text-brand-muted uppercase">
              {date}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight leading-tight">
              {role}
            </h3>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-lg md:text-xl text-brand-muted font-light hover:text-brand-dark transition-colors inline-flex items-center gap-2 group/link ${isEven ? 'lg:flex-row-reverse' : ''}`}
            >
              <ExternalLink className="w-4 h-4 shrink-0 opacity-0 transition-opacity group-hover/link:opacity-100" />
              <span>@ {company}</span>
            </a>
            {location ? (
              <div className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-brand-muted opacity-60 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                <MapPin className="w-3 h-3 shrink-0" />
                <span>{location}</span>
              </div>
            ) : null}
          </div>
          <p className="text-brand-muted leading-relaxed font-light text-lg whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>

      {/* Visual Side (Logo/Center) */}
      <div className="relative flex items-center justify-center">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative z-10 block w-24 h-24 md:w-32 md:h-32 rounded-[2rem] overflow-hidden border-8 border-brand-paper shadow-2xl"
        >
          <img src={logo} alt={logoAlt ?? company} className="w-full h-full object-cover" />
        </a>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-dark/[0.03] rounded-full blur-3xl -z-0" />
      </div>

      {/* Spacer for the other side */}
      <div className="flex-1 hidden lg:block" />
    </motion.div>
  );
};

export const Experience = () => {
  const experiences = [
    {
      date: "OCT 2025 - MAR 2026",
      role: "One Person Entrepreneur",
      company: "Microsoft AI",
      link: "https://microsoft.ai/",
      logo: "/logos/mai.png",
      location: "Beijing / Redmond",
      description: "Defining product vision and PRDs for context-aware dialog and immersive scenarios. Built full-stack MVP via Vibe Coding, integrating multi-modal GenUI patterns and end-to-end LLM workflows."
    },
    {
      date: "JUL 2025 - SEP 2025",
      role: "AI Product Manager",
      company: "Bytedance - Flow (AIDP)",
      link: "https://www.bytedance.com",
      logo: "/logos/bytedance.png",
      location: "Beijing, China",
      description: "Led AI upgrades for digital human generation, increasing course output by 367%. Developed LabelGPT Agent to automate transcript generation and segmentation with 65% increase in efficiency."
    },
    {
      date: "SEP 2024 - FEB 2025",
      role: "AI Product Manager",
      company: "Starward Game Studios",
      link: "https://starwardgames.com/",
      logo: "/logos/starward.png",
      location: "Mountain View, CA",
      description: "Optimized Node.js/WebSocket backend, increasing matching success by 15%. Built intelligent AI characters with Inworld Studio, achieving 40% increase in dialogue engagement."
    },
    {
      date: "MAY 2024 - SEP 2024",
      role: "AI Product Manager",
      company: "ByteDance - Seed(AILab) - dreamina.ai",
      link: "https://dreamina.ai",
      logo: "/logos/dreamina.png",
      location: "Shanghai, China",
      description: "Developed Python automation for 600k hours of video data collection. Optimized model video generation adoption by 23% through user behavior analysis and label structure reorganization."
    },
    {
      date: "AUG 2023 - JUN 2024",
      role: "Organic Farming Specialist",
      company: "Oxford College Farm",
      link: "https://oxford.emory.edu/academics/organic_farm.html",
      logo: "/logos/emory.png",
      location: "Oxford, GA",
      description: "Responsible for greenhouse construction, seed planting, fertilization, weed control, vegetable harvesting, cleaning, distribution, and sales, ensuring high-quality vegetable production."
    },
    {
      date: "NOV 2023 - APR 2024",
      role: "Brand Analyst",
      company: "Ylab Brand Consulting Company",
      link: "https://www.ylabconsultancy.com/",
      logo: "/logos/ylab.png",
      location: "Shanghai, China",
      description: "Research on Post-2000 Generation Societal Trends. Explored structural changes in life meaning and identity values. Used AI software to create promotional materials.\nAuthored analytical reports to support client business development."
    },
    {
      date: "SEP 2021 - JUN 2023",
      role: "Radio Production Associate",
      company: "Vancouver Chinese Radio",
      link: "http://www.chineseradiovancouver.com/",
      logo: "/logos/vcr.png",
      location: "Richmond, Canada",
      description: "Post-Production: Utilized Adobe Audition for refining post-production audio and Adobe Premiere for rough editing of video content."
    },
    {
      date: "MAY 2021 - SEP 2021",
      role: "Social Media Specialist",
      company: "Keo Technology Group",
      link: "https://www.linkedin.com/company/keo-plus-ai/posts/?feedView=all",
      logo: "/logos/keo.png",
      location: "Shanghai, China",
      description: "Event Planning: Spearheaded online events for company products. Growing total fan base across platforms to 50,000."
    }
  ];

  return (
    <section id="experience" className="pt-48 pb-48 px-6 bg-brand-paper min-h-screen relative overflow-hidden">
      {/* Background Center Line */}
      <div className="absolute left-1/2 top-48 bottom-48 w-px bg-brand-dark/5 hidden lg:block" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h2 className="text-7xl md:text-8xl font-bold text-brand-dark mb-6 tracking-tighter italic">Internship Experience</h2>
          <div className="w-24 h-1 bg-brand-dark/10 mx-auto" />
        </motion.div>

        <div className="space-y-32">
          {experiences.map((exp, i) => (
            <ExperienceItem 
              key={i} 
              index={i}
              {...exp}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
