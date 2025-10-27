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
        testimonial: "Tive o privilégio de trabalhar com o Júlio por quase dois anos e meio, inicialmente como colegas desenvolvedores e, posteriormente, como Tech Lead da equipe em que ele fazia parte. Durante esse período, tive a oportunidade de acompanhar de perto seu trabalho, e posso afirmar que sua competência e dedicação foram fundamentais para o sucesso do time. Quando assumi o papel de Tech Lead, uma das principais razões pela qual a transição ocorreu de forma tranquila foi justamente ter profissionais como o Júlio na equipe. Ele é um desenvolvedor completo: altamente autossuficiente, responsável, pontual e assertivo em todas as demandas em que atua. Além de ser tecnicamente muito competente, Júlio também possui uma excelente capacidade de colaborar com os demais membros da equipe, sempre disposto a ajudar e compartilhar conhecimento. Sua habilidade de resolver problemas de forma eficiente, aliada à sua organização e proatividade, fez dele um dos pilares do time, sendo capaz de lidar com tarefas complexas de forma independente. Sem dúvidas, Júlio é um profissional que agrega muito valor a qualquer equipe que faça parte."
    },
    {
        initials: "RM",
        name: "Raphael Marques",
        role: "Software Developer",
        testimonial: "Tive o prazer de trabalhar ao lado do Júlio e posso afirmar que ele é um profissional excepcional. Suas soft skills se destacam de maneira impressionante, especialmente seu companheirismo e paciência. Ele sempre se mostra disposto a ajudar os colegas, criando um ambiente colaborativo que incentiva o trabalho em equipe. Além disso, seu direcionamento para encontrar as melhores soluções é admirável. No que diz respeito às hard skills, o Júlio é um programador altamente competente. Sua expertise em PHP e MySQL, além de seu conhecimento em front-end, me ajudaram bastante a resolver diversos problemas complexos e a diminuir o tempo gasto nas entregas. Ele é um recurso valioso para qualquer equipe, pois não domina somente as ferramentas mencionadas, mas também se mantém atualizado com as últimas tendências do setor, o que contribui significativamente para o sucesso dos projetos em que está envolvido. Em resumo, o Júlio é o cara que anima o time e te ajuda nos momentos de perrengue do dia a dia."
    }
];

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="min-h-screen flex items-center bg-jcbackground py-20">
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

