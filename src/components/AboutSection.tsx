import Image from "next/image";
import DownloadButton from "./DownloadButton";
import SkillCard from "./SkillCard";

const skills = [
    { category: "Frontend", technologies: "React, Next.js, Vue.js, TypeScript, TailwindCSS, Bootstrap" },
    { category: "Backend", technologies: "PHP, Laravel, Node.js, MySQL, PostgreSQL, MongoDB" },
    { category: "Mobile", technologies: "React Native, Flutter" },
    { category: "DevOps", technologies: "Docker, AWS, CI/CD, Git" }
];

const softSkills = [
    "Liderança",
    "Comunicação",
    "Trabalho em Equipe",
    "Resolução de Problemas",
    "Adaptabilidade",
    "Pensamento Crítico",
    "Gestão de Tempo",
    "Mentoria"
];

export default function AboutSection() {
    return (
        <section id="about" className="min-h-screen flex items-center bg-jcbackground-secondary py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Image */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-jcred/20 rounded-2xl blur-3xl transform rotate-6"></div>
                            <Image
                                src="/images/profileaboutme.png"
                                alt="Julio Castro"
                                width={450}
                                height={450}
                                className="relative z-10 rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-jcred text-white p-4 rounded-xl shadow-lg z-10">
                                <div className="text-2xl font-bold">11+</div>
                                <div className="text-sm">Anos de Experiência</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-bold mb-4">
                                Sobre <span className="text-jcred">Mim</span>
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed mb-6">
                                Sou um desenvolvedor Full Stack apaixonado por tecnologia e inovação.
                                Com experiência em diversas empresas, tenho expertise em criar soluções
                                robustas e escaláveis que impactam positivamente os negócios.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-jcbackground p-6 rounded-xl text-center">
                                <div className="text-3xl font-bold text-jcred mb-2">15+</div>
                                <div className="text-gray-400">Tecnologias Dominadas</div>
                            </div>
                        </div>

                        {/* Technical Skills */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-jcred">Skills Técnicas</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {skills.map((skill) => (
                                    <SkillCard
                                        key={skill.category}
                                        category={skill.category}
                                        technologies={skill.technologies}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Soft Skills */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-jcred">Soft Skills</h3>
                            <div className="flex flex-wrap gap-3">
                                {softSkills.map((skill) => (
                                    <div key={skill} className="bg-jcbackground px-4 py-2 rounded-full border border-jcred/30">
                                        <span className="text-sm">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="pt-6">
                            <DownloadButton variant="primary" size="lg">
                                Baixar Currículo Completo
                            </DownloadButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

