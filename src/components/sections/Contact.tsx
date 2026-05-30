"use client";
import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Send, Mail, MapPin } from "lucide-react";
import { socialLinks } from "@/data/social";
export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };
  const emailLink = socialLinks.find((link) => link.name === "Email")?.href || "";
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="section-container max-w-5xl">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{ color: "var(--accent-primary)" }}>
              Contato
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
              Vamos Conversar?
            </h2>
            <p className="mt-3 text-base max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
              Tem um projeto em mente, uma oportunidade ou apenas quer trocar uma ideia?
              Sinta-se à vontade para entrar em contato.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {}
          <FadeIn direction="right" className="md:col-span-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
                  Informações
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-[var(--bg-secondary)] text-[var(--accent-primary)]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                        Email
                      </p>
                      <a
                        href={emailLink}
                        className="text-sm transition-colors hover:text-[var(--accent-primary)]"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {emailLink.replace("mailto:", "")}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-[var(--bg-secondary)] text-[var(--accent-primary)]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                        Localização
                      </p>
                      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        São Luís, Maranhão, Brasil
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
                  Redes Sociais
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border transition-all duration-200 hover:scale-105 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
                      style={{
                        borderColor: "var(--border-subtle)",
                        color: "var(--text-secondary)",
                      }}
                      aria-label={social.name}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
          {}
          <FadeIn delay={0.2} className="md:col-span-3">
            <div
              className="p-6 sm:p-8 rounded-2xl border"
              style={{
                background: "var(--bg-secondary)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-xl outline-none transition-colors border focus:border-[var(--accent-primary)]"
                      style={{
                        background: "var(--bg-primary)",
                        borderColor: "var(--border-subtle)",
                        color: "var(--text-primary)",
                      }}
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-xl outline-none transition-colors border focus:border-[var(--accent-primary)]"
                      style={{
                        background: "var(--bg-primary)",
                        borderColor: "var(--border-subtle)",
                        color: "var(--text-primary)",
                      }}
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl outline-none transition-colors border focus:border-[var(--accent-primary)] resize-none"
                    style={{
                      background: "var(--bg-primary)",
                      borderColor: "var(--border-subtle)",
                      color: "var(--text-primary)",
                    }}
                    placeholder="Como posso te ajudar?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "var(--accent-primary)",
                    boxShadow: "0 4px 15px var(--accent-glow)",
                  }}
                >
                  {status === "submitting" ? (
                    "Enviando..."
                  ) : status === "success" ? (
                    "Mensagem Enviada!"
                  ) : (
                    <>
                      <Send size={18} />
                      Enviar Mensagem
                    </>
                  )}
                </button>
                {status === "success" && (
                  <p className="text-sm text-[var(--accent-secondary)] mt-2">
                    Obrigado pelo contato! Responderei em breve.
                  </p>
                )}
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
