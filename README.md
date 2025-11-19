# HaloAgency.cz - Marketing Agency Website

Современный сайт маркетингового агентства для русскоязычного бизнеса в Праге.

## 🚀 Tech Stack

- **Framework:** Next.js 16.0.3 (App Router)
- **React:** 19.2.0
- **Styling:** Tailwind CSS 4
- **UI Components:** Shadcn/ui
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **Fonts:** Inter (с Cyrillic) + JetBrains Mono

## 📁 Project Structure

```
my-first-site/
├── app/
│   ├── components/
│   │   ├── forms/
│   │   │   └── ContactFormComponent.jsx
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── ProblemSolution.jsx
│   │   │   ├── ServicesOverview.jsx
│   │   │   ├── Pricing.jsx
│   │   │   ├── Process.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   └── FinalCTA.jsx
│   │   └── ui/ (Shadcn components)
│   ├── contact/page.js
│   ├── web-development/page.js
│   ├── tracking/page.js
│   ├── online-advertising/page.js
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── public/images/
├── CLAUDE.md
├── PLANNING.md
└── TASKS.md
```

## 🎨 Brand Colors

```css
Navy: #1E3A5F       /* Authority, trust */
Coral: #FF6B6B      /* Energy, action, CTAs */
Gold: #F7B731       /* Success, premium */
Off-white: #F8F9FA  /* Backgrounds */
Gray: #4A5568       /* Body text */
Light-gray: #E2E8F0 /* Borders */
```

## 📄 Pages

### ✅ Completed:
1. **Homepage** (/) - 7 sections: Hero, Problem/Solution, Services, Pricing, Process, Testimonials, CTA
2. **Contact** (/contact) - Validated contact form
3. **Web Development** (/web-development) - 6 industry solutions
4. **Tracking & Analytics** (/tracking) - Non-technical explanations
5. **Online Advertising** (/online-advertising) - With realistic expectations

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Build
```bash
npm run build
npm start
```

## 🎯 Key Features

- ✅ Mobile-responsive design
- ✅ Server-side rendering (SSR)
- ✅ Form validation (React Hook Form + Zod)
- ✅ Brand-consistent colors
- ✅ Russian language with Cyrillic support
- ✅ Shadcn/ui components
- ✅ Clean, modern UI/UX

## 🔜 TODO

- [ ] Connect form to API endpoint
- [ ] Add Google Analytics (GA4)
- [ ] Optimize images
- [ ] Add more visual content
- [ ] Czech and English translations
- [ ] Deploy to Vercel
- [ ] SEO optimization

## 📖 Documentation

- **CLAUDE.md** - Project guide and design system
- **PLANNING.md** - Technical architecture
- **TASKS.md** - Build tasks and milestones

---

**Built with Next.js 16 + React 19**
