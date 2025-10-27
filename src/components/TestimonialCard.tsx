interface TestimonialCardProps {
    initials: string;
    name: string;
    role: string;
    testimonial: string;
}

export default function TestimonialCard({ initials, name, role, testimonial }: TestimonialCardProps) {
    return (
        <div className="bg-jcbackground-secondary p-6 rounded-xl">
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-jcred/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-jcred font-bold">{initials}</span>
                </div>
                <div>
                    <h4 className="font-semibold">{name}</h4>
                    <p className="text-sm text-gray-400">{role}</p>
                </div>
            </div>
            <p className="text-gray-300 italic">"{testimonial}"</p>
        </div>
    );
}

