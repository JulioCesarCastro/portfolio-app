interface CompanyCardProps {
    initials: string;
    name: string;
    description: string;
}

export default function CompanyCard({ initials, name, description }: CompanyCardProps) {
    return (
        <div className="bg-jcbackground-secondary p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-jcred/20 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-jcred font-bold text-xl">{initials}</span>
                </div>
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-gray-400 text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
}

