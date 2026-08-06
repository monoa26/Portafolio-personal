import { Mail, Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { EncabezadoSeccion } from "./EncabezadoSeccion";

export function Contacto() {
  return (
    <section id="contact" className="w-full bg-background py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <EncabezadoSeccion eyebrow="Contacto" title="¿Tienes un proyecto en mente?" />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-6">
              <div className="persona-panel flex items-center gap-4 border-2 border-primary/40 bg-card p-6">
                <div className="persona-btn bg-primary p-3 text-primary-foreground">
                  <Mail size={18} />
                </div>
                <div>
                  <h3 className="persona-title text-lg font-bold text-foreground">
                    Correo electrónico
                  </h3>
                  <a
                    href="mailto:monosguardia@gmail.com"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    monosguardia@gmail.com
                  </a>
                </div>
              </div>

              <p className="pl-2 text-base font-medium text-muted-foreground">
                Escríbeme y conversemos sobre cómo puedo ayudarte.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold uppercase tracking-wider text-foreground"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full border-2 border-border bg-card px-3 py-2.5 text-sm font-medium text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold uppercase tracking-wider text-foreground"
                  >
                    Correo
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full border-2 border-border bg-card px-3 py-2.5 text-sm font-medium text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-bold uppercase tracking-wider text-foreground"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="w-full resize-none border-2 border-border bg-card px-3 py-2.5 text-sm font-medium text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="persona-btn inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-primary/85"
              >
                <Send size={16} />
                Enviar mensaje
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
