import SectionHeader from "./SectionHeader";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
    {
        initials: "RB",
        name: "Rogério Benco",
        role: "Tech Lead",
        testimonial: "O Júlio é um excelente profissional que possui um coração aberto para aprender e sempre muito comprometido com o projeto e com a equipe. Inclusive seu perfil comunicativo e carismático ajudou a compor o bom clima da equipe na qual atuávamos juntos. Nessa ocasião eu era o Tech Lead da squad e foi muito fácil supervisionar o trabalho do Julio, pois a qualidade de suas entregas eram excelentes. Não é à toa que o Júlio cresceu, ganhou espaço em novos projetos dentro da empresa e continua crescendo em conhecimento e experiência. Sucesso em sua carreira!"
    },
    {
        initials: "JS",
        name: "Jhosefer Senna",
        role: "Tech Lead",
        testimonial: "Tive o privilégio de trabalhar com o Júlio por quase dois anos e meio, inicialmente como colegas desenvolvedores e, posteriormente, como Tech Lead da equipe em que ele fazia parte. Durante esse período, tive a oportunidade de acompanhar de perto seu trabalho, e posso afirmar que sua competência e dedicação foram fundamentais para o sucesso do time. Ele é um desenvolvedor completo: altamente autossuficiente, responsável, pontual e assertivo em todas as demandas em que atua."
    },
    {
        initials: "RM",
        name: "Raphael Marques",
        role: "Software Developer",
        testimonial: "Tive o prazer de trabalhar ao lado do Júlio e posso afirmar que ele é um profissional excepcional. Suas soft skills se destacam de maneira impressionante, especialmente seu companheirismo e paciência. No que diz respeito às hard skills, o Júlio é um programador altamente competente. Sua expertise em PHP e MySQL, além de seu conhecimento em front-end, me ajudaram bastante a resolver diversos problemas complexos."
    }
];

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="flex items-center bg-jcbackground py-28">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    title=""
                    highlightedText="Depoimentos"
                    description="O que as pessoas dizem sobre meu trabalho"
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.initials}
                            initials={testimonial.initials}
                            name={testimonial.name}
                            role={testimonial.role}
                            testimonial={testimonial.testimonial}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
