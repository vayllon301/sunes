import Link from "next/link";

const marketingServices = [
  {
    title: "Gestión de Redes Sociales",
    description:
      "Contenidos que transmiten valor, autoridad y coherencia. El objetivo no es publicar más: es publicar mejor.",
  },
  {
    title: "Publicidad Digital",
    description:
      "Campañas optimizadas con IA que ajustan presupuesto, segmentación y mensajes para maximizar rendimiento.",
  },
  {
    title: "Diseño Web Profesional",
    description:
      "Creamos páginas con estética limpia, estrategia detrás y arquitectura pensada para convertir. No solo diseñamos: construimos experiencias.",
    bullets: [
      "Velocidad optimizada",
      "Tono y estructura compatibles con empresas de ticket medio/alto",
      "Diseño alineado con tu identidad visual",
      "Orientado a conversión, claridad y confianza",
    ],
  },
  {
    title: "SEO Estratégico",
    description:
      "Posicionamiento orgánico pensado para atraer clientes cualificados de forma constante, sin depender al 100% de la publicidad.",
    bullets: [
      "Auditoría técnica",
      "Optimización on-page y off-page",
      "Arquitectura SEO limpia y escalable",
      "Contenido optimizado para intención de búsqueda",
      "Estrategia de palabras clave centrada en captación real",
    ],
  },
  {
    title: "Branding & Diseño",
    description:
      "Identidades visuales limpias, modernas y con sentido estratégico para empresas que buscan diferenciarse.",
  },
  {
    title: "Estrategias y Embudos de Conversión",
    description:
      "Recorridos que guían al cliente desde el interés hasta la compra, paso a paso y sin fricción.",
  },
];

const aiServices = [
  {
    title: "Automatización de tareas repetitivas",
    description: "Menos errores. Más velocidad. Más enfoque en lo que importa.",
  },
  {
    title: "Asistentes internos de IA",
    description:
      "Bots que procesan datos, responden, analizan y toman decisiones dentro del flujo de trabajo.",
  },
  {
    title: "Optimización de procesos",
    description:
      "Detectamos cuellos de botella y creamos estructuras más eficientes a nivel operativo.",
  },
  {
    title: "Integraciones IA + Sistemas actuales",
    description:
      "CRM, inventario, contabilidad, atención al cliente… La IA se adapta, no reemplaza.",
  },
];

function Section({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
        {eyebrow}
      </p>
      <h1 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h1>
      <p className="text-lg text-white/70">{copy}</p>
    </div>
  );
}

export default function Servicios() {
  return (
    <div className="space-y-20">
      <Section
        eyebrow="Servicios"
        title="Estrategia, ejecución y tecnología trabajando en sincronía."
        copy="Diseñamos servicios modulares, pero coordinados. Puedes empezar con un frente específico o con una solución integral que combine marketing e IA."
      />

      <div className="space-y-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-8">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">
            Marketing digital
          </p>
          <h2 className="text-2xl font-semibold text-white">
            Acciones pensadas para empresas que buscan estabilidad en sus
            resultados.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {marketingServices.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_0_40px_rgba(0,0,0,0.35)]"
            >
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-white/75">{service.description}</p>
              {service.bullets && (
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {service.bullets.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>

      <div className="space-y-8 rounded-3xl border border-white/10 bg-[#0b0b0f] p-8">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">
            Inteligencia artificial para empresas
          </p>
          <h2 className="text-2xl font-semibold text-white">
            IA aplicada a procesos reales de negocio.
          </h2>
          <p className="text-white/70">
            No instalamos herramientas por instalarlas. Partimos de tus
            operaciones actuales para que la adopción sea rápida y medible.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {aiServices.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-white/10 bg-black/30 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-white/75">{service.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#101827] via-[#0f172a] to-black p-8 text-center">
        <h2 className="text-2xl font-semibold text-white">
          ¿Tu empresa necesita un plan a medida?
        </h2>
        <p className="mt-4 text-white/70">
          Empezamos con un diagnóstico sin coste. Te mostramos las palancas de
          crecimiento y los procesos que podemos automatizar.
        </p>
        <Link
          href="/contacto"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-emerald-200"
        >
          Hablar con SUNES
        </Link>
      </div>
    </div>
  );
}

