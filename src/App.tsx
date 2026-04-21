import { HashRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { ScientificContributions } from "./components/ScientificContributions";
import { Contact } from "./components/Contact";
import { Blog } from "./components/Blog";
import { About } from "./components/About";
import ScrollToTop from "./components/ScrollToTop";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <HashRouter>
      <ScrollToTop />
      <main className="min-h-screen bg-brand-paper selection:bg-brand-dark selection:text-white">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-brand-dark origin-left z-[100]"
          style={{ scaleX }}
        />

        <Navbar />
        
        <div className="relative">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Subtle background texture */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#0A1128_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
      </main>
    </HashRouter>
  );
}
