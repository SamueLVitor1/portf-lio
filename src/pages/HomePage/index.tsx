import { LastProjects } from "../../components/LastProjects";
import { MyTechnologies } from "../../components/MyTechnologies";
import { Presentation } from "../../components/Presentation";
import { HomeContainer } from "./styles";

export function HomePage() {
  return (
    <HomeContainer>
      <Presentation />
      <LastProjects />
      <MyTechnologies/>
    </HomeContainer>
  )
}