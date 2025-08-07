<div align="center">

# 🔥 RoastMe.AI — Stop Being Basic, Get Roasted

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=F75C7E&center=true&vCenter=true&width=600&lines=The+universe+grazes+on+the+ordinary;You're+ordinary.+Your+screen+time+proves+it.;Let+RoastMe.AI+remind+you." alt="Typing SVG" />

[![Next.js](https://img.shields.io/badge/Next.js-14.2.16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-demo">Demo</a> •
  <a href="#-installation">Installation</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-contributing">Contributing</a> •
  <a href="#-license">License</a>
</p>

</div>

---

## 🎯 What is RoastMe.AI?

> *"The universe is basically an animal. It grazes on the ordinary."*  
> — Rick Sanchez

**RoastMe.AI** is your daily slap of reality — a savage mobile app that roasts you based on your screen time. Fueled by AI and the brutal honesty of Rick and Morty, we take your mindless scrolling and turn it into guilt-laced comedy gold.

<div align="center">

📱 **Too much screen time?**  
💀 **We'll let you know.**  
🧠 **With style. With pain. With purpose.**

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 📊 **Screen Time Analyzer**
- 🔍 Tracks your usage patterns
- 📈 Detailed analytics dashboard
- ⏰ Real-time monitoring
- 📱 Cross-app tracking

</td>
<td width="50%">

### 🤖 **AI-Powered Roasts**
- 🎭 Dark humor & layered sarcasm
- 🧠 Machine learning insights
- 🎯 Personalized roasting
- 🔥 Nothing is off-limits

</td>
</tr>
<tr>
<td width="50%">

### 🎬 **Rick and Morty Engine**
- 💬 Real quotes from the show
- 🎪 Rick's signature tone
- 🌌 Multiverse-level shame
- 🧪 Science-backed insults

</td>
<td width="50%">

### 📋 **Shame Reports**
- 📅 Daily & Weekly summaries
- 📊 Usage trend analysis
- 🏆 Achievement system
- 📧 Scheduled notifications

</td>
</tr>
</table>

### 🌙 **Additional Features**
- **Dark Mode Only** — Because positivity isn't the vibe here
- **Responsive Design** — Shame you on any device
- **Smooth Animations** — Powered by Framer Motion
- **Modern UI** — Built with Radix UI & Tailwind CSS

---

## 🚀 Demo

<div align="center">

### 🎥 Live Preview
*Coming Soon - APK Download Available*

<img src="https://via.placeholder.com/600x400/1a1a1a/f75c7e?text=RoastMe.AI+Demo" alt="RoastMe.AI Demo" width="600" />

</div>

---

## 🛠️ Installation

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher)
- **pnpm** (recommended) or npm/yarn

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/roastme-ai-frontend.git
cd roastme-ai-frontend

# Install dependencies
pnpm install

# Start the development server
pnpm dev

# Build for production
pnpm build
```

### 🐳 Docker Setup (Optional)

```bash
# Build Docker image
docker build -t roastme-ai .

# Run container
docker run -p 3000:3000 roastme-ai
```

---

## 🏗️ Tech Stack

<div align="center">

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Framework** | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white) | 14.2.16 | React framework |
| **Language** | ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) | 5.x | Type safety |
| **Styling** | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | 4.1.9 | Utility-first CSS |
| **Animation** | ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white) | Latest | Smooth animations |
| **UI Components** | ![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=flat&logo=radix-ui&logoColor=white) | Latest | Accessible components |
| **Icons** | ![Lucide React](https://img.shields.io/badge/Lucide-F56565?style=flat&logo=lucide&logoColor=white) | 0.454.0 | Icon library |
| **Charts** | ![Recharts](https://img.shields.io/badge/Recharts-FF6B6B?style=flat&logo=recharts&logoColor=white) | Latest | Data visualization |

</div>

### 🎨 Design System

- **Colors**: Pink to Blue gradient theme
- **Typography**: Geist font family
- **Components**: Shadcn/ui component library
- **Animations**: Framer Motion for smooth interactions
- **Responsive**: Mobile-first design approach

---

## 📁 Project Structure

```
roastme-ai-frontend/
├── 📁 app/                    # Next.js app directory
│   ├── 📄 layout.tsx         # Root layout
│   ├── 📄 page.tsx           # Home page
│   └── 📄 globals.css        # Global styles
├── 📁 components/            # Reusable components
│   ├── 📁 ui/               # UI components (Shadcn)
│   └── 📄 theme-provider.tsx # Theme provider
├── 📁 hooks/                # Custom React hooks
├── 📁 lib/                  # Utility functions
├── 📁 public/               # Static assets
├── 📁 styles/               # Additional styles
├── 📄 package.json          # Dependencies
├── 📄 tailwind.config.js    # Tailwind configuration
├── 📄 tsconfig.json         # TypeScript configuration
└── 📄 next.config.mjs       # Next.js configuration
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help make RoastMe.AI even more savage:

### 🎯 Ways to Contribute

<div align="center">

| Type | Description | Difficulty |
|------|-------------|------------|
| 🐛 **Bug Fixes** | Fix existing issues | 🟢 Easy |
| ✨ **Features** | Add new functionality | 🟡 Medium |
| 🎨 **UI/UX** | Improve design & user experience | 🟡 Medium |
| 📝 **Documentation** | Improve docs & README | 🟢 Easy |
| 🧪 **Testing** | Add tests & improve coverage | 🔴 Hard |
| 🚀 **Performance** | Optimize app performance | 🔴 Hard |

</div>

### 📋 Contribution Guidelines

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### 🎨 Design Guidelines

- Follow the existing **pink-to-blue gradient** theme
- Use **Tailwind CSS** for styling
- Ensure **responsive design** (mobile-first)
- Add **smooth animations** with Framer Motion
- Maintain **accessibility** standards

### 🧪 Development Guidelines

- Write **TypeScript** for type safety
- Follow **ESLint** and **Prettier** configurations
- Add **meaningful commit messages**
- Test your changes thoroughly
- Update documentation when needed

---

## 📊 Roadmap

<div align="center">

### 🎯 Upcoming Features

| Feature | Status | Priority | ETA |
|---------|--------|----------|-----|
| 📱 **Mobile App** | 🔄 In Progress | High | Q1 2024 |
| 🤖 **Advanced AI** | 📋 Planned | High | Q2 2024 |
| 📊 **Analytics Dashboard** | 📋 Planned | Medium | Q2 2024 |
| 🌐 **Web Extension** | 💭 Idea | Low | Q3 2024 |
| 🎮 **Gamification** | 💭 Idea | Medium | Q3 2024 |

</div>

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

<div align="center">

**Special Thanks To:**

- 🎬 **Rick and Morty** - For the inspiration and brutal honesty
- 🎨 **Shadcn/ui** - For the beautiful component library
- ⚡ **Vercel** - For the amazing Next.js framework
- 🎭 **The Community** - For making this project possible

</div>

---

<div align="center">

### 💫 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=yourusername/roastme-ai-frontend&type=Date)](https://star-history.com/#yourusername/roastme-ai-frontend&Date)

---

**Made with 💀 and ☕ by the RoastMe.AI Team**

*"The universe grazes on the ordinary. Don't be ordinary."*

[![GitHub followers](https://img.shields.io/github/followers/yourusername?style=social)](https://github.com/yourusername)
[![Twitter Follow](https://img.shields.io/twitter/follow/roastmeai?style=social)](https://twitter.com/roastmeai)

</div>