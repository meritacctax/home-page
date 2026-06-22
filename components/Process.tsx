"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";

export default function Process() {
  const { t } = useI18n();

  return (
    <section
      id="process"
      className="py-24"
      style={{ background: "var(--muted)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="mb-14"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            {t.process.title}
          </h2>
          <p className="text-lg max-w-xl" style={{ color: "var(--muted-foreground)" }}>
            {t.process.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.process.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" as const }}
              className="relative"
            >
              <div
                className="p-6 rounded-xl bg-white h-full flex flex-col"
                style={{ border: "1px solid var(--border)" }}
              >
                <span
                  className="text-4xl font-bold mb-4 block"
                  style={{ color: "var(--border)", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}
                >
                  {step.num}
                </span>
                <h3 className="font-semibold text-base mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted-foreground)" }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
