interface SectionHeaderProps {
    title: string;
    highlightedText: string;
    description?: string;
}

export default function SectionHeader({ title, highlightedText, description }: SectionHeaderProps) {
    return (
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {title} <span className="text-jcred">{highlightedText}</span>
            </h2>
            {description && (
                <p className="text-lg text-gray-400">{description}</p>
            )}
        </div>
    );
}

