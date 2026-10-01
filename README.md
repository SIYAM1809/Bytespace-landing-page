# ByteSpace — Online Learning & Creator Platform

> **Frontend Engineering Assessment Submission**  
> **Candidate:** Md. Aman Uddin Siyam  
> **Position:** Jr. Software Engineer (Frontend)  
> **Company:** Doin Tech Limited  
> **Tracking ID:** `8d6959d5-c114-48b6-99fd-236bfd4eef04`

---

## 🌟 Live Demo & Repository
- **Live Vercel URL:** [Deploying to Vercel...]
- **GitHub Repository:** [https://github.com/SIYAM1809/Bytespace-landing-page](https://github.com/SIYAM1809/Bytespace-landing-page)
- **Figma Reference:** [ByteSpace New Check website](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website)

---

## 🎯 Scope of Work Completed
The assessment requested the **Landing Page (Required)** and **Login & Signup pages (Bonus Extra Credit)**.  
To demonstrate frontend proficiency, design-system fidelity, and full-stack architecture thinking, **all 9 pages and frames from the Figma design have been fully implemented**:

1. **Home (`/`)**:
   - `1440px` hero on Persian Blue (`#003BE2`) with 120px repeating line grid at 12% opacity.
   - 202px Shuttle Gray (`#F5F5F6`) partner logo showcase with genuine SVG logos (Slack, Netflix, Fitbit, Google, Airbnb, Uber).
   - Category exploration tabs & course cards grid.
   - Growth metric section & high-converting Course Creator CTA.
   - Student testimonials and full semantic footer.
2. **Login (`/signin`)** *(Bonus Extra Credit)*:
   - `1440×1024px` artboard with Persian Blue background and 120px line grid.
   - Visual course card mockups + floating lime "Happy Students" card.
   - `579×784px` white card with input validation, right-aligned `104×46px` lime submit button, "or" divider, and `72×72px` social login buttons.
3. **Register (`/signup`)** *(Bonus Extra Credit)*:
   - `1440×1024px` artboard with matching design system and layout.
   - Full Name, Email, and Password fields with dynamic client-side validation.
   - Right-aligned `123×46px` lime "Continue" button and quick switch link.
4. **Search & Filter Page (`/search`)**:
   - `1440×360px` blue hero with course search bar and "Courses" type dropdown.
   - `1201×48px` filter & sorting bar (Filter, Level, Category, Sort dropdown).
   - `1200×43px` category pill tabs with active lime highlighting.
   - Dynamic client-side course filtering and interactive `314×48px` pagination.
5. **Course Details (`/course/:id`) — About Tab**:
   - Instructor sidebar with price card and guarantees.
   - Course preview thumbnails (`167×125px`, 40px gap).
   - "What you'll learn" checklist with custom green check icons.
6. **Course Lessons (`/course/:id`) — Lessons Tab**:
   - Course curriculum accordion and lesson breakdown.
   - `72×72px` (24px radius) icon box, duration badges, and progress tracking.
7. **Course Reviews (`/course/:id`) — Reviews Tab**:
   - Visual rating breakdown bars matching exact proportional widths.
   - Verified student reviews with avatar rings and feedback cards.
8. **Creator Profile (`/creator/:id`)**:
   - `96×96px` (24px radius) creator avatar with verified `103×35px` Creator badge.
   - Creator bio, white stat counter pills (3 Products, 12 Followers), and lime Follow button.
   - Creator's published courses grid with level and category filters.
9. **404 Not Found (`/*`)**:
   - Giant 480px `#D4FB20` gradient typography and seamless "Back to Home" navigation.

---

## 🛠️ Technology Stack
- **Framework:** React 19 + Vite 8 (Ultra-fast HMR and bundle optimization)
- **Routing:** React Router v7 with dynamic parameterized routes
- **Styling:** CSS Modules with CSS custom properties design tokens (`index.css`)
- **Typography:** Google Fonts (`Poppins`, `Satoshi`, `Clash Display`) matching Figma specifications
- **Linter & Code Quality:** Oxlint (0 warnings, 0 errors)
- **Deployment Platform:** Vercel (configured with `vercel.json` SPA rewrites)

---

## 📂 Project Architecture
```
src/
├── assets/                  # Hero and promotional graphics
├── components/
│   ├── AuthLayout/          # Shared 2-column layout for SignIn and SignUp
│   ├── Categories/          # Category exploration pills and grid
│   ├── Courses/             # Reusable CourseCard and course grid
│   ├── CreatorCTA/          # Become a Creator call-to-action
│   ├── CreatorSection/      # Featured creator spotlight
│   ├── Footer/              # Multi-column footer and copyright bar
│   ├── GrowthSection/       # Growth statistics & platform metrics
│   ├── Hero/                # Homepage hero with floating cards
│   ├── Logos/               # Partner brand logos banner
│   ├── Navbar/              # Navigation bar with responsive drawer
│   └── Testimonials/        # Student reviews carousel/grid
├── pages/
│   ├── CourseDetails/       # Tabs: About, Lessons, Reviews
│   ├── CreatorProfile/      # Creator header, stats, and courses
│   ├── NotFound/            # 404 error page
│   ├── SearchPage/          # Course search, filters, and pagination
│   ├── SignIn/              # Login form
│   └── SignUp/              # Registration form
├── App.jsx                  # Main route configuration
├── index.css                # Global tokens and reset
└── main.jsx                 # Entry point
```

---

## 🚀 Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SIYAM1809/Bytespace-landing-page.git
   cd Bytespace-landing-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Run code quality check:**
   ```bash
   npm run lint
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 👨‍💻 Candidate Note for Reviewer
Thank you for evaluating this submission for the Jr. Software Engineer (Frontend) role at Doin Tech Limited. Every detail was implemented with extreme attention to Figma specifications, responsive breakpoints, semantic HTML, and clean component-driven architecture.
