# MERIT ACC TAX — meritacctax.com

เว็บไซต์บริษัทสำนักงานบัญชี สร้างด้วย Next.js 16 + Tailwind CSS + framer-motion

---

## Getting Started

```bash
npm install
npm run dev
```

เปิด [http://localhost:3100](http://localhost:3100) ในเบราว์เซอร์

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Dev server at port 3100 |
| `npm run build` | Production build |
| `npm run start` | Start production server at port 3100 |
| `npm run lint` | Run ESLint |

รันที่ port อื่น (กรณีชั่วคราว):
```bash
npx next dev -p 3100
```

---

## Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** framer-motion
- **Icons:** lucide-react
- **Fonts:** IBM Plex Sans Thai + Inter
- **Deploy:** Vercel

---

## i18n

สลับภาษา TH/EN แบบ client-side (ไม่ reload) — ผ่านปุ่มใน Navbar

- Dictionary: `lib/i18n/th.ts` / `lib/i18n/en.ts`
- Interface: `lib/i18n/types.ts`
- Context/hook: `lib/i18n/context.tsx` → `useI18n()`

---

## Contact Form

ฟอร์มใน `components/Contact.tsx` ยังไม่มี backend — ใช้ `mailto:` fallback ไปก่อน

**TODO:** เชื่อม API route หรือ LINE Notify / email service

---

## OG / Social Share

- OG image: `app/opengraph-image.tsx` (edge runtime, gen แบบ dynamic)
- ทดสอบ: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug)
- ทดสอบหลายแพลตฟอร์ม: opengraph.xyz

---

## Deploy

```bash
npm run build
# push to main branch → Vercel auto-deploy
```

ตั้งค่า environment variables ใน Vercel Dashboard ถ้าเพิ่ม API keys ภายหลัง
