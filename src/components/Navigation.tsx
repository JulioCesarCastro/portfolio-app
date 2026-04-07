import MobileMenu from "./MobileMenu";

export default function Navigation() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-jcbackground/90 backdrop-blur-md border-b border-jcgold/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="font-playfair text-xl text-jctext">
                    Julio Castro
                </div>
                <div className="hidden md:flex items-center gap-8">
                    <a href="#home" className="uppercase tracking-widest text-xs text-jctext-secondary hover:text-jcgold transition-colors duration-300">Home</a>
                    <a href="#about" className="uppercase tracking-widest text-xs text-jctext-secondary hover:text-jcgold transition-colors duration-300">Sobre</a>
                    <a href="#experience" className="uppercase tracking-widest text-xs text-jctext-secondary hover:text-jcgold transition-colors duration-300">Experiência</a>
                    <a href="#projects" className="uppercase tracking-widest text-xs text-jctext-secondary hover:text-jcgold transition-colors duration-300">Projetos</a>
                    <a href="#testimonials" className="uppercase tracking-widest text-xs text-jctext-secondary hover:text-jcgold transition-colors duration-300">Depoimentos</a>
                    <a href="#contact" className="border border-jcgold/40 text-jcgold hover:border-jcgold px-4 py-1.5 text-xs uppercase tracking-widest transition-colors duration-300">Contato</a>
                </div>
                <MobileMenu />
            </div>
        </nav>
    );
}
