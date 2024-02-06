import { projetos } from "../../projetos/projetos";
import { LastProjectsContainer } from "./styles";

const recentProjects = projetos.slice(0, 3)

export function LastProjects() {
  return (
    <LastProjectsContainer>
      <h2>Meus últimos projetos {"< />"}</h2>

      {recentProjects.map((project, index) => {
        return (
          <a key={index} href={project.linkSite} target="_blank">
            <li>
              <img src={project.img} alt="" />
              <div>
                <h3>{project.name}</h3>
                <p>{project.text}</p>
              </div>
            </li>
          </a>
        )
      })}

    </LastProjectsContainer>
  )
}