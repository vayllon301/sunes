export default function Contacto() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
          Contacto
        </p>
        <h1 className="text-4xl font-semibold text-white">
          Hablemos. Respondemos en menos de 24h.
        </h1>
        <p className="text-lg text-white/70">
          Cuéntanos qué está pasando en tu empresa y qué objetivo quieres alcanzar.
          Prepararemos un diagnóstico sin coste con las palancas más relevantes.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-black/60 p-8">
        <form className="grid gap-6">
          <div className="grid gap-2">
            <label htmlFor="nombre" className="text-sm font-medium text-white/80">
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Tu nombre"
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-emerald-300"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="empresa" className="text-sm font-medium text-white/80">
              Empresa
            </label>
            <input
              id="empresa"
              name="empresa"
              type="text"
              placeholder="Nombre de la empresa"
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-emerald-300"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium text-white/80">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="correo@empresa.com"
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-emerald-300"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="telefono" className="text-sm font-medium text-white/80">
              Teléfono
            </label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              placeholder="+34 600 000 000"
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-emerald-300"
            />
          </div>
          <div className="grid gap-2">
            <label
              htmlFor="mensaje"
              className="text-sm font-medium text-white/80"
            >
              ¿En qué podemos ayudarte?
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              placeholder="Describe el contexto, los objetivos o los retos principales."
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-emerald-300"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-emerald-200"
          >
            Enviar consulta
          </button>
        </form>
        <p className="mt-6 text-sm font-semibold text-emerald-300">
          Respondemos en menos de 24h.
        </p>
      </section>
    </div>
  );
}

