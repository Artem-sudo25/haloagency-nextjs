# **PLANNING.md - HaloAgency.cz Website**

---

## **PROJECT VISION**

### **Mission Statement**
Build a high-converting marketing agency website that positions HaloAgency as the go-to solution for Russian/Ukrainian entrepreneurs in Prague who want profitable online advertising backed by proper infrastructure (web + tracking + ads).

### **Core Objectives**
1. **Establish Authority** - Demonstrate expertise through honest, data-driven messaging
2. **Generate Leads** - Convert visitors into consultation bookings at 3%+ rate
3. **Differentiate** - Stand out from competitors through transparency and realistic expectations
4. **Showcase Capability** - The website itself proves we can build high-quality web properties
5. **Enable Scalability** - Architecture supports future Czech/English translations and feature additions

### **Success Criteria**
- **Technical:** Lighthouse score >90, load time <2s, mobile-perfect
- **Business:** 10+ consultation bookings in first month post-launch
- **User Experience:** <50% bounce rate, >2min avg session duration
- **SEO:** Ranking for "онлайн реклама прага", "разработка сайтов прага" within 3 months

### **Target Audience Profile**
**Primary Persona: "Владимир, Small Business Owner"**
- Age: 35-50 years old
- Location: Prague (Russian/Ukrainian immigrant)
- Business: Small-medium (salon, restaurant, construction, e-commerce)
- Tech level: Medium-low (uses smartphone, basic computer skills)
- Pain: Tried online advertising before, wasted money, got no results
- Goal: Get more customers through internet, understand what he's paying for
- Budget: 25,000-50,000 Kč/month (total: ads + management)

---

## **ARCHITECTURE OVERVIEW**

### **System Architecture**

```
┌─────────────────────────────────────────────────────────────┐
│                        USER DEVICES                          │
│  (Desktop, Mobile, Tablet - Chrome, Safari, Firefox)        │
└────────────────────┬────────────────────────────────────────┘
                     │
                     │ HTTPS
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                    CDN LAYER (Cloudflare)                    │
│  - Global edge caching                                       │
│  - DDoS protection                                           │
│  - SSL/TLS termination                                       │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│               FRONTEND HOSTING (Vercel/Cloudflare)          │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │         Next.js 16 Application                     │    │
│  │  - React 19 Server Components                      │    │
│  │  - Static Site Generation (SSG)                    │    │
│  │  - API Routes for forms                            │    │
│  │  - Optimized images (Next/Image)                   │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
└────┬─────────────────────────────────────────────────┬──────┘
     │                                                  │
     │ API Calls                                        │ Form Submissions
     ▼                                                  ▼
┌─────────────────────────┐              ┌──────────────────────────┐
│   BACKEND SERVICES      │              │   EMAIL SERVICE          │
│   (Hetzner VPS)         │              │   (Resend.com)           │
│                         │              │                          │
│  ┌──────────────────┐  │              │  - Form notifications    │
│  │  Payload CMS     │  │              │  - Auto-responders       │
│  │  (Node.js)       │  │              │  - Transactional emails  │
│  │  Port: 3000      │  │              └──────────────────────────┘
│  └────────┬─────────┘  │
│           │             │
│  ┌────────▼─────────┐  │
│  │    MongoDB       │  │
│  │  Port: 27017     │  │
│  └──────────────────┘  │
│                         │
│  Access via:            │
│  admin.haloagency.cz    │
└─────────────────────────┘
           │
           │ Reverse Proxy
           ▼
     ┌─────────────┐
     │   Nginx     │
     │  Port: 80   │
     │  (SSL: 443) │
     └─────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    ANALYTICS & TRACKING                      │
│                                                              │
│  ┌────────────┐  ┌────────────┐  ┌─────────────┐          │
│  │ Google     │  │   Meta     │  │  PostHog    │          │
│  │ Analytics  │  │   Pixel    │  │  (Optional) │          │
│  │ (GA4)      │  │            │  │             │          │
│  └────────────┘  └────────────┘  └─────────────┘          │
│                                                              │
│  All managed via Google Tag Manager (GTM)                   │
└─────────────────────────────────────────────────────────────┘
```

---

## **TECHNOLOGY STACK**

### **Frontend Technologies**

#### **Core Framework**
```
Next.js 16.0.0
├── React 19 (stable)
├── App Router (not Pages Router)
├── Server Components (default)
├── Static Site Generation (SSG)
└── Incremental Static Regeneration (ISR)

Why: 
- Latest features (React 19, async APIs)
- Best performance (server components)
- SEO-friendly (static generation)
- Future-proof (cutting edge)
```

