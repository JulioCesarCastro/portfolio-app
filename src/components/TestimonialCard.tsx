interface TestimonialCardProps {
    initials: string;
    name: string;
    role: string;
    testimonial: string;
}

export default function TestimonialCard({ initials, name, role, testimonial }: TestimonialCardProps) {
    return (
        <div className="bg-jcbackground-card border border-jcborder hover:border-jcgold/30 transition-colors duration-300 p-8 rounded-xl flex flex-col">
            <div className="font-playfair text-6xl text-jcgold/20 leading-none mb-4">&ldquo;</div>
            <p className="text-jctext-secondary italic leading-relaxed text-sm flex-1 mb-6">{testimonial}</p>
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-jcbackground border border-jcgold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-playfair text-sm text-jctext-secondary">{initials}</span>
                </div>
                <div>
                    <h4 className="font-semibold text-jctext text-sm">{name}</h4>
                    <p className="text-jctext-secondary text-xs uppercase tracking-widest">{role}</p>
                </div>
            </div>
        </div>
    );
}
