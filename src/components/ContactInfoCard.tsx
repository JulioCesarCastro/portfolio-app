interface ContactInfoCardProps {
    title: string;
    children: React.ReactNode;
}

export default function ContactInfoCard({ title, children }: ContactInfoCardProps) {
    return (
        <div className="bg-jcbackground-card border border-jcborder p-6 rounded-xl">
            <h3 className="text-xs uppercase tracking-widest text-jctext-secondary mb-4">{title}</h3>
            {children}
        </div>
    );
}
