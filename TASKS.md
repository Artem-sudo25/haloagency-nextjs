# **TASKS.md - HaloAgency.cz Build Tasks**

---

## **PROJECT STATUS**

```
✅ Domain purchased (haloagency.cz)
✅ Next.js installed locally
✅ Hetzner VPS purchased
⏳ Ready to start building
```

---

## **MILESTONE 1: Project Setup & Configuration**
**Duration:** 1-2 days  
**Goal:** Set up development environment and deploy basic site

### **1.1 Local Development Environment**
```
☐ Verify Next.js version (should be 16+)
  - Run: npx next --version
  - If not 16+, upgrade: npx create-next-app@latest --upgrade

☐ Install Tailwind CSS (if not already installed)
  - Run: npm install -D tailwindcss postcss autoprefixer
  - Run: npx tailwindcss init -p
  
☐ Install Shadcn/ui
  - Run: npx shadcn-ui@latest init
  - Select: New York style, Zinc color, CSS variables: Yes
  
☐ Install required dependencies
  - Run: npm install react-hook-form zod resend
  - Run: npm install lucide-react
  
☐ Configure custom Tailwind colors
  - Edit tailwind.config.js
  - Add HaloAgency colors: navy (#1E3A5F), coral (#FF6B6B), gold (#F7B731)
  
☐ Create project folder structure
  - Create: app/components/layout/
  - Create: app/components/sections/
  - Create: app/components/forms/
  - Create: app/components/ui/
  - Create: app/lib/
  - Create: public/images/
```

### **1.2 Git & Version Control**
```
☐ Initialize Git repository
  - Run: git init
  - Create .gitignore (include .env.local, node_modules)
  
☐ Create GitHub repository
  - Go to github.com/new
  - Name: haloagency-nextjs
  - Public or Private: Your choice
  
☐ Connect local to GitHub
  - Run: git remote add origin https://github.com/YOUR-USERNAME/haloagency-nextjs.git
  - Run: git add .
  - Run: git commit -m "Initial commit"
  - Run: git push -u origin main
```

### **1.3 Deployment Setup**
```
☐ Connect Vercel to GitHub
  - Go to vercel.com/new
  - Import GitHub repository
  - Configure project settings
  - Deploy
  
☐ Configure custom domain
  - In Vercel dashboard → Settings → Domains
  - Add haloagency.cz
  - Add DNS records in domain registrar (A record or CNAME)
  - Wait for DNS propagation (5-60 minutes)
  
☐ Test deployment
  - Visit https://haloagency.cz
  - Should see default Next.js page
```

### **1.4 Project Documentation**
```
☐ Copy CLAUDE.md to project root
☐ Copy PLANNING.md to project root
☐ Copy TASKS.md to project root
☐ Create README.md with:
  - Project description
  - Setup instructions
  - Tech stack
  - Development commands
```

**Milestone 1 Deliverable:** ✅ Deployed Next.js site with custom domain, ready for development

---

## **MILESTONE 2: Design System & Reusable Components**
**Duration:** 1 day  
**Goal:** Build foundational design system and components

### **2.1 Typography & Fonts**
```
☐ Add Inter font to app/layout.js
  - Import from next/font/google
  - Apply to body element
  
☐ Add JetBrains Mono for numbers/data
  - Import from next/font/google
  - Create CSS class for monospace text
  
☐ Configure font sizes in tailwind.config.js
  - Ensure proper hierarchy (text-4xl for H1, etc.)
```

### **2.2 Base Shadcn Components**
```
☐ Install Button component
  - Run: npx shadcn-ui@latest add button
  
☐ Install Card component
  - Run: npx shadcn-ui@latest add card
  
☐ Install Input component
  - Run: npx shadcn-ui@latest add input
  
☐ Install Textarea component
  - Run: npx shadcn-ui@latest add textarea
  
☐ Install Label component
  - Run: npx shadcn-ui@latest add label
  
☐ Install Select component
  - Run: npx shadcn-ui@latest add select
```

### **2.3 Custom Components**
```
☐ Create Section wrapper component
  - File: app/components/layout/Section.jsx
  - Props: children, className, bgColor
  - Standard padding (py-20), max-width (max-w-6xl)
  
☐ Create Container component
  - File: app/components/layout/Container.jsx
  - Centered, responsive padding
  
☐ Create Metric display component
  - File: app/components/ui/Metric.jsx
  - Large number + label
  - Props: value, label, trend (optional)
```

