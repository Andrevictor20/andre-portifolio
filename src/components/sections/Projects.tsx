"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { projects, categories, type Project } from "@/data/projects";
function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (p: Project) => void;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={() => onSelect(project)}
      className="cursor-pointer rounded-2xl border overflow-hidden group card-hover"
      style={{
        background: "var(--bg-secondary)",
        borderColor: "var(--border-subtle)",
      }}
    >
      {}
      <div
        className="h-48 relative overflow-hidden flex items-center justify-center"
        style={{ background: "var(--gradient-card)" }}
      >
        <div
          className="text-5xl font-black opacity-20 group-hover:opacity-30 transition-opacity"
          style={{ color: "var(--accent-primary)" }}
        >
          {project.title.slice(0, 2).toUpperCase()}
        </div>
        <div
          className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-semibold"
          style={{
            background: "var(--accent-primary)",
            color: "white",
          }}
        >
          {project.category}
        </div>
      </div>
      {}
      <div className="p-5">
        <h3
          className="text-lg font-bold mb-2 group-hover:text-[var(--accent-primary)] transition-colors"
          style={{ color: "var(--text-primary)" }}
        >
          {project.title}
        </h3>
        <p className="text-sm mb-4 line-clamp-2" style={{ color: "var(--text-secondary)" }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-[11px] font-medium"
              style={{
                background: "rgba(108, 99, 255, 0.1)",
                color: "var(--accent-primary)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      {}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border"
        style={{
          background: "var(--bg-primary)",
          borderColor: "var(--border-subtle)",
        }}
      >
        {}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl z-10 hover:bg-[var(--bg-tertiary)] transition-colors"
        >
          <X size={20} style={{ color: "var(--text-secondary)" }} />
        </button>
        {}
        <div
          className="h-56 flex items-center justify-center relative"
          style={{ background: "var(--gradient-hero)", opacity: 0.9 }}
        >
          <span className="text-7xl font-black text-white/30">
            {project.title.slice(0, 2).toUpperCase()}
          </span>
        </div>
        {}
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: "rgba(108, 99, 255, 0.15)",
                color: "var(--accent-primary)",
              }}
            >
              {project.category}
            </span>
          </div>
          <h2
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            {project.title}
          </h2>
          <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            {project.longDescription}
          </p>
          {}
          <div className="mb-6">
            <h4
              className="text-sm font-semibold mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              Tecnologias Utilizadas
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs font-medium border"
                  style={{
                    borderColor: "var(--border-accent)",
                    color: "var(--accent-primary)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {}
          <div className="flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105"
                style={{
                  background: "var(--accent-primary)",
                  color: "white",
                }}
              >
                <FaGithub size={16} />
                Ver no GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all hover:scale-105"
                style={{
                  borderColor: "var(--accent-primary)",
                  color: "var(--accent-primary)",
                }}
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
export function Projects() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filtered =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);
  return (
    <section
      id="projects"
      className="py-20 sm:py-28"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="section-container">
        {}
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{ color: "var(--accent-primary)" }}>
              Portfólio
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
              Projetos em Destaque
            </h2>
            <p className="mt-3 text-base max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
              Uma seleção dos meus projetos reais, extraídos do GitHub. Clique para ver mais detalhes.
            </p>
          </div>
        </FadeIn>
        {}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat ? "text-white" : ""
                }`}
                style={{
                  background: activeCategory === cat ? "var(--accent-primary)" : "transparent",
                  color: activeCategory === cat ? "white" : "var(--text-secondary)",
                  boxShadow: activeCategory === cat ? "0 0 20px var(--accent-glow)" : "none",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>
        {}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} onSelect={setSelectedProject} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      {}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
