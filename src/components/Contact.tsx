import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Send } from "lucide-react";

// Email is kept out of the rendered DOM — only used when a visitor submits
// the form, which opens their own mail client via a mailto: link.
const CONTACT_EMAIL = "minyujia.ricc@gmail.com";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Hello from ${name || "your portfolio"}`;
    const bodyLines = [
      message,
      "",
      "—",
      name ? `From: ${name}` : null,
      email ? `Reply to: ${email}` : null,
    ].filter(Boolean);
    const body = bodyLines.join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
    window.setTimeout(() => setSent(false), 6000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden px-6 pb-24 pt-48"
    >
      {/* Soft background accents kept in brand palette */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 right-[-10%] h-[480px] w-[480px] rounded-full bg-brand-dark/[0.04] blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-6%] h-[360px] w-[360px] rounded-full bg-brand-dark/[0.03] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: heading + socials */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div className="space-y-6 md:pl-6 lg:pl-12 xl:pl-16">
              <h2 className="text-5xl font-bold leading-[1.05] text-brand-dark md:text-7xl">
                Let&apos;s build
                <br />
                <span className="italic font-normal">something</span> together.
              </h2>
              <p className="max-w-md text-lg font-light leading-relaxed text-brand-muted">
                Open to product, research, and creative collaborations across AI,
                GenUI, and interactive media. Drop a note and I&apos;ll get back
                to you.
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[32px] border border-brand-dark/10 bg-white p-8 shadow-xl shadow-brand-dark/5 md:p-12"
          >
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-brand-dark">
                Say hello
              </h3>
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-muted">
                01 / form
              </span>
            </div>

            <div className="space-y-7">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-muted"
                >
                  Your name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className="w-full border-b border-brand-dark/15 bg-transparent py-3 text-lg text-brand-dark outline-none transition-colors placeholder:text-brand-muted/40 focus:border-brand-dark"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-muted"
                >
                  Your email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="w-full border-b border-brand-dark/15 bg-transparent py-3 text-lg text-brand-dark outline-none transition-colors placeholder:text-brand-muted/40 focus:border-brand-dark"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-muted"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="A few words about why you're reaching out."
                  className="w-full resize-none border-b border-brand-dark/15 bg-transparent py-3 text-lg text-brand-dark outline-none transition-colors placeholder:text-brand-muted/40 focus:border-brand-dark"
                />
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-brand-dark py-4 text-sm font-bold uppercase tracking-[0.25em] text-white transition-opacity hover:opacity-90"
            >
              Send message
              <Send className="h-4 w-4" />
            </motion.button>
            <p className="mt-4 text-center text-[11px] font-light text-brand-muted">
              Submitting opens your mail client so you stay in control.
            </p>

            <AnimatePresence>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 flex items-center gap-3 rounded-2xl bg-brand-dark/[0.04] px-5 py-4 text-sm text-brand-dark"
                  role="status"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-dark text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <div className="leading-snug">
                    <div className="font-semibold">Your mail app should be opening.</div>
                    <div className="text-xs text-brand-muted">
                      Finish sending from there and I&apos;ll get back to you soon.
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.form>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-brand-dark/10 pt-10 text-xs font-light uppercase tracking-[0.2em] text-brand-muted md:flex-row">
          <div>© 2026 Yohji Min</div>
          <div className="text-[10px] opacity-70">
            Designed & built with care.
          </div>
        </div>
      </div>
    </section>
  );
};