#### **Styling**
```
Tailwind CSS 3.4+
├── JIT compiler (fast builds)
├── Custom color palette (navy, coral, gold)
├── Responsive utilities
└── Custom plugins (if needed)

Why:
- Rapid development
- Consistent design system
- Small bundle size
- Easy to customize
```

#### **Component Library**
```
Shadcn/ui (latest)
├── Radix UI primitives
├── Tailwind-based
├── Accessible by default
└── Copy-paste components

Components to use:
- Button, Card, Input, Textarea, Label
- Dialog, Accordion, Tabs (as needed)
- Select, Checkbox, Radio (forms)

Why:
- Not a dependency (copy-paste model)
- Full control over code
- Accessible out of the box
- Works perfectly with Tailwind
```

#### **Forms**
```
React Hook Form 7.x
├── Minimal re-renders
├── Built-in validation
├── TypeScript support
└── Small bundle size

Zod (validation schemas)
├── Type-safe validation
├── Works with React Hook Form
└── Clear error messages

Why:
- Best performance (uncontrolled forms)
- Easy validation
- Great developer experience
```

---

### **Backend Technologies**

#### **CMS**
```
Payload CMS 2.x
├── Node.js/Express backend
├── MongoDB database
├── REST & GraphQL APIs
├── Media management
└── Admin UI

Why:
- Modern, developer-friendly
- Self-hosted (data ownership)
- TypeScript support
- Flexible content modeling
- One-time cost (no monthly SaaS fees)
```

#### **Database**
```
MongoDB 7.x
├── Document-based
├── Flexible schema
├── Fast queries
└── Easy scaling

Why:
- Works perfectly with Payload CMS
- Flexible (no rigid schema)
- Good for content storage
- Easy to backup
```

#### **Email Service**
```
Resend
├── Modern email API
├── React email templates
├── Great deliverability
└── Simple pricing

Why:
- Better than SendGrid/Mailgun (modern API)
- React email templates (consistency)
- Free tier: 3,000 emails/month (enough)
- Great developer experience
```

---

### **Infrastructure & Hosting**

#### **Frontend Hosting**
```
Option 1: Vercel (Primary)
├── Auto-deploy from GitHub
├── Preview deployments
├── Edge network (global CDN)
├── Free SSL
├── Web Analytics (built-in)
└── FREE tier sufficient

Option 2: Cloudflare Pages (Backup)
├── Unlimited bandwidth (FREE)
├── Faster edge network
├── Auto-deploy from GitHub
└── FREE tier sufficient

Choice: Vercel (easier Next.js integration)
```

#### **Backend Hosting (CMS)**
```
Hetzner VPS CX22
├── 2 vCPU cores
├── 4GB RAM
├── 40GB SSD storage
├── 20TB bandwidth
└── €4.51/month (~120 CZK)

Location: Germany (Falkenstein datacenter)
OS: Ubuntu 24.04 LTS

Why:
- Cheapest quality VPS in Europe
- Close to Prague (low latency)
- Reliable (99.9% uptime)
- Can host multiple CMS instances (for future clients)
```

---

### **Development Tools**

#### **AI-Powered Development**
```
Claude Code (Primary)
├── Autonomous coding agent
├── Terminal-based
├── Multi-file edits
├── Self-fixing errors
└── Free during beta

Usage: Main development tool for feature building

---

v0.dev by Vercel
├── AI component generator
├── Shadcn/ui integration
├── Tailwind CSS output
└── Free tier: 200 credits/month

Usage: Generate UI components quickly

---

Cursor (Optional)
├── AI code editor (VS Code fork)
├── Cmd+K inline editing
├── Chat with codebase
└── $20/month (or free trial)

Usage: Polish and refine, visual coding
```

---

### **Design & Media Tools**

#### **Image Generation**
```
Option 1: Leonardo.ai
├── AI image generation
├── FREE tier available
├── Commercial use allowed
└── Good for hero images, mockups

Option 2: Midjourney
├── Best quality AI images
├── $10/month
└── Great for professional photos

Choice: Leonardo.ai (free to start)
```

---

## **REQUIRED TOOLS & ACCOUNTS**

### **Essential (Must Have)**

#### **Development:**
```
☐ Node.js 20+ installed
☐ npm or pnpm installed
☐ Git installed
☐ VS Code or Cursor installed
☐ Claude Code installed (npm install -g @anthropic-ai/claude-code)
```

#### **Accounts:**
```
☐ GitHub account (free)
☐ Anthropic API key (for Claude Code)
☐ v0.dev account (free tier)
☐ Vercel account (free tier)
☐ Resend account (free tier - 3,000 emails/month)
☐ Google Account (for GA4, GTM)
```

