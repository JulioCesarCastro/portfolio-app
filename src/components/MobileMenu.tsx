'use client';

import { useState, useEffect } from 'react';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    // Prevenir scroll quando o menu está aberto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const menuItems = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'Sobre' },
        { href: '#experience', label: 'Experiência' },
        { href: '#projects', label: 'Projetos' },
        { href: '#testimonials', label: 'Depoimentos' },
        { href: '#contact', label: 'Contato' },
    ];

    return (
        <>
            {/* Botão Hamburger - Visível apenas em mobile */}
            <button
                onClick={toggleMenu}
                className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 z-[60] relative focus:outline-none"
                aria-label="Menu"
                aria-expanded={isOpen}
            >
                <span
                    className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''
                        }`}
                ></span>
                <span
                    className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''
                        }`}
                ></span>
                <span
                    className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''
                        }`}
                ></span>
            </button>

            {/* Overlay - Fundo escuro quando o menu está aberto */}
            <div
                className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[55] md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={closeMenu}
                aria-hidden={!isOpen}
            ></div>

            {/* Menu Lateral */}
            <div
                className={`fixed top-0 right-0 h-screen w-72 bg-[#323846] shadow-2xl z-[60] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                role="dialog"
                aria-modal="true"
                aria-label="Menu de navegação"
            >
                {/* Cabeçalho do Menu */}
                <div className="flex justify-between items-center p-6 border-b border-gray-700 bg-[#151925] flex-shrink-0">
                    <div className="text-2xl font-bold">
                        <span className="text-white">Menu</span>
                    </div>
                    <button
                        onClick={closeMenu}
                        className="text-white hover:text-jcred transition-colors p-2 hover:bg-jcred/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-jcred"
                        aria-label="Fechar menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Lista de Links */}
                <nav className="flex flex-col p-6 space-y-2 overflow-y-auto flex-grow bg-[#323846]">
                    {menuItems.map((item, index) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={closeMenu}
                            className="flex items-center gap-4 text-white text-lg font-medium hover:text-jcred hover:bg-[#151925] transition-all duration-300 py-4 px-4 rounded-lg group"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <span>{item.label}</span>
                        </a>
                    ))}
                </nav>

                {/* Footer do Menu */}
                <div className="p-6 border-t border-gray-700 bg-[#151925] flex-shrink-0">
                    <div className="text-sm text-gray-400 text-center">
                        © 2024 <span className="text-jcred font-semibold">Julio Castro</span>
                    </div>
                    <div className="text-xs text-gray-500 text-center mt-1">
                        Desenvolvedor Full Stack
                    </div>
                </div>
            </div>
        </>
    );
}
