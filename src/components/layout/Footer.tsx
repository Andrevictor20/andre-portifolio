import { Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socialLinks, navLinks } from "@/data/social";
export function Footer() {
  return (
    <footer
      className="border-t py-12"
      style={{
        background: "var(--bg-secondary)",
        borderColor: "var(--border-subtle)",
      }}
    >
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {}
          <div>
            <span className="text-2xl font-bold gradient-text">&lt;AV /&gt;</span>
            <p
              className="mt-3 text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--text-secondary)" }}
            >
              Estudante de Eng. da Computação na UFMA. Desenvolvedor Full Stack,
              entusiasta de Cloud, DevOps e IoT.
            </p>
          </div>
          {}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
              Navegação
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-[var(--accent-primary)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
              Conecte-se
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl transition-all duration-200 hover:bg-[var(--bg-tertiary)] hover:text-[var(--accent-primary)]"
                  style={{ color: "var(--text-secondary)" }}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
        {}
        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
          style={{
            borderColor: "var(--border-subtle)",
            color: "var(--text-muted)",
          }}
        >
          <p>© {new Date().getFullYear()} André Victor Macedo Pereira. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com <Heart size={14} className="text-[var(--accent-tertiary)]" fill="currentColor" /> e Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
