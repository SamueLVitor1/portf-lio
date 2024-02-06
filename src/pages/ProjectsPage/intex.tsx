import { projetos } from "../../projetos/projetos";
import { ProjectsContainer } from "./styles";
import { GrFlagFill } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io";
import { FaLink } from "react-icons/fa6";

export function ProjectsPage() {
  return (
    <ProjectsContainer>
      <h1>
        Projetos
        <GrFlagFill size={26}/>
      </h1>


      <ul>
        {projetos.map((projeto, index) => {
          return (
            <li key={index}>
              <header>
                <h2>
                  {projeto.name}
                </h2>
              </header>

              <img src={projeto.img} alt="" />

              <section>
                <p>
                  {projeto.text}
                </p>

                <section>
                  <h3>Tecnologias: </h3>

                  <div>
                    {projeto.technologies.map((technique, index) => {
                      return (
                        <span key={index}>{technique}</span>
                      )
                    })}
                  </div>
                </section>
              </section>

              <footer>
                <a href={projeto.linkSite} target="_blank">
                  Site <FaLink />
                </a>

                <a href={projeto.linkGitHub} target="_blank">
                  Repositório <IoLogoGithub />
                </a>
              </footer>
            </li>
          )
        })}
      </ul>

    </ProjectsContainer>
  )
}


