import { useEffect } from "react";
import { Contact } from "../footer";
import { Banner } from "./banner/banner";
import { ProjectsHome } from "./projetosHome";
import { Sobre } from "./sobre";
import { useLocation } from "react-router-dom";
import { Highlight } from "./highlights";
import { Clientes } from "./clients";
import { Skills } from "./skills";

export function HomePage() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <>
      <Banner />
      <Sobre />
      <Skills />
      <Clientes />
      <Highlight />
      <ProjectsHome />
      <Contact />
    </>
  );
}
