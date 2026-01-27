const { useState } = React;

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    servicio: '',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const servicios = [
    { icon: '🦷', titulo: 'Limpieza Dental', desc: 'Limpieza profunda profesional' },
    { icon: '✨', titulo: 'Blanqueamiento', desc: 'Sonrisa más blanca y brillante' },
    { icon: '🔧', titulo: 'Ortodoncia', desc: 'Brackets y alineadores invisibles' },
    { icon: '💎', titulo: 'Implantes', desc: 'Soluciones permanentes' },
    { icon: '🩹', titulo: 'Endodoncia', desc: 'Tratamiento de conductos' },
    { icon: '👶', titulo: 'Odontopediatría', desc: 'Cuidado dental infantil' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 px-6 fixed w-full top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🦷</span>
            <span className="text-2xl font-bold">DentalCare</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#servicios" className="hover:text-blue-200 transition">Servicios</a>
            <a href="#nosotros" className="hover:text-blue-200 transition">Nosotros</a>
            <a href="#contacto" className="hover:text-blue-200 transition">Contacto</a>
          </nav>
          <a href="#contacto" className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition">
            Agendar Cita
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tu Sonrisa Perfecta Comienza Aquí
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Más de 15 años cuidando la salud dental de tu familia con tecnología de vanguardia y atención personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contacto" className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-100 transition shadow-lg">
                📅 Agenda tu Cita Gratis
              </a>
              <a href="tel:+525512345678" className="border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition">
                📞 Llámanos Ahora
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <img src="https://placehold.co/400x300" alt="Consultorio dental" className="rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { icon: '⭐', text: '+5,000 Pacientes Felices' },
              { icon: '🏆', text: '15 Años de Experiencia' },
              { icon: '💳', text: 'Planes de Pago' },
              { icon: '🕐', text: 'Horarios Flexibles' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <span className="text-4xl">{item.icon}</span>
                <p className="mt-3 font-semibold text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Nuestros Servicios</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de tratamientos dentales para toda la familia
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {servicios.map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 hover:border-blue-200">
                <span className="text-5xl">{s.icon}</span>
                <h3 className="text-xl font-bold mt-4 text-gray-800">{s.titulo}</h3>
                <p className="text-gray-600 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img src="https://placehold.co/500x400" alt="Equipo dental" className="rounded-2xl shadow-xl" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">¿Por qué elegirnos?</h2>
            <ul className="space-y-4">
              {[
                'Equipo de especialistas certificados',
                'Tecnología dental de última generación',
                'Ambiente cómodo y relajante',
                'Atención personalizada para cada paciente',
                'Precios accesibles y transparentes'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
              ¡Agenda tu Consulta Gratuita!
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Completa el formulario y te contactaremos en menos de 24 horas
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <span className="text-6xl">🎉</span>
                <h3 className="text-2xl font-bold text-green-600 mt-4">¡Gracias por contactarnos!</h3>
                <p className="text-gray-600 mt-2">Te llamaremos pronto para confirmar tu cita.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Nombre completo *</label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Teléfono *</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="55 1234 5678"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Servicio de interés</label>
                    <select
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="limpieza">Limpieza Dental</option>
                      <option value="blanqueamiento">Blanqueamiento</option>
                      <option value="ortodoncia">Ortodoncia</option>
                      <option value="implantes">Implantes</option>
                      <option value="endodoncia">Endodoncia</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Mensaje (opcional)</label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Cuéntanos más sobre lo que necesitas..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition shadow-lg"
                >
                  📅 Solicitar Cita Gratuita
                </button>
                <p className="text-center text-sm text-gray-500">
                  🔒 Tu información está segura y no será compartida
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🦷</span>
                <span className="text-xl font-bold">DentalCare</span>
              </div>
              <p className="text-gray-400">Tu sonrisa es nuestra prioridad</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <p className="text-gray-400">📍 Av. Principal #123, Col. Centro</p>
              <p className="text-gray-400">📞 (55) 1234-5678</p>
              <p className="text-gray-400">✉️ info@dentalcare.com</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Horarios</h4>
              <p className="text-gray-400">Lunes a Viernes: 9:00 - 19:00</p>
              <p className="text-gray-400">Sábados: 9:00 - 14:00</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            © 2026 DentalCare. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}