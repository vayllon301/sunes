import Image from "next/image";
import Link from "next/link";
import { ScrollAnimations } from "@/components/scroll-animations";

const marketingServices = [
  "Gestión profesional de redes",
  "Publicidad digital (Meta, Google, TikTok)",
  "Diseño y branding",
  "Embudos de conversión",
  "Email marketing avanzado",
];

const iaServices = [
  "Automatizaciones avanzadas",
  "Asistentes internos de IA",
  "Optimización operativa",
  "Sistemas de análisis y predicción",
  "Integración con herramientas actuales",
];

const benefits = [
  "Más ventas por menos esfuerzo",
  "Clientes mejor cualificados",
  "Respuestas automatizadas y adaptadas a tus necesidades",
  "Procesos claros, medibles y escalables",
  "Tiempo y funciones optimizadas",
];

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <div className="space-y-0">
      {/* Sección 1 - Hero / Texto Principal */}
      <section className="min-h-[85vh] flex items-center justify-center py-20">
        <div className="text-center space-y-8 max-w-4xl mx-auto px-4 animate-fade-in-up">
          <div className="flex justify-center mb-8">
            <Image
              src="/sunes.png"
              alt="Logo SUNES"
              width={150}
              height={150}
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            La venta es un arte,
            <br />
            <span className="text-[#DC6C31]">nosotros artistas.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Si estás leyendo esto puede ser por 2 razones, o te has equivocado de página, o tu empresa necesita ayuda. 
            Si te identificas con la segunda opción, sigue leyendo, estás a punto de encontrar tu solución.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/contacto"
              className="px-8 py-4 bg-[#DC6C31] hover:bg-[#f07a3d] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Contactar ahora
            </Link>
            <Link
              href="/servicios"
              className="px-8 py-4 bg-transparent border-2 border-[#DC6C31] text-white font-semibold rounded-full transition-all duration-300 hover:bg-[#DC6C31]/10 hover:scale-105"
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Sección 2 - Qué Hacemos */}
      <section className="py-20 bg-[#282828] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#DC6C31]/5 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Un servicio único, para empresas <span className="text-[#DC6C31]">únicas</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              En Sunes estudiamos tu mercado y el comportamiento de tus potenciales consumidores, los captamos y los fidelizamos. 
              Por otro lado, automatizamos procesos que te permiten liberar tiempo y gastos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Marketing Digital */}
            <div className="bg-[#3d3d3d] rounded-3xl p-8 border-2 border-[#DC6C31]/20 hover:border-[#DC6C31] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#DC6C31] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Marketing Digital</h3>
              </div>
              <p className="text-white/80 mb-6 text-lg">
                Estrategias accionables, medibles y diseñadas para empresas que buscan estabilidad en sus resultados.
              </p>
              <ul className="space-y-3">
                {marketingServices.map((service) => (
                  <li key={service} className="flex items-start gap-3 text-white/90">
                    <span className="text-[#DC6C31] mt-1">▸</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inteligencia Artificial */}
            <div className="bg-[#3d3d3d] rounded-3xl p-8 border-2 border-[#DC6C31]/20 hover:border-[#DC6C31] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#DC6C31] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Inteligencia Artificial</h3>
              </div>
              <p className="text-white/80 mb-6 text-lg">
                Soluciones diseñadas para ahorrar tiempo, reducir errores y aumentar eficiencia.
              </p>
              <ul className="space-y-3">
                {iaServices.map((service) => (
                  <li key={service} className="flex items-start gap-3 text-white/90">
                    <span className="text-[#DC6C31] mt-1">▸</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3 - Sobre Sunes */}
      <section className="py-20 bg-[#313131]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Toda venta fue antes <span className="text-[#DC6C31]">una idea.</span>
          </h2>
          <p className="text-2xl text-white/90 leading-relaxed">
            En Sunes entendemos cosas que el resto no, descubre el arte de la venta con nosotros.
          </p>
        </div>
      </section>

      {/* Sección 4 - Filosofía de Sunes */}
      <section className="py-20 bg-[#282828]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-[#DC6C31]">Pienso</span>, luego vendo.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#3d3d3d] rounded-2xl p-8 border border-[#DC6C31]/30">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Únicos por naturaleza</h3>
              <p className="text-white/80 leading-relaxed">
                Tenemos nuestra propia forma de pensar y actuar, nos comparamos con nosotros mismos y eso nos hace únicos. 
                Competimos contra nosotros mismos, no porque queramos, sino porque no existe nadie como nosotros.
              </p>
            </div>
            <div className="bg-[#3d3d3d] rounded-2xl p-8 border border-[#DC6C31]/30">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-white mb-3">Innovación constante</h3>
              <p className="text-white/80 leading-relaxed">
                Nuestros clientes siempre tienen una propuesta para algo nuevo y una solución para las cosas que ya han existido, 
                y no han funcionado.
              </p>
            </div>
            <div className="bg-[#3d3d3d] rounded-2xl p-8 border border-[#DC6C31]/30">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">El cómo importa</h3>
              <p className="text-white/80 leading-relaxed">
                Nunca es lo que haces, sino cómo lo haces. Nuestra metodología y ejecución marcan la diferencia en cada proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 5 - Para quién es Sunes */}
      <section className="py-20 bg-gradient-to-br from-[#DC6C31] to-[#b85425] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            No es para todos, y nunca lo será.
          </h2>
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto">
            En Sunes trabajamos con empresas que están dispuestas a dar un paso en su historia, empresas que buscan ideas, 
            planificación y resultados tanto medibles como escalables. Trabajamos exclusivamente para aquellos que quieren 
            descubrir nuestro arte y cambiar su rumbo.
          </p>
          <div className="mt-12">
            <Link
              href="/contacto"
              className="inline-block px-10 py-5 bg-white text-[#DC6C31] font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
            >
              ¿Es tu empresa una de ellas?
            </Link>
          </div>
        </div>
      </section>

      {/* Sección 6 - Beneficios */}
      <section className="py-20 bg-[#313131]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              El resultado de un <span className="text-[#DC6C31]">buen proceso.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#3d3d3d] rounded-2xl p-6 border-2 border-[#DC6C31]/20 hover:border-[#DC6C31] transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#DC6C31] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-white font-medium leading-relaxed">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              href="/contacto"
              className="inline-block px-10 py-5 bg-[#DC6C31] hover:bg-[#f07a3d] text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Comienza tu transformación
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
