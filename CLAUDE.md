# **CLAUDE.md - HaloAgency.cz Project Guide**

---

## **PROJECT OVERVIEW**

**Project Name:** HaloAgency.cz  
**Type:** Marketing Agency Website  
**Primary Language:** Russian (Czech & English translations later)  
**Target Audience:** Russian/Ukrainian small business owners in Prague  
**Core Message:** "Profitable online advertising backed by proper infrastructure"

---

## **BUSINESS CONTEXT**

### **What HaloAgency Does:**
- **Primary Product:** Online advertising management (Google, Meta, TikTok)
- **Complementary Services:** 
  - Web development (conversion-focused)
  - Tracking & analytics (server-side, attribution)
- **Philosophy:** "You can't run profitable ads without proper website and tracking"

### **Target Customer:**
- Russian/Ukrainian entrepreneurs in Prague
- Small-medium businesses (1-50 employees)
- Tech-savviness: Medium-low (understand basics, not technical)
- Pain point: Tried ads before, wasted money, no results
- Age: 25-55 years old

### **Unique Positioning:**
- Data-driven approach (not guesswork)
- Honest expectations (no false promises)
- Complete system (web + tracking + ads)
- Bilingual (Russian + Czech)
- Industry-specific solutions

---

## **TECH STACK**

```
Frontend: Next.js 16 (React 19)
Styling: Tailwind CSS
Components: Shadcn/ui
Language: Russian (primary), Czech & English (future)
CMS: Payload CMS (self-hosted on Hetzner VPS)
Hosting: Vercel (frontend) / Cloudflare Pages (alternative)
Forms: Next.js API routes + Resend (email)
Analytics: GA4 + GTM + PostHog
Database: MongoDB (for Payload CMS)
VPS: Hetzner CX22 (120 CZK/month)
```

---

## **SITE STRUCTURE**

### **Pages to Build:**

1. **Homepage** (`/`)
   - Hero with value proposition
   - Problem/Solution section
   - Services overview (3 cards)
   - Pricing/Packages
   - Industry solutions preview
   - Process (how we work)
   - Social proof (testimonials)
   - Final CTA

