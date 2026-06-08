import React from "react";
import { motion } from "motion/react";
import { ExternalLink, FileUser, MapPin } from "lucide-react";

interface ExperiencePreviewCardProps {
  href: string;
  hostLine: string;
  title: string;
  body: string;
  /** Local asset under /public or absolute remote URL */
  thumbSrc: string;
  /** Optional fallback when thumbSrc is remote and fails */
  thumbFallbackSrc?: string;
  align: "start" | "end";
}

const ExperiencePreviewCard: React.FC<ExperiencePreviewCardProps> = ({
  href,
  hostLine,
  title,
  body,
  thumbSrc,
  thumbFallbackSrc,
  align,
}) => {
  const justify = align === "end" ? "lg:justify-end" : "lg:justify-start";

  return (
    <div className={`flex w-full not-italic lg:max-w-xl ${justify}`}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full max-w-md text-left no-underline transition-opacity hover:opacity-95 lg:max-w-lg"
      >
        <article className="overflow-hidden rounded-2xl border border-brand-dark/10 bg-white shadow-lg shadow-brand-dark/[0.06]">
          <div className="flex items-center gap-2.5 border-b border-brand-dark/5 px-3 py-2.5">
            <img
              src={thumbSrc}
              alt=""
              className="h-8 w-8 shrink-0 rounded-lg border border-brand-dark/5 bg-white object-contain p-0.5"
              width={32}
              height={32}
              loading="lazy"
              onError={
                thumbFallbackSrc
                  ? (e) => {
                      const el = e.target as HTMLImageElement;
                      if (el.src !== thumbFallbackSrc) el.src = thumbFallbackSrc;
                    }
                  : undefined
              }
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-semibold uppercase tracking-widest text-brand-muted">
                {hostLine}
              </p>
            </div>
            <ExternalLink className="h-4 w-4 shrink-0 text-brand-muted" aria-hidden />
          </div>
          <div className="space-y-1 px-3 py-3">
            <h4 className="text-base font-bold text-brand-dark">{title}</h4>
            <p className="text-sm font-light leading-relaxed text-brand-muted">{body}</p>
          </div>
        </article>
      </a>
    </div>
  );
};

interface ExperienceItemProps {
  date: string;
  role: string;
  company: string;
  description: React.ReactNode;
  link: string;
  logo: string;
  location?: string;
  /** When `company` is abbreviated (e.g. city only), use for logo `alt` text */
  logoAlt?: string;
  isFirst?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps & { index: number }> = ({
  date,
  role,
  company,
  description,
  link,
  logo,
  location,
  logoAlt,
  index,
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`relative mb-14 last:mb-0 w-full flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-14`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {/* Content Side */}
      <div className={`flex-1 w-full flex ${isEven ? "lg:justify-end" : "lg:justify-start"}`}>
        <div className={`w-full max-w-xl space-y-4 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
          <div className="space-y-2">
            <div className="text-xs font-semibold tracking-[0.25em] text-brand-muted uppercase">
              {date}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight leading-tight">
              {role}
            </h3>
            <div>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link relative inline-block text-lg font-light text-brand-muted transition-colors hover:text-brand-dark md:text-xl"
              >
                <span>@ {company}</span>
                <ExternalLink
                  className={`pointer-events-none absolute top-1/2 h-4 w-4 -translate-y-1/2 opacity-0 transition-opacity group-hover/link:opacity-100 ${isEven ? "left-full ml-2 lg:left-auto lg:right-full lg:ml-0 lg:mr-2" : "left-full ml-2"}`}
                />
              </a>
            </div>
            {location ? (
              <div>
                <span className="relative inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-brand-muted opacity-60">
                  <MapPin
                    className={`absolute top-1/2 h-3 w-3 -translate-y-1/2 ${isEven ? "left-full ml-1.5 lg:left-auto lg:right-full lg:ml-0 lg:mr-1.5" : "left-full ml-1.5"}`}
                  />
                  {location}
                </span>
              </div>
            ) : null}
          </div>
          <div className="text-brand-muted leading-relaxed font-light text-lg whitespace-pre-line">
            {description}
          </div>
        </div>
      </div>

      {/* Visual Side (Logo/Center) */}
      <div className="relative flex items-center justify-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 block h-[5.5rem] w-[5.5rem] overflow-hidden rounded-[1.75rem] border-[6px] border-brand-paper shadow-2xl md:h-28 md:w-28"
        >
          <img
            src={logo}
            alt={logoAlt ?? company}
            className="h-full w-full object-cover"
            onError={(e) => {
              const el = e.target as HTMLImageElement;
              const fallback = `https://www.google.com/s2/favicons?domain=${new URL(link).hostname}&sz=128`;
              if (el.src !== fallback) el.src = fallback;
            }}
          />
        </a>
        <div className="absolute left-1/2 top-1/2 -z-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-dark/[0.03] blur-3xl" />
      </div>

      {/* Spacer for the other side */}
      <div className="hidden flex-1 lg:block" />
    </motion.div>
  );
};

