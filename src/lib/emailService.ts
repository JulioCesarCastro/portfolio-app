import emailjs from '@emailjs/browser';

// Configurações do EmailJS
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_xxxxxxx';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_xxxxxxx';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'xxxxxxxxxxxxxxxx';

// Inicializar EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface ContactFormData {
    from_name: string;
    from_email: string;
    contact: string;
    message: string;
}

export const sendEmail = async (formData: ContactFormData): Promise<boolean> => {
    try {
        const templateParams = {
            name: formData.from_name,
            from_email: formData.from_email,
            contact: formData.contact,
            message: formData.message,
            to_name: 'Julio Castro',
            destination_email: 'contato@juliocastrodev.io',
            title: 'Contato do Portfolio',
        };

        const response = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams
        );

        console.log('Email enviado com sucesso:', response);
        return true;
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        return false;
    }
};

// Função para validação de email
export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Função para validação do formulário
export const validateForm = (formData: ContactFormData): string[] => {
    const errors: string[] = [];

    if (!formData.from_name.trim()) {
        errors.push('Nome é obrigatório');
    }

    if (!formData.from_email.trim()) {
        errors.push('Email é obrigatório');
    } else if (!validateEmail(formData.from_email)) {
        errors.push('Email inválido');
    }

    if (!formData.contact.trim()) {
        errors.push('Contato é obrigatório');
    }

    if (!formData.message.trim()) {
        errors.push('Mensagem é obrigatória');
    } else if (formData.message.trim().length < 10) {
        errors.push('Mensagem deve ter pelo menos 10 caracteres');
    }

    return errors;
};
