import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage/intex";
import { ContanctPage } from "./pages/ContanctPage";
import { CurriculumPage } from "./pages/CurriculumPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contanct" element={<ContanctPage />} />
        <Route path="/curriculum" element={<CurriculumPage />} />
      </Route>
    </Routes>
  )
}