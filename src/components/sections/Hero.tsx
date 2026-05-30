"use client";
import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import { TypewriterText } from "@/components/animations/TypewriterText";
import { FadeIn } from "@/components/animations/FadeIn";
import { socialLinks } from "@/data/social";
export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "var(--accent-primary)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]"
          style={{ background: "var(--accent-secondary)" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full opacity-10 blur-[80px]"
          style={{ background: "var(--accent-tertiary)" }}
        />
      </div>
      <div className="section-container relative z-10 flex flex-col lg:flex-row items-center gap-12 py-20">
        {}
        <div className="flex-1 text-center lg:text-left">
          <FadeIn delay={0.1}>
            <p
              className="text-sm font-medium tracking-widest uppercase mb-4"
              style={{ color: "var(--accent-primary)" }}
            >
              Olá, eu sou
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              André Victor
              <br />
              <span className="gradient-text">Macedo Pereira</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="text-lg sm:text-xl lg:text-2xl font-medium mb-6 h-[36px]" style={{ color: "var(--text-secondary)" }}>
              <TypewriterText
                words={[
                  "Full Stack Developer",
                  "Cloud Enthusiast",
                  "DevOps Explorer",
                  "IoT Builder",
                ]}
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p
              className="text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Estudante de Engenharia da Computação na UFMA, apaixonado por criar
              soluções que conectam software, hardware e nuvem.
            </p>
          </FadeIn>
          {}
          <FadeIn delay={0.8}>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a
                href="/resume/andre-victor-cv.pdf"
                download
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: "var(--accent-primary)",
                  boxShadow: "0 0 25px var(--accent-glow)",
                }}
              >
                <Download size={18} />
                Download CV
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold border transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  color: "var(--accent-primary)",
                  borderColor: "var(--accent-primary)",
                }}
              >
                Ver Projetos
              </a>
            </div>
          </FadeIn>
          {}
          <FadeIn delay={1.0}>
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl transition-colors duration-200 hover:bg-[var(--bg-tertiary)]"
                  style={{ color: "var(--text-secondary)" }}
                  aria-label={social.name}
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </div>
          </FadeIn>
        </div>
        {}
        <FadeIn delay={0.5} direction="left">
          <div className="relative">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 30px rgba(108, 99, 255, 0.3)",
                  "0 0 60px rgba(108, 99, 255, 0.5)",
                  "0 0 30px rgba(108, 99, 255, 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full overflow-hidden border-2"
              style={{ borderColor: "var(--accent-primary)" }}
            >
              <div
                className="w-full h-full flex items-center justify-center text-7xl font-black"
                style={{
                  background: "var(--gradient-hero)",
                  color: "white",
                }}
              >
                AV
              </div>
            </motion.div>
            {}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full text-xs font-bold glass"
              style={{ color: "var(--accent-secondary)" }}
            >
              37+ Repos
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-2 -left-4 px-3 py-1.5 rounded-full text-xs font-bold glass"
              style={{ color: "var(--accent-tertiary)" }}
            >
              8+ Linguagens
            </motion.div>
          </div>
        </FadeIn>
      </div>
      {}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown size={24} style={{ color: "var(--text-muted)" }} />
      </motion.div>
    </section>
  );
}
