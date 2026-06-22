"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  };
}

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          {...fadeUp(0.1)}
          className="text-sm font-medium mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border"
          style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
          ทีมงานมืออาชีพ · ประสบการณ์กว่า 10 ปี
        </motion.p>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
          style={{ letterSpacing: "-0.03em" }}
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
          style={{ color: "var(--muted-foreground)" }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-black text-white font-semibold text-base transition-all duration-200 hover:bg-[#1a1a1a] hover:shadow-lg active:scale-[0.98]"
          >
            {t.hero.ctaConsult}
          </a>
          <a
            href="https://lin.ee/cNEUD0p"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg border font-semibold text-base transition-all duration-200 hover:bg-[var(--muted)] active:scale-[0.98]"
            style={{ borderColor: "var(--border)" }}
          >
            {t.hero.ctaLine}
          </a>
        </motion.div>

        <motion.p
          {...fadeUp(0.5)}
          className="text-sm"
          style={{ color: "var(--muted-foreground)" }}
        >
          {t.hero.trustline}
        </motion.p>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "var(--border)" }}
      />
    </section>
  );
}
