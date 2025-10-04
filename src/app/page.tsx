import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import DownloadButton from "@/components/DownloadButton";

export default function Home() {

  return (
    <div className="flex flex-col w-full bg-jcbackground text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-jcbackground/90 backdrop-blur-sm border-b border-jcbackground-secondary">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-jcred">JC</span> Portfolio
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:text-jcred transition-colors duration-300">Home</a>
            <a href="#about" className="hover:text-jcred transition-colors duration-300">Sobre</a>
            <a href="#experience" className="hover:text-jcred transition-colors duration-300">Experiência</a>
            <a href="#projects" className="hover:text-jcred transition-colors duration-300">Projetos</a>
            <a href="#testimonials" className="hover:text-jcred transition-colors duration-300">Depoimentos</a>
            <a href="#contact" className="hover:text-jcred transition-colors duration-300">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-jcbackground pt-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-6xl md:text-7xl font-bold leading-tight">
              <div>Olá, sou</div>
              <div className="text-jcred">Julio Castro</div>
            </div>
            <div className="text-2xl md:text-3xl text-gray-300">
              Desenvolvedor <span className="text-jcred font-semibold">Full Stack</span>
            </div>
            <p className="text-lg text-gray-400 max-w-md">
              Transformando ideias em soluções digitais inovadoras com tecnologias modernas e código limpo.
            </p>
            <div className="flex gap-4">
              <DownloadButton variant="secondary" size="lg">
                Download CV
              </DownloadButton>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-jcred/20 rounded-full blur-3xl"></div>
              <Image
                src="/images/profilehome.png"
                alt="Julio Castro"
                width={500}
                height={500}
                className="relative z-10 rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center bg-jcbackground-secondary py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-jcred/20 rounded-2xl blur-3xl transform rotate-6"></div>
                <Image
                  src="/images/profileaboutme.png"
                  alt="Julio Castro"
                  width={450}
                  height={450}
                  className="relative z-10 rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-jcred text-white p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">11+</div>
                  <div className="text-sm">Anos de Experiência</div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold mb-4">
                  Sobre <span className="text-jcred">Mim</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Sou um desenvolvedor Full Stack apaixonado por tecnologia e inovação.
                  Com experiência em diversas empresas, tenho expertise em criar soluções
                  robustas e escaláveis que impactam positivamente os negócios.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-jcbackground p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-jcred mb-2">15+</div>
                  <div className="text-gray-400">Tecnologias Dominadas</div>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-jcred">Skills Técnicas</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-jcbackground p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-jcred rounded-full"></div>
                      <span className="font-medium">Frontend</span>
                    </div>
                    <div className="text-sm text-gray-400">React, Next.js, Vue.js, TypeScript, TailwindCSS, Bootstrap</div>
                  </div>
                  <div className="bg-jcbackground p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-jcred rounded-full"></div>
                      <span className="font-medium">Backend</span>
                    </div>
                    <div className="text-sm text-gray-400">PHP, Laravel, Node.js, MySQL, PostgreSQL, MongoDB</div>
                  </div>
                  <div className="bg-jcbackground p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-jcred rounded-full"></div>
                      <span className="font-medium">Mobile</span>
                    </div>
                    <div className="text-sm text-gray-400">React Native, Flutter</div>
                  </div>
                  <div className="bg-jcbackground p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-jcred rounded-full"></div>
                      <span className="font-medium">DevOps</span>
                    </div>
                    <div className="text-sm text-gray-400">Docker, AWS, CI/CD, Git</div>
                  </div>
                </div>
              </div>

              {/* Soft Skills */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-jcred">Soft Skills</h3>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-jcbackground px-4 py-2 rounded-full border border-jcred/30">
                    <span className="text-sm">Liderança</span>
                  </div>
                  <div className="bg-jcbackground px-4 py-2 rounded-full border border-jcred/30">
                    <span className="text-sm">Comunicação</span>
                  </div>
                  <div className="bg-jcbackground px-4 py-2 rounded-full border border-jcred/30">
                    <span className="text-sm">Trabalho em Equipe</span>
                  </div>
                  <div className="bg-jcbackground px-4 py-2 rounded-full border border-jcred/30">
                    <span className="text-sm">Resolução de Problemas</span>
                  </div>
                  <div className="bg-jcbackground px-4 py-2 rounded-full border border-jcred/30">
                    <span className="text-sm">Adaptabilidade</span>
                  </div>
                  <div className="bg-jcbackground px-4 py-2 rounded-full border border-jcred/30">
                    <span className="text-sm">Pensamento Crítico</span>
                  </div>
                  <div className="bg-jcbackground px-4 py-2 rounded-full border border-jcred/30">
                    <span className="text-sm">Gestão de Tempo</span>
                  </div>
                  <div className="bg-jcbackground px-4 py-2 rounded-full border border-jcred/30">
                    <span className="text-sm">Mentoria</span>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-6">
                <DownloadButton variant="primary" size="lg">
                  Baixar Currículo Completo
                </DownloadButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center bg-jcbackground py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experiência <span className="text-jcred">Profissional</span>
            </h2>
            <p className="text-lg text-gray-400">Empresas onde tive o prazer de trabalhar</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* RP Consultoria */}
            <div className="bg-jcbackground-secondary p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-jcred/20 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-jcred font-bold text-xl">RP</span>
                </div>
                <h3 className="text-xl font-semibold">RP Consultoria</h3>
                <p className="text-gray-400 text-sm">
                  A RP Consultoria é uma empresa com mais de 20 anos no mercado de Tecnologia da Informação, especializada em soluções inovadoras nos mais
                  diversos segmentos da indústria, provendo serviços de consultoria, desenvolvimento de sistemas e licenciamento de produtos.
                </p>
              </div>
            </div>

            {/* FCamara */}
            <div className="bg-jcbackground-secondary p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-jcred/20 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-jcred font-bold text-xl">FC</span>
                </div>
                <h3 className="text-xl font-semibold">FCamara</h3>
                <p className="text-gray-400 text-sm">
                  FCamara é uma empresa de tecnologia e inovação que transforma a adoção de jornadas digitais em valor para os negócios.
                  Com mais de 16 anos de experiência é uma multinacional brasileira com operações presentes na Europa e Reino Unido.
                  Possue um ecossistema que abrange a orquestração de jornadas digitais completas, oferecendo um conjunto de competências que nos permite desenvolver iniciativas sem partir do zero.
                </p>
              </div>
            </div>

            {/* Infracommerce */}
            <div className="bg-jcbackground-secondary p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-jcred/20 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-jcred font-bold text-xl">IC</span>
                </div>
                <h3 className="text-xl font-semibold">Infracommerce</h3>
                <p className="text-gray-400 text-sm">
                  A Infracommerce é um ecossistema digital que oferece soluções completas e integradas para o e-commerce de grandes marcas e indústrias na
                  América Latina, conectando a jornada do cliente da captação do pedido à entrega, usando inteligência de dados, tecnologia, logística e
                  segurança para digitalizar canais de vendas em um modelo white-label.
                </p>
              </div>
            </div>

            {/* StudioWox */}
            <div className="bg-jcbackground-secondary p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-jcred/20 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-jcred font-bold text-xl">SW</span>
                </div>
                <h3 className="text-xl font-semibold">StudioWox</h3>
                <p className="text-gray-400 text-sm">
                  O Studio Wox é uma produtora de tecnologia dedicada a transformar ideias em produtos digitais de impacto. Atuamos em todas as etapas
                  do ciclo de vida de um projeto, desde a concepção e design até o desenvolvimento e entrega de soluções disruptivas, sempre incorporando
                  as mais recentes tecnologias emergentes e inteligência artificial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center bg-jcbackground-secondary py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Projetos que <span className="text-jcred">Atuei</span>
            </h2>
            <p className="text-lg text-gray-400">Alguns dos projetos que tive a oportunidade de atuar</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-jcbackground rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-jcred/20 flex items-center justify-center">
                <span className="text-jcred text-4xl">
                  <Image
                    src="/logofe.png"
                    alt="Franquia Extranet"
                    width={250}
                    height={250}
                  />
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <a href="https://www.extranet.com.br/" target="_blank" rel="noopener noreferrer">Franquia Extranet</a>
                </h3>
                <p className="text-gray-400 mb-4">Plataforma de gerenciamento de franquias</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-jcred/20 text-jcred px-3 py-1 rounded-full text-sm">MySQL</span>
                  <span className="bg-jcred/20 text-jcred px-3 py-1 rounded-full text-sm">PHP</span>
                  <span className="bg-jcred/20 text-jcred px-3 py-1 rounded-full text-sm">Bootstrap</span>
                  <span className="bg-jcred/20 text-jcred px-3 py-1 rounded-full text-sm">Linux</span>
                  <span className="bg-jcred/20 text-jcred px-3 py-1 rounded-full text-sm">S3</span>
                </div>
              </div>
            </div>

            <div className="bg-jcbackground rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-jcred/20 flex items-center justify-center text-white font-bold text-2xl">
                <Image
                  src="/logoaigreja.svg"
                  alt="A Igreja do Brasil App"
                  width={180}
                  height={180}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <a href="https://apps.apple.com/kw/app/a-igreja-do-brasil/id1669849118?platform=iphone" target="_blank" rel="noopener noreferrer">A Igreja do Brasil App</a>
                </h3>
                <p className="text-gray-400 mb-4">Aplicativo mobile desenvolvido com React Native para a Igreja do Brasil</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-jcred/20 text-jcred px-3 py-1 rounded-full text-sm">React Native</span>
                  <span className="bg-jcred/20 text-jcred px-3 py-1 rounded-full text-sm">TypeScript</span>
                  <span className="bg-jcred/20 text-jcred px-3 py-1 rounded-full text-sm">TailwindCSS</span>
                  <span className="bg-jcred/20 text-jcred px-3 py-1 rounded-full text-sm">Firebase</span>
                </div>
              </div>
            </div>

            <div className="bg-jcbackground rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-jcred/20 flex items-center justify-center">
                <span className="text-jcred text-4xl">
                  <Image
                    src="/logoreppos.png"
                    alt="Reppos Brasil"
                    width={100}
                    height={100}
                  />
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <a href="https://www.reppos.com.br/" target="_blank" rel="noopener noreferrer">Reppos Brasil</a>
                </h3>
                <p className="text-gray-400 mb-4">Uma plataforma B2B de e-commerce criada para intermediar as vendas entre distribuidores parceiros e varejistas.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-jcred/20 text-jcred px-3 py-1 rounded-full text-sm">Next.js</span>
                  <span className="bg-jcred/20 text-jcred px-3 py-1 rounded-full text-sm">Nest.js</span>
                  <span className="bg-jcred/20 text-jcred px-3 py-1 rounded-full text-sm">Postgres</span>
                  <span className="bg-jcred/20 text-jcred px-3 py-1 rounded-full text-sm">MongoDB</span>
                  <span className="bg-jcred/20 text-jcred px-3 py-1 rounded-full text-sm">Docker</span>
                  <span className="bg-jcred/20 text-jcred px-3 py-1 rounded-full text-sm">Kafka</span>
                </div>
              </div>
            </div>
            <div className="bg-jcbackground rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-jcred/20 flex items-center justify-center text-white font-bold text-2xl">
                HolyApp Church
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <a href="https://www.holyapp.church/" target="_blank" rel="noopener noreferrer">HolyApp Church</a>
                </h3>
                <p className="text-gray-400 mb-4">Sistema de gestão de igrejas criado para o Ministério de Apoio às Igrejas do Brasil</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-jcred/20 text-jcred px-3 py-1 rounded-full text-sm">Laravel</span>
                  <span className="bg-jcred/20 text-jcred px-3 py-1 rounded-full text-sm">Livewire</span>
                  <span className="bg-jcred/20 text-jcred px-3 py-1 rounded-full text-sm">TailwindCSS</span>
                  <span className="bg-jcred/20 text-jcred px-3 py-1 rounded-full text-sm">MySQL</span>
                  <span className="bg-jcred/20 text-jcred px-3 py-1 rounded-full text-sm">Docker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="min-h-screen flex items-center bg-jcbackground py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-jcred">Depoimentos</span>
            </h2>
            <p className="text-lg text-gray-400">O que as pessoas dizem sobre meu trabalho</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-jcbackground-secondary p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-jcred/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-jcred font-bold">RB</span>
                </div>
                <div>
                  <h4 className="font-semibold">Rogério Benco</h4>
                  <p className="text-sm text-gray-400">Tech Lead</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "O Júlio é um excelente profissional que possui um coração aberto para aprender e sempre muito comprometido com o projeto e com a equipe.
                Inclusive seu perfil comunicativo e carismático ajudou a compor o bom clima da equipe na qual atuávamos juntos.
                Nessa ocasião eu era o Tech Lead da squad e foi muito fácil supervisionar o trabalho do Julio, pois a qualidade de suas entregas eram excelentes.
                Não é à toa que o Júlio cresceu, ganhou espaço em novos projetos dentro da empresa e continua crescendo em conhecimento e experiência.
                Sucesso em sua carreira!"
              </p>
            </div>

            <div className="bg-jcbackground-secondary p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-jcred/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-jcred font-bold">JS</span>
                </div>
                <div>
                  <h4 className="font-semibold">Jhosefer Senna</h4>
                  <p className="text-sm text-gray-400">Tech Lead</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Tive o privilégio de trabalhar com o Júlio por quase dois anos e meio, inicialmente como colegas desenvolvedores e, posteriormente, como Tech Lead da equipe em que ele fazia parte. Durante esse período, tive a oportunidade de acompanhar de perto seu trabalho, e posso afirmar que sua competência e dedicação foram fundamentais para o sucesso do time.
                Quando assumi o papel de Tech Lead, uma das principais razões pela qual a transição ocorreu de forma tranquila foi justamente ter profissionais como o Júlio na equipe. Ele é um desenvolvedor completo: altamente autossuficiente, responsável, pontual e assertivo em todas as demandas em que atua. Além de ser tecnicamente muito competente, Júlio também possui uma excelente capacidade de colaborar com os demais membros da equipe, sempre disposto a ajudar e compartilhar conhecimento.
                Sua habilidade de resolver problemas de forma eficiente, aliada à sua organização e proatividade, fez dele um dos pilares do time, sendo capaz de lidar com tarefas complexas de forma independente. Sem dúvidas, Júlio é um profissional que agrega muito valor a qualquer equipe que faça parte."
              </p>
            </div>

            <div className="bg-jcbackground-secondary p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-jcred/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-jcred font-bold">RM</span>
                </div>
                <div>
                  <h4 className="font-semibold">Raphael Marques</h4>
                  <p className="text-sm text-gray-400">Software Developer</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Tive o prazer de trabalhar ao lado do Júlio e posso afirmar que ele é um profissional excepcional. Suas soft skills se destacam de maneira impressionante, especialmente seu companheirismo e paciência. Ele sempre se mostra disposto a ajudar os colegas, criando um ambiente colaborativo que incentiva o trabalho em equipe. Além disso, seu direcionamento para encontrar as melhores soluções é admirável.
                No que diz respeito às hard skills, o Júlio é um programador altamente competente. Sua expertise em PHP e MySQL, além de seu conhecimento em front-end, me ajudaram bastante a resolver diversos problemas complexos e a diminuir o tempo gasto nas entregas. Ele é um recurso valioso para qualquer equipe, pois não domina somente as ferramentas mencionadas, mas também se mantém atualizado com as últimas tendências do setor, o que contribui significativamente para o sucesso dos projetos em que está envolvido. Em resumo, o Júlio é o cara que anima o time e te ajuda nos momentos de perrengue do dia a dia."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center bg-jcbackground-secondary py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Vamos <span className="text-jcred">Conversar</span>
            </h2>
            <p className="text-lg text-gray-400">Entre em contato para discutirmos seu próximo projeto</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-jcbackground p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-jcred">Informações de Contato</h3>
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
              </div>

              <div className="bg-jcbackground p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-jcred">Redes Sociais</h3>
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
              </div>
            </div>

            <div className="bg-jcbackground-secondary p-8 rounded-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-jcbackground py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-2xl font-bold mb-4">
            <span className="text-jcred">JC</span> Portfolio
          </div>
          <p className="text-gray-400 mb-4">
            Desenvolvido com ❤️ por Julio Castro
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/julio-castro-171a88114/" className="text-gray-400 hover:text-jcred transition-colors">LinkedIn</a>
            <a href="https://github.com/JulioCesarCastro" className="text-gray-400 hover:text-jcred transition-colors">GitHub</a>
            <a href="https://www.instagram.com/juliocastrodev" className="text-gray-400 hover:text-jcred transition-colors">Instagram</a>
          </div>
          <div className="mt-6 pt-6 border-t border-jcbackground">
            <p className="text-gray-500 text-sm">
              © 2024 Julio Castro. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
