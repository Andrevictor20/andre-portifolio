"use client";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
export function CodeBlock({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="relative group my-6">
      <button
        onClick={onCopy}
        className="absolute top-3 right-3 p-2 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
        aria-label="Copiar código"
      >
        {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-gray-300" />}
      </button>
      <pre
        className={`p-4 rounded-xl overflow-x-auto text-sm ${className || ""}`}
        style={{ background: "#1E1E2E", color: "#CBA6F7" }}
      >
        <code style={{ fontFamily: "var(--font-jetbrains)" }}>{children}</code>
      </pre>
    </div>
  );
}
