"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { skillCategories } from "@/data/skills";
function SkillBar({ name, icon, level }: { name: string; icon: string; level: number }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-4 rounded-xl border transition-all duration-300"
      style={{
        background: "var(--bg-secondary)",
        borderColor: "var(--border-subtle)",
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
            {name}
          </span>
        </div>
        <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
          {level}%
        </span>
      </div>
      <div className="w-full h-2 rounded-full" style={{ background: "var(--bg-tertiary)" }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="h-full rounded-full"
          style={{
            background:
              level >= 80
                ? "var(--accent-primary)"
                : level >= 60
                  ? "var(--accent-secondary)"
                  : "var(--accent-tertiary)",
          }}
        />
      </div>
    </motion.div>
  );
}
export function Skills() {
  const [activeTab, setActiveTab] = useState("languages");
  const activeCategory = skillCategories.find((c) => c.id === activeTab)!;
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="section-container">
        {}
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{ color: "var(--accent-primary)" }}>
              Habilidades
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
              Skills & Ferramentas
            </h2>
            <p className="mt-3 text-base max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
              Tecnologias que utilizo no dia a dia, extraídas dos meus projetos reais no GitHub.
            </p>
          </div>
        </FadeIn>
        {}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeTab === cat.id
                    ? "text-white shadow-lg"
                    : "hover:bg-[var(--bg-tertiary)]"
                }`}
                style={{
                  background: activeTab === cat.id ? "var(--accent-primary)" : "transparent",
                  color: activeTab === cat.id ? "white" : "var(--text-secondary)",
                  boxShadow: activeTab === cat.id ? "0 0 20px var(--accent-glow)" : "none",
                }}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </FadeIn>
        {}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {activeCategory.skills.map((skill, i) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
