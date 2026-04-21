import React, { useRef } from "react";
import { motion } from "motion/react";
import {
  ExternalLink,
  Mic2,
  BookOpen,
  Dices,
  Cat,
} from "lucide-react";

type MediaAsset =
  | { kind: "video"; src: string; poster: string }
  | { kind: "image"; src: string }
  | { kind: "placeholder"; gradient: string };

interface ProjectCardProps {
  icon: React.ComponentType<{ className?: string }>;
  date: string;
  category: string;
  title: string;
  description: string;
  tags?: string[];
  link?: string;
  media: MediaAsset;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  icon: Icon,
  date,
  category,
  title,
  description,
  tags,
  link,
  media,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play().catch(() => {});
  };
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const CardWrapper: React.ElementType = link ? "a" : "div";
  const wrapperProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <CardWrapper
        {...wrapperProps}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-brand-dark/5 bg-white shadow-sm transition-all hover:border-brand-dark/15 hover:shadow-2xl hover:shadow-brand-dark/5"
      >
        {/* Media */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-paper">
          {media.kind === "video" ? (
            <>
              <img
                src={media.poster}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                loading="lazy"
              />
              <video
                ref={videoRef}
                src={media.src}
                poster={media.poster}
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </>
          ) : media.kind === "image" ? (
            <img
              src={media.src}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div
              className={`absolute inset-0 flex items-center justify-center ${media.gradient}`}
            >
              <Icon className="h-16 w-16 text-white/80" />
            </div>
          )}

          {/* Date pill */}
          <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-dark backdrop-blur-sm">
            {date}
          </div>

          {link ? (
            <div className="absolute right-5 top-5 rounded-full bg-white/90 p-2 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
              <ExternalLink className="h-4 w-4 text-brand-dark" />
            </div>
          ) : null}
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col gap-4 p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-dark/5 text-brand-dark transition-colors group-hover:bg-brand-dark group-hover:text-white">
              <Icon className="h-5 w-5" />
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-muted">
              {category}
            </span>
          </div>

          <h3 className="text-2xl font-bold leading-tight text-brand-dark">
            {title}
          </h3>

          <p className="text-brand-muted font-light leading-relaxed">
            {description}
          </p>

          {tags && tags.length > 0 ? (
            <div className="mt-auto flex flex-wrap gap-2 pt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-brand-dark/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </CardWrapper>
    </motion.div>
  );
};

export const Projects = () => {
  const projects: ProjectCardProps[] = [
    {
      icon: BookOpen,
      date: "NOV 2025",
      category: "AI · GenUI · Education",
      title: "Axiom — Where Understanding Takes Form",
      description:
        "An AI-powered public-good learning Canvas built on GenUI. Give it a question and it generates a personalized, interactive canvas — combining an AI Planner with 12+ specialized generators for explanations, simulations, quizzes, formulas, perspectives, and more.",
      tags: ["GenUI", "AI Planner", "Next.js", "LLM Orchestration"],
      link: "https://yujiamin08.github.io/Axiomweb/",
      media: {
        kind: "video",
        src: "/projects/axiom.mp4",
        poster: "/projects/axiom.jpg",
      },
    },
    {
      icon: Cat,
      date: "JAN 2026",
      category: "Desktop AI · Agent",
      title: "Amico — A Desktop AI Companion",
      description:
        "A 3D desktop pet that lives on your screen with long-term memory, emotion states, and lightweight system tools. Unity transparent overlay + OpenClaw agent runtime lets Amico chat, react, and help with everyday tasks like opening apps, managing files, and summarizing text.",
      tags: ["Unity", "OpenClaw", "3D", "Agent Tools"],
      link: "https://github.com/YujiaMin08/Amico",
      media: {
        kind: "video",
        src: "/projects/amico.mp4",
        poster: "/projects/amico.jpg",
      },
    },
    {
      icon: Dices,
      date: "FEB 2026",
      category: "AI Games · Multiplayer",
      title: "Agora — AI Board Game Engine",
      description:
        "A platform that generates entirely new board games from a single prompt. One engine plans the rules, balances them through simulation, executes the game loop, and plays alongside humans as an intelligent participant — turning board games from fixed rule sets into a living, generative medium.",
      tags: ["LLM", "Game Design", "Multiplayer", "Simulation"],
      link: "https://github.com/YujiaMin08/agora",
      media: {
        kind: "video",
        src: "/projects/agora.mp4",
        poster: "/projects/agora.jpg",
      },
    },
    {
      icon: Mic2,
      date: "OCT 2024",
      category: "AI · Voice · IoT",
      title: "HavenLink — HackHarvard",
      description:
        "A voice-interactive IoT system built at HackHarvard to support underserved communities. Combines React, Flask, and OpenAI APIs with multi-turn voice queries so residents can access services, ask for help, and navigate information without typing.",
      tags: ["React", "Flask", "OpenAI", "HackHarvard"],
      link: "https://devpost.com/software/havenlink",
      media: {
        kind: "image",
        src: "/projects/havenlink.jpg",
      },
    },
  ];

  return (
    <section id="projects" className="relative min-h-screen px-6 pb-24 pt-48">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="text-5xl font-bold md:text-6xl">
            Selected Case Studies
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
