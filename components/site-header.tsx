import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#313131]/95 backdrop-blur-lg shadow-lg">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="relative block h-10 w-10 overflow-hidden rounded-full ring-2 ring-[#DC6C31] group-hover:ring-4 transition-all">
            <Image
              src="/sunes.jpg"
              alt="Logo SUNES"
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </span>
          <span className="text-lg font-bold uppercase tracking-[0.15em] text-white">
            SUNES
          </span>
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-white/80 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[#DC6C31] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#DC6C31] after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contacto"
          className="rounded-full bg-[#DC6C31] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#f07a3d] hover:scale-105 hover:shadow-xl"
        >
          Contacto
        </Link>
      </div>
      <div className="md:hidden">
        <nav className="mx-auto flex max-w-6xl flex-wrap gap-4 px-4 pb-4 text-xs uppercase tracking-wide text-white/70 sm:px-6 lg:px-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[#DC6C31] transition">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

