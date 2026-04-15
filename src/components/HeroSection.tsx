import Image from "next/image";
import DownloadButton from "./DownloadButton";

export default function HeroSection() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-jcbackground pt-20">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div>
                        <p className="text-jcgold uppercase tracking-[0.3em] text-sm font-sans mb-4">
                            Desenvolvedor Full Stack
                        </p>
                        <h1 className="font-playfair text-7xl md:text-8xl text-jctext leading-tight">
                            Julio Castro
                        </h1>
                    </div>
                    <p className="text-jctext-secondary text-lg leading-relaxed max-w-lg">
                        Arquitetando soluções digitais de ponta a ponta, com foco em performance e impacto.
                    </p>
                    <div className="flex items-center gap-6">
                        <DownloadButton variant="secondary" size="lg">
                            Baixar Currículo
                        </DownloadButton>
                        <a href="#projects" className="text-jctext-secondary hover:text-jctext text-sm transition-colors duration-300">
                            Ver Projetos →
                        </a>
                    </div>
                </div>
                <div className="lg:flex justify-center md:block hidden">
                    <div className="relative">
                        <div className="absolute inset-0 bg-jcgold/5 rounded-2xl blur-3xl" />
                        <Image
                            src="/images/profilehome.png"
                            alt="Julio Castro"
                            width={500}
                            height={500}
                            className="relative z-10 rounded-2xl ring-1 ring-jcgold/20"
                            loading="eager"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
