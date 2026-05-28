import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

const NAV_LINKS = [
  { name: "ABOUT", href: "/about" },
  { name: "CAREER", href: "/experience" },
  { name: "PROJECTS", href: "/projects" },
    { name: "INSIGHTS", href: "/blog" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const expanded = !scrolled || hovered;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full px-6 pt-4 md:pt-6 ${
        scrolled && !hovered ? "pointer-events-none" : ""
      }`}
    >
      {/* Invisible hover strip — lets the user re-reveal the bar by moving the mouse near the top */}
      <div
        onMouseEnter={() => setHovered(true)}
        className="pointer-events-auto absolute inset-x-0 top-0 h-16"
        aria-hidden
      />

      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{ maxWidth: expanded ? "80rem" : "11rem" }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className="pointer-events-auto relative z-10 mx-auto flex items-center justify-between overflow-hidden rounded-2xl border border-brand-dark/5 bg-white/80 px-5 py-3 shadow-sm backdrop-blur-md md:px-8 md:py-4"
      >
        <NavLink
          to="/"
          className="whitespace-nowrap text-xl font-bold tracking-tighter text-brand-dark"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Yohji Min
          </motion.span>
        </NavLink>

        <motion.div
          animate={{
            opacity: expanded ? 1 : 0,
            maxWidth: expanded ? 800 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="hidden items-center gap-8 overflow-hidden md:flex"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `whitespace-nowrap text-[11px] font-semibold tracking-widest transition-colors ${
                  isActive
                    ? "text-brand-dark"
                    : "text-brand-muted hover:text-brand-dark"
                }`
              }
            >
              <motion.span whileHover={{ y: -1 }}>{link.name}</motion.span>
            </NavLink>
          ))}
        </motion.div>

        <motion.div
          animate={{
            opacity: expanded ? 1 : 0,
            maxWidth: expanded ? 200 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <NavLink
            to="/contact"
            className="inline-block whitespace-nowrap rounded-lg bg-brand-dark px-6 py-2.5 text-[11px] font-bold tracking-widest text-white shadow-lg shadow-brand-dark/10 transition-all hover:bg-opacity-90"
          >
            LET&apos;S TALK
          </NavLink>
        </motion.div>

        {/* Subtle hint dots visible in collapsed state */}
        <motion.div
          animate={{
            opacity: expanded ? 0 : 1,
            maxWidth: expanded ? 0 : 40,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex shrink-0 items-center gap-1 overflow-hidden pl-2 text-brand-muted"
          aria-hidden
        >
          <span className="h-1 w-1 rounded-full bg-current" />
          <span className="h-1 w-1 rounded-full bg-current" />
          <span className="h-1 w-1 rounded-full bg-current" />
        </motion.div>
      </motion.div>
    </nav>
  );
};