### **2.4 Layout Components**
```
☐ Create Header component
  - File: app/components/layout/Header.jsx
  - Logo + Navigation
  - Mobile hamburger menu
  - Sticky on scroll
  - Links: Главная, Разработка сайтов, Онлайн-реклама, Аналитика, Контакты
  
☐ Create Footer component
  - File: app/components/layout/Footer.jsx
  - 3 columns: О нас, Услуги, Контакты
  - Social media icons
  - Copyright
  - Legal links (Privacy Policy, Terms)
  
☐ Update app/layout.js
  - Import Header and Footer
  - Wrap children with layout structure
```

**Milestone 2 Deliverable:** ✅ Reusable component library, Header & Footer in place

---

## **MILESTONE 3: Homepage - Core Sections**
**Duration:** 2 days  
**Goal:** Build functional homepage with key sections

### **3.1 Hero Section**
```
☐ Create Hero component
  - File: app/components/sections/Hero.jsx
  - Full-width section
  - Gradient background (navy to darker navy)
  - Large headline: "Прибыльная онлайн-реклама. Не пустые обещания."
  - Subheadline: "Сайты, аналитика и реклама - комплексная система для измеримых результатов"
  - 2 CTAs: Primary (coral), Secondary (outline)
  - Optional: Background image or dashboard mockup
  
☐ Add to homepage
  - File: app/page.js
  - Import and render Hero component
  
☐ Test responsive behavior
  - Desktop: 2-column layout
  - Mobile: Stacked, large buttons
```

### **3.2 Problem/Solution Section**
```
☐ Create ProblemSolution component
  - File: app/components/sections/ProblemSolution.jsx
  - Title: "Знакомо?"
  - 3 scenarios (cards):
    1. "У меня есть сайт, но нет новых клиентов" → Нужна реклама
    2. "Я тратил на рекламу, но ничего не произошло" → Нужна аналитика
    3. "У меня нет сайта, хочу начать рекламу" → Нужно всё
  - Solution: 3-step process visual
  
☐ Add to homepage (after Hero)
```

### **3.3 Services Overview Section**
```
☐ Create ServicesOverview component
  - File: app/components/sections/ServicesOverview.jsx
  - Title: "Наши услуги"
  - 3 service cards (grid):
    1. Разработка сайтов (🌐 icon)
    2. Аналитика (📊 icon)
    3. Онлайн-реклама (📣 icon)
  - Each card: Icon, title, description, CTA link, price range
  
☐ Add to homepage
```

### **3.4 Pricing Section**
```
☐ Create Pricing component
  - File: app/components/sections/Pricing.jsx
  - Title: "Комплексные решения или отдельные услуги"
  - 2 package cards + solo services:
    1. Комплект "Старт" (recommended badge)
       - Web + Tracking + Ads
       - 45,000 Kč setup + 8,000 Kč/month
    2. "Только реклама"
       - 6,000-10,000 Kč/month
  - Solo services list below (smaller):
    - Только сайт: От 15,000 Kč
    - Только аналитика: От 5,000 Kč
    - Настройка рекламы: От 8,000 Kč
  
☐ Add to homepage
```

### **3.5 Process Section**
```
☐ Create Process component
  - File: app/components/sections/Process.jsx
  - Title: "Как мы работаем"
  - 4 numbered steps (cards with timeline connector):
    1. Бесплатная консультация (30 мин)
    2. Стратегия и настройка (1-2 недели)
    3. Запуск кампаний (неделя 3)
    4. Оптимизация и масштабирование (постоянно)
  - Each step: Number, title, description, timeline
  
☐ Add to homepage
```

**Milestone 3 Deliverable:** ✅ Homepage with 5 core sections (Hero, Problem, Services, Pricing, Process)

---

## **MILESTONE 4: Homepage - Supporting Sections**
**Duration:** 1 day  
**Goal:** Complete homepage with social proof and CTAs

