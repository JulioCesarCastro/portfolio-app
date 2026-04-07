interface SectionHeaderProps {
    title: string;
    highlightedText: string;
    description?: string;
}

export default function SectionHeader({ title, highlightedText, description }: SectionHeaderProps) {
    return (
        <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl text-jctext">
                {title}{title ? ' ' : ''}{highlightedText}
            </h2>
            <div className="w-12 h-px bg-jcgold mx-auto mt-4 mb-6" />
            {description && (
                <p className="text-lg text-jctext-secondary">{description}</p>
            )}
        </div>
    );
}
