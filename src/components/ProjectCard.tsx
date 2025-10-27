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
        <div className="bg-jcbackground rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <div className="h-48 bg-jcred/20 flex items-center justify-center">
                {logo ? (
                    <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                    />
                ) : (
                    <span className="text-white font-bold text-2xl">{name}</span>
                )}
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                    <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
                </h3>
                <p className="text-gray-400 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <span key={tech} className="bg-jcred/20 text-jcred px-3 py-1 rounded-full text-sm">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

