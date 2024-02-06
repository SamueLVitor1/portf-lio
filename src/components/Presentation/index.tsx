import { PresentationContainer } from "./styles";

export function Presentation() {
  return (
    <PresentationContainer>
      <header>
        <p>Hello World!👋</p>
        <h2>Eu sou o Samuel</h2>
        <h3>Frontend Developer</h3>
      </header>

      <section>
        <p> Atualmente estou cursando Análise e Desenvolvimento de Sistemas pela UNIPAC e
          estudando Desenvolvimento Web Full Stack, iniciei minha jornada no Front-end, mas
          sempre buscando aprender outras áreas da tecnologia, para aprimorar ainda mais meus
          conhecimentos e habilidades de desenvolvimento de software</p>
      </section>

      <footer>
        <button>
          baixar cv
        </button>
      </footer>
      
    </PresentationContainer>
  )
}