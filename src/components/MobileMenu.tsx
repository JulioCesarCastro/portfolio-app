'use client';

import { useState, useEffect } from 'react';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
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
            <button
                onClick={toggleMenu}
                className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 z-[60] relative focus:outline-none"
                aria-label="Menu"
                aria-expanded={isOpen}
            >
                <span className={`block w-6 h-px bg-jctext transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
                <span className={`block w-6 h-px bg-jctext transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-px bg-jctext transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
            </button>

            <div
                className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[55] md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={closeMenu}
                aria-hidden={!isOpen}
            />

            <div
                className={`fixed top-0 right-0 h-screen w-72 bg-jcbackground-secondary shadow-2xl z-[60] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                role="dialog"
                aria-modal="true"
                aria-label="Menu de navegação"
            >
                <div className="flex justify-between items-center p-6 border-b border-jcborder flex-shrink-0">
                    <span className="font-playfair text-lg text-jctext">Julio Castro</span>
                    <button
                        onClick={closeMenu}
                        className="text-jctext-secondary hover:text-jcgold transition-colors p-2 focus:outline-none"
                        aria-label="Fechar menu"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <nav className="flex flex-col p-6 space-y-1 overflow-y-auto flex-grow">
                    {menuItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={closeMenu}
                            className="uppercase tracking-widest text-xs text-jctext-secondary hover:text-jcgold py-4 px-2 transition-colors duration-300 border-b border-jcborder/50"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="p-6 border-t border-jcborder flex-shrink-0">
                    <div className="text-xs text-jctext-secondary text-center">
                        © 2024 Julio Castro
                    </div>
                </div>
            </div>
        </>
    );
}
