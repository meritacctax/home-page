'use client';

import { useI18n } from '@/lib/i18n/context';
import { Phone, Mail } from 'lucide-react';
import FacebookIcon from '@/components/icons/FacebookIcon';
import LineIcon from '@/components/icons/LineIcon';

const NAV_LINKS = [
  { key: 'services' as const, href: '#services' },
  { key: 'why' as const, href: '#why' },
  { key: 'industries' as const, href: '#industries' },
  { key: 'process' as const, href: '#process' },
  { key: 'contact' as const, href: '#contact' },
];

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer
      className="py-16 border-t"
      style={{ borderColor: 'var(--border)', background: 'var(--muted)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div
              className="font-bold text-xl tracking-tight mb-3"
              style={{ letterSpacing: '-0.02em' }}
            >
              MERIT ACC TAX
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-semibold text-sm mb-4">Navigation</div>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector(link.href)
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm transition-colors hover:text-black"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {t.footer.links[link.key]}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact brief */}
          <div>
            <div className="font-semibold text-sm mb-4">Contact</div>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+66824989442"
                className="flex items-center gap-2 text-sm transition-colors hover:text-black"
                style={{ color: 'var(--muted-foreground)' }}
              >
                <Phone size={14} />
                082-498-9442
              </a>
              <a
                href="mailto:merit.acctax@gmail.com"
                className="flex items-center gap-2 text-sm transition-colors hover:text-black"
                style={{ color: 'var(--muted-foreground)' }}
              >
                <Mail size={14} />
                merit.acctax@gmail.com
              </a>
              <a
                href="https://web.facebook.com/meritacctax"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors hover:text-black"
                style={{ color: 'var(--muted-foreground)' }}
              >
                <FacebookIcon className="w-3.5 h-3.5 text-[#1877F2]" />
                Facebook
              </a>
              <a
                href="https://lin.ee/cNEUD0p"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors hover:text-black"
                style={{ color: 'var(--muted-foreground)' }}
              >
                <LineIcon className="w-3.5 h-3.5 text-[#00b900]" />
                LINE Official
              </a>
            </div>
          </div>
        </div>

        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: 'var(--border)' }}
        >
          <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
            {t.footer.copy}
          </p>
          <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
            meritacctax.com
          </p>
        </div>
      </div>
    </footer>
  );
}
