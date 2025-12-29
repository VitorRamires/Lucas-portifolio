import { Route, Routes } from "react-router-dom";
import { Experiences } from "./experiencias/experiecias";
import { HomePage } from "./homePage/HomePage";
import { Project } from "./projetos/projeto";
import { Technologies } from "./tecnologias";

export function AnimateRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<Experiences />} />
        <Route path="/project" element={<Project />} />
        <Route path="/technologies" element={<Technologies />} />
      </Routes>
    </>
  );
}
