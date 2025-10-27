import MobileMenu from "./MobileMenu";

export default function Navigation() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-jcbackground/90 backdrop-blur-sm border-b border-jcbackground-secondary">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="text-2xl font-bold">
                    <span className="text-jcred">JC</span> Portfolio
                </div>
                <div className="hidden md:flex items-center gap-8">
                    <a href="#home" className="hover:text-jcred transition-colors duration-300">Home</a>
                    <a href="#about" className="hover:text-jcred transition-colors duration-300">Sobre</a>
                    <a href="#experience" className="hover:text-jcred transition-colors duration-300">Experiência</a>
                    <a href="#projects" className="hover:text-jcred transition-colors duration-300">Projetos</a>
                    <a href="#testimonials" className="hover:text-jcred transition-colors duration-300">Depoimentos</a>
                    <a href="#contact" className="hover:text-jcred transition-colors duration-300">Contato</a>
                </div>
                <MobileMenu />
            </div>
        </nav>
    );
}

