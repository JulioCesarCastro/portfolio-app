import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        logo: { src: "/logofe.png", alt: "Franquia Extranet", width: 250, height: 250 },
        name: "Franquia Extranet",
        description: "Plataforma de gerenciamento de franquias",
        url: "https://www.extranet.com.br/",
        technologies: ["MySQL", "PHP", "Bootstrap", "Linux", "S3"]
    },
    {
        logo: { src: "/logoaigreja.svg", alt: "A Igreja do Brasil App", width: 180, height: 180 },
        name: "A Igreja do Brasil App",
        description: "Aplicativo mobile desenvolvido com React Native para a Igreja do Brasil",
        url: "https://apps.apple.com/kw/app/a-igreja-do-brasil/id1669849118?platform=iphone",
        technologies: ["React Native", "TypeScript", "TailwindCSS", "Firebase"]
    },
    {
        logo: { src: "/logoreppos.png", alt: "Reppos Brasil", width: 100, height: 100 },
        name: "Reppos Brasil",
        description: "Uma plataforma B2B de e-commerce criada para intermediar as vendas entre distribuidores parceiros e varejistas.",
        url: "https://www.reppos.com.br/",
        technologies: ["Next.js", "Nest.js", "Postgres", "MongoDB", "Docker", "Kafka"]
    },
    {
        name: "HolyApp Church",
        description: "Sistema de gestão de igrejas criado para o Ministério de Apoio às Igrejas do Brasil",
        url: "https://www.holyapp.church/",
        technologies: ["Laravel", "Livewire", "TailwindCSS", "MySQL", "Docker"]
    }
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="min-h-screen flex items-center bg-jcbackground-secondary py-20">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    title="Projetos que"
                    highlightedText="Atuei"
                    description="Alguns dos projetos que tive a oportunidade de atuar"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.name}
                            logo={project.logo}
                            name={project.name}
                            description={project.description}
                            url={project.url}
                            technologies={project.technologies}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