### **4.1 Industry Solutions Preview**
```
☐ Create IndustrySolutions component
  - File: app/components/sections/IndustrySolutions.jsx
  - Title: "Решения для вашего бизнеса"
  - Grid of 6 industry cards (2 rows x 3 cols):
    1. Салоны красоты (booking system)
    2. Строительство (lead magnet)
    3. Рестораны (reservations)
    4. E-commerce (abandoned cart)
    5. Профессиональные услуги (consultation booking)
    6. Местная розница (click-and-collect)
  - Each card: Icon/image, industry name, key feature
  - CTA: "Больше решений →" links to /web-development
  
☐ Add to homepage
```

### **4.2 Testimonials Section**
```
☐ Create Testimonials component
  - File: app/components/sections/Testimonials.jsx
  - Title: "Что говорят клиенты"
  - 3 testimonial cards:
    1. Salon owner (Russian)
       - Quote about 2x increase in bookings
       - Photo, name, business
    2. Construction company (Russian)
       - Quote about 10x more leads at same budget
       - Photo, name, business
    3. E-shop owner (Russian)
       - Quote about ROAS growth from 1.5 to 4.2
       - Photo, name, business
  - Use placeholder images for now (generate later)
  
☐ Add key metrics below testimonials
  - 50+ реализованных проектов
  - 3.5x средний рост конверсий
  - 15+ отраслей
  
☐ Add to homepage
```

### **4.3 Final CTA Section**
```
☐ Create FinalCTA component
  - File: app/components/sections/FinalCTA.jsx
  - Large, high-contrast section (navy or coral background)
  - Headline: "Готовы к измеримым результатам?"
  - Subheadline: "Бесплатная консультация + аудит вашей текущей ситуации"
  - Contact form OR consultation booking (decide which)
  - Alternative: Phone number + WhatsApp link
  
☐ Add to homepage (before footer)
```

### **4.4 Homepage Polish**
```
☐ Review spacing between sections
  - Ensure consistent padding (py-20)
  - Check visual hierarchy
  
☐ Add smooth scroll for anchor links
  - Install: npm install react-scroll
  - Or use native CSS: scroll-behavior: smooth
  
☐ Test mobile responsiveness
  - All sections stack properly
  - Buttons are large enough (touch targets)
  - Text is readable (not too small)
  
☐ Optimize images
  - Use Next.js Image component
  - Compress all images (<200KB)
  - Add proper alt text
```

**Milestone 4 Deliverable:** ✅ Complete homepage (all 8 sections), mobile responsive

---

## **MILESTONE 5: Web Development Page**
**Duration:** 1.5 days  
**Goal:** Build comprehensive web development service page

### **5.1 Page Setup & Hero**
```
☐ Create page file
  - File: app/web-development/page.js
  
☐ Create Hero section
  - Headline: "Сайты, которые продают. Не просто выглядят красиво."
  - Subheadline: "Ориентированы на конверсии, с аналитикой и автоматизацией для вашего конкретного бизнеса"
  - Visual: Before/After comparison or mockup
  - CTA: "Получить консультацию"
```

### **5.2 Philosophy Section**
```
☐ Create Philosophy component
  - Title: "Почему 'красивый сайт' недостаточно"
  - 3 principles (cards):
    1. Ориентированный на конверсии дизайн
    2. Построен для аналитики
    3. Специфические функции по отраслям
  - Each with icon, title, brief description
```

### **5.3 Industry Solutions (Detailed)**
```
☐ Create IndustrySolutionDetail component
  - File: app/components/sections/IndustrySolutionDetail.jsx
  - Reusable component for each industry
  - Props: industry, painPoint, features, automation, price, mockup
  
☐ Add 6 industry solutions:
  1. Салоны красоты
     - Features: Online booking, SMS confirmations, gallery
     - Automation: CRM entry, reminders, review requests
     - Price: 20,000-30,000 Kč
     
  2. Строительство и ремонт
     - Features: Project calculator, gallery, lead magnet
     - Automation: Lead → Email + CRM, follow-up sequence
     - Price: 25,000-35,000 Kč
     
  3. Рестораны и кафе
     - Features: Table reservation, online menu, events
     - Automation: Confirmation emails, menu updates
     - Price: 18,000-28,000 Kč
     
  4. E-commerce
     - Features: Full e-shop, product feeds, cart recovery
     - Automation: Abandoned cart emails, upsells
     - Price: 40,000-80,000 Kč
     
  5. Профессиональные услуги
     - Features: Professional design, consultation booking
     - Automation: Booking → Calendar, lead magnets
     - Price: 22,000-32,000 Kč
     
  6. Местная розница
     - Features: Store locator, click-and-collect, catalog
     - Automation: Promotions, stock notifications
     - Price: 18,000-28,000 Kč
```

