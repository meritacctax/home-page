"use client";

import {
  Layers,
  Users,
  Award,
  MessageCircle,
  Clock,
  MapPin,
  LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";

const ICON_MAP: Record<string, LucideIcon> = {
  Layers,
  Users,
  Award,
  MessageCircle,
  Clock,
  MapPin,
};

export default function WhyUs() {
  const { t } = useI18n();

  return (
    <section
      id="why"
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
            {t.why.title}
          </h2>
          <p className="text-lg max-w-xl" style={{ color: "var(--muted-foreground)" }}>
            {t.why.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.why.items.map((item, i) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" as const }}
                className="flex gap-4"
              >
                <div className="mt-0.5 flex-shrink-0">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center bg-white"
                    style={{ border: "1px solid var(--border)" }}
                  >
                    <Icon size={18} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1.5">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
