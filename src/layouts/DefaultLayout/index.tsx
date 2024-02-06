import { Outlet } from "react-router-dom";
import { DefaultContainer } from "./styles";
import { AsideInfo } from "../../components/AsideInfo";

export function DefaultLayout() {
  return (
    <DefaultContainer>
      <AsideInfo/>
      <Outlet />
    </DefaultContainer>
  )
}