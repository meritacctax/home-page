'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';
import FacebookIcon from '@/components/icons/FacebookIcon';
import LineIcon from '@/components/icons/LineIcon';

export default function FloatingButtons() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector('section');
      if (!hero) return;
      setVisible(
        window.scrollY >
          hero.getBoundingClientRect().height + window.scrollY * 0 + 200,
      );
    };
    // Simple: show after 400px scroll
    const check = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
        >
          {/* Facebook */}
          <motion.a
            href="https://facebook.com/meritacctax"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#1877F2] text-white text-sm font-semibold shadow-lg transition-shadow hover:shadow-xl"
            aria-label="Contact via Facebook"
          >
            <FacebookIcon className="w-4 h-4" />
            <span className="hidden sm:inline">{t.floating.facebook}</span>
          </motion.a>

          {/* LINE */}
          <motion.a
            href="https://lin.ee/cNEUD0p"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#00b900] text-white text-sm font-semibold shadow-lg transition-shadow hover:shadow-xl"
            aria-label="Contact via LINE"
          >
            <LineIcon className="w-4 h-4" />
            <span className="hidden sm:inline">{t.floating.line}</span>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+66824989442"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 px-4 py-3 rounded-full bg-white border text-black text-sm font-semibold shadow-lg transition-shadow hover:shadow-xl"
            style={{ borderColor: 'var(--border)' }}
            aria-label="Call MERIT ACC TAX"
          >
            <Phone size={16} />
            <span className="hidden sm:inline">{t.floating.call}</span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