### **5.4 Technical Features & Process**
```
☐ Create TechnicalFeatures component
  - Title: "Что вы получаете всегда"
  - 2 columns:
    - Core features (mobile-first, speed, SEO, GDPR)
    - Tracking ready (GA4, GTM, conversions)
    - Automation ready (email, CRM, SMS)
  
☐ Create TechnologyStack component
  - Title: "Современные технологии"
  - List: Next.js, Tailwind CSS, Payload CMS, etc.
  - Brief explanation of why it matters
  
☐ Create ProcessTimeline component
  - Week 1: Discovery & Design
  - Week 2: Development
  - Week 3: Testing & Launch
  - After: Support & maintenance
```

### **5.5 Pricing & CTA**
```
☐ Create WebDevPricing component
  - 3 tiers (cards):
    1. Landing Page (10,000-15,000 Kč, 1 week)
    2. Multi-page Website (20,000-35,000 Kč, 2-3 weeks)
    3. E-commerce (40,000-80,000 Kč, 4-6 weeks)
  - Each: Description, features, price, timeline, CTA
  
☐ Add FAQ section (accordion)
  - Common questions about web development
  - Pricing, timeline, maintenance, etc.
  
☐ Add final CTA
  - "Готовы получить сайт, который приносит клиентов?"
  - Contact form or booking button
```

**Milestone 5 Deliverable:** ✅ Complete Web Development page with 6 industry solutions

---

## **MILESTONE 6: Tracking & Analytics Page**
**Duration:** 1 day  
**Goal:** Build tracking/analytics service page with clear explanations

### **6.1 Page Setup & Hero**
```
☐ Create page file
  - File: app/tracking/page.js
  
☐ Create Hero section
  - Headline: "Без измерения нет результатов. Только догадки."
  - Subheadline: "Точная аналитика = знаете что работает = эффективная реклама = больше прибыли"
  - Visual: Dashboard showing clear attribution data
```

### **6.2 Problem Scenarios**
```
☐ Create ProblemScenarios component
  - Title: "Знаете это?"
  - 3 relatable scenarios (cards):
    1. "Трачу на рекламу, но не знаю, что приносит клиентов"
    2. "Google говорит 20 конверсий, Meta - 15, реальность - 8"
    3. "Кто-то позвонил, но не знаю откуда пришел"
  - Solution: Server-side tracking + proper attribution
```

### **6.3 Why Tracking Matters**
```
☐ Create WhyTracking component
  - Use driving analogy:
    - Bad tracking = driving blindfolded
    - Good tracking = GPS navigation
  - Visual comparison (2 columns)
  - Non-technical, easy to understand
```

### **6.4 What We Track**
```
☐ Create TrackingLevels component
  - 3 tiers (cards):
    1. Basic (minimum viable)
       - Page views, form submissions, traffic sources
    2. Advanced (recommended)
       - User journey, attribution, call tracking
    3. Pro (serious campaigns)
       - Server-side tracking, CLV, advanced attribution
  - Each with checklist of features
```

### **6.5 Attribution Explanation**
```
☐ Create AttributionProblem component
  - Title: "Почему рекламные платформы вас обманывают"
  - Visual: Customer journey diagram
  - Example: Google Ad → Facebook Ad → Direct → Purchase
  - Show conflicting platform claims
  - Explain server-side solution
```

### **6.6 Cross-Reference with Advertising**
```
☐ Create TrackingAdsCrossRef component
  - Title: "Аналитика не опциональна для рекламы"
  - 2 columns: Without tracking vs With tracking
  - Clear comparison of outcomes
  - CTA: "Поэтому мы требуем настройку аналитики перед запуском рекламы"
```

