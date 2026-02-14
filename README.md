# Cinematic Aerospace Portfolio

An ultra-minimal, cinematic, aerospace-grade personal portfolio website inspired by SpaceX's visual language. Built for **Arnab Kumar Das** - AI Architect & Cybersecurity Engineer.

## 🚀 Vision
*"A next-generation AI & Cybersecurity engineer preparing for launch."*

## 🎨 Design Philosophy

- **Elite** - Premium precision with attention to detail
- **Futuristic** - Cutting-edge animations and effects
- **Dark** - Pure black (#000000) with controlled lighting
- **Controlled** - Precise, intentional interactions
- **Technologically Advanced** - Modern aerospace aesthetic

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** Vanilla CSS with aerospace design system
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Orbitron + Exo 2 (Google Fonts)

## ✨ Key Features

- **Animated Starfield Background** - Canvas-based particle system with 150+ stars
- **System Preloader** - "INITIALIZING SYSTEM..." with typewriter effect
- **Full-Screen Hero** - Massive typography with staggered letter reveals
- **Cinematic Sections** - Fade-in animations on scroll
- **Glassmorphism Cards** - Dark blur effects with blue glow on hover
- **Responsive Design** - Optimized for all devices
- **Performance Optimized** - 60fps animations

## 📦 Project Structure

```
src/
├── components/
│   ├── Preloader/          # System initialization screen
│   ├── VideoBackground/    # Animated starfield
│   ├── Hero/               # Full-screen hero section
│   ├── About/              # Mission profile
│   ├── Skills/             # Core systems grid
│   ├── Projects/           # Deployed systems
│   ├── CodingProfiles/     # Training grounds
│   ├── Contact/            # Mission control
│   └── Atmosphere/         # Vignette & scan lines
├── App.jsx                 # Main app component
└── index.css               # Global design system
```

## 🌐 Deployment

### Automated (Vercel)

This project is configured for automatic deployment on Vercel:

1. **Push to GitHub** - Changes automatically trigger deployment
2. **Vercel builds** - Installs dependencies and builds production bundle
3. **Live in seconds** - Deployment completes automatically

### Manual Build

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The production bundle will be generated in the `/dist` directory.

## 🎯 Sections

1. **Hero** - "ARNAB KUMAR DAS | AI ARCHITECT | CYBERSECURITY ENGINEER"
2. **Mission Profile** - About AI/ML and Cybersecurity expertise
3. **Core Systems** - Skills grid with 9 technical competencies
4. **Training Grounds** - LeetCode, HackerRank, HackTheBox profiles
5. **Deployed Systems** - 4 featured projects
6. **Mission Control** - Contact form and social links

## 🔧 Configuration

- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Framework:** Vite
- **Node Version:** 18.x or higher

---

**Built with precision and vision** | [View Live Portfolio](https://arnabdevs.vercel.app)
