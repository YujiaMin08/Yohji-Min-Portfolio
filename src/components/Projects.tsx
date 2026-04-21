import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ExternalLink,
  Mic2,
  BookOpen,
  Dices,
  Cat,
  Play,
  X,
} from "lucide-react";

type MediaAsset =
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
  /** Local mp4 path to play in an in-page modal. */
  demoVideo?: string;
  /** External URL to open in a new tab when the demo button is clicked. */
  demoLink?: string;
  onPlayDemo?: (video: string, title: string) => void;
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
  demoVideo,
  demoLink,
  onPlayDemo,
}) => {
  const CardWrapper: React.ElementType = link ? "a" : "div";
  const wrapperProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  const hasDemo = Boolean(demoVideo || demoLink);

  const handlePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (demoVideo) {
      onPlayDemo?.(demoVideo, title);
    } else if (demoLink) {
      window.open(demoLink, "_blank", "noopener,noreferrer");
    }
  };

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
        className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-brand-dark/5 bg-white shadow-sm transition-all hover:border-brand-dark/15 hover:shadow-2xl hover:shadow-brand-dark/5"
      >
        {/* Media */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-brand-paper">
          {media.kind === "image" ? (
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

          {/* Top-right external link hint */}
          {link ? (
            <div className="absolute right-5 top-5 rounded-full bg-white/90 p-2 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
              <ExternalLink className="h-4 w-4 text-brand-dark" />
            </div>
          ) : null}

          {/* Play demo button */}
          {hasDemo ? (
            <button
              type="button"
              onClick={handlePlayClick}
              aria-label={`Play ${title} demo video`}
              className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark shadow-md backdrop-blur-sm transition-all hover:bg-white hover:scale-105"
            >
              <Play className="h-3.5 w-3.5 fill-brand-dark" />
              Watch Demo
            </button>
          ) : null}
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col gap-3 p-7">
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

interface VideoModalProps {
  video: string | null;
  title: string;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ video, title, onClose }) => {
  useEffect(() => {
    if (!video) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [video, onClose]);

  return (
    <AnimatePresence>
      {video ? (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} demo video`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-5xl overflow-hidden rounded-[24px] bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={video}
              autoPlay
              controls
              playsInline
              className="block h-auto w-full bg-black"
            />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close demo video"
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-brand-dark shadow-md transition-transform hover:scale-105"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export const Projects = () => {
  const projects: Omit<ProjectCardProps, "onPlayDemo">[] = [
    {
      icon: BookOpen,
      date: "NOV 2025",
      category: "AI · GenUI · Education",
      title: "Axiom — Where Understanding Takes Form",
      description:
        "An AI-powered public-good learning Canvas built on GenUI. Give it a question and it generates a personalized, interactive canvas — combining an AI Planner with 12+ specialized generators for explanations, simulations, quizzes, formulas, perspectives, and more.",
      tags: ["GenUI", "AI Planner", "Next.js", "LLM Orchestration"],
      link: "https://yujiamin08.github.io/Axiomweb/",
      media: { kind: "image", src: "/projects/axiom.jpg" },
      demoVideo: "/projects/axiom-demo.mp4",
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
      media: { kind: "image", src: "/projects/amico.jpg" },
      demoVideo: "/projects/amico-demo.mp4",
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
      media: { kind: "image", src: "/projects/agora.jpg" },
      demoVideo: "/projects/agora-demo.mp4",
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
      media: { kind: "image", src: "/projects/havenlink.jpg" },
      demoLink: "https://devpost.com/software/havenlink",
    },
  ];

  const [activeVideo, setActiveVideo] = useState<{
    src: string;
    title: string;
  } | null>(null);

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
            <ProjectCard
              key={project.title}
              {...project}
              onPlayDemo={(src, title) => setActiveVideo({ src, title })}
            />
          ))}
        </div>
      </div>

      <VideoModal
        video={activeVideo?.src ?? null}
        title={activeVideo?.title ?? ""}
        onClose={() => setActiveVideo(null)}
      />
    </section>
  );
};
