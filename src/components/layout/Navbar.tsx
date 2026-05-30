"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { navLinks } from "@/data/social";
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-[var(--shadow-md)]"
          : "bg-transparent"
      }`}
    >
      <nav className="section-container flex items-center justify-between h-[72px]">
        {}
        <a
          href="#hero"
          className="text-xl font-bold tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          <span className="gradient-text">&lt;AV /&gt;</span>
        </a>
        {}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 hover:text-[var(--accent-primary)]"
              style={{ color: "var(--text-secondary)" }}
            >
              {link.name}
            </a>
          ))}
        </div>
        {}
        <div className="flex items-center gap-3">
          {}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl transition-colors duration-200 hover:bg-[var(--bg-tertiary)]"
            aria-label="Alternar tema"
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "dark" ? (
                <Sun size={20} style={{ color: "var(--text-secondary)" }} />
              ) : (
                <Moon size={20} style={{ color: "var(--text-secondary)" }} />
              )}
            </motion.div>
          </button>
          {}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-[var(--bg-tertiary)]"
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X size={22} style={{ color: "var(--text-primary)" }} />
            ) : (
              <Menu size={22} style={{ color: "var(--text-primary)" }} />
            )}
          </button>
        </div>
      </nav>
      {}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t"
            style={{ borderColor: "var(--border-subtle)" }}
          >
            <div className="section-container py-4 flex flex-col gap-3">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium py-2 transition-colors hover:text-[var(--accent-primary)]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
