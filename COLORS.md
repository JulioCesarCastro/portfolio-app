# Paleta de Cores Personalizada - Portfólio JC

Este documento lista todas as cores personalizadas disponíveis no seu projeto.

## 🎨 Como Usar

Todas as cores podem ser usadas como classes do Tailwind CSS com o prefixo `jc`:

```html
<div class="bg-jcprimary text-white">Exemplo</div>
<button class="bg-jcaccent hover:bg-jcaccent-dark">Botão</button>
```

## 📋 Lista Completa de Cores

### Cores Principais
- `bg-jcbackground` - Fundo principal (#121212)
- `bg-jcbackground-light` - Fundo claro (#1a1a1a)
- `bg-jcbackground-dark` - Fundo escuro (#0a0a0a)
- `text-jctext` - Texto principal (#ffffff)
- `text-jctext-secondary` - Texto secundário (#b3b3b3)
- `text-jctext-muted` - Texto suave (#666666)

### Cores de Destaque
- `bg-jcprimary` - Azul principal (#007bff)
- `bg-jcprimary-light` - Azul claro (#3399ff)
- `bg-jcprimary-dark` - Azul escuro (#0056b3)
- `bg-jcsecondary` - Cinza secundário (#6c757d)
- `bg-jcsecondary-light` - Cinza claro (#8a9299)
- `bg-jcsecondary-dark` - Cinza escuro (#495057)

### Cores de Estado
- `bg-jcsuccess` - Verde sucesso (#28a745)
- `bg-jcsuccess-light` - Verde claro (#34ce57)
- `bg-jcsuccess-dark` - Verde escuro (#1e7e34)
- `bg-jcwarning` - Amarelo aviso (#ffc107)
- `bg-jcwarning-light` - Amarelo claro (#ffd43b)
- `bg-jcwarning-dark` - Amarelo escuro (#e0a800)
- `bg-jcdanger` - Vermelho erro (#dc3545)
- `bg-jcdanger-light` - Vermelho claro (#e74c3c)
- `bg-jcdanger-dark` - Vermelho escuro (#bd2130)
- `bg-jcinfo` - Azul informação (#17a2b8)
- `bg-jcinfo-light` - Azul claro (#39b5d1)
- `bg-jcinfo-dark` - Azul escuro (#138496)

### Cores de Acento
- `bg-jcaccent` - Vermelho acento (#ff6b6b)
- `bg-jcaccent-light` - Vermelho claro (#ff8787)
- `bg-jcaccent-dark` - Vermelho escuro (#ff5252)
- `bg-jcgold` - Dourado (#ffd700)
- `bg-jcgold-light` - Dourado claro (#ffed4e)
- `bg-jcgold-dark` - Dourado escuro (#e6c200)

### Cores para Temas
- `bg-jcpurple` - Roxo (#8b5cf6)
- `bg-jcpurple-light` - Roxo claro (#a78bfa)
- `bg-jcpurple-dark` - Roxo escuro (#7c3aed)
- `bg-jcteal` - Verde-azulado (#14b8a6)
- `bg-jcteal-light` - Verde-azulado claro (#5eead4)
- `bg-jcteal-dark` - Verde-azulado escuro (#0f766e)
- `bg-jcindigo` - Índigo (#6366f1)
- `bg-jcindigo-light` - Índigo claro (#818cf8)
- `bg-jcindigo-dark` - Índigo escuro (#4f46e5)

### Escala de Cinza
- `bg-jcgray-50` até `bg-jcgray-950` - Escala completa de cinzas

### Bordas
- `border-jcborder` - Borda padrão (#333333)
- `border-jcborder-light` - Borda clara (#555555)
- `border-jcborder-dark` - Borda escura (#1a1a1a)

## 💡 Exemplos de Uso

### Cards
```html
<div class="bg-jcbackground-light border border-jcborder rounded-lg p-6">
  <h3 class="text-jctext font-bold">Título</h3>
  <p class="text-jctext-secondary">Descrição</p>
</div>
```

### Botões
```html
<button class="bg-jcprimary hover:bg-jcprimary-dark text-white px-4 py-2 rounded">
  Botão Principal
</button>
```

### Gradientes
```html
<div class="bg-gradient-to-r from-jcprimary to-jcpurple">
  Conteúdo com gradiente
</div>
```

## 🔧 Personalização

Para adicionar novas cores, edite o arquivo `tailwind.config.js` na seção `colors`:

```javascript
colors: {
  "jcnova-cor": "#hexcode",
  "jcnova-cor-light": "#hexcode",
  "jcnova-cor-dark": "#hexcode",
}
```

E adicione as variáveis CSS correspondentes no `globals.css`:

```css
:root {
  --jc-nova-cor: #hexcode;
}
```
