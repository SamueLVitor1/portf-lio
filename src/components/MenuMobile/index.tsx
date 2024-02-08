import { Link } from "react-router-dom";
import { Container } from "./styles";
import { X } from "@phosphor-icons/react";
import { useEffect } from "react";

interface MenuMobileProps {
  menuIsVisible: boolean,
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}


export function MenuMobile({ menuIsVisible, setMenuIsVisible }: MenuMobileProps) {

  useEffect(()=>{
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible])

  return (
    <Container menuIsVisible={menuIsVisible}>
      < X size={45} color="#fff" onClick={() => setMenuIsVisible(false)} />
      <nav>

        <Link to="/" onClick={() => setMenuIsVisible(false)}>
          Home
        </Link>

        <Link to="/projects" onClick={() => setMenuIsVisible(false)}>
          Projetos
        </Link>

        <Link to="/curriculum" onClick={() => setMenuIsVisible(false)}>
          Currículo
        </Link>

        <Link to="/contanct" onClick={() => setMenuIsVisible(false)}>
          Contato
        </Link>

      </nav>
    </Container>
  )
}