const steps = [
  { num: '01', title: 'Regístrate', description: 'Crea tu cuenta como empresa, universidad o estudiante. El proceso toma menos de 2 minutos.', color: 'text-[#06B6D4]' },
  { num: '02', title: 'Configura tu perfil', description: 'Completa tu perfil con industria, habilidades o intereses de carrera según tu rol.', color: 'text-[#8B5CF6]' },
  { num: '03', title: 'Explora el mercado', description: 'Accede a dashboards con datos de tendencias, demanda de habilidades y perfiles laborales.', color: 'text-[#06B6D4]' },
  { num: '04', title: 'Conecta y decide', description: 'Usa los insights para tomar decisiones informadas sobre contratación, currículum o carrera.', color: 'text-[#8B5CF6]' },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#F1F5F9] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            ¿Cómo funciona <span className="gradient-text">Bridge2Work</span>?
          </h2>
          <p className="text-[#64748B] text-lg">Simple, rápido y efectivo.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className={`text-5xl font-black mb-4 ${s.color}`}>{s.num}</div>
              <h3 className="font-semibold text-[#0F172A] text-lg mb-2">{s.title}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
