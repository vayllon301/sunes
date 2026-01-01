const articles = [
  {
    title: "Cómo implementar IA en empresas tradicionales sin generar rechazo",
    summary:
      "Metodología paso a paso para introducir automatizaciones y asistentes internos con comunicación clara y métricas de éxito.",
  },
  {
    title: "El tipo de contenido que realmente atrae clientes de alto valor",
    summary:
      "Framework editorial que prioriza relevancia, autoridad y consistencia por encima del volumen vacío.",
  },
  {
    title: "Automatización empresarial: qué sí y qué no automatizar",
    summary:
      "Guía práctica para clasificar procesos según impacto, dependencia humana y riesgo operativo.",
  },
  {
    title: "Publicidad digital con IA: la manera moderna de escalar",
    summary:
      "Uso de modelos predictivos y creatividades dinámicas para mejorar CPL, ROAS y rentabilidad neta.",
  },
  {
    title: "Cómo reducir costos sin tocar personal gracias a la IA",
    summary:
      "Casos de ahorro operativo enfocado en tareas administrativas, soporte y reporting.",
  },
  {
    title: "El futuro del marketing en empresas B2B",
    summary:
      "Tendencias reales (sin ruido) sobre personalización, data de primera mano y ciclos de venta largos.",
  },
];

export default function Blog() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
          Blog / Recursos
        </p>
        <h1 className="text-4xl font-semibold text-white">
          El blog existe para posicionar SEO, demostrar autoridad y educar sin
          ser redundantes.
        </h1>
        <p className="text-lg text-white/70">
          Cada artículo nace de preguntas reales de nuestros clientes y prospectos.
          Así garantizamos utilidad inmediata.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {articles.map((article) => (
          <article
            key={article.title}
            className="rounded-3xl border border-white/10 bg-black/50 p-6 transition hover:-translate-y-1 hover:border-white/30"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
              Recurso recomendado
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">{article.title}</h2>
            <p className="mt-4 text-white/75">{article.summary}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#0f172a] via-[#0d1b2a] to-black p-8 text-center">
        <h2 className="text-2xl font-semibold text-white">
          ¿Quieres que tratemos un tema específico?
        </h2>
        <p className="mt-4 text-white/70">
          Escríbenos y lo convertimos en un recurso accionable. Buscamos resolver
          dudas reales, no alimentar el ruido.
        </p>
      </section>
    </div>
  );
}

