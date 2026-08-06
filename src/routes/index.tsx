import { createFileRoute } from "@tanstack/react-router";
import { Inicio } from "../components/portfolio/Inicio";
import { SobreMi } from "../components/portfolio/SobreMi";
import { Proyectos } from "../components/portfolio/Proyectos";
import { Habilidades } from "../components/portfolio/Habilidades";
import { Contacto } from "../components/portfolio/Contacto";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Joseph Guardia — Desarrollador Frontend" },
      {
        name: "description",
        content:
          "Portafolio de Joseph Guardia, desarrollador frontend especializado en React, Tailwind CSS y experiencias web minimalistas.",
      },
      {
        property: "og:title",
        content: "Joseph Guardia — Desarrollador Frontend",
      },
      {
        property: "og:description",
        content: "Portafolio de desarrollador frontend con proyectos en React y Tailwind CSS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Inicio />
      <SobreMi />
      <Proyectos />
      <Habilidades />
      <Contacto />
    </>
  );
}