type ExperienceRow = {
  date: string;
  role: string;
  company: string;
  link: string;
  logo: string;
  location?: string;
  logoAlt?: string;
  preview: Omit<ExperiencePreviewCardProps, "align">;
};

const EXPERIENCE_ROWS: ExperienceRow[] = [
  {
    date: "JUN 2026 - PRESENT",
    role: "AI Product Manager",
    company: "TikTok - Platform Responsibility",
    link: "https://www.tiktok.com/",
    logo: "/logos/tiktok.png",
    location: "San José, CA",
    preview: {
      href: "https://www.tiktok.com/",
      hostLine: "tiktok.com",
      title: "TikTok",
      body: "Global short-video platform — product work on platform responsibility, safety, and trust across the ecosystem.",
      thumbSrc: "/logos/tiktok.png",
    },
  },
  {
    date: "OCT 2025 - MAR 2026",
    role: "One Person Entrepreneur",
    company: "Microsoft AI",
    link: "https://copilot.microsoft.com/labs",
    logo: "/logos/mai.png",
    location: "Beijing / Redmond",
    preview: {
      href: "https://copilot.microsoft.com/labs",
      hostLine: "copilot.microsoft.com/labs",
      title: "Copilot Labs",
      body: "Discover experimental AI initiatives — previews of new Copilot experiences before they ship broadly.",
      thumbSrc: "https://copilot.microsoft.com/favicon.ico",
      thumbFallbackSrc: "https://www.microsoft.com/favicon.ico",
    },
  },
  {
    date: "JUL 2025 - SEP 2025",
    role: "AI Product Manager",
    company: "Bytedance - Flow",
    link: "https://label.bytedance.com/",
    logo: "/logos/bytedance.png",
    location: "Beijing, China",
    preview: {
      href: "https://label.bytedance.com/",
      hostLine: "label.bytedance.com",
      title: "Label Platform",
      body: "Enterprise labeling workspace for datasets, quality review, and human-in-the-loop workflows that feed model training and shipping.",
      thumbSrc: "/logos/bytedance.png",
    },
  },
  {
    date: "SEP 2024 - FEB 2025",
    role: "AI Product Manager",
    company: "Starward Game Studios",
    link: "https://starwardgames.com/",
    logo: "/logos/starward.png",
    location: "Mountain View, CA",
    preview: {
      href: "https://starwardgames.com/",
      hostLine: "starwardgames.com",
      title: "Starward Assembler",
      body: "AI-native game builder: from natural language prompts to assembled projects, automated QA, and playable prototypes.",
      thumbSrc: "/logos/starward.png",
    },
  },
  {
    date: "MAY 2024 - SEP 2024",
    role: "AI Product Manager",
    company: "ByteDance - Seed (AILab)",
    link: "https://dreamina.ai",
    logo: "/logos/dreamina.png",
    location: "Shanghai, China",
    preview: {
      href: "https://dreamina.ai/",
      hostLine: "dreamina.ai",
      title: "Dreamina",
      body: "All-in-one AI creative suite — image and video generation, canvas editing, and inspiration workflows for designers and creators.",
      thumbSrc: "/logos/dreamina.png",
    },
  },
  {
    date: "AUG 2023 - JUN 2024",
    role: "Organic Farming Specialist",
    company: "Oxford College Farm",
    link: "https://oxford.emory.edu/academics/organic_farm.html",
    logo: "/logos/emory.png",
    location: "Oxford, GA",
    preview: {
      href: "https://oxford.emory.edu/academics/organic_farm.html",
      hostLine: "oxford.emory.edu",
      title: "Oxford College Organic Farm",
      body: "Emory Oxford’s student-run organic farm — hands-on growing, harvest, and campus food systems tied to sustainability coursework.",
      thumbSrc: "/logos/emory.png",
    },
  },
  {
    date: "NOV 2023 - APR 2024",
    role: "Brand Analyst",
    company: "Ylab Brand Consulting Company",
    link: "https://www.ylabconsultancy.com/",
    logo: "/logos/ylab.png",
    location: "Shanghai, China",
    preview: {
      href: "https://www.ylabconsultancy.com/",
      hostLine: "ylabconsultancy.com",
      title: "Ylab Consultancy",
      body: "Next-generation brand strategy — youth culture research, local insight, and implementation for domestic and global clients.",
      thumbSrc: "/logos/ylab.png",
    },
  },
  {
    date: "JUL 2023 - AUG 2023",
    role: "Account Executive",
    company: "Ogilvy",
    link: "https://www.ogilvy.com/",
    logo: "/logos/ogilvy.png",
    location: "Shanghai, China",
    preview: {
      href: "https://www.ogilvy.com/",
      hostLine: "ogilvy.com",
      title: "Ogilvy",
      body: "Global creative network — brand strategy, advertising, PR, and experience design for the world's most ambitious brands.",
      thumbSrc: "/logos/ogilvy.png",
    },
  },
  {
    date: "SEP 2021 - JUN 2023",
    role: "Radio Production Associate",
    company: "Vancouver Chinese Radio",
    link: "https://www.chineseradiovancouver.com/",
    logo: "/logos/vcr.png",
    location: "Richmond, Canada",
    preview: {
      href: "https://www.chineseradiovancouver.com/",
      hostLine: "chineseradiovancouver.com",
      title: "Vancouver Chinese Radio",
      body: "Chinese-language broadcast media serving Metro Vancouver — news, culture, and community programming.",
      thumbSrc: "/logos/vcr.png",
    },
  },
  {
    date: "MAY 2021 - SEP 2021",
    role: "Social Media Specialist",
    company: "Keo Technology Group",
    link: "https://www.linkedin.com/company/keo-plus-ai/",
    logo: "/logos/keo.png",
    location: "Shanghai, China",
    preview: {
      href: "https://www.linkedin.com/company/keo-plus-ai/",
      hostLine: "linkedin.com/company/keo-plus-ai",
      title: "Keo Technology Group",
      body: "Official LinkedIn hub for company updates, product beats, and community around Keo’s AI and consumer offerings.",
      thumbSrc: "/logos/keo.png",
    },
  },
];

