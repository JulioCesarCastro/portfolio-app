interface ContactInfoCardProps {
    title: string;
    children: React.ReactNode;
}

export default function ContactInfoCard({ title, children }: ContactInfoCardProps) {
    return (
        <div className="bg-jcbackground p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-jcred">{title}</h3>
            {children}
        </div>
    );
}