#### **Infrastructure:**
```
☐ Hetzner VPS CX22 (€4.51/month)
☐ Domain: haloagency.cz (owned/purchased)
☐ Cloudflare account (for DNS, free)
```

---

### **Recommended (Highly Beneficial)**

```
☐ Cursor license ($20/month) - if not using just VS Code
☐ Leonardo.ai account (free tier for images)
☐ Canva Pro account (~300 CZK/month for graphics)
☐ ChatGPT Plus ($20/month for DALL-E, better prompts)
☐ PostHog account (free tier for session recordings)
☐ Sentry account (free tier for error tracking)
☐ UptimeRobot account (free for uptime monitoring)
```

---

## **ENVIRONMENT VARIABLES**

### **Frontend (.env.local)**
```bash
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=123456789

# Email
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# CMS
PAYLOAD_API_URL=https://admin.haloagency.cz
PAYLOAD_API_KEY=xxxxxxxxxxxxxxxx

# Optional
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxxxxxxxxx
SENTRY_DSN=https://xxxxx@sentry.io/xxxxx
```

### **Backend (Payload CMS on VPS)**
```bash
# MongoDB
MONGODB_URI=mongodb://localhost:27017/haloagency

# Server
PORT=3000
PAYLOAD_SECRET=your-super-secret-key-here

# Email (for password resets, etc.)
SMTP_HOST=smtp.resend.com
SMTP_PORT=587
SMTP_USER=resend
SMTP_PASS=re_xxxxxxxxxxxx

# Frontend URL (for CORS)
PAYLOAD_PUBLIC_SERVER_URL=https://admin.haloagency.cz
PAYLOAD_PUBLIC_FRONTEND_URL=https://haloagency.cz
```

---

## **DEVELOPMENT WORKFLOW**

### **Daily Development Workflow**

#### **Starting Work:**
```bash
# 1. Pull latest changes
git pull origin main

# 2. Start local dev server
npm run dev
# Open: http://localhost:3000

# 3. Start Claude Code session
# Read CLAUDE.md for context
# Start building features
```

#### **Using Claude Code:**
```bash
# Example: Add a new section
claude-code "Add testimonials section to homepage. 
Show 3 client quotes with photos, names, businesses, and ratings. 
Use Shadcn Card component. Match existing design system (navy/coral colors). 
Content in Russian."

# Claude Code will:
# - Create Testimonials.jsx component
# - Add to homepage
# - Style with Tailwind
# - Test and verify
```

#### **Using v0.dev:**
```
1. Go to v0.dev
2. Describe component in detail:
   "Create a pricing table with 3 tiers for a marketing agency.
   Show package name, price in CZK, feature list with checkmarks,
   and CTA button. Highlight middle tier as 'Recommended'.
   Colors: Navy #1E3A5F, Coral #FF6B6B, Gold #F7B731.
   Russian language. Modern design. Tailwind CSS + Shadcn components."

3. Copy generated code
4. Paste into your project
5. Customize as needed
```

---

## **DEPLOYMENT STRATEGY**

### **Environments**

```
1. Development (Local)
   - URL: http://localhost:3000
   - Purpose: Active development
   - Database: Local MongoDB (optional)

2. Staging (Vercel Preview)
   - URL: haloagency-git-develop.vercel.app
   - Purpose: Testing before production
   - Database: Connects to production CMS (or separate staging DB)

3. Production
   - URL: https://haloagency.cz
   - Purpose: Live site for users
   - Database: Production MongoDB on VPS
```

---

### **Deployment Process**

#### **Automatic Deployment (Recommended):**
```
1. Push to GitHub main branch
   git push origin main

2. Vercel automatically:
   - Detects push
   - Runs build
   - Deploys to production
   - Updates haloagency.cz

3. Check deployment:
   - Vercel dashboard shows status
   - Test live site
   - Check analytics
```

---

## **MAINTENANCE & UPDATES**

### **Regular Maintenance Tasks**

#### **Weekly:**
```
☐ Check Vercel deployment status
☐ Review error logs (Sentry)
☐ Check form submissions (Payload CMS)
☐ Monitor uptime (UptimeRobot)
☐ Review analytics (GA4)
```

#### **Monthly:**
```
☐ Update dependencies (npm update)
☐ Security audit (npm audit)
☐ Backup MongoDB database
☐ Review performance (Lighthouse)
☐ Check broken links
☐ Review SEO rankings
```

---

## **SECURITY CONSIDERATIONS**

