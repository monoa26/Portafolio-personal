import { Reveal } from "./Reveal";
import { EncabezadoSeccion } from "./EncabezadoSeccion";

export function SobreMi() {
  return (
    <section id="about" className="w-full bg-secondary py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <EncabezadoSeccion eyebrow="Sobre mí" title="Pasión por el código limpio" />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="persona-panel border-2 border-primary/40 bg-background p-8">
              <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground">
                Llevo 1 año creando aplicaciones web modernas con React y Tailwind CSS. Me encanta
                transformar ideas complejas en interfaces simples e intuitivas que las personas
                disfrutan usar.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-6 text-muted-foreground">
              <p>
                He trabajado en proyectos de comercio electrónico, dashboards de administración y
                landing pages de alto rendimiento. Mi enfoque combina atención al detalle visual con
                código mantenible y escalable.
              </p>
              <p>
                Cuando no estoy programando, disfruto aprender nuevas tecnologías, contribuir a
                proyectos personales y compartir lo que aprendo con la comunidad.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-3">
                {["React", "TypeScript", "Tailwind"].map((skill) => (
                  <div
                    key={skill}
                    className="persona-btn border-2 border-primary/40 bg-background p-4 text-center"
                  >
                    <p className="persona-title text-lg font-bold text-primary">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
