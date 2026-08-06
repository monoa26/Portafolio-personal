import { Reveal } from "./Reveal";
import { EncabezadoSeccion } from "./EncabezadoSeccion";

const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Start",
      "TanStack Router",
      "TanStack Query",
    ],
  },
  {
    category: "Herramientas",
    items: ["Vite", "ESLint", "Prettier", "npm", "Git", "VS Code"],
  },
  {
    category: "Diseño",
    items: ["UI/UX básico", "Diseño responsive", "Accesibilidad", "Prototipado"],
  },
];

export function Habilidades() {
  return (
    <section id="skills" className="w-full bg-background py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <EncabezadoSeccion eyebrow="Habilidades" title="Tecnologías y herramientas" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={index * 100}>
              <div className="persona-panel border-2 border-primary/40 bg-card p-7">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="persona-title text-2xl font-bold text-primary">
                    {group.category}
                  </h3>
                  <span className="inline-block h-3 w-3 bg-primary" />
                </div>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      <span className="inline-block h-2 w-2 bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
