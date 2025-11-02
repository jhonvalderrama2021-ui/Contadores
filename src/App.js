import { Briefcase, FileText, Users, Mail } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-900 text-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">Contaduría Profesional</h1>
          <nav className="space-x-6">
            <a href="#inicio" className="hover:text-blue-300">Inicio</a>
            <a href="#nosotros" className="hover:text-blue-300">Nosotros</a>
            <a href="#servicios" className="hover:text-blue-300">Servicios</a>
            <a href="#contacto" className="hover:text-blue-300">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="bg-gray-100 text-center py-20">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          Asesoría contable confiable para tu negocio
        </h2>
        <p className="text-gray-700 mb-6">
          Brindamos soluciones contables, fiscales y financieras con transparencia y experiencia.
        </p>
        <a href="#contacto" className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800">
          Solicita tu asesoría
        </a>
      </section>

      {/* Servicios */}
      <section id="servicios" className="max-w-6xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold text-center text-blue-900 mb-10">Nuestros Servicios</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Briefcase size={40} className="text-blue-800" />}
            title="Asesoría Contable"
            description="Orientación experta para mantener tus finanzas organizadas y al día."
          />
          <ServiceCard
            icon={<FileText size={40} className="text-blue-800" />}
            title="Declaración de Impuestos"
            description="Gestionamos tus obligaciones tributarias con precisión y puntualidad."
          />
          <ServiceCard
            icon={<Users size={40} className="text-blue-800" />}
            title="Nómina y Gestión Laboral"
            description="Administramos la nómina y beneficios de tu equipo de manera eficiente."
          />
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Mail size={40} className="mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">Contáctanos</h3>
          <p className="mb-6">
            Escríbenos para recibir una asesoría personalizada o resolver tus dudas.
          </p>
          <form className="grid gap-4 max-w-md mx-auto text-gray-800">
            <input type="text" placeholder="Nombre completo" className="p-3 rounded" />
            <input type="email" placeholder="Correo electrónico" className="p-3 rounded" />
            <textarea placeholder="Tu mensaje" rows="4" className="p-3 rounded"></textarea>
            <button className="bg-blue-700 text-white py-3 rounded hover:bg-blue-800">
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 text-gray-600">
        © 2025 Contaduría Profesional. Todos los derechos reservados.
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition">
      <div className="flex justify-center mb-4">{icon}</div>
      <h4 className="text-xl font-semibold text-blue-900 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
