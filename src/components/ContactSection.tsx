import SectionHeader from "./SectionHeader";
import ContactForm from "./ContactForm";
import ContactInfoCard from "./ContactInfoCard";

export default function ContactSection() {
    return (
        <section id="contact" className="min-h-screen flex items-center bg-jcbackground-secondary py-20">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    title="Vamos"
                    highlightedText="Conversar"
                    description="Entre em contato para discutirmos seu próximo projeto"
                />

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <ContactInfoCard title="Informações de Contato">
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <span className="text-jcred mr-3">📧</span>
                                    <span>juliocastroti@gmail.com</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-jcred mr-3">📱</span>
                                    <span>+55 (32) 99991-3730</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-jcred mr-3">📍</span>
                                    <span>Juiz de Fora, MG - Brasil</span>
                                </div>
                            </div>
                        </ContactInfoCard>

                        <ContactInfoCard title="Redes Sociais">
                            <div className="flex gap-4">
                                <a href="https://www.linkedin.com/in/julio-castro-171a88114/" className="bg-jcred/20 text-jcred p-3 rounded-lg hover:bg-jcred hover:text-white transition-all duration-300">
                                    LinkedIn
                                </a>
                                <a href="https://github.com/JulioCesarCastro" className="bg-jcred/20 text-jcred p-3 rounded-lg hover:bg-jcred hover:text-white transition-all duration-300">
                                    GitHub
                                </a>
                                <a href="https://www.instagram.com/juliocastrodev" className="bg-jcred/20 text-jcred p-3 rounded-lg hover:bg-jcred hover:text-white transition-all duration-300">
                                    Instagram
                                </a>
                            </div>
                        </ContactInfoCard>
                    </div>

                    <div className="bg-jcbackground-secondary p-8 rounded-xl">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}

