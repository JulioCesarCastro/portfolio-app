import Image from "next/image";

interface ProjectCardProps {
    logo?: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
    name: string;
    description: string;
    url: string;
    technologies: string[];
}

export default function ProjectCard({ logo, name, description, url, technologies }: ProjectCardProps) {
    return (
        <div className="bg-jcbackground-card border border-jcborder hover:border-jcgold/30 transition-colors duration-300 rounded-xl overflow-hidden flex flex-col">
            <div className="h-0.5 bg-jcgold/60 w-full flex-shrink-0" />
            <div className="h-48 bg-jcbackground flex items-center justify-center p-6">
                {logo ? (
                    <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className="max-h-28 w-auto object-contain"
                    />
                ) : (
                    <span className="font-playfair text-2xl text-jctext-secondary">{name}</span>
                )}
            </div>
            <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-jctext mb-2">{name}</h3>
                <p className="text-jctext-secondary text-sm leading-relaxed mb-4 flex-1">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech) => (
                        <span key={tech} className="bg-jcbackground border border-jcborder font-mono text-xs text-jctext-secondary px-2 py-0.5 rounded">
                            {tech}
                        </span>
                    ))}
                </div>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-jcgold text-sm hover:text-jcgold-light transition-colors duration-300"
                >
                    Ver projeto →
                </a>
            </div>
        </div>
    );
}
