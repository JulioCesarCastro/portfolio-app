# Configuração do GitHub Pages

Este projeto está configurado para ser publicado no GitHub Pages como um site estático.

## Configurações Aplicadas

### 1. Next.js - Export Estático
- Adicionado `output: 'export'` no `next.config.js`
- Imagens desabilitadas para export estático: `images: { unoptimized: true }`

### 2. GitHub Actions - Deploy Automático
- Workflow criado em `.github/workflows/deploy.yml`
- Build e deploy automáticos no push para `main`

### 3. Desabilitar Jekyll
- Arquivo `.nojekyll` criado em `public/`

## Como Publicar

### Automático (Recomendado)
1. Faça commit e push das mudanças:
   ```bash
   git add .
   git commit -m "Configurar GitHub Pages"
   git push origin main
   ```

2. O GitHub Actions fará o build e deploy automaticamente

3. Ative o GitHub Pages no repositório:
   - Vá em `Settings` → `Pages`
   - Em `Source`, selecione `GitHub Actions`

### Manual
```bash
# Build do projeto
npm run build

# O arquivo estará na pasta ./out
# Você pode fazer upload manual da pasta ./out para o GitHub Pages
```

## Estrutura de Arquivos
```
.github/
  workflows/
    deploy.yml          # Workflow de deploy automático
public/
  .nojekyll            # Desabilita Jekyll
```

## Nota
O GitHub Pages agora publicará a pasta `out` gerada pelo Next.js após o build.

