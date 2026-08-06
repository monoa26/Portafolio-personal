import { Github, Mail } from "lucide-react";

export function PieDePagina() {
  return (
    <footer className="w-full border-t-2 border-border bg-background">
      <div className="h-0.5 w-full bg-primary" />
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 py-12 sm:flex-row sm:px-6">
        <div className="text-center sm:text-left">
          <p className="persona-title text-2xl font-bold text-foreground">Joseph Guardia</p>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Desarrollador frontend
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/monoa26"
            target="_blank"
            rel="noopener noreferrer"
            className="persona-btn border-2 border-primary/40 p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=monosguardia@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="persona-btn border-2 border-primary/40 p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Correo electrónico"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
