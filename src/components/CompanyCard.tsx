interface CompanyCardProps {
    initials: string;
    name: string;
    description: string;
}

export default function CompanyCard({ initials, name, description }: CompanyCardProps) {
    return (
        <div className="bg-jcbackground-card border border-jcborder hover:border-jcgold/30 transition-colors duration-300 p-8 rounded-xl">
            <div className="border-l-2 border-jcgold/40 pl-6 space-y-2">
                <div className="font-playfair text-2xl text-jctext-secondary">{initials}</div>
                <h3 className="font-semibold text-jctext">{name}</h3>
                <p className="text-jctext-secondary text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}
