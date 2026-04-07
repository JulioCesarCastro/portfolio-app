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
            const success = await downloadPDFWithFetch();
            if (success) {
                setDownloadStatus('success');
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
        const baseStyles = 'font-sans font-medium tracking-widest uppercase text-xs transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

        const variantStyles = {
            primary: 'bg-jcgold text-jcbackground hover:bg-jcgold-light',
            secondary: 'border border-jcgold text-jcgold hover:bg-jcgold/10',
        };

        const sizeStyles = {
            sm: 'px-4 py-2 rounded',
            md: 'px-6 py-3 rounded',
            lg: 'px-8 py-4 rounded',
        };

        return `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
    };

    const getButtonContent = () => {
        if (isDownloading) {
            return (
                <span className="flex items-center justify-center gap-2">
                    <span className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />
                    Baixando...
                </span>
            );
        }
        if (downloadStatus === 'success') return 'Download Iniciado!';
        if (downloadStatus === 'error') return 'Erro no Download';
        return children || 'Baixar Currículo';
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
