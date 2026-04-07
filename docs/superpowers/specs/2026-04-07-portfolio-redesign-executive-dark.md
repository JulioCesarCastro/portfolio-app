# Portfolio Redesign — "Executive Dark"

**Data:** 2026-04-07  
**Autor:** Julio Castro  
**Status:** Aprovado

---

## Contexto

O portfolio atual usa uma paleta dark navy + vermelho vibrante (#FF0138) com cards animados e um visual "dev moderno". O objetivo deste redesign é elevar o tom para **corporativo premium**, transmitindo maior segurança e autoridade para dois públicos: recrutadores/empresas buscando um dev Full Stack sênior e clientes de projetos freelance.

A abordagem escolhida é **"Executive Dark"**: fundo quase preto, superfícies em carvão elevado, acento em dourado, tipografia serif nos títulos e muito respiro.

---

## Design System

### Paleta de Cores

Substituir todos os tokens `jc*` existentes em `globals.css` e `tailwind.config.js`:

| Token Tailwind | Valor Hex | Uso |
|---|---|---|
| `jcbackground` | `#0D0D0D` | Fundo principal (seções ímpares) |
| `jcbackground-secondary` | `#1A1A1A` | Fundo alternado (seções pares) |
| `jcbackground-card` | `#242424` | Cards, inputs, painéis |
| `jcgold` | `#C9A84C` | Acento principal |
| `jcgold-light` | `#E8C96A` | Hover states |
| `jctext` | `#F5F5F0` | Texto principal |
| `jctext-secondary` | `#9A9A8E` | Texto secundário |
| `jcborder` | `#2A2A2A` | Bordas de separação |

Remover: `jcred`, `jcprimary`, `jcaccent`, `jcpurple`, `jcteal`, `jcindigo` e variantes não utilizadas.

### Tipografia

Adicionar **Playfair Display** via `next/font/google` no `layout.tsx`:

```tsx
import { Playfair_Display, Geist, Geist_Mono } from 'next/font/google'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})
```

Expor como `--font-playfair` no `@theme inline` do `globals.css`.

- **H1, H2 (nomes, títulos de seção):** `font-playfair`
- **Corpo e UI:** `font-sans` (Geist — já instalado)
- **Tech badges:** `font-mono` (Geist Mono — já instalado)

### Componente SectionHeader

Alterar o padrão atual (texto inline colorido) para:
- Título em `font-playfair text-4xl md:text-5xl text-jctext`
- Linha decorativa: `<div className="w-12 h-px bg-jcgold mt-4 mb-6" />`
- Descrição em `text-jctext-secondary text-lg leading-relaxed`

### Micro-interações

| Elemento | Antes | Depois |
|---|---|---|
| Cards hover | `hover:scale-105` | `hover:border-jcgold/40 transition-colors` |
| Links nav hover | `hover:text-jcred` | `hover:text-jcgold` |
| Input focus | `focus:border-jcred` | `focus:border-jcgold` |
| WhatsApp pulse | `animate-pulse` exagerado | `hover:scale-105` + sombra suave |

---

## Componentes — Mudanças por Seção

### Navigation (`Navigation.tsx` + `MobileMenu.tsx`)

- Fundo: `bg-jcbackground/90 backdrop-blur-md border-b border-jcgold/10`
- Logo: trocar `"JC Portfolio"` por `"Julio Castro"` em `font-playfair text-xl`
- Links: `uppercase tracking-widest text-xs text-jctext-secondary hover:text-jcgold transition-colors`
- Botão "Contato": `border border-jcgold/40 text-jcgold hover:border-jcgold px-4 py-1.5 text-xs tracking-widest`
- Mobile drawer: mesmo padrão tipográfico, fundo `#1A1A1A`

### HeroSection (`HeroSection.tsx`)

- Subtítulo acima do nome: `"Desenvolvedor Full Stack"` em `text-jcgold uppercase tracking-[0.3em] text-sm font-sans`
- Nome: `font-playfair text-7xl md:text-8xl text-jctext` (sem cor especial — a escala cria impacto)
- Tagline: `"Arquitetando soluções digitais de ponta a ponta, com foco em performance e impacto."` em `text-jctext-secondary text-lg leading-relaxed max-w-lg`
- CTAs:
  - Primário (Baixar CV): `border border-jcgold text-jcgold hover:bg-jcgold/10 px-6 py-3 tracking-widest text-sm`
  - Secundário (Ver Projetos): `text-jctext-secondary hover:text-jctext text-sm` + seta `→`
- Foto: remover glow vermelho, adicionar `ring-1 ring-jcgold/20` + `rounded-2xl`
- Remover `bg-jcred/20 blur-3xl` — substituir por gradiente radial sutil em dourado `bg-jcgold/5 blur-3xl`

### AboutSection (`AboutSection.tsx`)

- Badge "11+ anos": `bg-jcbackground-card border border-jcgold/30 text-jcgold`
- 3 métricas no lugar de 1: `"11+ Anos"` / `"15+ Tecnologias"` / `"4 Empresas"` — número em `font-playfair text-4xl text-jcgold`, label em `text-jctext-secondary text-xs uppercase tracking-widest`
- **SkillCard**: `bg-jcbackground-card border border-jcborder hover:border-jcgold/40`, título em `text-jcgold`, tecnologias em `font-mono text-sm text-jctext-secondary`
- Soft skills pills: `border border-jcgold/20 text-jctext-secondary text-sm px-3 py-1 rounded-full`

### ExperienceSection + CompanyCard

- Grid: `md:grid-cols-2` (de 4 para 2 colunas — mais espaço por card)
- Remover círculo de iniciais colorido
- Adicionar linha dourada esquerda: `border-l-2 border-jcgold/40 pl-6`
- Estrutura interna: logo ou iniciais em `font-playfair text-2xl text-jctext-secondary`, empresa em `font-semibold text-jctext`, período/cargo em `text-jctext-secondary text-sm uppercase tracking-wide`
- Card: `bg-jcbackground-card border border-jcborder hover:border-jcgold/30 p-8 rounded-xl`

### ProjectsSection + ProjectCard

- Grid: `md:grid-cols-2` (de 4 para 2 — mais impacto por projeto)
- Cabeçalho do card: fundo `jcbackground-card`, logo centralizado com padding. Se sem logo: nome em `font-playfair text-2xl text-jctext-secondary`
- Borda superior dourada: `border-t-2 border-jcgold/60`
- Tech badges: `bg-jcbackground border border-jcborder font-mono text-xs text-jctext-secondary px-2 py-0.5 rounded`
- Link: `"Ver projeto →"` em `text-jcgold text-sm hover:text-jcgold-light` no rodapé do card — remover botão exagerado

### TestimonialsSection + TestimonialCard

- Aspas decorativas: `"` em `font-playfair text-6xl text-jcgold/20 leading-none` antes do texto
- Avatar: `bg-jcbackground-card border border-jcgold/20` — sem cor sólida vermelha
- Card: `border border-jcborder hover:border-jcgold/30 transition-colors p-8 rounded-xl`
- Nome: `font-semibold text-jctext`, cargo: `text-jctext-secondary text-xs uppercase tracking-widest`
- Texto: `italic text-jctext-secondary leading-relaxed`

### ContactSection + ContactForm

- Título: trocar `"Vamos Conversar"` por `"Vamos Trabalhar Juntos"`
- ContactInfoCard: ícone em `text-jcgold`, label em `text-jctext-secondary uppercase tracking-widest text-xs`, valor em `text-jctext`
- Links sociais: `border border-jcgold/20 text-jctext-secondary hover:text-jcgold hover:border-jcgold/50`
- Inputs: `bg-jcbackground-card border border-jcborder focus:border-jcgold text-jctext placeholder:text-jctext-secondary/50`
- Botão submit: `bg-jcgold text-jcbackground font-semibold hover:bg-jcgold-light` — único elemento com fundo sólido colorido

### Footer

- Minimalista: logo `"Julio Castro"` em `font-playfair text-lg`, linha `border-t border-jcborder`, copyright em `text-jctext-secondary text-xs`
- Ícones sociais simples sem texto

### FloatingWhatsApp

- Cor: `#128C7E` (verde escuro — mais sóbrio que `#25D366`)
- Remover `animate-pulse` exagerado
- Manter `hover:scale-105` + `shadow-lg`

---

## Arquivos a Modificar

1. `src/app/globals.css` — nova paleta CSS vars + `@theme inline`
2. `src/app/layout.tsx` — adicionar Playfair Display
3. `tailwind.config.js` — novos tokens de cor
4. `src/components/Navigation.tsx`
5. `src/components/MobileMenu.tsx`
6. `src/components/HeroSection.tsx`
7. `src/components/AboutSection.tsx`
8. `src/components/SectionHeader.tsx`
9. `src/components/SkillCard.tsx`
10. `src/components/ExperienceSection.tsx`
11. `src/components/CompanyCard.tsx`
12. `src/components/ProjectsSection.tsx`
13. `src/components/ProjectCard.tsx`
14. `src/components/TestimonialsSection.tsx`
15. `src/components/TestimonialCard.tsx`
16. `src/components/ContactSection.tsx` (ou arquivo equivalente)
17. `src/components/ContactForm.tsx`
18. `src/components/ContactInfoCard.tsx`
19. `src/components/Footer.tsx`
20. `src/components/FloatingWhatsApp.tsx`
21. `src/components/DownloadButton.tsx`

---

## Verificação

1. `npm run dev` — inspecionar visualmente cada seção no browser
2. Verificar responsividade em mobile (375px) e tablet (768px)
3. `npm run build` — confirmar que o export estático em `./out` é gerado sem erros
4. Confirmar que a fonte Playfair Display carrega corretamente (sem FOUC)
5. Testar formulário de contato (submit com EmailJS)
6. Testar download do CV
7. Verificar que o push para `main` dispara o deploy no GitHub Actions sem erros
