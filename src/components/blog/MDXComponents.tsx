import { AlertCircle, Info, Lightbulb } from "lucide-react";
import Image from "next/image";
import { CodeBlock } from "./CodeBlock";
export function Callout({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning" | "tip";
}) {
  const config = {
    info: { icon: Info, bg: "rgba(108, 99, 255, 0.1)", color: "var(--accent-primary)" },
    warning: { icon: AlertCircle, bg: "rgba(255, 107, 107, 0.1)", color: "var(--accent-tertiary)" },
    tip: { icon: Lightbulb, bg: "rgba(0, 212, 170, 0.1)", color: "var(--accent-secondary)" },
  };
  const { icon: Icon, bg, color } = config[type];
  return (
    <div
      className="my-6 p-4 rounded-xl border flex gap-3 items-start"
      style={{ background: bg, borderColor: color }}
    >
      <Icon size={20} className="mt-0.5 flex-shrink-0" style={{ color }} />
      <div className="text-sm leading-relaxed" style={{ color: "var(--text-primary)" }}>
        {children}
      </div>
    </div>
  );
}
export function MDXImage(props: any) {
  return (
    <div className="my-8 rounded-xl overflow-hidden border" style={{ borderColor: "var(--border-subtle)" }}>
      <Image
        {...props}
        className="w-full h-auto object-cover"
        alt={props.alt || "Image"}
        width={props.width || 800}
        height={props.height || 450}
      />
      {props.alt && (
        <p className="text-center text-sm py-2" style={{ color: "var(--text-muted)", background: "var(--bg-secondary)" }}>
          {props.alt}
        </p>
      )}
    </div>
  );
}
export const mdxComponents = {
  h1: (props: any) => <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-6" style={{ color: "var(--text-primary)" }} {...props} />,
  h2: (props: any) => <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4" style={{ color: "var(--text-primary)" }} {...props} />,
  h3: (props: any) => <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-3" style={{ color: "var(--text-primary)" }} {...props} />,
  p: (props: any) => <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }} {...props} />,
  a: (props: any) => <a className="font-medium underline underline-offset-4 transition-colors hover:text-[var(--accent-hover)]" style={{ color: "var(--accent-primary)" }} {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-6 space-y-2 text-base md:text-lg" style={{ color: "var(--text-secondary)" }} {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-base md:text-lg" style={{ color: "var(--text-secondary)" }} {...props} />,
  li: (props: any) => <li {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 pl-4 my-6 italic" style={{ borderColor: "var(--accent-primary)", color: "var(--text-muted)" }} {...props} />
  ),
  img: MDXImage,
  Callout,
  CodeBlock,
};