### **Frontend Security:**
```
✓ HTTPS only (forced by Vercel)
✓ Content Security Policy (CSP) headers
✓ No sensitive data in client code
✓ Input validation (Zod schemas)
✓ XSS protection (React escapes by default)
✓ CSRF protection (Next.js built-in)
```

### **Backend Security (VPS):**
```
✓ Firewall (ufw) - allow only 80, 443, 22
✓ SSH key authentication (disable password)
✓ Fail2ban (prevent brute force)
✓ MongoDB authentication enabled
✓ Regular security updates (unattended-upgrades)
✓ Nginx rate limiting
✓ SSL certificates (auto-renewed by Certbot)
```

---

## **PERFORMANCE OPTIMIZATION**

### **Target Metrics:**
```
Lighthouse Performance: >90
First Contentful Paint (FCP): <1.5s
Largest Contentful Paint (LCP): <2.5s
Cumulative Layout Shift (CLS): <0.1
Time to Interactive (TTI): <3.5s
```

### **Optimization Techniques:**

#### **Images:**
```
✓ Next.js Image component (automatic optimization)
✓ WebP format (automatic conversion)
✓ Lazy loading (below fold)
✓ Responsive images (srcset)
✓ Compress before upload (<200KB target)
```

#### **JavaScript:**
```
✓ Server Components (default in Next.js 16)
✓ Code splitting (automatic)
✓ Tree shaking (remove unused code)
✓ Dynamic imports for heavy components
✓ Minimize client-side JavaScript
```

---

## **COST BREAKDOWN**

### **Monthly Fixed Costs:**
```
Essential:
Hetzner VPS CX22         €4.51  (~120 CZK)
Domain (yearly/12)       €1.00  (~25 CZK)
Total Essential:         €5.51  (~145 CZK/month)

Recommended:
Resend (if >3k emails)   $0-20  (~0-500 CZK)
Cursor                   $20    (~500 CZK)
Leonardo.ai Pro          $0-12  (~0-300 CZK)
Total Recommended:                ~500-1300 CZK/month

TOTAL RANGE: 145 - 1,800 CZK/month
(Realistic for starting: ~650-1000 CZK/month)
```

---

## **SUCCESS METRICS & KPIs**

### **Technical Performance:**
```
Metric                          Target    How to Measure
─────────────────────────────────────────────────────────
Lighthouse Performance          >90       Chrome DevTools
Page Load Time                  <2s       GTM/GA4
First Contentful Paint          <1.5s     Vercel Analytics
Uptime                          >99.5%    UptimeRobot
Mobile Usability Score          100       Google Search Console
```

### **User Engagement:**
```
Metric                          Target    How to Measure
─────────────────────────────────────────────────────────
Bounce Rate                     <50%      GA4
Avg Session Duration            >2min     GA4
Pages per Session               >2.5      GA4
Form Submission Rate            >3%       GA4 Goals
Consultation Booking Rate       >1%       GA4 Goals
```

### **Business Goals:**
```
Metric                          Month 1   Month 3   Month 6
──────────────────────────────────────────────────────────
Consultation Bookings           5-10      15-20     30+
Organic Traffic                 100+      300+      1000+
Backlinks                       5+        15+       30+
Blog Posts Published            3         10        20
Email Subscribers               20+       50+       150+
```

---

## **TIMELINE & MILESTONES**

### **Week 1: Foundation**
```
Day 1-2: Setup & Configuration
Day 3-5: Design System & Homepage Start
Day 6-7: Homepage Completion

Milestone: Homepage 80% complete, deployed to staging
```

### **Week 2: Service Pages**
```
Day 8-9: Web Development Page
Day 10-11: Tracking & Analytics Page
Day 12-13: Online Advertising Page
Day 14: Polish & Connect

Milestone: All 4 main pages complete
```

### **Week 3: Features & Launch Prep**
```
Day 15-16: Payload CMS Setup
Day 17-18: Forms & Tracking
Day 19-20: Content & Polish
Day 21: Launch Prep

Milestone: Ready for launch
```

### **Week 4: Launch & Iterate**
```
Day 22: Launch Day
Day 23-28: Post-Launch

Milestone: Live, stable, optimized site
```

---

## **HELPFUL RESOURCES**

#### **Documentation:**
```
Next.js:         https://nextjs.org/docs
React:           https://react.dev
Tailwind CSS:    https://tailwindcss.com/docs
Shadcn/ui:       https://ui.shadcn.com
Payload CMS:     https://payloadcms.com/docs
Vercel:          https://vercel.com/docs
```

---

**END OF PLANNING.MD**

---

This planning document provides the complete technical blueprint for building HaloAgency.cz. Reference this alongside CLAUDE.md during development to maintain architectural consistency and follow best practices.
