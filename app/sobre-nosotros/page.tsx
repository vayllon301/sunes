const focusAreas = [
  "Orden",
  "Escalabilidad",
  "Procesos más claros",
  "Marketing que funcione siempre",
  "Tecnología que simplifique, no que complique",
];

const principles = [
  {
    title: "Estrategia + datos",
    copy: "Cada propuesta nace de un diagnóstico real. Los datos mandan, la intuición acompaña.",
  },
  {
    title: "Tecnología útil",
    copy: "IA y automatizaciones solo cuando resuelven un cuello de botella o mejoran la experiencia del cliente.",
  },
  {
    title: "Acompañamiento cercano",
    copy: "Trabajamos como parte de tu equipo, no como proveedores externos que aparecen una vez al mes.",
  },
];

export default function SobreNosotros() {
  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
          Sobre nosotros
        </p>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold text-white">
            SUNES no surge para ser “otra agencia más”.
          </h1>
          <p className="text-lg text-white/75">
            Nace para cubrir una necesidad real: empresas que quieren avanzar,
            pero no tienen tiempo para probar, corregir y volver a empezar sin una
            guía clara.
          </p>
          <p className="text-lg text-white/75">
            Somos un equipo que combina estrategia, datos y tecnología para
            transformar negocios sin que pierdan su esencia.
          </p>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold text-white">
            ¿Con qué tipo de empresas trabajamos mejor?
          </h2>
          <p className="mt-4 text-white/70">
            Empresas que valoran el orden, los indicadores y el acompañamiento.
          </p>
          <ul className="mt-6 space-y-3 text-white/80">
            {focusAreas.map((area) => (
              <li key={area} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                {area}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-black/40 p-8">
          <h2 className="text-2xl font-semibold text-white">
            Nuestra forma de pensar
          </h2>
          <div className="mt-6 space-y-6 text-white/75">
            {principles.map((principle) => (
              <div key={principle.title}>
                <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
                  {principle.title}
                </p>
                <p className="mt-2 text-white/80">{principle.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#0f172a] via-[#0a0f1c] to-black p-8">
        <h2 className="text-2xl font-semibold text-white">
          Nos enfocamos en resultados que se sienten y se ven.
        </h2>
        <p className="mt-4 text-white/75">
          Lo interno cambia porque los equipos recuperan tiempo y claridad. Lo
          externo se nota porque los clientes reciben mensajes consistentes y
          experiencias fluidas.
        </p>
      </section>
    </div>
  );
}

