export default function Footer() {
    return (
        <footer className="bg-jcbackground border-t border-jcborder py-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="font-playfair text-lg text-jctext">Julio Castro</div>
                    <div className="flex gap-6">
                        <a href="https://www.linkedin.com/in/julio-castro-171a88114/" className="text-jctext-secondary hover:text-jcgold text-sm transition-colors duration-300">LinkedIn</a>
                        <a href="https://github.com/JulioCesarCastro" className="text-jctext-secondary hover:text-jcgold text-sm transition-colors duration-300">GitHub</a>
                        <a href="https://www.instagram.com/juliocastrodev" className="text-jctext-secondary hover:text-jcgold text-sm transition-colors duration-300">Instagram</a>
                    </div>
                    <p className="text-jctext-secondary text-xs">© 2024 Julio Castro. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
