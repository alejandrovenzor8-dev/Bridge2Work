const testimonials = [
  { name: 'Laura Mendoza', role: 'Directora de RRHH, TechMX', text: 'Bridge2Work nos ayudó a identificar exactamente qué habilidades buscar en candidatos. Redujimos el tiempo de contratación en un 40%.', avatar: 'LM' },
  { name: 'Dr. Carlos Ruiz', role: 'Coordinador Académico, TEC Monterrey', text: 'Ahora podemos ajustar nuestros programas basándonos en datos reales del mercado laboral. Nuestros egresados están más preparados.', avatar: 'CR' },
  { name: 'Sofía García', role: 'Estudiante de Ing. en Sistemas', text: 'El test vocacional me mostró exactamente en qué áreas enfocarme. Conseguí prácticas en solo 2 meses de usar la plataforma.', avatar: 'SG' },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Lo que dicen nuestros <span className="gradient-text">usuarios</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 rounded-xl border border-[#E2E8F0] hover:shadow-lg transition-shadow">
              <p className="text-[#64748B] text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#8B5CF6] flex items-center justify-center text-white font-semibold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A] text-sm">{t.name}</p>
                  <p className="text-[#64748B] text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