### **6.7 Case Study & Pricing**
```
☐ Create TrackingCaseStudy component
  - Real example: E-commerce store
  - Problem: Conflicting data (FB 50, Google 40, reality 30)
  - Solution: Server-side tracking
  - Result: 95% accuracy, discovered email driving 30% of "Facebook" sales
  
☐ Create TrackingPricing component
  - 3 tiers:
    1. Basic (5,000 Kč) - GA4, GTM, basic events
    2. Advanced (12,000 Kč) - Server-side, CAPI, enhanced conversions
    3. Enterprise (custom) - Data warehouse, custom dashboards
  - Optional monthly management (2,000 Kč/month)
  
☐ Add FAQ & CTA
```

**Milestone 6 Deliverable:** ✅ Complete Tracking & Analytics page with clear explanations

---

## **MILESTONE 7: Online Advertising Page**
**Duration:** 1.5 days  
**Goal:** Build advertising page with realistic expectations

### **7.1 Page Setup & Hero**
```
☐ Create page file
  - File: app/online-advertising/page.js
  
☐ Create Hero section
  - Headline: "Реклама на основе данных. Не на надежде."
  - Subheadline: "Google, Meta, TikTok - кампании с измеримым ROI и прозрачными результатами"
  - Visual: Real dashboard (anonymized metrics)
```

### **7.2 Our Approach**
```
☐ Create OurApproach component
  - Title: "Как мы работаем с рекламой"
  - 4 principles (cards):
    1. Данные в первую очередь (not guesswork)
    2. Инфраструктура необходима (fix foundation first)
    3. Реалистичные ожидания (not "triple revenue in 2 weeks")
    4. Прозрачная отчетность (business metrics, not vanity)
```

### **7.3 Platforms We Use**
```
☐ Create PlatformsOverview component
  - 3 platform sections:
    1. Google Ads
       - Best for: Search intent, local, B2B, e-commerce
       - What we run: Search, Performance Max, Shopping
       - Typical results: Lower volume, higher quality
       
    2. Meta Ads (Facebook/Instagram)
       - Best for: Visual products, B2C, retargeting
       - What we run: Feed, Stories/Reels, Lead gen
       - Typical results: Higher volume, need qualification
       
    3. TikTok Ads
       - Best for: Gen Z, trendy products, brand awareness
       - What we run: In-feed, Spark ads, Lead gen
       - Typical results: Experimental, specific niches
  - Note: Multi-platform approach recommended
```

### **7.4 Campaign Types**
```
☐ Create CampaignTypes component
  - 4 types (detailed cards):
    1. Lead Generation
       - Goal, good for, metrics tracked, timeline
    2. E-commerce / Sales
       - Goal, good for, metrics tracked, timeline
    3. Awareness / Traffic
       - Goal, good for, metrics tracked, timeline
    4. Retargeting
       - Goal, good for, metrics tracked, timeline
```

### **7.5 Our Process (MONTH-BY-MONTH)**
```
☐ Create AdsProcess component
  - Month 1: Testing & Foundation
    - Week 1-2: Campaign setup
    - Week 3-4: Testing phase
    - Goal: Find what works
    - Expected: Break-even or small loss (NORMAL)
    
  - Month 2-3: Optimization
    - Cut non-performers, scale winners
    - Goal: Improve efficiency
    - Expected: Positive ROI, improving metrics
    
  - Month 4+: Scaling
    - Increased budgets, expand audiences
    - Goal: Predictable, profitable growth
    - Expected: Stable, growing revenue
```

### **7.6 Realistic Expectations (CRITICAL SECTION)**
```
☐ Create RealisticExpectations component
  - Title: "Что ожидать - честно"
  - ⚠️ THIS IS THE MOST IMPORTANT SECTION ⚠️
  
  - Month 1: Learning Phase
    - Reality: Break-even or small loss
    - Cost per lead: Higher than target
    - ROAS: 1.0-1.5x (not profitable yet)
    - "DON'T panic if not profitable week 1. Algorithms need data."
    
  - Month 2-3: Optimization Phase
    - Reality: Metrics improve
    - Cost per lead: Approaching target
    - ROAS: 2.0-3.0x (becoming profitable)
    
  - Month 4+: Scaling Phase
    - Reality: Predictable, profitable growth
    - Cost per lead: Stable at target or better
    - ROAS: 3.0-5.0x (varies by industry)
    
  - What can go wrong + What we DON'T promise vs DO promise
  
  - Visual: Month-by-month chart showing typical trajectory
```

