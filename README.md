# 🚀 JC Portfolio

Portfólio profissional desenvolvido com Next.js 15, React 19 e TailwindCSS 4, apresentando minhas habilidades, experiências e projetos como Desenvolvedor Full Stack.

## 🎯 Sobre o Projeto

Este é meu portfólio pessoal, criado para mostrar minha trajetória profissional, projetos realizados e facilitar o contato com potenciais clientes e empregadores. O site foi desenvolvido com foco em performance, responsividade e experiência do usuário.

## ✨ Funcionalidades

- 🏠 **Home** - Apresentação inicial com imagem de perfil e call-to-action
- 👤 **Sobre Mim** - Informações profissionais, skills técnicas e soft skills
- 💼 **Experiência** - Empresas onde trabalhei e suas descrições
- 🚀 **Projetos** - Portfólio de projetos desenvolvidos com tecnologias utilizadas
- 💬 **Depoimentos** - Feedback de colegas e líderes de equipe
- 📧 **Contato** - Formulário integrado com EmailJS para envio de mensagens
- 📱 **Menu Mobile** - Menu hambúrguer com animações suaves para dispositivos móveis
- 💚 **WhatsApp Flutuante** - Botão fixo para contato direto via WhatsApp
- ⬇️ **Download CV** - Botões para baixar currículo em PDF
- 🎨 **Design Responsivo** - Totalmente adaptado para todos os dispositivos
- 🌙 **Tema Escuro** - Design moderno com paleta de cores personalizada

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 15.5.4** - Framework React com SSR e Turbopack
- **React 19.1.0** - Biblioteca JavaScript para interfaces
- **TypeScript 5** - Superset JavaScript com tipagem estática
- **TailwindCSS 4** - Framework CSS utility-first

### Bibliotecas e Ferramentas
- **EmailJS** - Envio de emails sem backend
- **ESLint** - Linter para código JavaScript/TypeScript
- **Geist Font** - Fonte moderna da Vercel
- **PostCSS** - Processador CSS

## 📂 Estrutura do Projeto

```
portfolio-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal da aplicação
│   │   ├── page.tsx             # Página inicial (Home)
│   │   ├── globals.css          # Estilos globais e variáveis CSS
│   │   └── favicon.ico          # Ícone do site
│   └── components/
│       ├── ContactForm.tsx      # Formulário de contato com EmailJS
│       ├── DownloadButton.tsx   # Botão para download do CV
│       ├── MobileMenu.tsx       # Menu hambúrguer para mobile
│       └── FloatingWhatsApp.tsx # Botão flutuante do WhatsApp
├── public/
│   ├── images/                  # Imagens do portfólio
│   ├── CV_Julio_Castro.pdf      # Currículo em PDF
│   └── logos/                   # Logos de projetos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## 🎨 Componentes Principais

### ContactForm
Formulário de contato integrado com EmailJS que permite envio de mensagens direto para o email, com validação de campos e feedback visual.

### MobileMenu
Menu lateral (drawer) responsivo com animações suaves, ícones intuitivos e overlay escuro. Aparece apenas em dispositivos móveis.

### FloatingWhatsApp
Botão flutuante fixo no canto inferior direito da tela, com animação de pulso e link direto para WhatsApp com mensagem pré-definida.

### DownloadButton
Botão reutilizável com variantes (primary/secondary) e tamanhos configuráveis para download do currículo.

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js 20+ instalado
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/JulioCesarCastro/portfolio-app.git
cd portfolio-app
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env.local` na raiz do projeto (se necessário para EmailJS):
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key
```

4. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

5. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📦 Build para Produção

```bash
npm run build
npm run start
```

## 🎨 Paleta de Cores

O projeto utiliza uma paleta personalizada definida em `globals.css`:

- **Background Principal**: `#151925`
- **Background Secundário**: `#323846`
- **Cor de Destaque**: `#FF0138` (Vermelho JC)
- **Texto**: `#ffffff`
- **Texto Secundário**: `#b3b3b3`

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Deploy

O projeto está pronto para deploy em plataformas como:
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **AWS Amplify**
- **GitHub Pages** (com adaptações)

### Deploy na Vercel:

```bash
npm install -g vercel
vercel
```

## 📧 Contato

- **Email**: juliocastroti@gmail.com
- **WhatsApp**: +55 (32) 99991-3730
- **LinkedIn**: [julio-castro-171a88114](https://www.linkedin.com/in/julio-castro-171a88114/)
- **GitHub**: [JulioCesarCastro](https://github.com/JulioCesarCastro)
- **Instagram**: [@juliocastrodev](https://www.instagram.com/juliocastrodev)

## 📝 Licença

Este projeto é de uso pessoal e serve como portfólio profissional de Julio Castro.

## 🤝 Contribuições

Este é um projeto pessoal, mas sugestões e feedbacks são sempre bem-vindos!

---

⭐ Desenvolvido com dedicação por **Julio Castro** | Desenvolvedor Full Stack

*Última atualização: Outubro 2024*
