import SectionHeader from "./SectionHeader";
import CompanyCard from "./CompanyCard";

const companies = [
    {
        initials: "RP",
        name: "RP Consultoria",
        description: "A RP Consultoria é uma empresa com mais de 20 anos no mercado de Tecnologia da Informação, especializada em soluções inovadoras nos mais diversos segmentos da indústria, provendo serviços de consultoria, desenvolvimento de sistemas e licenciamento de produtos."
    },
    {
        initials: "FC",
        name: "FCamara",
        description: "FCamara é uma empresa de tecnologia e inovação que transforma a adoção de jornadas digitais em valor para os negócios. Com mais de 16 anos de experiência é uma multinacional brasileira com operações presentes na Europa e Reino Unido."
    },
    {
        initials: "IC",
        name: "Infracommerce",
        description: "A Infracommerce é um ecossistema digital que oferece soluções completas e integradas para o e-commerce de grandes marcas e indústrias na América Latina, conectando a jornada do cliente da captação do pedido à entrega."
    },
    {
        initials: "SW",
        name: "StudioWox",
        description: "O Studio Wox é uma produtora de tecnologia dedicada a transformar ideias em produtos digitais de impacto. Atuamos em todas as etapas do ciclo de vida de um projeto, desde a concepção e design até o desenvolvimento e entrega de soluções disruptivas."
    }
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="flex items-center bg-jcbackground py-28">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    title="Experiência"
                    highlightedText="Profissional"
                    description="Empresas onde tive o prazer de trabalhar"
                />
                <div className="grid md:grid-cols-2 gap-8">
                    {companies.map((company) => (
                        <CompanyCard
                            key={company.initials}
                            initials={company.initials}
                            name={company.name}
                            description={company.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
