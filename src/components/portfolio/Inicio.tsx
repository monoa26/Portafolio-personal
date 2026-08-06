import { ArrowDown } from "lucide-react";
import heroBackground from "@/assets/fondo.jpg";
import { Reveal } from "./Reveal";

export function Inicio() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden px-4 py-20 sm:px-6"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="persona-stripes absolute right-0 top-0 h-40 w-full opacity-40" />
        <div className="persona-stripes absolute bottom-0 left-0 h-32 w-full opacity-30" />
        <div className="absolute -left-20 top-1/4 h-64 w-64 -rotate-12 bg-primary/10" />
        <div className="absolute -right-16 bottom-1/4 h-48 w-48 rotate-12 bg-primary/15" />
      </div>

      <Reveal>
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center space-y-6 text-center">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            <span className="persona-blink inline-block h-2 w-2 bg-primary" />
            Desarrollador frontend
          </p>
          <h1 className="persona-title text-6xl font-bold leading-[0.9] tracking-wide text-foreground sm:text-7xl lg:text-8xl">
            Hola, soy
            <br />
            <span className="text-primary">Joseph Guardia</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-medium text-muted-foreground">
            Construyo interfaces web rápidas, accesibles y con diseño minimalista. Me especializo en
            React, Tailwind CSS y experiencias centradas en el usuario.
          </p>
          <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row">
            <a
              href="#projects"
              className="persona-btn inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-primary/85"
            >
              Ver proyectos
            </a>
            <a
              href="#contact"
              className="persona-btn inline-flex items-center gap-2 border-2 border-primary/60 bg-background px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Contactar
            </a>
          </div>
        </div>
      </Reveal>

      <a
        href="#about"
        className="persona-blink absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-primary transition-colors hover:text-primary/70 lg:inline-flex"
        aria-label="Desplazarse hacia abajo"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
