"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export default function CTABand() {
  const { t } = useI18n();

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
        >
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            {t.cta.title}
          </h2>
          <p className="text-lg mb-10 text-gray-400">{t.cta.subtitle}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+66824989442"
              className="flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white text-black font-semibold text-base transition-all duration-200 hover:bg-gray-100 active:scale-[0.98] hover:shadow-lg"
            >
              <Phone size={18} />
              {t.cta.call}
            </a>
            <a
              href="https://lin.ee/cNEUD0p"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/30 text-white font-semibold text-base transition-all duration-200 hover:border-white/60 hover:bg-white/10 active:scale-[0.98]"
            >
              {t.cta.line}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
