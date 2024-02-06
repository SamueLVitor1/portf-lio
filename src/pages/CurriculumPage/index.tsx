import { CgNotes } from "react-icons/cg";
import { CurriculumContainer } from "./styles";

export function CurriculumPage() {
  return (
    <CurriculumContainer>
      <h1>Currículo <CgNotes /></h1>

      <section>
        <h2>
          Objetivo
        </h2>
        <p>
          Busco oportunidades como Desenvolvedor Web Full Stack Junior, onde eu possa aplicar e
          aprimorar meus conhecimentos em HTML, CSS, Javascript, React.js, Jest, Figma, API, Git
          e GitHub. Tenho o objetivo de participar ativamente no desenvolvimento de projetos
          inovadores, contribuindo para a criação de interfaces intuitivas, funcionais e responsivas.
          Estou motivado a colaborar em equipe, aprender novas tecnologias e metodologias ágeis,
          buscando não apenas solucionar problemas, mas também agregar valor aos projetos e
          crescer profissionalmente nesse dinâmico cenário de desenvolvimento web.
        </p>
      </section>

      <section>
        <h2>Resumo Profissional</h2>
        <p>
          Atualmente estou cursando Análise e Desenvolvimento de Sistemas pela UNIPAC e
          estudando Desenvolvimento Web Full Stack, iniciei minha jornada no Front-end, mas
          sempre buscando aprender outras áreas da tecnologia, para aprimorar ainda mais meus
          conhecimentos e habilidades de desenvolvimento de software
        </p>
      </section>

      <section>
        <h2>Formação Acadêmica</h2>
        <ul>
          <li>
            <strong>UNIPAC - </strong>
            Análise e Desenvolvimento de Sistemas (Cursando)- fev/2022- jul/2025
          </li>

          <li>
            <strong>IFTM -</strong> Técnico de Rede de Computadores- fev/2021- jul/2022
          </li>
        </ul>
      </section>

      <section>
        <h2>Cursos e Certificações</h2>
        <ul>
          <li> <strong>DevQuest - Dev em Dobro - </strong> Desenvolvimento Web Full Stack- Curso com
            monitoria e suporte-out/2023- cursando.</li>
          <li> <strong>Discover- Rocketseat - </strong> Curso introdutório de tecnologia para o desenvolvimento
            web, oferecido gratuitamente pela Rocketseat- fev/2023- maio/2023</li>
        </ul>
      </section>

      <section>
        <h2>Idiomas</h2>
        <ul>
          <li>Português Nativo</li>
          <li>Inglês Básico</li>
        </ul>
      </section>

      <section>
        <h2> Competências Técnicas</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>TypeScript</li>
          <li>API</li>
          <li>Styled-components</li>
          <li>Figma</li>
          <li>Jest</li>
          <li>Vite</li>
        </ul>
      </section>

      <section>
        <h2>Competências Comportamentais</h2>
        <ul>
          <li>Trabalho em Equipe</li>
          <li>Resolução de problemas</li>
          <li>Comunicação</li>
          <li>Raciocínio Lógico</li>
          <li>Flexibilidade</li>
        </ul>
      </section>
    </CurriculumContainer>
  )
}