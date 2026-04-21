import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Linkedin } from "lucide-react";

interface Article {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  source: string;
  link: string;
  cover?: string;
}

export const Blog = () => {
  const articles: Article[] = [
    {
      title:
        "What It's Like to Work as a One Person Entrepreneur at Microsoft AI",
      excerpt:
        "A first-person reflection on the OPE program at Microsoft AI — what it actually means to own a product end-to-end, from defining vision to shipping an MVP with vibe coding and agent workflows.",
      date: "APR 2026",
      category: "AI · PRODUCT · CAREER",
      source: "LinkedIn",
      link:
        "https://www.linkedin.com/pulse/what-like-work-one-person-entrepreneur-microsoft-ai-yohji-min-ngnmc",
      cover: "/blog/ope.jpg",
    },
  ];

  return (
    <section className="min-h-screen px-6 pb-24 pt-36">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold md:text-6xl">Thoughts & Articles</h2>
          <p className="mt-6 max-w-2xl text-lg font-light text-brand-muted">
            A growing collection of writing on artificial intelligence, product
            strategy, and the intersection of technology and storytelling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <motion.a
              key={article.link}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-[32px] border border-brand-dark/5 bg-white transition-all hover:-translate-y-1 hover:border-brand-dark/15 hover:shadow-2xl hover:shadow-brand-dark/5"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {article.cover ? (
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-paper">
                  <img
                    src={article.cover}
                    alt={article.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-dark backdrop-blur-sm">
                    {article.date}
                  </div>
                </div>
              ) : null}

              <div className="flex flex-1 flex-col justify-between gap-6 p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-brand-muted">
                      {article.category}
                    </div>
                    {!article.cover ? (
                      <div className="text-[10px] font-semibold uppercase tracking-widest text-brand-muted opacity-40">
                        {article.date}
                      </div>
                    ) : null}
                  </div>
                  <h3 className="text-2xl font-bold leading-tight text-brand-dark transition-opacity group-hover:opacity-75">
                    {article.title}
                  </h3>
                  <p className="font-light leading-relaxed text-brand-muted">
                    {article.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-brand-dark/5 pt-6">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-dark">
                    <Linkedin className="h-4 w-4" />
                    READ ON {article.source.toUpperCase()}
                  </div>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
