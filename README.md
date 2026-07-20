# AI Systems Engineering in Business

A comprehensive, open-source curriculum bridging AI engineering fundamentals with real-world business applications.

🌐 **Live Site**: [https://ai-systems-engineering-in-business.vercel.app](https://ai-systems-engineering-in-business.vercel.app)

## 🎯 What This Is

This curriculum takes the best of AI engineering education and wraps it in a business context. Instead of learning algorithms in isolation, you'll see how they drive real business value — from customer churn prediction to automated report generation.

**Based on**: [AI Engineering from Scratch](https://github.com/rohitg00/ai-engineering-from-scratch) by Rohit Ghumare — completely redesigned and expanded with business context, interactive features, and modern web experience.

## 📚 Curriculum Overview

**20 Phases** covering:

| Phase | Topic | Status |
|-------|-------|--------|
| 00 | Business Foundations & AI Strategy | ✅ Complete |
| 01 | Python & Data Fundamentals | ✅ Complete |
| 02 | Statistics for Business Decisions | ✅ Complete |
| 03 | Machine Learning Fundamentals | ✅ Complete |
| 04 | Deep Learning Core | ✅ Complete |
| 05 | Natural Language Processing | ✅ Complete |
| 06 | Transformers & LLMs | ✅ Complete |
| 07 | MLOps & Production Systems | ✅ Complete |
| 08 | Cloud AI Platforms | ✅ Complete |
| 09 | AI Agents & Automation | ✅ Complete |
| 10 | Reinforcement Learning | ✅ Complete |
| 11 | Computer Vision for Business | ✅ Complete |
| 12 | Time Series & Forecasting | ✅ Complete |
| 13 | Recommender Systems | ✅ Complete |
| 14 | Data Engineering for AI | ✅ Complete |
| 15 | Generative AI & Creative Applications | ✅ Complete |
| 16 | AI Ethics & Responsible AI | ✅ Complete |
| 17 | Scaling & Performance | ✅ Complete |
| 18 | Advanced Topics | ✅ Complete |
| 19 | Capstone: End-to-End AI System | ✅ Complete |

## 🚀 Features

### Interactive Learning
- **📊 Progress Tracking** — Mark lessons complete, track your journey across all 20 phases
- **🧪 Built-in Quizzes** — Test knowledge with instant feedback and explanations
- **💻 Python Playground** — Run real Python code in browser via Pyodide (WASM)
- **🎮 Interactive Demos** — Decision trees, neural networks, tokenization, ROI calculators

### Navigation & UX
- **⌘K Command Palette** — Search across all lessons, glossary terms, and phases
- **🌓 Dark Mode** — Easy on the eyes, day or night
- **📱 Mobile Responsive** — Learn on any device
- **🗺️ Learning Roadmap** — Visual timeline of your learning journey
- **📝 Blog Section** — Articles on AI engineering for business

### Delightful Details
- **🎉 Confetti Celebrations** — Milestone rewards for completing lessons and phases
- **🎨 Playful Design** — Colorful, modern interface with smooth animations
- **⚡ Zero Install** — Everything runs in the browser

## 📁 Site Structure

```
site/
├── index.html          # Homepage with curriculum, stats, demos, quizzes
├── lesson.html         # Lesson detail page with sidebar nav
├── demos.html          # Python playground with Pyodide
├── blog.html           # Blog listing with search and categories
├── blog-post.html      # Individual blog post reader
├── roadmap.html        # Visual learning path
├── style.css           # Comprehensive design system
├── animations.css      # Extra animations and effects
├── data.js             # Curriculum data (20 phases, 500+ lessons)
└── app.js              # Progress tracking, quizzes, confetti, search
```

## 🛠️ Tech Stack

Pure vanilla HTML/CSS/JavaScript — no build step, no dependencies.

| Component | Technology |
|-----------|-----------|
| **Fonts** | Space Grotesk, Inter, JetBrains Mono (Google Fonts) |
| **Styling** | CSS Custom Properties, Flexbox, Grid |
| **Animations** | CSS transitions, Intersection Observer API |
| **Code Execution** | Pyodide (Python in WASM) |
| **Storage** | localStorage for progress persistence |
| **Deployment** | Vercel (static hosting) |

## 🏁 Quick Start

```bash
# Clone the repo
git clone https://github.com/salihtutun/ai-systems-engineering-in-business.git
cd ai-systems-engineering-in-business

# Option 1: Open in browser directly
open site/index.html

# Option 2: Use a local server
npx serve site

# Option 3: Python HTTP server
python -m http.server 8000 --directory site
```

## 🚢 Deployment

The site auto-deploys to Vercel on every push to `main`:

```bash
# Deploy manually
npx vercel --prod
```

## 📂 Content

All original curriculum content from [AI Engineering from Scratch](https://github.com/rohitg00/ai-engineering-from-scratch) is included in the `phases/` directory:

- **20 phases** with detailed documentation
- **500+ lessons** with code examples
- **Quiz files** (`quiz.json`) for testing understanding
- **Glossary** with key terms and definitions
- **Code samples** in Python, Rust, TypeScript, and Julia

## 🤝 Contributing

Contributions welcome! Check out [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

Areas where help is especially appreciated:
- 📝 Adding more blog posts
- 🧪 Creating new quiz questions
- 💻 Building additional interactive demos
- 🌍 Translations
- 🐛 Bug fixes and improvements

## 📄 License

MIT License — free to use, fork, and contribute.

## 🙏 Credits

- Original curriculum: [AI Engineering from Scratch](https://github.com/rohitg00/ai-engineering-from-scratch) by [Rohit Ghumare](https://github.com/rohitg00)
- Redesigned and expanded with business context by [Salih Tutun](https://github.com/salihtutun)

---

**Made with ❤️ for the AI engineering community.**

*Last updated: July 2026*
