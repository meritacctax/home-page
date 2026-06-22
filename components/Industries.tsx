"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";

export default function Industries() {
  const { t } = useI18n();

  return (
    <section id="industries" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            {t.industries.title}
          </h2>
          <p className="text-lg max-w-xl" style={{ color: "var(--muted-foreground)" }}>
            {t.industries.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {t.industries.items.map((item, i) => (
            <IndustryChip key={i} label={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryChip({ label, index }: { label: string; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: "easeOut" as const }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{
        backgroundColor: hovered ? "#000000" : "#ffffff",
        color: hovered ? "#ffffff" : "#000000",
        borderColor: hovered ? "#000000" : "#eaeaea",
      }}
      className="px-4 py-2 rounded-full text-sm font-medium cursor-default select-none"
      style={{ border: "1px solid #eaeaea", display: "inline-block" }}
    >
      {label}
    </motion.span>
  );
}
