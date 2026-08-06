import { ExternalLink, Github } from "lucide-react";
import agrostoreImage from "@/assets/agrostore.jpg";
import { Reveal } from "./Reveal";
import { EncabezadoSeccion } from "./EncabezadoSeccion";

const projects = [
  {
    title: "AgroStore",
    description: "Una tienda que apoya al campesino para facilitarle la venta de sus productos.",
    image: agrostoreImage,
    tags: ["React", "Tailwind", "Node.js", "TypeScript"],
    demo: "https://agrostoreapp.netlify.app/",
    repo: "https://github.com/monoa26/AgroStore",
  },
];

export function Proyectos() {
  return (
    <section id="projects" className="w-full bg-secondary py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <EncabezadoSeccion eyebrow="Proyectos" title="Trabajos recientes" />
        </Reveal>

        <Reveal>
          <div className="mx-auto grid max-w-4xl gap-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group persona-panel grid overflow-hidden border-2 border-primary/40 bg-card transition-all hover:border-primary md:grid-cols-2"
              >
                <div className="relative overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={`Captura del proyecto ${project.title}`}
                    width={1200}
                    height={675}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="persona-stripes pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-40" />
                </div>

                <div className="flex flex-col p-7">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border-2 border-primary bg-background px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="persona-title text-4xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-base font-medium text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-6 flex items-center gap-5">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:text-primary/70"
                    >
                      Ver demo
                      <ExternalLink size={15} />
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Github size={15} />
                      Código
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
