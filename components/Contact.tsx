"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const { t } = useI18n();
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = t.contact.form.name;
    if (!form.phone.trim()) e.phone = t.contact.form.phone;
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = t.contact.form.email;
    if (!form.message.trim()) e.message = t.contact.form.message;
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);

    // TODO: connect to API route / LINE Notify / email service
    try {
      const body = [
        `ชื่อ: ${form.name}`,
        `โทร: ${form.phone}`,
        `อีเมล: ${form.email || "-"}`,
        `บริการ: ${form.service || "-"}`,
        `ข้อความ: ${form.message}`,
      ].join("\n");
      window.location.href = `mailto:merit.acctax@gmail.com?subject=สอบถามบริการ - ${encodeURIComponent(form.name)}&body=${encodeURIComponent(body)}`;
      setStatus("success");
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="mb-14"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            {t.contact.title}
          </h2>
          <p className="text-lg max-w-xl" style={{ color: "var(--muted-foreground)" }}>
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field
                  id="name"
                  label={t.contact.form.name}
                  placeholder={t.contact.form.placeholder.name}
                  value={form.name}
                  onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                  error={errors.name}
                  required
                />
                <Field
                  id="phone"
                  label={t.contact.form.phone}
                  placeholder={t.contact.form.placeholder.phone}
                  type="tel"
                  value={form.phone}
                  onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                  error={errors.phone}
                  required
                />
              </div>

              <Field
                id="email"
                label={t.contact.form.email}
                placeholder={t.contact.form.placeholder.email}
                type="email"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                error={errors.email}
              />

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-1.5">
                  {t.contact.form.service}
                </label>
                <select
                  id="service"
                  value={form.service}
                  onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border text-base outline-none transition-all duration-150 focus:border-black min-h-[44px]"
                  style={{ borderColor: "var(--border)", background: "var(--background)" }}
                >
                  {t.contact.form.serviceOptions.map((opt, i) => (
                    <option key={i} value={i === 0 ? "" : opt} disabled={i === 0}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                  {t.contact.form.message}
                  <span className="text-black ml-0.5">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder={t.contact.form.placeholder.message}
                  className="w-full px-4 py-3 rounded-lg border text-base outline-none transition-all duration-150 focus:border-black resize-none"
                  style={{
                    borderColor: errors.message ? "#000" : "var(--border)",
                    background: "var(--background)",
                  }}
                />
              </div>

              {status === "success" && (
                <p className="text-sm p-3 rounded-lg bg-black text-white">
                  {t.contact.form.successMsg}
                </p>
              )}
              {status === "error" && (
                <p
                  className="text-sm p-3 rounded-lg border"
                  style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
                >
                  {t.contact.form.errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3.5 rounded-lg bg-black text-white font-semibold text-base transition-all duration-200 hover:bg-[#1a1a1a] active:scale-[0.98] disabled:opacity-50 min-h-[48px]"
              >
                {loading ? "..." : t.contact.form.submit}
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" as const }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div
              className="p-6 rounded-xl border"
              style={{ borderColor: "var(--border)", background: "var(--muted)" }}
            >
              <h3 className="font-semibold text-base mb-5">{t.contact.info.title}</h3>
              <div className="flex flex-col gap-4">
                <InfoRow icon={<Phone size={15} />}>
                  <div className="flex flex-col gap-0.5">
                    {t.contact.info.phones.map((p) => (
                      <a
                        key={p}
                        href={`tel:+66${p.replace(/^0/, "").replace(/-/g, "")}`}
                        className="font-medium hover:underline underline-offset-2"
                      >
                        {p}
                      </a>
                    ))}
                  </div>
                </InfoRow>

                <InfoRow icon={<Mail size={15} />}>
                  <a
                    href="mailto:merit.acctax@gmail.com"
                    className="font-medium hover:underline underline-offset-2 break-all text-sm"
                  >
                    {t.contact.info.email}
                  </a>
                </InfoRow>

                <InfoRow icon={<span className="font-black text-xs">L</span>}>
                  <a
                    href="https://lin.ee/cNEUD0p"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:underline underline-offset-2 text-sm"
                  >
                    {t.contact.info.lineLabel}
                  </a>
                </InfoRow>

                <InfoRow icon={<ExternalLink size={15} />}>
                  <a
                    href="https://web.facebook.com/meritacctax"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:underline underline-offset-2 text-sm"
                  >
                    {t.contact.info.fbPage}
                  </a>
                </InfoRow>

                <InfoRow icon={<Clock size={15} />}>
                  <div>
                    <div className="text-xs mb-0.5" style={{ color: "var(--muted-foreground)" }}>
                      {t.contact.info.hoursLabel}
                    </div>
                    <div className="font-medium text-sm">{t.contact.info.hours}</div>
                  </div>
                </InfoRow>

                <InfoRow icon={<MapPin size={15} />}>
                  <div>
                    <div className="text-xs mb-0.5" style={{ color: "var(--muted-foreground)" }}>
                      {t.contact.info.addressLabel}
                    </div>
                    <div className="text-sm leading-relaxed">
                      {t.contact.info.address}
                      <span
                        className="block text-xs mt-0.5"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        {t.contact.info.addressNote}
                      </span>
                    </div>
                  </div>
                </InfoRow>
              </div>
            </div>

            {/* Google Maps */}
            <div
              className="rounded-xl overflow-hidden border"
              style={{ borderColor: "var(--border)" }}
            >
              <iframe
                src="https://maps.app.goo.gl/yHS32fomPiqmXcX99"
                width="100%"
                height="240"
                style={{ border: 0, filter: "grayscale(100%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MERIT ACC TAX location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
  required,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1.5">
        {label}
        {required && <span className="text-black ml-0.5">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg border text-base outline-none transition-all duration-150 focus:border-black min-h-[44px]"
        style={{
          borderColor: error ? "#000" : "var(--border)",
          background: "var(--background)",
        }}
      />
    </div>
  );
}

function InfoRow({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex gap-3 items-start">
      <div
        className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center bg-white border"
        style={{ borderColor: "var(--border)" }}
      >
        {icon}
      </div>
      <div className="flex-1 text-sm">{children}</div>
    </div>
  );
}
