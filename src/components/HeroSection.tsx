import Image from "next/image";
import DownloadButton from "./DownloadButton";

export default function HeroSection() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-jcbackground pt-20">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="text-6xl md:text-7xl font-bold leading-tight">
                        <div>Olá, sou</div>
                        <div className="text-jcred">Julio Castro</div>
                    </div>
                    <div className="text-2xl md:text-3xl text-gray-300">
                        Desenvolvedor <span className="text-jcred font-semibold">Full Stack</span>
                    </div>
                    <p className="text-lg text-gray-400 max-w-md">
                        Transformando ideias em soluções digitais inovadoras com tecnologias modernas e código limpo.
                    </p>
                    <div className="flex gap-4">
                        <DownloadButton variant="secondary" size="lg">
                            Download CV
                        </DownloadButton>
                    </div>
                </div>
                <div className="lg:flex justify-center md:block hidden">
                    <div className="relative">
                        <div className="absolute inset-0 bg-jcred/20 rounded-full blur-3xl"></div>
                        <Image
                            src="/images/profilehome.png"
                            alt="Julio Castro"
                            width={500}
                            height={500}
                            className="relative z-10 rounded-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

