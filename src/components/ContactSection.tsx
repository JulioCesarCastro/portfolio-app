import SectionHeader from "./SectionHeader";
import ContactForm from "./ContactForm";
import ContactInfoCard from "./ContactInfoCard";

export default function ContactSection() {
    return (
        <section id="contact" className="flex items-center bg-jcbackground-secondary py-28">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    title="Vamos Trabalhar"
                    highlightedText="Juntos"
                    description="Entre em contato para discutirmos seu próximo projeto"
                />

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <ContactInfoCard title="Informações de Contato">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-jcgold">📧</span>
                                    <span className="text-jctext">juliocastroti@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-jcgold">📱</span>
                                    <span className="text-jctext">+55 (32) 99991-3730</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-jcgold">📍</span>
                                    <span className="text-jctext">Juiz de Fora, MG — Brasil</span>
                                </div>
                            </div>
                        </ContactInfoCard>

                        <ContactInfoCard title="Redes Sociais">
                            <div className="flex gap-3">
                                <a href="https://www.linkedin.com/in/julio-castro-171a88114/" className="border border-jcgold/20 text-jctext-secondary px-4 py-2 rounded text-sm hover:text-jcgold hover:border-jcgold/50 transition-colors duration-300">
                                    LinkedIn
                                </a>
                                <a href="https://github.com/JulioCesarCastro" className="border border-jcgold/20 text-jctext-secondary px-4 py-2 rounded text-sm hover:text-jcgold hover:border-jcgold/50 transition-colors duration-300">
                                    GitHub
                                </a>
                                <a href="https://www.instagram.com/juliocastrodev" className="border border-jcgold/20 text-jctext-secondary px-4 py-2 rounded text-sm hover:text-jcgold hover:border-jcgold/50 transition-colors duration-300">
                                    Instagram
                                </a>
                            </div>
                        </ContactInfoCard>
                    </div>

                    <div className="bg-jcbackground-card border border-jcborder p-8 rounded-xl">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
