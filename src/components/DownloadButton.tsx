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
            // Usar a versão com fetch para melhor controle
            const success = await downloadPDFWithFetch();

            if (success) {
                setDownloadStatus('success');
                // Resetar status após 2 segundos
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
        const baseStyles = 'font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';

        const variantStyles = {
            primary: 'bg-jcred hover:bg-red-600 text-white',
            secondary: 'border border-jcred text-jcred hover:bg-jcred hover:text-white'
        };

        const sizeStyles = {
            sm: 'px-4 py-2 text-sm rounded-lg',
            md: 'px-6 py-3 text-base rounded-lg',
            lg: 'px-8 py-4 text-lg rounded-xl'
        };

        return `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
    };

    const getButtonContent = () => {
        if (isDownloading) {
            return (
                <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                    Baixando...
                </div>
            );
        }

        if (downloadStatus === 'success') {
            return (
                <div className="flex items-center justify-center gap-2">
                    Download Iniciado!
                </div>
            );
        }

        if (downloadStatus === 'error') {
            return (
                <div className="flex items-center justify-center gap-2">
                    Erro no Download
                </div>
            );
        }

        return children || (
            <div className="flex items-center justify-center gap-2">
                Baixar Currículo
            </div>
        );
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