2. **Web Development** (`/web-development`)
   - Hero
   - Philosophy (why pretty isn't enough)
   - Industry solutions (6 detailed: salon, construction, restaurant, e-commerce, professional services, retail)
   - Technical features
   - Technology stack
   - Process & timeline
   - Pricing
   - FAQ
   - CTA

3. **Tracking & Analytics** (`/tracking`)
   - Hero
   - Problem scenarios (relatable)
   - Why tracking matters (non-technical)
   - What we track (3 levels)
   - Technical setup
   - Attribution problem explanation
   - Cross-reference with advertising
   - Real example (case study)
   - Reporting & dashboards
   - Pricing
   - FAQ
   - CTA

4. **Online Advertising** (`/online-advertising`)
   - Hero
   - Our approach (4 principles)
   - Platforms (Google, Meta, TikTok)
   - Campaign types (lead gen, e-commerce, awareness, retargeting)
   - Our process (month-by-month)
   - What you get
   - Pricing structure
   - Realistic expectations (CRITICAL SECTION)
   - Case studies (3)
   - Why clients leave other agencies
   - Requirements to work with us
   - FAQ
   - CTA

---

## **DESIGN SYSTEM**

### **Colors:**
```css
/* Primary */
--navy: #1E3A5F;          /* Authority, trust */
--coral: #FF6B6B;         /* Energy, action, CTAs */
--gold: #F7B731;          /* Success, premium */

/* Neutrals */
--off-white: #F8F9FA;     /* Backgrounds */
--gray: #4A5568;          /* Body text */
--light-gray: #E2E8F0;    /* Borders */

/* Data Visualization */
--success-green: #48BB78;
--warning-orange: #ED8936;
--growth-blue: #4299E1;
```

### **Typography:**
```
Font: Inter (sans-serif)
Weights: 700 (headings), 600 (subheadings), 500 (emphasis), 400 (body)
Numbers/Data: JetBrains Mono (monospace)
```

### **Visual Style:**
- Clean, spacious layouts (lots of white space)
- Real data visualizations (not fake mockups)
- Subtle gradients (navy → darker navy)
- No stock photos of suits/handshakes
- Real screenshots, real dashboards
- Geometric shapes (data-inspired)

### **Layout Principles:**
- Text + Visual (50/50 split on desktop)
- Data Showcase (3 large numbers in row)
- Process/Steps (4 numbered cards)
- Testimonials (quote + photo + metric)
- Mobile-first, enhance for desktop

---

## **CONTENT TONE & VOICE**

### **Language:**
```
Primary: Russian (100% for now)
Future: Czech, English translations

Formality: Informal "ты" (ty - you)
Style: Professional but approachable
Avoid: Marketing jargon, vague promises
Use: Concrete examples, data, honesty
```

### **Writing Principles:**
```
DO:
✅ Short sentences (<20 words)
✅ Active voice
✅ Concrete numbers ("28% больше лидов" not "лучшие результаты")
✅ Direct address (ты/вы)
✅ Questions ("Знакомо?")
✅ Lists and bullets

DON'T:
❌ Marketing jargon ("синергия", "революционный")
❌ False promises ("гарантируем 10x ROI")
❌ Complex sentences
❌ Passive voice
❌ Long paragraphs (max 3-4 sentences)
```

### **Honesty as Differentiator:**
```
Instead of: "Гарантируем 10x ROI!"
Write: "Первый месяц - тестирование. Прибыль обычно с 2-3 месяца."

Instead of: "Мы лучшая агенство!"
Write: "Специализируемся на измеримых результатах. Не на красивых словах."

Instead of: "100% довольных клиентов!"
Write: "Иногда реклама просто не работает. Скажем вам вовремя."
```

---

## **KEY MESSAGING**

### **Value Propositions:**

**Short (headlines):**
```
RU: "Прибыльная реклама. Не пустые обещания."
RU: "Сайты + Аналитика + Реклама = Измеримые результаты"
RU: "Реклама на основе данных. Не на надежде."
```

**Long (sections):**
```
"Мы строим прибыльные рекламные системы, а не просто красивые сайты. 
Наш подход: сначала правильная инфраструктура (сайт + аналитика), 
затем кампании на основе данных. Поэтому наши клиенты видят измеримые 
результаты, а не показатели тщеславия."
```

### **Core Philosophy:**
```
Онлайн-реклама = Основной продукт (цель)
Сайт + Аналитика = Необходимый фундамент (инфраструктура)

Сообщение: "Невозможно запускать прибыльную рекламу без нормального 
сайта и аналитики. Мы предоставляем все три - поэтому наши клиенты 
видят результаты."
```

---

## **COMPONENT PATTERNS**

### **Buttons:**
```jsx
// Primary (Coral)
<Button className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white px-8 py-4">
  Получить консультацию
</Button>

// Secondary (Navy Outline)
<Button variant="outline" className="border-2 border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white px-8 py-4">
  Узнать больше
</Button>
```

### **Section Template:**
```jsx
<section className="py-20 bg-[#F8F9FA]">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-[#1E3A5F] mb-4">
        Заголовок секции
      </h2>
      <p className="text-xl text-[#4A5568]">
        Подзаголовок для контекста
      </p>
    </div>
    
    {/* Content */}
    
  </div>
</section>
```

### **Service Card:**
```jsx
<div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
  <div className="text-5xl mb-4">🌐</div>
  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-3">
    Разработка сайтов
  </h3>
  <p className="text-[#4A5568] mb-4">
    Современные, быстрые, ориентированные на конверсии
  </p>
  <ul className="text-[#4A5568] space-y-2 mb-6">
    <li>✓ WordPress / Next.js</li>
    <li>✓ Мобильная оптимизация</li>
    <li>✓ SEO-готовность</li>
  </ul>
  <p className="text-xl font-bold text-[#FF6B6B]">
    От 15,000 Kč
  </p>
</div>
```

### **Metric Display:**
```jsx
<div className="text-center">
  <div className="text-6xl font-bold text-[#1E3A5F] mb-2">
    3.5x
  </div>
  <div className="text-[#4A5568]">
    Средний рост конверсий
  </div>
</div>
```

---

## **CRITICAL SECTIONS**

### **1. Realistic Expectations (Advertising Page):**
```
This section is CRITICAL. Must be prominent and honest.

Structure:
- Месяц 1: Тестирование (break-even or small loss - NORMAL)
- Месяц 2-3: Оптимизация (positive ROI emerging)
- Месяц 4+: Масштабирование (predictable, profitable)

Tone: Brutally honest
Example: "Первый месяц часто убыточный. Это НОРМАЛЬНО. 
         Алгоритмам нужны данные."

Why: Target audience burned by agencies promising immediate results
```

### **2. Industry Solutions (Web Dev Page):**
```
Each solution shows:
- Industry name (e.g., "Салоны красоты")
- Pain point (relatable problem)
- Our solution (specific features)
- Automation examples (time-saving)
- Price range
- Visual (mockup or icon)

Industries to cover:
1. Beauty salons (booking, reminders)
2. Construction (lead magnet, calculator)
3. Restaurants (reservations, menu)
4. E-commerce (abandoned cart, feeds)
5. Professional services (consultation booking)
6. Local retail (click-and-collect)
```

### **3. Why Tracking Matters (Tracking Page):**
```
Use analogies for non-technical audience:

"Реклама без аналитики = Вождение вслепую"
- Двигаетесь, но не знаете куда
- Врезаетесь в стены (тратите деньги)
- Не знаете что работает

"Реклама с аналитикой = GPS-навигация"
- Видите где вы
- Знаете какие маршруты работают
- Корректируете в реальном времени
- Достигаете цели эффективно

One metaphor like this worth 1000 words of technical explanation.
```

---

## **PRICING STRUCTURE**

### **Packages (Homepage):**
```
Комплект "Старт" (Рекомендуется):
- Сайт + Аналитика + Настройка рекламы
- 45,000 Kč (один раз) + 8,000 Kč/месяц
- Для тех, кто начинает с нуля

"Только реклама":
- Для существующих сайтов с аналитикой
- 6,000-10,000 Kč/месяц (зависит от бюджета)

Отдельные услуги:
- Только сайт: От 15,000 Kč
- Только аналитика: От 5,000 Kč
- Настройка рекламы: От 8,000 Kč

Примечание: "Рекомендуем комплексный подход для лучших результатов"
```

### **Web Development Pricing:**
```
Лендинг: 10,000-15,000 Kč (1 неделя)
Многостраничный сайт: 20,000-35,000 Kč (2-3 недели)
E-commerce: 40,000-80,000 Kč (4-6 недель)
```

### **Advertising Management:**
```
Модель 1: Процент от рекламного бюджета
- 15-20% от месячного расхода
- Минимум: 6,000 Kč/месяц

Модель 2: Фиксированная плата
- 8,000-15,000 Kč/месяц

Минимальный рекламный бюджет:
- Google: 15,000 Kč/месяц
- Meta: 10,000 Kč/месяц
- TikTok: 15,000 Kč/месяц
```

---

## **FORMS & CONVERSIONS**

### **Contact Form Fields:**
```
Обязательные:
- Имя (text)
- Email (email)
- Телефон (tel)
- Сообщение (textarea)

Опциональные:
- "Что вас интересует?" (select: Сайт, Реклама, Аналитика, Всё вместе)
- Бюджет (select: До 30k, 30-60k, 60k+, Обсудим)

Validation: Client-side + server-side
Submit: Save to Payload CMS + Email via Resend
Redirect: /thank-you page
```

### **Consultation Booking:**
```
Options:
1. Calendly integration (easiest)
2. Custom booking form

Fields if custom:
- Имя, Email, Телефон
- Предпочтительная дата/время
- Тема консультации (dropdown)

After booking:
- Email confirmation (automatic)
- Calendar invite (automatic)
- SMS reminder 24h before (optional)
```

---

## **SEO REQUIREMENTS**

### **Meta Tags (All Pages):**
```jsx
export const metadata = {
  title: "HaloAgency - Прибыльная онлайн-реклама | Прага",
  description: "Сайты, аналитика и реклама на основе данных. Google, Meta, TikTok кампании с измеримым ROI. Для малого бизнеса в Праге.",
  keywords: "онлайн реклама прага, google ads, facebook реклама, разработка сайтов, аналитика",
  openGraph: {
    title: "HaloAgency - Прибыльная онлайн-реклама",
    description: "Современные сайты и эффективный маркетинг для вашего бизнеса",
    url: "https://haloagency.cz",
    locale: "ru_RU",
  },
};
```

### **Structured Data (Organization):**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HaloAgency",
  "url": "https://haloagency.cz",
  "logo": "https://haloagency.cz/logo.png",
  "description": "Агентство онлайн-рекламы и веб-разработки в Праге",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Prague",
    "addressCountry": "CZ"
  },
  "sameAs": [
    "https://facebook.com/haloagency",
    "https://instagram.com/haloagency"
  ]
}
```

---

## **TRACKING IMPLEMENTATION**

### **Google Analytics 4:**
```jsx
// app/layout.js
<Script
  strategy="afterInteractive"
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
/>
<Script id="gtag-init" strategy="afterInteractive">
{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
`}
</Script>
```

### **Event Tracking:**
```javascript
// Track form submissions
gtag('event', 'form_submit', {
  form_type: 'contact',
  form_location: window.location.pathname
});

// Track button clicks
gtag('event', 'button_click', {
  button_text: 'Получить консультацию',
  button_location: 'hero'
});
```

---

## **PERFORMANCE TARGETS**

```
Page Load: <2 seconds (target <1.5s)
Lighthouse Performance: >90
Lighthouse SEO: 100
Lighthouse Accessibility: >90
Mobile Usability: 100

How to achieve:
- Next.js Image optimization
- Code splitting (automatic)
- Lazy loading
- Minimal JavaScript
- CDN delivery (Vercel/Cloudflare)
```

---

## **DEPLOYMENT**

### **Vercel (Primary):**
```bash
# Connect GitHub repo
# Auto-deploy on push to main
# Environment variables in Vercel dashboard

Required env vars:
- NEXT_PUBLIC_GA_ID
- RESEND_API_KEY
- PAYLOAD_URL
- PAYLOAD_API_KEY
```

### **Payload CMS (VPS):**
```
Host: Hetzner CX22
URL: admin.haloagency.cz
Database: MongoDB (on same VPS)
Access: Only via subdomain (admin.haloagency.cz)
```

---

## **DEVELOPMENT WORKFLOW**

### **Using Claude Code:**
```bash
# Start new feature
claude-code "Add testimonials section to homepage with 3 client quotes, 
photos, ratings. Use Shadcn Card component. Match existing design system."

# Fix bugs
claude-code "Fix form validation - phone field should accept +420 format. 
Add proper error messages in Russian."

# Optimize performance
claude-code "Optimize all images in public folder. Add lazy loading to 
components below fold. Improve Lighthouse score."
```

### **Using v0.dev:**
```
Go to v0.dev, prompt:

"Create a pricing comparison table for 3 packages (Старт, Профи, Премиум).
Show features with checkmarks, highlight recommended package (middle one).
Use colors: navy #1E3A5F, coral #FF6B6B, gold #F7B731.
Russian language. Modern, clean design. Tailwind CSS."

Copy generated code into project.
```

---

## **CONTENT EXAMPLES**

### **Hero Section (Homepage):**
```
Заголовок:
"Прибыльная онлайн-реклама. Не пустые обещания."

Подзаголовок:
"Сайты, аналитика и реклама - комплексная система для измеримых результатов"

CTA:
[Button] Бесплатная консультация
[Button outline] Как это работает
```

### **Problem Section:**
```
Заголовок: "Знакомо?"

Сценарий 1:
"У меня есть сайт, но нет новых клиентов"
→ Нужна реклама

Сценарий 2:
"Я тратил на рекламу, но ничего не произошло"
→ Нужна аналитика

Сценарий 3:
"У меня нет сайта, хочу начать рекламу"
→ Нужно всё

Решение: Комплексный подход
Шаг 1: Правильный сайт с фокусом на конверсии
Шаг 2: Точная аналитика
Шаг 3: Реклама на основе данных
= Предсказуемые, прибыльные результаты
```

### **Services Cards:**
```
Карточка 1: Разработка сайтов
Icon: 🌐
Заголовок: "Сайты для конверсий"
Описание: "Не просто красивые, а функциональные - с формами, аналитикой и автоматизацией"
CTA: "Подробнее о сайтах →"

Карточка 2: Аналитика
Icon: 📊
Заголовок: "Точное измерение результатов"
Описание: "GA4, server-side трекинг, конверсии - мы знаем точно, что работает"
CTA: "Подробнее об аналитике →"

Карточка 3: Онлайн-реклама
Icon: 📣
Заголовок: "Реклама на основе данных"
Описание: "Google, Meta, TikTok - кампании на основе данных, не догадок"
CTA: "Подробнее о рекламе →"
```

---

## **COMMON PHRASES (Russian)**

### **CTAs:**
```
Primary:
- Получить консультацию
- Заказать консультацию
- Начать работу
- Обсудить проект

Secondary:
- Узнать больше
- Посмотреть примеры
- Читать далее
- Как это работает
```

### **Navigation:**
```
- Главная (Home)
- Разработка сайтов (Web Development)
- Онлайн-реклама (Online Advertising)
- Аналитика (Tracking & Analytics)
- Блог (Blog)
- Контакты (Contact)
```

### **Features/Benefits:**
```
- Измеримые результаты (Measurable results)
- Прозрачная отчётность (Transparent reporting)
- Реалистичные ожидания (Realistic expectations)
- На основе данных (Data-driven)
- Комплексный подход (Complete system approach)
- Без пустых обещаний (No empty promises)
```

---

## **FILE STRUCTURE**

```
haloagency-nextjs/
├── app/
│   ├── page.js                    # Homepage
│   ├── layout.js                  # Root layout (header, footer)
│   ├── web-development/
│   │   └── page.js                # Web dev page
│   ├── tracking/
│   │   └── page.js                # Tracking page
│   ├── online-advertising/
│   │   └── page.js                # Advertising page
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Pricing.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Footer.jsx
│   │   └── ui/                    # Shadcn components
│   ├── api/
│   │   └── contact/
│   │       └── route.js           # Form submission handler
│   └── globals.css                # Global styles + Tailwind
├── public/
│   ├── images/
│   │   ├── hero-bg.jpg
│   │   ├── dashboard-mockup.png
│   │   └── ...
│   └── favicon.ico
├── tailwind.config.js             # Custom colors, fonts
├── next.config.js
└── package.json
```

---

## **IMPORTANT REMINDERS**

### **For Every Feature:**
1. **Mobile-first** - Design for mobile, enhance for desktop
2. **Performance** - Optimize images, lazy load, minimize JS
3. **Accessibility** - Proper headings, alt text, ARIA labels
4. **Russian language** - All content in Russian for now
5. **Brand colors** - Navy, Coral, Gold consistently
6. **Honesty** - No false promises, realistic messaging
7. **Data focus** - Show metrics, real examples, concrete numbers

### **When Writing Code:**
1. Use Shadcn/ui components where possible
2. Tailwind for all styling (no CSS files except globals.css)
3. Server components by default, 'use client' only when needed
4. Descriptive variable names in English (code) but Russian (content)
5. Comment complex logic
6. TypeScript is optional (JS is fine for this project)

### **When Creating Content:**
1. Short sentences (<20 words)
2. Active voice
3. Concrete examples with numbers
4. Questions to engage reader
5. Lists and bullets for readability
6. No marketing jargon
7. Honest, direct tone

---

## **FUTURE ENHANCEMENTS (Don't Build Yet)**

Phase 2 (after launch):
- Czech translation (next-intl)
- English translation
- Blog system (Payload CMS)
- Case studies (detailed pages)
- Client portal (for reports)
- Live chat integration
- Advanced calculators (ROI, budget)

For now: Focus on core 4 pages in Russian only.

---

## **TESTING CHECKLIST**

Before considering any page "done":
```
☐ Mobile tested (iPhone, Android)
☐ Desktop tested (Chrome, Safari, Firefox)
☐ Forms submit successfully
☐ All links work
☐ Images optimized (<200KB each)
☐ Alt text on all images
☐ Lighthouse score >90 performance
☐ Russian grammar/spelling checked
☐ No Lorem Ipsum placeholder text
☐ Contact info correct
☐ Analytics tracking verified
```

---

## **QUICK REFERENCE**

### **Brand Colors (Hex):**
```
Navy: #1E3A5F
Coral: #FF6B6B
Gold: #F7B731
Off-white: #F8F9FA
Gray: #4A5568
Light-gray: #E2E8F0
```

### **Typical Section Spacing:**
```
Section padding: py-20 (80px top/bottom)
Container: max-w-6xl mx-auto px-4
Grid gap: gap-8
Text margins: mb-4 (16px), mb-8 (32px), mb-16 (64px)
```

### **Common Tailwind Classes:**
```
Headline: text-4xl font-bold text-[#1E3A5F] mb-4
Subheadline: text-xl text-[#4A5568] mb-8
Body: text-[#4A5568] leading-relaxed
Button: px-8 py-4 rounded-lg font-semibold
Card: bg-white p-8 rounded-xl shadow-md
```

---

**This guide should be referenced at the start of every Claude Code session to maintain consistency across the project.**

---

**END OF CLAUDE.MD**
