# ⚡ TESTATHON 2026 | High-Velocity Hackathon Portal

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Lenis](https://img.shields.io/badge/Lenis_Scroll-black?style=for-the-badge)

Testathon is a premium, high-performance landing page designed for a 48-hour innovation sprint. Built with a "Cyber-Storm" aesthetic, it features advanced 3D kinetic animations, smooth momentum scrolling, and high-contrast glassmorphism.

---

## 🚀 Key Features

### 1. Kinetic Thunderbolt Storm (Hero Section)
A high-impact Hero header featuring **80+ programmatically generated thunderbolts**. 
- **3D Perspective:** Utilizes CSS `perspective` and GSAP `z-axis` movement.
- **Dynamic Scaling:** Bolts start at 15x scale and diminish as they approach the center "impact zone."
- **Electric Flicker:** Real-time opacity jitter using GSAP rough easing to simulate electrical surges.

### 2. High-Contrast Glassmorphism
All interactive elements (Cards, Navbar, Footer) utilize a custom "Tactical Glass" design:
- **Depth:** Layered `backdrop-blur-3xl` with `bg-white/[0.08]`.
- **Lighting:** Double-border logic with shimmering top-accents to catch virtual light.
- **Bloom:** Intense under-glow effects that activate on hover to distinguish content from the deep-space background.

### 3. Synchronized Branding
- **Gradient Continuity:** A unified `Cyan-to-Purple` linear gradient applied across the Hero text, Navbar logo, and animated progress lines.
- **Interactive Buttons:** Consistent "Fill-up" hover states across the portal using CSS translation layers.

### 4. Advanced Smooth Scrolling (Lenis + GSAP)
- **Momentum Scroll:** Integrated Lenis for a luxurious, weighty feel during navigation.
- **Programmatic Interception:** Custom `handleScroll` logic in the Navbar to prevent "teleporting" and ensure smooth transitions to target IDs.

---

## 🛠 Tech Stack

- **Framework:** React.js
- **Animation:** GSAP (GreenSock Animation Platform)
- **Styling:** Tailwind CSS
- **Scrolling:** Lenis Smooth Scroll

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx    # Sticky glass nav with gradient branding
│   ├── Hero.jsx      # Thunderbolt storm engine & primary CTA
│   ├── About.jsx     # 3D magnetic tilt cards & parallax content
│   ├── Tracks.jsx    # Glassmorphic mission cards with under-glow
│   ├── Timeline.jsx  # Blueprint-style vertical event tracker
│   └── Footer.jsx    # Industrial "Console" style bottom-bar
├── hooks/
│   └── useLenis.js   # Global smooth scroll initialization
└── styles/
    └── index.css   # Tailwind directives & CSS variable definitions
