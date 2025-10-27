export default function Footer() {
    return (
        <footer className="bg-jcbackground py-8">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="text-2xl font-bold mb-4">
                    <span className="text-jcred">JC</span> Portfolio
                </div>
                <p className="text-gray-400 mb-4">
                    Desenvolvido por Julio Castro
                </p>
                <div className="flex justify-center gap-6">
                    <a href="https://www.linkedin.com/in/julio-castro-171a88114/" className="text-gray-400 hover:text-jcred transition-colors">LinkedIn</a>
                    <a href="https://github.com/JulioCesarCastro" className="text-gray-400 hover:text-jcred transition-colors">GitHub</a>
                    <a href="https://www.instagram.com/juliocastrodev" className="text-gray-400 hover:text-jcred transition-colors">Instagram</a>
                </div>
                <div className="mt-6 pt-6 border-t border-jcbackground">
                    <p className="text-gray-500 text-sm">
                        © 2024 Julio Castro. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}