### **7.7 Case Studies**
```
☐ Create AdsCaseStudies component
  - 3 real/realistic examples:
    1. Hair Salon (Prague)
       - Budget: 12,000 Kč/month
       - Month 1-4 progression
       - Final: 35 leads at 342 Kč/lead, 7.3x ROI
       
    2. Construction Company
       - Budget: 25,000 Kč/month
       - Lead qualification key insight
       - Final: 13 qualified leads at 1,442 Kč/lead
       
    3. E-commerce (Fashion)
       - Budget: 40,000 Kč/month
       - Month 1 loss, Month 3 profit
       - Final: ROAS 3.9x
```

### **7.8 Pricing & Requirements**
```
☐ Create AdsPricing component
  - 3 pricing models:
    1. Percentage of ad spend (15-20%, min 6,000 Kč/month)
    2. Fixed monthly fee (8,000-15,000 Kč/month)
    3. Setup only (10,000-15,000 Kč one-time)
  - Minimum commitment: 3 months
  - Minimum ad spend: Google 15k, Meta 10k, TikTok 15k
  
☐ Create Requirements component
  - Must have: Website, tracking, clear offer, 3-month commitment
  - Nice to have: Previous data, brand materials, testimonials
  - We might decline if: Unrealistic expectations, below minimum budget
  
☐ Add FAQ & CTA
```

**Milestone 7 Deliverable:** ✅ Complete Online Advertising page with realistic expectations

---

## **MILESTONE 8: Contact Forms & Lead Capture**
**Duration:** 1 day  
**Goal:** Functional forms that save leads and send emails

### **8.1 Contact Form Component**
```
☐ Create ContactForm component
  - File: app/components/forms/ContactForm.jsx
  - Fields:
    - Имя (required, text)
    - Email (required, email validation)
    - Телефон (required, +420 format accepted)
    - Что вас интересует? (select: Сайт, Реклама, Аналитика, Всё вместе)
    - Сообщение (textarea, optional)
  
☐ Add validation with Zod
  - File: app/lib/validation.js
  - Schema for contact form
  - Russian error messages
  
☐ Implement with React Hook Form
  - Client-side validation
  - Error messages display
  - Loading state
  - Success state
```

### **8.2 Form Submission API Route**
```
☐ Create API endpoint
  - File: app/api/contact/route.js
  - POST handler
  
☐ Implement server-side validation
  - Validate with Zod schema
  - Sanitize inputs
  - Rate limiting (prevent spam)
  
☐ Save to temporary storage
  - For now: Log to console or save to JSON file
  - Later: Save to Payload CMS (Milestone 9)
  
☐ Send email via Resend
  - Sign up for Resend account (free tier)
  - Get API key
  - Add to .env.local: RESEND_API_KEY=...
  - Create email template
  - Send to artem@haloagency.cz (or your email)
  - Include: Name, email, phone, interest, message, timestamp
  
☐ Return success/error response
  - Success: { success: true, message: "Спасибо! Мы свяжемся с вами в течение 24 часов." }
  - Error: { success: false, error: "Произошла ошибка. Попробуйте позже." }
```

### **8.3 Thank You Page**
```
☐ Create thank you page
  - File: app/thank-you/page.js
  - Headline: "Спасибо за обращение!"
  - Message: "Мы получили ваше сообщение и свяжемся с вами в течение 24 часов."
  - Next steps: "Тем временем, вы можете:"
    - Прочитать о наших услугах
    - Посмотреть кейсы (when available)
    - Подписаться на блог (when available)
  - CTA back to homepage or services
```

### **8.4 Add Forms to Pages**
```
☐ Add ContactForm to FinalCTA section (homepage)
☐ Add ContactForm to all service pages (end of page)
☐ Test form submissions
  - Fill form → Submit → Check email received → Thank you page
☐ Test validation
  - Empty fields → Error messages
  - Invalid email → Error message
  - Invalid phone → Error message
```

**Milestone 8 Deliverable:** ✅ Functional contact forms, email notifications, thank you page

---

## **MILESTONE 9: Analytics & Tracking Setup**
**Duration:** 0.5 days  
**Goal:** Implement GA4, GTM, and conversion tracking

