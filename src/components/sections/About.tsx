"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { GraduationCap, MapPin, Code, Cloud, Cpu, Terminal } from "lucide-react";
const interests = [
  { icon: Code, label: "Full Stack Dev", desc: "JS/TS, Java Spring Boot" },
  { icon: Cloud, label: "Cloud Computing", desc: "Docker, Vercel, Firebase" },
  { icon: Terminal, label: "DevOps", desc: "CI/CD, IaC, Linux" },
  { icon: Cpu, label: "IoT & Automação", desc: "Raspberry Pi, Home Assistant" },
];
function AnimatedCounter({ target, label }: { target: number; label: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const controls = animate(count, target, {
      duration: 2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [count, target]);
  return (
    <div className="text-center">
      <motion.span
        ref={ref}
        className="text-3xl sm:text-4xl font-black gradient-text"
      >
        {rounded}
      </motion.span>
      <span className="text-3xl sm:text-4xl font-black gradient-text">+</span>
      <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
        {label}
      </p>
    </div>
  );
}
export function About() {
  return (
    <section id="about" className="py-20 sm:py-28" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-container">
        {}
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{ color: "var(--accent-primary)" }}>
              Sobre mim
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
              Quem sou eu?
            </h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {}
          <FadeIn direction="right">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={20} style={{ color: "var(--accent-primary)" }} />
                <span className="text-sm font-semibold" style={{ color: "var(--accent-primary)" }}>
                  Engenharia da Computação — UFMA
                </span>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <MapPin size={18} style={{ color: "var(--text-muted)" }} />
                <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                  São Luís, Maranhão, Brasil
                </span>
              </div>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                <p>
                  Tenho <strong style={{ color: "var(--text-primary)" }}>24 anos</strong> e sou 
                  estudante de Engenharia da Computação na{" "}
                  <strong style={{ color: "var(--text-primary)" }}>Universidade Federal do Maranhão (UFMA)</strong>.
                  Apaixonado por tecnologia e desenvolvimento de software, busco constantemente
                  aprender e evoluir.
                </p>
                <p>
                  Minha experiência abrange o ecossistema{" "}
                  <strong style={{ color: "var(--text-primary)" }}>JavaScript/TypeScript</strong>{" "}
                  (Next.js, React, NestJS) e{" "}
                  <strong style={{ color: "var(--text-primary)" }}>Java Spring Boot</strong>,
                  com forte interesse em Cloud Computing, DevOps e IoT.
                  Já desenvolvi projetos que vão desde plataformas web full-stack até
                  sistemas de monitoramento ambiental com cidades inteligentes.
                </p>
                <p>
                  Acredito que a melhor forma de aprender é construindo — por isso
                  tenho <strong style={{ color: "var(--text-primary)" }}>37+ repositórios</strong> no
                  GitHub, explorando diferentes tecnologias e resolvendo problemas reais.
                </p>
              </div>
            </div>
          </FadeIn>
          {}
          <StaggerContainer className="grid grid-cols-2 gap-4">
            {interests.map((item) => (
              <StaggerItem key={item.label}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="p-5 rounded-2xl border transition-all duration-300"
                  style={{
                    background: "var(--bg-primary)",
                    borderColor: "var(--border-subtle)",
                  }}
                >
                  <item.icon
                    size={28}
                    className="mb-3"
                    style={{ color: "var(--accent-primary)" }}
                  />
                  <h3
                    className="font-semibold text-sm mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.label}
                  </h3>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {item.desc}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        {}
        <FadeIn delay={0.3}>
          <div
            className="mt-16 grid grid-cols-3 gap-8 py-8 rounded-2xl border"
            style={{
              background: "var(--bg-primary)",
              borderColor: "var(--border-subtle)",
            }}
          >
            <AnimatedCounter target={37} label="Repositórios" />
            <AnimatedCounter target={8} label="Linguagens" />
            <AnimatedCounter target={6} label="Projetos Destaque" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
