# Configuração do EmailJS

## Passo 1: Criar conta no EmailJS

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crie uma conta gratuita
3. Verifique seu email

## Passo 2: Configurar Email Service

1. No dashboard do EmailJS, vá para "Email Services"
2. Clique em "Add New Service"
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Siga as instruções para conectar sua conta
5. Anote o **Service ID** gerado

## Passo 3: Criar Template de Email

1. Vá para "Email Templates"
2. Clique em "Create New Template"
3. Use este template:

```
Subject: Nova mensagem do portfólio - {{from_name}}

De: {{from_name}}
Email: {{from_email}}

Mensagem:
{{message}}

---
Enviado através do formulário de contato do portfólio.
```

4. Anote o **Template ID** gerado

## Passo 4: Obter Public Key

1. Vá para "Account" > "General"
2. Anote sua **Public Key**

## Passo 5: Configurar Variáveis de Ambiente

1. Crie um arquivo `.env.local` na raiz do projeto
2. Adicione as seguintes variáveis:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

Substitua os valores pelos obtidos nos passos anteriores.

## Passo 6: Testar o Formulário

1. Reinicie o servidor de desenvolvimento
2. Acesse a seção de contato
3. Preencha e envie o formulário
4. Verifique se o email chegou na sua caixa de entrada

## Limites da Conta Gratuita

- 200 emails por mês
- Templates personalizados
- Suporte básico

## Troubleshooting

### Email não está sendo enviado
- Verifique se as variáveis de ambiente estão corretas
- Confirme se o template está ativo
- Verifique os logs do console do navegador

### Erro de CORS
- Certifique-se de que está usando as chaves públicas
- Verifique se o domínio está autorizado no EmailJS

### Template não encontrado
- Confirme o Template ID
- Verifique se o template está publicado
