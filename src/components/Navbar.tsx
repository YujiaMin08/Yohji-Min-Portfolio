import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navLinks = [
    { name: "ABOUT", href: "/about" },
    { name: "CAREER", href: "/experience" },
    { name: "PROJECTS", href: "/projects" },
    { name: "CONTENT", href: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/80 backdrop-blur-md rounded-2xl px-8 py-4 border border-brand-dark/5 shadow-sm">
        <NavLink 
          to="/"
          className="text-xl font-bold tracking-tighter"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Yohji Min
          </motion.span>
        </NavLink>
        
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) => 
                `text-[11px] font-semibold tracking-widest transition-colors ${
                  isActive ? "text-brand-dark" : "text-brand-muted hover:text-brand-dark"
                }`
              }
            >
              <motion.span whileHover={{ y: -1 }}>
                {link.name}
              </motion.span>
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/contact"
          className="bg-brand-dark text-white px-6 py-2.5 rounded-lg text-[11px] font-bold tracking-widest hover:bg-opacity-90 transition-all shadow-lg shadow-brand-dark/10"
        >
          LET'S TALK
        </NavLink>
      </div>
    </nav>
  );
};
