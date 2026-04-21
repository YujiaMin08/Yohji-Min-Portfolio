import { motion } from "motion/react";
import { FileText, Award, Users } from "lucide-react";

export const ScientificContributions = () => {
  const contributions = [
    {
      icon: FileText,
      count: "367%",
      label: "COURSE OUTPUT INCREASE",
      description: "Led CQC platform AI upgrade at ByteDance, dramatically scaling digital course generation."
    },
    {
      icon: Award,
      count: "600k",
      label: "VIDEO DATA HOURS",
      description: "Automated collection and high-quality labeling of training data for video generation models."
    },
    {
      icon: Users,
      count: "50k+",
      label: "MONTHLY ACTIVE USERS",
      description: "Maintained massive user engagement for 'Cyber Imposter' through strategic growth and AI agent features."
    }
  ];

  return (
    <section id="publications" className="py-24 px-6 mb-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-16">
        <div>
          <h2 className="text-5xl font-bold leading-tight">Scientific<br />Contributions</h2>
          <p className="mt-8 text-brand-muted font-light leading-relaxed max-w-sm">
            Bridging academic rigor with industry impact through computational research and open-source development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contributions.map((item, i) => (
            <motion.div 
              key={i} 
              className="bg-white p-10 rounded-[32px] border border-brand-dark/5 shadow-sm space-y-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <item.icon className="w-8 h-8 text-brand-dark" />
                <span className="text-4xl font-bold font-mono tracking-tighter opacity-10">{item.count}</span>
              </div>
              <div>
                <div className="text-[10px] font-mono font-bold tracking-widest text-brand-muted uppercase mb-2">
                  {item.label}
                </div>
                <p className="text-brand-dark font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
