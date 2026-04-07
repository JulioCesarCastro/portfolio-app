# Portfolio Redesign — Executive Dark — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the portfolio visual identity from dark navy + red to a premium "Executive Dark" aesthetic with near-black backgrounds, gold accents, and Playfair Display serif typography.

**Architecture:** All changes are purely visual — no new components are created, no data or logic changes. Each task modifies existing files only. Tasks are ordered foundation-first (tokens → font → components) so each step builds on the previous.

**Tech Stack:** Next.js 15 (static export), React 19, TypeScript, TailwindCSS 4, Playfair Display via next/font/google

---

## Task 1: Replace Color Tokens

**Files:**
- Modify: `src/app/globals.css`
- Modify: `tailwind.config.js`

- [ ] **Step 1: Replace CSS custom properties in globals.css**

Replace the entire `:root` block and `@theme inline` block with:

```css
@import "tailwindcss";

:root {
  --jc-background: #0D0D0D;
  --jc-background-secondary: #1A1A1A;
  --jc-background-card: #242424;
  --jc-foreground: #F5F5F0;
  --jc-foreground-secondary: #9A9A8E;
  --jc-gold: #C9A84C;
  --jc-gold-light: #E8C96A;
  --jc-border: #2A2A2A;
}

@theme inline {
  --color-jcbackground: var(--jc-background);
  --color-jcbackground-secondary: var(--jc-background-secondary);
  --color-jcbackground-card: var(--jc-background-card);
  --color-jctext: var(--jc-foreground);
  --color-jctext-secondary: var(--jc-foreground-secondary);
  --color-jcgold: var(--jc-gold);
  --color-jcgold-light: var(--jc-gold-light);
  --color-jcborder: var(--jc-border);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --font-playfair: var(--font-playfair);
}

body {
  background-color: var(--jc-background);
  color: var(--jc-foreground);
  font-family: var(--font-geist-sans), Arial, Helvetica, sans-serif;
}
```

- [ ] **Step 2: Replace color tokens in tailwind.config.js**

Replace the entire `colors` object inside `theme.extend` with:

```js
colors: {
  "jcbackground": "#0D0D0D",
  "jcbackground-secondary": "#1A1A1A",
  "jcbackground-card": "#242424",
  "jctext": "#F5F5F0",
  "jctext-secondary": "#9A9A8E",
  "jcgold": "#C9A84C",
  "jcgold-light": "#E8C96A",
  "jcborder": "#2A2A2A",
},
```

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css tailwind.config.js
git commit -m "feat: replace color tokens with Executive Dark palette"
```

---

## Task 2: Add Playfair Display Font

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Add Playfair Display import and apply variable**

Replace the entire file content:

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Julio Castro — Desenvolvedor Full Stack",
  description: "Portfolio profissional de Julio Castro, Desenvolvedor Full Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-jcbackground text-jctext" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Verify dev server starts without errors**

Run: `npm run dev`
Expected: Server starts at localhost:3000, no TypeScript or font errors in terminal.

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: add Playfair Display font"
```

---

## Task 3: Update SectionHeader

**Files:**
- Modify: `src/components/SectionHeader.tsx`

- [ ] **Step 1: Rewrite SectionHeader with gold line decoration**

```tsx
interface SectionHeaderProps {
    title: string;
    highlightedText: string;
    description?: string;
}

export default function SectionHeader({ title, highlightedText, description }: SectionHeaderProps) {
    return (
        <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl text-jctext">
                {title}{title ? ' ' : ''}{highlightedText}
            </h2>
            <div className="w-12 h-px bg-jcgold mx-auto mt-4 mb-6" />
            {description && (
                <p className="text-lg text-jctext-secondary">{description}</p>
            )}
        </div>
    );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/SectionHeader.tsx
git commit -m "feat: update SectionHeader with serif typography and gold rule"
```

---

## Task 4: Update Navigation and MobileMenu

**Files:**
- Modify: `src/components/Navigation.tsx`
- Modify: `src/components/MobileMenu.tsx`

- [ ] **Step 1: Rewrite Navigation.tsx**

