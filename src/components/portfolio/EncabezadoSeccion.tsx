export function EncabezadoSeccion({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-[3px] w-10 bg-primary" />
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      </div>
      <h2 className="persona-title text-4xl font-bold leading-none text-foreground sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}
