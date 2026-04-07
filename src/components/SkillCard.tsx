interface SkillCardProps {
    category: string;
    technologies: string;
}

export default function SkillCard({ category, technologies }: SkillCardProps) {
    return (
        <div className="bg-jcbackground-card border border-jcborder hover:border-jcgold/40 transition-colors duration-300 p-4 rounded-xl">
            <div className="text-jcgold text-xs uppercase tracking-widest font-sans mb-2">{category}</div>
            <div className="font-mono text-sm text-jctext-secondary">{technologies}</div>
        </div>
    );
}
