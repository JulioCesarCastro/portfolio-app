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