export const Experience = () => {
  const experiences = EXPERIENCE_ROWS.map((row, i) => {
    const { preview, ...rest } = row;
    return {
      ...rest,
      description: (
        <ExperiencePreviewCard
          align={i % 2 === 0 ? "end" : "start"}
          {...preview}
        />
      ),
    };
  });

  return (
    <section id="experience" className="relative min-h-screen overflow-hidden bg-brand-paper px-6 pb-32 pt-36 md:pt-40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:mb-20"
        >
          <h2 className="mb-4 text-6xl font-bold italic tracking-tighter text-brand-dark md:mb-5 md:text-7xl lg:text-8xl">
            Internship Experience
          </h2>
          <div className="mx-auto mb-10 h-1 w-24 bg-brand-dark/10" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap items-center justify-center gap-5"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="Resume"
              aria-label="Open resume"
              className="rounded-full border border-brand-dark/10 p-3 text-brand-muted shadow-sm transition-all hover:border-brand-dark/30 hover:bg-white hover:text-brand-dark"
            >
              <FileUser className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>

        <div className="relative space-y-12 md:space-y-14 lg:space-y-16">
          {/* Background Center Line — scoped to the timeline only */}
          <div className="pointer-events-none absolute -top-4 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-brand-dark/5 lg:block" />
          {experiences.map((exp, i) => (
            <ExperienceItem key={i} index={i} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};