### **9.1 Google Tag Manager Setup**
```
☐ Create GTM account
  - Go to tagmanager.google.com
  - Create account: HaloAgency
  - Create container: HaloAgency.cz (Web)
  - Get container ID (GTM-XXXXXXX)
  
☐ Install GTM in Next.js
  - Add GTM script to app/layout.js
  - Add both <head> and <body> snippets
  - Add to .env.local: NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
  
☐ Verify GTM installation
  - Use GTM Preview mode
  - Check GTM loads on all pages
```

### **9.2 Google Analytics 4 Setup**
```
☐ Create GA4 property
  - Go to analytics.google.com
  - Create property: HaloAgency.cz
  - Get Measurement ID (G-XXXXXXXXXX)
  
☐ Configure GA4 tag in GTM
  - New tag: Google Analytics: GA4 Configuration
  - Measurement ID: G-XXXXXXXXXX
  - Trigger: All Pages
  - Publish container
  
☐ Verify GA4 tracking
  - Check Realtime report in GA4
  - Visit site → Should see yourself in Realtime
```

### **9.3 Conversion Tracking**
```
☐ Create GA4 Events in GTM
  - Event 1: form_submit (contact form)
    - Trigger: Form submission
    - Event parameters: form_type, form_location
    
  - Event 2: button_click (CTA buttons)
    - Trigger: Click on coral buttons
    - Event parameters: button_text, button_location
    
  - Event 3: page_view_time (engagement)
    - Trigger: Timer (after 30 seconds)
    
☐ Test events
  - Use GTM Preview mode
  - Submit form → Check event fires
  - Click buttons → Check event fires
  - Verify events in GA4 DebugView
  
☐ Mark key events as conversions in GA4
  - Go to Admin → Events
  - Mark form_submit as conversion
```

### **9.4 Cookie Consent (GDPR)**
```
☐ Option A: Simple cookie banner
  - Use a free library (react-cookie-consent)
  - Basic accept/decline
  - Store preference in localStorage
  
☐ Link to Privacy Policy
  - Create basic privacy policy page
  - File: app/privacy-policy/page.js
  - Use template (or AI-generate)
```

**Milestone 9 Deliverable:** ✅ GA4 tracking, conversion events, cookie consent

---

## **MILESTONE 10: Content & Images**
**Duration:** 1-2 days  
**Goal:** Add all real content and images

### **10.1 Content Writing**
```
☐ Review all placeholder text
  - Homepage: All sections
  - Web Development: All industry solutions, descriptions
  - Tracking: All explanations
  - Online Advertising: All sections, especially Realistic Expectations
  
☐ Ensure consistent tone
  - Friendly, professional, honest
  - Russian language (proper grammar)
  - Short sentences, active voice
  - No marketing jargon
  
☐ Add CTAs consistently
  - Every section should have clear next step
  - Vary CTA text (not always "Получить консультацию")
  
☐ Proofread everything
  - Check spelling (Russian)
  - Check grammar
  - Check links work
```

### **10.2 Image Generation**
```
☐ Sign up for Leonardo.ai (free tier)
  
☐ Generate images needed:
  - Hero background (abstract, tech-inspired, navy tones)
  - Dashboard mockup (analytics, modern UI)
  - Industry solution images (6):
    1. Hair salon interior
    2. Construction site/tools
    3. Restaurant interior
    4. E-commerce products
    5. Professional office
    6. Retail store
  - Testimonial photos (3 diverse people)
  
☐ Download and optimize images
  - Resize to appropriate dimensions
  - Compress to <200KB each (use TinyPNG)
  - Save to public/images/ with descriptive names
  
☐ Add alt text to all images
  - Descriptive, helpful for accessibility and SEO
```

### **10.3 Logo & Branding**
```
☐ Create or finalize HaloAgency logo
  - Option A: Design in Canva (simple, text-based)
  - Option B: Use AI (Leonardo/Midjourney for logo concepts)
  
☐ Logo requirements:
  - Works in navy and white versions
  - Scalable (SVG format)
  - Clear at small sizes (favicon)
  - Professional, modern
  
☐ Create favicon
  - 32x32px, 16x16px versions
  - Place in app/favicon.ico
```

