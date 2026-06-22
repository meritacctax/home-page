"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";

export default function StatsBar() {
  const { t } = useI18n();

  return (
    <section className="py-16 border-b" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {t.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" as const }}
              className="text-center py-8 px-4 relative"
            >
              {i < t.stats.length - 1 && (
                <div
                  className="absolute right-0 top-1/4 bottom-1/4 w-px hidden md:block"
                  style={{ background: "var(--border)" }}
                />
              )}
              <div
                className="text-3xl sm:text-4xl font-bold tracking-tight mb-2"
                style={{ letterSpacing: "-0.02em" }}
              >
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
