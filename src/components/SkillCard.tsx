interface SkillCardProps {
    category: string;
    technologies: string;
}

export default function SkillCard({ category, technologies }: SkillCardProps) {
    return (
        <div className="bg-jcbackground p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-jcred rounded-full"></div>
                <span className="font-medium">{category}</span>
            </div>
            <div className="text-sm text-gray-400">{technologies}</div>
        </div>
    );
}

