import { ContanctPageContainer } from "./styles";
import { LuMonitorSmartphone } from "react-icons/lu";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";

export function ContanctPage() {
  return (
    <ContanctPageContainer>
      <h1>
        Contatos
        <LuMonitorSmartphone />
      </h1>

      <section>
        <div>
          <FaLinkedin color="#0A66C2" />
          <a href="https://www.linkedin.com/in/samuell-vitor-dev/" target="_blank">
            /samuell-vitor-dev
            /</a>
        </div>

        <div>
          <MdOutlineMailOutline color="#EA4335" />
          <a href="mailto:samuelvitor.andrade1@gmail.com" target="_blank">
            samuelvitor.andrade1@gmail.com
          </a>
        </div>

        <div>
          <FaWhatsapp color="#27B83F" />
          <a href="#">
            (34)99154-8846
          </a>
        </div>

        <div>
          <IoLogoGithub />
          <a href="https://github.com/SamueLVitor1" target="_blank">
            /SamueLVitor1
          </a>
        </div>
      </section>

    </ContanctPageContainer>
  )
}