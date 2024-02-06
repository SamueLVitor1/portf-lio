import { MyTechnologiesContainer } from "./styles";
import { MdOutlineRocketLaunch } from "react-icons/md";

export function MyTechnologies() {
  return (
    <MyTechnologiesContainer>
      <h2>Tecnogias e Ferramentas<MdOutlineRocketLaunch /></h2>

      <ul>

        <li>
          <img src="https://skillicons.dev/icons?i=html" alt="" />
        </li>
        <li>
          <img src="https://skillicons.dev/icons?i=css" alt="" />
        </li>
        <li>
          <img src="https://skillicons.dev/icons?i=js" alt="" />
        </li>
        <li>
          <img src="https://skillicons.dev/icons?i=git" alt="" />
        </li>
        <li>
          <img src="https://skillicons.dev/icons?i=figma" alt="" />
        </li>
        <li>
          <img src="https://skillicons.dev/icons?i=jest" alt="" />
        </li>
        <li>
          <img src="https://skillicons.dev/icons?i=typescript" alt="" />
        </li>
        <li>
          <img src="https://skillicons.dev/icons?i=react" alt="" />
        </li>
        <li>
          <img src="https://skillicons.dev/icons?i=postgresql" alt="" />
        </li>
        <li>
          <img src="https://skillicons.dev/icons?i=nodejs" alt="" />
        </li>
      </ul>

    </MyTechnologiesContainer>
  )
}