### **10.4 Replace Placeholder Content**
```
☐ Update all images
  - Replace placeholder images with real ones
  - Use Next.js Image component everywhere
  - Set proper width/height (prevent layout shift)
  - Add loading="lazy" for below-fold images
  
☐ Update testimonials
  - Replace generic names with realistic ones
  - Add placeholder photos (or generate faces)
  - Ensure quotes sound authentic
```

**Milestone 10 Deliverable:** ✅ All content written in Russian, all images in place

---

## **MILESTONE 11: SEO Optimization**
**Duration:** 0.5 days  
**Goal:** Optimize for search engines

### **11.1 Metadata & Tags**
```
☐ Update metadata for each page
  - File: Each page.js file
  - Add export const metadata = { ... }
  
☐ Homepage metadata
  - Title: "HaloAgency - Прибыльная онлайн-реклама | Прага"
  - Description: "Сайты, аналитика и реклама на основе данных..."
  
☐ Service pages metadata
  - Web Development: "Разработка сайтов Прага | Современные сайты..."
  - Tracking: "Аналитика и трекинг | GA4, server-side трекинг..."
  - Advertising: "Онлайн реклама Прага | Google Ads, Meta Ads..."
  
☐ Add Open Graph tags
  - og:title, og:description, og:image
```

### **11.2 Structured Data**
```
☐ Add Organization schema
  - File: app/layout.js (in <head>)
  - JSON-LD format
  - Include: name, url, logo, address, sameAs
  
☐ Validate structured data
  - Use: schema.org validator
```

### **11.3 Technical SEO**
```
☐ Create robots.txt
  - File: public/robots.txt
  - Allow all, sitemap link
  
☐ Generate sitemap.xml
  - Next.js can generate automatically
  - Or create manually: public/sitemap.xml
  
☐ Submit to Google Search Console
  - Verify domain ownership
  - Submit sitemap
```

**Milestone 11 Deliverable:** ✅ SEO-optimized site, submitted to Google Search Console

---

## **MILESTONE 12: Performance Optimization & Testing**
**Duration:** 1 day  
**Goal:** Optimize performance, fix bugs, test thoroughly

### **12.1 Performance Optimization**
```
☐ Run Lighthouse audit
  - Chrome DevTools → Lighthouse
  - Generate report for all main pages
  - Note scores
  
☐ Optimize images
  - Ensure all use Next.js Image component
  - Check sizes (width/height props set)
  - Add priority to hero images
  
☐ Target achieved: Lighthouse >90 on all pages
```

### **12.2 Cross-Browser Testing**
```
☐ Test in Chrome (primary)
☐ Test in Safari
☐ Test in Firefox
☐ Test in Edge
```

### **12.3 Mobile Testing**
```
☐ Test on iOS Safari
☐ Test on Android Chrome
☐ Check responsive breakpoints
```

### **12.4 Form Testing**
```
☐ Test contact form thoroughly
  - Empty submission → Error messages
  - Invalid email → Error message
  - Valid submission → Success → Email received
  
☐ Test form on mobile
```

**Milestone 12 Deliverable:** ✅ Optimized, tested, bug-free site ready for launch

---

## **MILESTONE 13: Pre-Launch & Launch**
**Duration:** 0.5 days  
**Goal:** Final checks and go live

### **13.1 Pre-Launch Checklist**
```
Content:
☐ All copy proofread (Russian)
☐ All images optimized
☐ All links work
☐ Contact info correct

Technical:
☐ Forms tested and working
☐ Email notifications working
☐ Analytics tracking verified
☐ Mobile responsive
☐ Performance optimized
☐ SEO metadata complete
☐ SSL certificate active
```

### **13.2 Launch Day**
```
☐ Final test on staging
☐ Merge to main branch
☐ Verify production deployment
☐ Test live site
☐ Announce launch
☐ Monitor for issues
```

**Milestone 13 Deliverable:** ✅ Live website at haloagency.cz 🎉

---

## **ESTIMATED TIME TO COMPLETE**

### **With Claude Code (Accelerated):**
```
Week 1: Milestones 1-7 (Setup through all pages)
Week 2: Milestones 8-11 (Forms, Analytics, Content, SEO)
Week 3: Milestones 12-13 (Testing, Launch)

Total: 3 weeks with AI assistance
```

---

**END OF TASKS.MD**
