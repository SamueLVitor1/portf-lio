import { Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { AsideContainer } from "./styles";
import profile from "../../assets/profieeele.jpg"
import { Link } from "react-router-dom";

export function AsideInfo() {
  return (
    <>
      <AsideContainer>
        <img src={profile} alt="" />

        <nav>
          <ul>
            <Link to="/">
              <li>
                Home
              </li>
            </Link>

            <Link to="/projects">
              <li>Projetos</li>
            </Link>

            <Link to="/curriculum">
              <li>Currículo</li>
            </Link> 

            <Link to="/contanct">
              <li>Contato</li>
            </Link>

          </ul>
        </nav>


        <footer>
          <a href="https://github.com/SamueLVitor1" target="_blank">
            <GithubLogo size={22} weight="fill" />
          </a>

          <a href="https://www.linkedin.com/in/samuell-vitor-dev/" target="_blank">
            <LinkedinLogo size={22} weight="fill" />
          </a>

          <a href="mailto:samuelvitor.andrade1@gmail.com" target="_blank">
            <Envelope size={25} weight="fill" />
          </a>
        </footer>
      </AsideContainer>
    </>
  )
}