'use client';

import {
  BookOpen,
  FileText,
  Search,
  Building2,
  Settings,
  Shield,
  FileCheck,
  XCircle,
  Monitor,
  LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n/context';

const ICON_MAP: Record<string, LucideIcon> = {
  BookOpen,
  FileText,
  Search,
  Building2,
  Settings,
  Shield,
  FileCheck,
  XCircle,
  Monitor,
};

export default function Services() {
  const { t } = useI18n();

  return (
    <section id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
          className="mb-14"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            {t.services.title}
          </h2>
          <p
            className="text-lg max-w-xl"
            style={{ color: 'var(--muted-foreground)' }}
          >
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.services.items.map((service, i) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <ServiceCard
                key={i}
                icon={Icon}
                title={service.title}
                desc={service.desc}
                cta={t.services.cta}
                index={i}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
  cta,
  index,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  cta: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: 'easeOut' as const,
      }}
      whileHover={{ y: -4 }}
      className="group p-6 rounded-xl border flex flex-col gap-4 cursor-default transition-shadow duration-200"
      style={{
        borderColor: 'var(--border)',
        background: 'var(--background)',
      }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:bg-black group-hover:text-white"
        style={{ background: 'var(--muted)' }}
      >
        <Icon size={20} />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-base mb-2">{title}</h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: 'var(--muted-foreground)' }}
        >
          {desc}
        </p>
      </div>

      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          document
            .querySelector('#contact')
            ?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="text-sm font-medium underline-offset-2 transition-all duration-200 group-hover:underline"
        style={{ color: 'var(--muted-foreground)' }}
      >
        {cta} →
      </a>
    </motion.div>
  );
}