```tsx
import MobileMenu from "./MobileMenu";

export default function Navigation() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-jcbackground/90 backdrop-blur-md border-b border-jcgold/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="font-playfair text-xl text-jctext">
                    Julio Castro
                </div>
                <div className="hidden md:flex items-center gap-8">
                    <a href="#home" className="uppercase tracking-widest text-xs text-jctext-secondary hover:text-jcgold transition-colors duration-300">Home</a>
                    <a href="#about" className="uppercase tracking-widest text-xs text-jctext-secondary hover:text-jcgold transition-colors duration-300">Sobre</a>
                    <a href="#experience" className="uppercase tracking-widest text-xs text-jctext-secondary hover:text-jcgold transition-colors duration-300">Experiência</a>
                    <a href="#projects" className="uppercase tracking-widest text-xs text-jctext-secondary hover:text-jcgold transition-colors duration-300">Projetos</a>
                    <a href="#testimonials" className="uppercase tracking-widest text-xs text-jctext-secondary hover:text-jcgold transition-colors duration-300">Depoimentos</a>
                    <a href="#contact" className="border border-jcgold/40 text-jcgold hover:border-jcgold px-4 py-1.5 text-xs uppercase tracking-widest transition-colors duration-300">Contato</a>
                </div>
                <MobileMenu />
            </div>
        </nav>
    );
}
```

- [ ] **Step 2: Rewrite MobileMenu.tsx**

