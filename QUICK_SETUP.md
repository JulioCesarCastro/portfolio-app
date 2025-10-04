# 🚀 Configuração Rápida do EmailJS

## ⚡ Setup em 5 minutos

### 1. Criar arquivo de configuração
Crie um arquivo `.env.local` na raiz do projeto:

```bash
touch .env.local
```

### 2. Configurar variáveis de ambiente
Adicione ao arquivo `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

### 3. Obter credenciais do EmailJS

#### 🔗 Acesse: https://www.emailjs.com/

1. **Criar conta** (gratuita)
2. **Email Services** → Add New Service → Gmail/Outlook
3. **Email Templates** → Create New Template
4. **Account** → General → Public Key

### 4. Template de email sugerido

```
Subject: Nova mensagem do portfólio - {{from_name}}

De: {{from_name}}
Email: {{from_email}}

Mensagem:
{{message}}

---
Enviado através do formulário de contato do portfólio.
```

### 5. Testar

```bash
npm run dev
```

Acesse a seção de contato e teste o envio!

## ✅ Funcionalidades Implementadas

- ✅ Validação de formulário
- ✅ Feedback visual (loading, success, error)
- ✅ Campos obrigatórios marcados
- ✅ Limpeza automática do formulário após envio
- ✅ Mensagens de erro personalizadas
- ✅ Design responsivo
- ✅ Integração completa com EmailJS

## 🎯 Próximos Passos

1. Configure as credenciais do EmailJS
2. Teste o formulário
3. Personalize o template de email
4. Adicione seu email de destino

## 📧 Limites da Conta Gratuita

- 200 emails/mês
- Templates personalizados
- Suporte básico

## 🆘 Precisa de Ajuda?

Consulte o arquivo `EMAILJS_SETUP.md` para instruções detalhadas.
