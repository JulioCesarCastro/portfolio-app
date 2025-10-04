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
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));

        // Limpar erros quando o usuário começar a digitar
        if (errors.length > 0) {
            setErrors([]);
            setIsError(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validar formulário
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
                setFormData({
                    from_name: '',
                    from_email: '',
                    contact: '',
                    message: '',
                });
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

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nome */}
            <div>
                <label className="block text-sm font-medium mb-2">
                    Nome <span className="text-jcred">*</span>
                </label>
                <input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleInputChange}
                    className={`w-full bg-jcbackground border rounded-lg px-4 py-3 focus:outline-none transition-colors ${errors.some(e => e.includes('Nome'))
                        ? 'border-red-500'
                        : 'border-jcbackground-secondary focus:border-jcred'
                        }`}
                    placeholder="Seu nome completo"
                    disabled={isLoading}
                />
            </div>

            {/* Email */}
            <div>
                <label className="block text-sm font-medium mb-2">
                    Email <span className="text-jcred">*</span>
                </label>
                <input
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleInputChange}
                    className={`w-full bg-jcbackground border rounded-lg px-4 py-3 focus:outline-none transition-colors ${errors.some(e => e.includes('Email'))
                        ? 'border-red-500'
                        : 'border-jcbackground-secondary focus:border-jcred'
                        }`}
                    placeholder="seu@email.com"
                    disabled={isLoading}
                />
            </div>

            {/* Contato */}

            <div>
                <label className="block text-sm font-medium mb-2">
                    Contato <span className="text-jcred">*</span>
                </label>
                <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className={`w-full bg-jcbackground border rounded-lg px-4 py-3 focus:outline-none transition-colors ${errors.some(e => e.includes('Contato'))
                        ? 'border-red-500'
                        : 'border-jcbackground-secondary focus:border-jcred'
                        }`}
                    placeholder="Seu telefone ou whatsapp"
                    disabled={isLoading}
                />
            </div>

            {/* Mensagem */}
            <div>
                <label className="block text-sm font-medium mb-2">
                    Mensagem <span className="text-jcred">*</span>
                </label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full bg-jcbackground border rounded-lg px-4 py-3 focus:outline-none transition-colors resize-none ${errors.some(e => e.includes('Mensagem'))
                        ? 'border-red-500'
                        : 'border-jcbackground-secondary focus:border-jcred'
                        }`}
                    placeholder="Conte-me sobre seu projeto ou ideia..."
                    disabled={isLoading}
                />
            </div>

            {/* Mensagens de Erro */}
            {isError && errors.length > 0 && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-red-500">⚠️</span>
                        <span className="text-red-500 font-medium">Erro ao enviar mensagem:</span>
                    </div>
                    <ul className="text-red-400 text-sm space-y-1">
                        {errors.map((error, index) => (
                            <li key={index}>• {error}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Mensagem de Sucesso */}
            {isSuccess && (
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <div className="flex items-center gap-2">
                        <span className="text-green-500">✅</span>
                        <span className="text-green-500 font-medium">{successMessage}</span>
                    </div>
                </div>
            )}

            {/* Botão de Envio */}
            <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform ${isLoading
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-jcred hover:bg-red-600 hover:scale-105'
                    } text-white shadow-lg`}
            >
                {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Enviando...
                    </div>
                ) : (
                    'Enviar Mensagem'
                )}
            </button>

            {/* Informações Adicionais */}
            <div className="text-center text-sm text-gray-400">
                <p>
                    Responderei em até 24 horas. Você também pode me encontrar nas redes sociais.
                </p>
            </div>
        </form>
    );
}