```tsx
'use client';

import { useState, useEffect } from 'react';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const menuItems = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'Sobre' },
        { href: '#experience', label: 'Experiência' },
        { href: '#projects', label: 'Projetos' },
        { href: '#testimonials', label: 'Depoimentos' },
        { href: '#contact', label: 'Contato' },
    ];

    return (
        <>
            <button
                onClick={toggleMenu}
                className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 z-[60] relative focus:outline-none"
                aria-label="Menu"
                aria-expanded={isOpen}
            >
                <span className={`block w-6 h-px bg-jctext transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
                <span className={`block w-6 h-px bg-jctext transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-px bg-jctext transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
            </button>

            <div
                className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[55] md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={closeMenu}
                aria-hidden={!isOpen}
            />

            <div
                className={`fixed top-0 right-0 h-screen w-72 bg-jcbackground-secondary shadow-2xl z-[60] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                role="dialog"
                aria-modal="true"
                aria-label="Menu de navegação"
            >
                <div className="flex justify-between items-center p-6 border-b border-jcborder flex-shrink-0">
                    <span className="font-playfair text-lg text-jctext">Julio Castro</span>
                    <button
                        onClick={closeMenu}
                        className="text-jctext-secondary hover:text-jcgold transition-colors p-2 focus:outline-none"
                        aria-label="Fechar menu"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <nav className="flex flex-col p-6 space-y-1 overflow-y-auto flex-grow">
                    {menuItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={closeMenu}
                            className="uppercase tracking-widest text-xs text-jctext-secondary hover:text-jcgold py-4 px-2 transition-colors duration-300 border-b border-jcborder/50"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="p-6 border-t border-jcborder flex-shrink-0">
                    <div className="text-xs text-jctext-secondary text-center">
                        © 2024 Julio Castro
                    </div>
                </div>
            </div>
        </>
    );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Navigation.tsx src/components/MobileMenu.tsx
git commit -m "feat: update Navigation and MobileMenu to Executive Dark style"
```

---

## Task 5: Update HeroSection and DownloadButton

**Files:**
- Modify: `src/components/HeroSection.tsx`
- Modify: `src/components/DownloadButton.tsx`

- [ ] **Step 1: Rewrite HeroSection.tsx**

```tsx
import Image from "next/image";
import DownloadButton from "./DownloadButton";

export default function HeroSection() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-jcbackground pt-20">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div>
                        <p className="text-jcgold uppercase tracking-[0.3em] text-sm font-sans mb-4">
                            Desenvolvedor Full Stack
                        </p>
                        <h1 className="font-playfair text-7xl md:text-8xl text-jctext leading-tight">
                            Julio Castro
                        </h1>
                    </div>
                    <p className="text-jctext-secondary text-lg leading-relaxed max-w-lg">
                        Arquitetando soluções digitais de ponta a ponta, com foco em performance e impacto.
                    </p>
                    <div className="flex items-center gap-6">
                        <DownloadButton variant="secondary" size="lg">
                            Baixar Currículo
                        </DownloadButton>
                        <a href="#projects" className="text-jctext-secondary hover:text-jctext text-sm transition-colors duration-300">
                            Ver Projetos →
                        </a>
                    </div>
                </div>
                <div className="lg:flex justify-center md:block hidden">
                    <div className="relative">
                        <div className="absolute inset-0 bg-jcgold/5 rounded-2xl blur-3xl" />
                        <Image
                            src="/images/profilehome.png"
                            alt="Julio Castro"
                            width={500}
                            height={500}
                            className="relative z-10 rounded-2xl ring-1 ring-jcgold/20"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
```

- [ ] **Step 2: Rewrite DownloadButton.tsx**

```tsx
'use client';

import { useState } from 'react';
import { downloadPDF, downloadPDFWithFetch } from '@/lib/downloadPDFService';

interface DownloadButtonProps {
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    children?: React.ReactNode;
}

export default function DownloadButton({
    variant = 'primary',
    size = 'md',
    className = '',
    children
}: DownloadButtonProps) {
    const [isDownloading, setIsDownloading] = useState(false);
    const [downloadStatus, setDownloadStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleDownload = async () => {
        setIsDownloading(true);
        setDownloadStatus('idle');
        try {
            const success = await downloadPDFWithFetch();
            if (success) {
                setDownloadStatus('success');
                setTimeout(() => setDownloadStatus('idle'), 2000);
            } else {
                setDownloadStatus('error');
                setTimeout(() => setDownloadStatus('idle'), 3000);
            }
        } catch (error) {
            console.error('Erro no download:', error);
            setDownloadStatus('error');
            setTimeout(() => setDownloadStatus('idle'), 3000);
        } finally {
            setIsDownloading(false);
        }
    };

    const getButtonStyles = () => {
        const baseStyles = 'font-sans font-medium tracking-widest uppercase text-xs transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

        const variantStyles = {
            primary: 'bg-jcgold text-jcbackground hover:bg-jcgold-light',
            secondary: 'border border-jcgold text-jcgold hover:bg-jcgold/10',
        };

        const sizeStyles = {
            sm: 'px-4 py-2 rounded',
            md: 'px-6 py-3 rounded',
            lg: 'px-8 py-4 rounded',
        };

        return `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
    };

    const getButtonContent = () => {
        if (isDownloading) {
            return (
                <span className="flex items-center justify-center gap-2">
                    <span className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />
                    Baixando...
                </span>
            );
        }
        if (downloadStatus === 'success') return 'Download Iniciado!';
        if (downloadStatus === 'error') return 'Erro no Download';
        return children || 'Baixar Currículo';
    };

    return (
        <button
            onClick={handleDownload}
            disabled={isDownloading || downloadStatus === 'success'}
            className={getButtonStyles()}
            title="Baixar currículo em PDF"
        >
            {getButtonContent()}
        </button>
    );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/HeroSection.tsx src/components/DownloadButton.tsx
git commit -m "feat: update HeroSection and DownloadButton to Executive Dark style"
```

---

## Task 6: Update AboutSection and SkillCard

**Files:**
- Modify: `src/components/AboutSection.tsx`
- Modify: `src/components/SkillCard.tsx`

- [ ] **Step 1: Rewrite SkillCard.tsx**

```tsx
interface SkillCardProps {
    category: string;
    technologies: string;
}

export default function SkillCard({ category, technologies }: SkillCardProps) {
    return (
        <div className="bg-jcbackground-card border border-jcborder hover:border-jcgold/40 transition-colors duration-300 p-4 rounded-xl">
            <div className="text-jcgold text-xs uppercase tracking-widest font-sans mb-2">{category}</div>
            <div className="font-mono text-sm text-jctext-secondary">{technologies}</div>
        </div>
    );
}
```

- [ ] **Step 2: Rewrite AboutSection.tsx**

```tsx
import Image from "next/image";
import DownloadButton from "./DownloadButton";
import SkillCard from "./SkillCard";

const skills = [
    { category: "Frontend", technologies: "React, Next.js, Vue.js, TypeScript, TailwindCSS, Bootstrap" },
    { category: "Backend", technologies: "PHP, Laravel, Node.js, MySQL, PostgreSQL, MongoDB" },
    { category: "Mobile", technologies: "React Native, Flutter" },
    { category: "DevOps", technologies: "Docker, AWS, CI/CD, Git" }
];

const softSkills = [
    "Liderança",
    "Comunicação",
    "Trabalho em Equipe",
    "Resolução de Problemas",
    "Adaptabilidade",
    "Pensamento Crítico",
    "Gestão de Tempo",
    "Mentoria"
];

const stats = [
    { value: "11+", label: "Anos de Experiência" },
    { value: "15+", label: "Tecnologias" },
    { value: "4", label: "Empresas" },
];

export default function AboutSection() {
    return (
        <section id="about" className="flex items-center bg-jcbackground-secondary py-28">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Image */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-jcgold/5 rounded-2xl blur-3xl transform rotate-6" />
                            <Image
                                src="/images/profileaboutme.png"
                                alt="Julio Castro"
                                width={450}
                                height={450}
                                className="relative z-10 rounded-2xl shadow-2xl ring-1 ring-jcgold/20"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-jcbackground-card border border-jcgold/30 text-jcgold p-4 rounded-xl shadow-lg z-10">
                                <div className="font-playfair text-2xl font-bold">11+</div>
                                <div className="text-xs text-jctext-secondary uppercase tracking-widest">Anos de Exp.</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="font-playfair text-5xl md:text-6xl text-jctext mb-2">
                                Sobre Mim
                            </h2>
                            <div className="w-12 h-px bg-jcgold mb-6" />
                            <p className="text-lg text-jctext-secondary leading-relaxed">
                                Sou um desenvolvedor Full Stack com mais de 11 anos de experiência criando
                                soluções robustas e escaláveis. Atuei em empresas de tecnologia de diferentes
                                portes, liderando e integrando equipes em projetos de alto impacto.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="font-playfair text-4xl text-jcgold">{stat.value}</div>
                                    <div className="text-jctext-secondary text-xs uppercase tracking-widest mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Technical Skills */}
                        <div className="space-y-4">
                            <h3 className="text-xs uppercase tracking-widest text-jctext-secondary">Skills Técnicas</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {skills.map((skill) => (
                                    <SkillCard
                                        key={skill.category}
                                        category={skill.category}
                                        technologies={skill.technologies}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Soft Skills */}
                        <div className="space-y-4">
                            <h3 className="text-xs uppercase tracking-widest text-jctext-secondary">Soft Skills</h3>
                            <div className="flex flex-wrap gap-3">
                                {softSkills.map((skill) => (
                                    <div key={skill} className="border border-jcgold/20 text-jctext-secondary text-sm px-3 py-1 rounded-full">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-2">
                            <DownloadButton variant="primary" size="lg">
                                Baixar Currículo Completo
                            </DownloadButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/AboutSection.tsx src/components/SkillCard.tsx
git commit -m "feat: update AboutSection and SkillCard to Executive Dark style"
```

---

## Task 7: Update ExperienceSection and CompanyCard

**Files:**
- Modify: `src/components/ExperienceSection.tsx`
- Modify: `src/components/CompanyCard.tsx`

- [ ] **Step 1: Rewrite CompanyCard.tsx**

```tsx
interface CompanyCardProps {
    initials: string;
    name: string;
    description: string;
}

export default function CompanyCard({ initials, name, description }: CompanyCardProps) {
    return (
        <div className="bg-jcbackground-card border border-jcborder hover:border-jcgold/30 transition-colors duration-300 p-8 rounded-xl">
            <div className="border-l-2 border-jcgold/40 pl-6 space-y-2">
                <div className="font-playfair text-2xl text-jctext-secondary">{initials}</div>
                <h3 className="font-semibold text-jctext">{name}</h3>
                <p className="text-jctext-secondary text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}
```

- [ ] **Step 2: Update grid in ExperienceSection.tsx**

Change only the grid className from `md:grid-cols-2 lg:grid-cols-4` to `md:grid-cols-2`:

```tsx
import SectionHeader from "./SectionHeader";
import CompanyCard from "./CompanyCard";

const companies = [
    {
        initials: "RP",
        name: "RP Consultoria",
        description: "A RP Consultoria é uma empresa com mais de 20 anos no mercado de Tecnologia da Informação, especializada em soluções inovadoras nos mais diversos segmentos da indústria, provendo serviços de consultoria, desenvolvimento de sistemas e licenciamento de produtos."
    },
    {
        initials: "FC",
        name: "FCamara",
        description: "FCamara é uma empresa de tecnologia e inovação que transforma a adoção de jornadas digitais em valor para os negócios. Com mais de 16 anos de experiência é uma multinacional brasileira com operações presentes na Europa e Reino Unido."
    },
    {
        initials: "IC",
        name: "Infracommerce",
        description: "A Infracommerce é um ecossistema digital que oferece soluções completas e integradas para o e-commerce de grandes marcas e indústrias na América Latina, conectando a jornada do cliente da captação do pedido à entrega."
    },
    {
        initials: "SW",
        name: "StudioWox",
        description: "O Studio Wox é uma produtora de tecnologia dedicada a transformar ideias em produtos digitais de impacto. Atuamos em todas as etapas do ciclo de vida de um projeto, desde a concepção e design até o desenvolvimento e entrega de soluções disruptivas."
    }
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="flex items-center bg-jcbackground py-28">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    title="Experiência"
                    highlightedText="Profissional"
                    description="Empresas onde tive o prazer de trabalhar"
                />
                <div className="grid md:grid-cols-2 gap-8">
                    {companies.map((company) => (
                        <CompanyCard
                            key={company.initials}
                            initials={company.initials}
                            name={company.name}
                            description={company.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ExperienceSection.tsx src/components/CompanyCard.tsx
git commit -m "feat: update ExperienceSection and CompanyCard to Executive Dark style"
```

---

## Task 8: Update ProjectsSection and ProjectCard

**Files:**
- Modify: `src/components/ProjectsSection.tsx`
- Modify: `src/components/ProjectCard.tsx`

- [ ] **Step 1: Rewrite ProjectCard.tsx**

```tsx
import Image from "next/image";

interface ProjectCardProps {
    logo?: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
    name: string;
    description: string;
    url: string;
    technologies: string[];
}

export default function ProjectCard({ logo, name, description, url, technologies }: ProjectCardProps) {
    return (
        <div className="bg-jcbackground-card border border-jcborder hover:border-jcgold/30 transition-colors duration-300 rounded-xl overflow-hidden flex flex-col">
            <div className="h-0.5 bg-jcgold/60 w-full flex-shrink-0" />
            <div className="h-48 bg-jcbackground flex items-center justify-center p-6">
                {logo ? (
                    <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className="max-h-28 w-auto object-contain"
                    />
                ) : (
                    <span className="font-playfair text-2xl text-jctext-secondary">{name}</span>
                )}
            </div>
            <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-jctext mb-2">{name}</h3>
                <p className="text-jctext-secondary text-sm leading-relaxed mb-4 flex-1">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech) => (
                        <span key={tech} className="bg-jcbackground border border-jcborder font-mono text-xs text-jctext-secondary px-2 py-0.5 rounded">
                            {tech}
                        </span>
                    ))}
                </div>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-jcgold text-sm hover:text-jcgold-light transition-colors duration-300"
                >
                    Ver projeto →
                </a>
            </div>
        </div>
    );
}
```

- [ ] **Step 2: Update grid in ProjectsSection.tsx**

Change only the grid className from `md:grid-cols-2 lg:grid-cols-4` to `md:grid-cols-2`:

```tsx
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        logo: { src: "/logofe.png", alt: "Franquia Extranet", width: 250, height: 250 },
        name: "Franquia Extranet",
        description: "Plataforma de gerenciamento de franquias",
        url: "https://www.extranet.com.br/",
        technologies: ["MySQL", "PHP", "Bootstrap", "Linux", "S3"]
    },
    {
        logo: { src: "/logoaigreja.svg", alt: "A Igreja do Brasil App", width: 180, height: 180 },
        name: "A Igreja do Brasil App",
        description: "Aplicativo mobile desenvolvido com React Native para a Igreja do Brasil",
        url: "https://apps.apple.com/kw/app/a-igreja-do-brasil/id1669849118?platform=iphone",
        technologies: ["React Native", "TypeScript", "TailwindCSS", "Firebase"]
    },
    {
        logo: { src: "/logoreppos.png", alt: "Reppos Brasil", width: 100, height: 100 },
        name: "Reppos Brasil",
        description: "Uma plataforma B2B de e-commerce criada para intermediar as vendas entre distribuidores parceiros e varejistas.",
        url: "https://www.reppos.com.br/",
        technologies: ["Next.js", "Nest.js", "Postgres", "MongoDB", "Docker", "Kafka"]
    },
    {
        name: "HolyApp Church",
        description: "Sistema de gestão de igrejas criado para o Ministério de Apoio às Igrejas do Brasil",
        url: "https://www.holyapp.church/",
        technologies: ["Laravel", "Livewire", "TailwindCSS", "MySQL", "Docker"]
    }
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="flex items-center bg-jcbackground-secondary py-28">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    title="Projetos que"
                    highlightedText="Atuei"
                    description="Alguns dos projetos que tive a oportunidade de atuar"
                />
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.name}
                            logo={project.logo}
                            name={project.name}
                            description={project.description}
                            url={project.url}
                            technologies={project.technologies}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ProjectsSection.tsx src/components/ProjectCard.tsx
git commit -m "feat: update ProjectsSection and ProjectCard to Executive Dark style"
```

---

## Task 9: Update TestimonialsSection and TestimonialCard

**Files:**
- Modify: `src/components/TestimonialsSection.tsx`
- Modify: `src/components/TestimonialCard.tsx`

- [ ] **Step 1: Rewrite TestimonialCard.tsx**

```tsx
interface TestimonialCardProps {
    initials: string;
    name: string;
    role: string;
    testimonial: string;
}

export default function TestimonialCard({ initials, name, role, testimonial }: TestimonialCardProps) {
    return (
        <div className="bg-jcbackground-card border border-jcborder hover:border-jcgold/30 transition-colors duration-300 p-8 rounded-xl flex flex-col">
            <div className="font-playfair text-6xl text-jcgold/20 leading-none mb-4">&ldquo;</div>
            <p className="text-jctext-secondary italic leading-relaxed text-sm flex-1 mb-6">{testimonial}</p>
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-jcbackground border border-jcgold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-playfair text-sm text-jctext-secondary">{initials}</span>
                </div>
                <div>
                    <h4 className="font-semibold text-jctext text-sm">{name}</h4>
                    <p className="text-jctext-secondary text-xs uppercase tracking-widest">{role}</p>
                </div>
            </div>
        </div>
    );
}
```

- [ ] **Step 2: Update TestimonialsSection.tsx section padding**

```tsx
import SectionHeader from "./SectionHeader";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
    {
        initials: "RB",
        name: "Rogério Benco",
        role: "Tech Lead",
        testimonial: "O Júlio é um excelente profissional que possui um coração aberto para aprender e sempre muito comprometido com o projeto e com a equipe. Inclusive seu perfil comunicativo e carismático ajudou a compor o bom clima da equipe na qual atuávamos juntos. Nessa ocasião eu era o Tech Lead da squad e foi muito fácil supervisionar o trabalho do Julio, pois a qualidade de suas entregas eram excelentes. Não é à toa que o Júlio cresceu, ganhou espaço em novos projetos dentro da empresa e continua crescendo em conhecimento e experiência. Sucesso em sua carreira!"
    },
    {
        initials: "JS",
        name: "Jhosefer Senna",
        role: "Tech Lead",
        testimonial: "Tive o privilégio de trabalhar com o Júlio por quase dois anos e meio, inicialmente como colegas desenvolvedores e, posteriormente, como Tech Lead da equipe em que ele fazia parte. Durante esse período, tive a oportunidade de acompanhar de perto seu trabalho, e posso afirmar que sua competência e dedicação foram fundamentais para o sucesso do time. Ele é um desenvolvedor completo: altamente autossuficiente, responsável, pontual e assertivo em todas as demandas em que atua."
    },
    {
        initials: "RM",
        name: "Raphael Marques",
        role: "Software Developer",
        testimonial: "Tive o prazer de trabalhar ao lado do Júlio e posso afirmar que ele é um profissional excepcional. Suas soft skills se destacam de maneira impressionante, especialmente seu companheirismo e paciência. No que diz respeito às hard skills, o Júlio é um programador altamente competente. Sua expertise em PHP e MySQL, além de seu conhecimento em front-end, me ajudaram bastante a resolver diversos problemas complexos."
    }
];

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="flex items-center bg-jcbackground py-28">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    title=""
                    highlightedText="Depoimentos"
                    description="O que as pessoas dizem sobre meu trabalho"
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.initials}
                            initials={testimonial.initials}
                            name={testimonial.name}
                            role={testimonial.role}
                            testimonial={testimonial.testimonial}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/TestimonialsSection.tsx src/components/TestimonialCard.tsx
git commit -m "feat: update TestimonialsSection and TestimonialCard to Executive Dark style"
```

---

## Task 10: Update ContactSection, ContactForm, and ContactInfoCard

**Files:**
- Modify: `src/components/ContactSection.tsx`
- Modify: `src/components/ContactForm.tsx`
- Modify: `src/components/ContactInfoCard.tsx`

- [ ] **Step 1: Rewrite ContactInfoCard.tsx**

```tsx
interface ContactInfoCardProps {
    title: string;
    children: React.ReactNode;
}

export default function ContactInfoCard({ title, children }: ContactInfoCardProps) {
    return (
        <div className="bg-jcbackground-card border border-jcborder p-6 rounded-xl">
            <h3 className="text-xs uppercase tracking-widest text-jctext-secondary mb-4">{title}</h3>
            {children}
        </div>
    );
}
```

- [ ] **Step 2: Rewrite ContactSection.tsx**

```tsx
import SectionHeader from "./SectionHeader";
import ContactForm from "./ContactForm";
import ContactInfoCard from "./ContactInfoCard";

export default function ContactSection() {
    return (
        <section id="contact" className="flex items-center bg-jcbackground-secondary py-28">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    title="Vamos Trabalhar"
                    highlightedText="Juntos"
                    description="Entre em contato para discutirmos seu próximo projeto"
                />

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <ContactInfoCard title="Informações de Contato">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-jcgold">📧</span>
                                    <span className="text-jctext">juliocastroti@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-jcgold">📱</span>
                                    <span className="text-jctext">+55 (32) 99991-3730</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-jcgold">📍</span>
                                    <span className="text-jctext">Juiz de Fora, MG — Brasil</span>
                                </div>
                            </div>
                        </ContactInfoCard>

                        <ContactInfoCard title="Redes Sociais">
                            <div className="flex gap-3">
                                <a href="https://www.linkedin.com/in/julio-castro-171a88114/" className="border border-jcgold/20 text-jctext-secondary px-4 py-2 rounded text-sm hover:text-jcgold hover:border-jcgold/50 transition-colors duration-300">
                                    LinkedIn
                                </a>
                                <a href="https://github.com/JulioCesarCastro" className="border border-jcgold/20 text-jctext-secondary px-4 py-2 rounded text-sm hover:text-jcgold hover:border-jcgold/50 transition-colors duration-300">
                                    GitHub
                                </a>
                                <a href="https://www.instagram.com/juliocastrodev" className="border border-jcgold/20 text-jctext-secondary px-4 py-2 rounded text-sm hover:text-jcgold hover:border-jcgold/50 transition-colors duration-300">
                                    Instagram
                                </a>
                            </div>
                        </ContactInfoCard>
                    </div>

                    <div className="bg-jcbackground-card border border-jcborder p-8 rounded-xl">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
```

- [ ] **Step 3: Rewrite ContactForm.tsx**

```tsx
'use client';

import { useState } from 'react';
import { sendEmail, validateForm, ContactFormData } from '@/lib/emailService';

export default function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        from_name: '',
        from_email: '',
        contact: '',
        message: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors.length > 0) {
            setErrors([]);
            setIsError(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (validationErrors.length > 0) {
            setErrors(validationErrors);
            setIsError(true);
            return;
        }
        setIsLoading(true);
        setIsError(false);
        setIsSuccess(false);
        try {
            const success = await sendEmail(formData);
            if (success) {
                setIsSuccess(true);
                setSuccessMessage('Mensagem enviada com sucesso! Entrarei em contato em breve.');
                setFormData({ from_name: '', from_email: '', contact: '', message: '' });
            } else {
                setIsError(true);
                setErrors(['Erro ao enviar mensagem. Tente novamente mais tarde.']);
            }
        } catch (error) {
            setIsError(true);
            setErrors(['Erro inesperado. Tente novamente mais tarde.']);
        } finally {
            setIsLoading(false);
        }
    };

    const inputClass = (field: string) =>
        `w-full bg-jcbackground border rounded px-4 py-3 text-jctext placeholder:text-jctext-secondary/40 focus:outline-none transition-colors text-sm ${
            errors.some(e => e.toLowerCase().includes(field.toLowerCase()))
                ? 'border-red-500/60'
                : 'border-jcborder focus:border-jcgold'
        }`;

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <label className="block text-xs uppercase tracking-widest text-jctext-secondary mb-2">
                    Nome <span className="text-jcgold">*</span>
                </label>
                <input type="text" name="from_name" value={formData.from_name} onChange={handleInputChange}
                    className={inputClass('Nome')} placeholder="Seu nome completo" disabled={isLoading} />
            </div>

            <div>
                <label className="block text-xs uppercase tracking-widest text-jctext-secondary mb-2">
                    Email <span className="text-jcgold">*</span>
                </label>
                <input type="email" name="from_email" value={formData.from_email} onChange={handleInputChange}
                    className={inputClass('Email')} placeholder="seu@email.com" disabled={isLoading} />
            </div>

            <div>
                <label className="block text-xs uppercase tracking-widest text-jctext-secondary mb-2">
                    Contato <span className="text-jcgold">*</span>
                </label>
                <input type="text" name="contact" value={formData.contact} onChange={handleInputChange}
                    className={inputClass('Contato')} placeholder="Seu telefone ou WhatsApp" disabled={isLoading} />
            </div>

            <div>
                <label className="block text-xs uppercase tracking-widest text-jctext-secondary mb-2">
                    Mensagem <span className="text-jcgold">*</span>
                </label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4}
                    className={`${inputClass('Mensagem')} resize-none`}
                    placeholder="Conte-me sobre seu projeto ou ideia..." disabled={isLoading} />
            </div>

            {isError && errors.length > 0 && (
                <div className="bg-red-500/10 border border-red-500/20 rounded p-4">
                    <ul className="text-red-400 text-xs space-y-1">
                        {errors.map((error, index) => <li key={index}>• {error}</li>)}
                    </ul>
                </div>
            )}

            {isSuccess && (
                <div className="bg-jcgold/10 border border-jcgold/20 rounded p-4">
                    <span className="text-jcgold text-xs">{successMessage}</span>
                </div>
            )}

            <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-jcgold text-jcbackground font-semibold text-sm uppercase tracking-widest hover:bg-jcgold-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded"
            >
                {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                        <span className="w-3 h-3 border border-jcbackground border-t-transparent rounded-full animate-spin" />
                        Enviando...
                    </span>
                ) : 'Enviar Mensagem'}
            </button>

            <p className="text-center text-xs text-jctext-secondary">
                Responderei em até 24 horas.
            </p>
        </form>
    );
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/ContactSection.tsx src/components/ContactForm.tsx src/components/ContactInfoCard.tsx
git commit -m "feat: update Contact components to Executive Dark style"
```

---

## Task 11: Update Footer and FloatingWhatsApp

**Files:**
- Modify: `src/components/Footer.tsx`
- Modify: `src/components/FloatingWhatsApp.tsx`

- [ ] **Step 1: Rewrite Footer.tsx**

```tsx
export default function Footer() {
    return (
        <footer className="bg-jcbackground border-t border-jcborder py-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="font-playfair text-lg text-jctext">Julio Castro</div>
                    <div className="flex gap-6">
                        <a href="https://www.linkedin.com/in/julio-castro-171a88114/" className="text-jctext-secondary hover:text-jcgold text-sm transition-colors duration-300">LinkedIn</a>
                        <a href="https://github.com/JulioCesarCastro" className="text-jctext-secondary hover:text-jcgold text-sm transition-colors duration-300">GitHub</a>
                        <a href="https://www.instagram.com/juliocastrodev" className="text-jctext-secondary hover:text-jcgold text-sm transition-colors duration-300">Instagram</a>
                    </div>
                    <p className="text-jctext-secondary text-xs">© 2024 Julio Castro. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
```

- [ ] **Step 2: Rewrite FloatingWhatsApp.tsx**

```tsx
'use client';

export default function FloatingWhatsApp() {
    const phoneNumber = '5532999913730';
    const message = 'Olá! Vim através do seu portfólio e gostaria de conversar.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#128C7E] hover:bg-[#0e7268] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105 group"
            aria-label="Falar no WhatsApp"
        >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="absolute right-full mr-3 px-3 py-2 bg-jcbackground-card text-jctext text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-jcborder">
                Fale comigo no WhatsApp
            </span>
        </a>
    );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.tsx src/components/FloatingWhatsApp.tsx
git commit -m "feat: update Footer and FloatingWhatsApp to Executive Dark style"
```

---

## Task 12: Final Build Verification

- [ ] **Step 1: Run dev server and do a visual check**

Run: `npm run dev`

Check each section at `http://localhost:3000`:
- Navigation: serif logo "Julio Castro", gold "Contato" button, links uppercase small
- Hero: large serif name, gold subtitle tag, no red glow
- About: 3 stats in gold serif, gold-bordered skill cards
- Experience: 2-column grid, left gold border on cards
- Projects: 2-column grid, gold top border, mono tech badges
- Testimonials: large decorative quote mark in gold/20
- Contact: gold submit button, gold-focus inputs
- Footer: minimal, horizontal layout
- WhatsApp: darker green, no pulse ring

- [ ] **Step 2: Run static export build**

Run: `npm run build`
Expected: Build completes successfully, `./out` directory generated without errors.

- [ ] **Step 3: Final commit and push**

```bash
git add docs/superpowers/plans/2026-04-07-portfolio-redesign-executive-dark.md
git commit -m "docs: Add Executive Dark implementation plan"
git push origin main
```

Expected: GitHub Actions deploys successfully to GitHub Pages (no Jekyll error).
