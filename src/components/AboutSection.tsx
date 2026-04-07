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

const stats = [
    { value: "11+", label: "Anos de Experiência" },
    { value: "15+", label: "Tecnologias" },
    { value: "4", label: "Empresas" },
];

export default function AboutSection() {
    return (
        <section id="about" className="flex items-center bg-jcbackground-secondary py-28">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Image */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-jcgold/5 rounded-2xl blur-3xl transform rotate-6" />
                            <Image
                                src="/images/profilehome.png"
                                alt="Julio Castro"
                                width={450}
                                height={450}
                                className="relative z-10 rounded-2xl shadow-2xl ring-1 ring-jcgold/20"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-jcbackground-card border border-jcgold/30 text-jcgold p-4 rounded-xl shadow-lg z-10">
                                <div className="font-playfair text-2xl font-bold">11+</div>
                                <div className="text-xs text-jctext-secondary uppercase tracking-widest">Anos de Exp.</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="font-playfair text-5xl md:text-6xl text-jctext mb-2">
                                Sobre Mim
                            </h2>
                            <div className="w-12 h-px bg-jcgold mb-6" />
                            <p className="text-lg text-jctext-secondary leading-relaxed">
                                Sou um desenvolvedor Full Stack com mais de 11 anos de experiência criando
                                soluções robustas e escaláveis. Atuei em empresas de tecnologia de diferentes
                                portes, liderando e integrando equipes em projetos de alto impacto.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="font-playfair text-4xl text-jcgold">{stat.value}</div>
                                    <div className="text-jctext-secondary text-xs uppercase tracking-widest mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Technical Skills */}
                        <div className="space-y-4">
                            <h3 className="text-xs uppercase tracking-widest text-jctext-secondary">Skills Técnicas</h3>
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
                            <h3 className="text-xs uppercase tracking-widest text-jctext-secondary">Soft Skills</h3>
                            <div className="flex flex-wrap gap-3">
                                {softSkills.map((skill) => (
                                    <div key={skill} className="border border-jcgold/20 text-jctext-secondary text-sm px-3 py-1 rounded-full">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-2">
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
