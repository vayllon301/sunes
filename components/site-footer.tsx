import Link from "next/link";

const footerLinks = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Sobre nosotros", href: "/sobre-nosotros" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

const resourceLinks = [
  "Cómo implementar IA en empresas tradicionales sin generar rechazo",
  "El tipo de contenido que realmente atrae clientes de alto valor",
  "Automatización empresarial: qué sí y qué no automatizar",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#282828]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:gap-12 lg:px-8">
        <div className="space-y-4">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#DC6C31]">
            SUNES
          </p>
          <p className="text-base text-white/80 leading-relaxed">
            La venta es un arte, nosotros artistas.
          </p>
          <p className="text-sm font-semibold text-[#DC6C31]">
            Marketing Digital + Inteligencia Artificial
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70 mb-4">
            Navegación
          </p>
          <div className="grid gap-3 text-sm text-white/70">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-[#DC6C31] transition">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70 mb-4">
            Contacto
          </p>
          <div className="space-y-3 text-sm text-white/70">
            <p className="leading-relaxed">
              ¿Listo para transformar tu empresa?
            </p>
            <Link
              href="/contacto"
              className="inline-block mt-4 px-6 py-3 bg-[#DC6C31] hover:bg-[#f07a3d] text-white font-semibold rounded-full transition-all hover:scale-105"
            >
              Hablar con nosotros
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-sm text-white/50 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} SUNES. La venta es un arte, nosotros artistas.
      </div>
    </footer>
  );
}

