import { motion } from "motion/react";
import { ArrowRight, Linkedin, Github, Instagram, FileUser } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/yohji-min-356300222/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/YujiaMin08", label: "GitHub" },
    { icon: Instagram, href: "https://www.instagram.com/minnn0813/", label: "Instagram" },
    { icon: FileUser, href: "/resume.pdf", label: "Resume" },
  ];

  return (
    <section className="pt-36 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div className="flex-1 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-7xl md:text-[100px] leading-[0.9] font-bold text-brand-dark mb-8">
              AI Product,<br />
              Code, and<br />
              <span className="relative inline-block italic font-normal">
                Storytelling
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 bottom-1 -z-10 h-3 rounded-full bg-brand-dark/10"
                />
              </span><br />
              Synergy
            </h1>
            
            <p className="text-brand-muted text-lg md:text-xl font-light leading-relaxed max-w-xl">
              <span className="text-2xl md:text-3xl font-medium text-brand-dark mr-1">Hi!</span>
              I'm Yohji Min, a junior student at Northwestern University studying Computer Science and Radio/Television/Film, 
              building the future of Generative AI and immersive experiences through 
              product management, full-stack engineering, and creative vision.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Link to="/about" className="bg-brand-dark text-white px-8 py-4 rounded-xl text-sm font-bold tracking-widest flex items-center gap-3 group overflow-hidden relative shadow-xl shadow-brand-dark/20">
                <span className="relative z-10">ABOUT ME</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </motion.div>

            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-brand-dark/10 text-brand-muted hover:text-brand-dark hover:border-brand-dark/30 hover:bg-white transition-all shadow-sm"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="flex-1 relative"
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
        >
          <a
            href="https://www.instagram.com/minnn0813/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Yohji Min's Instagram"
            className="group relative block aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl shadow-brand-dark/10"
          >
            <img
              src="/images/portrait.jpg"
              alt="Yohji Min Portrait"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent mix-blend-overlay" />
          </a>
          
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-brand-dark/10 rounded-tr-[40px]" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-brand-dark/10 rounded-bl-[40px]" />
        </motion.div>
      </div>
    </section>
  );
};
