import { Building2, GraduationCap, Users, BarChart2, Brain, Target } from 'lucide-react';

const features = [
  {
    icon: <Building2 className="w-6 h-6 text-[#06B6D4]" />,
    title: 'Panel de Empresa',
    description: 'Publica perfiles laborales, define habilidades requeridas y conecta con el talento universitario adecuado.',
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-[#8B5CF6]" />,
    title: 'Panel de Universidad',
    description: 'Monitorea las tendencias del mercado laboral para adaptar tus programas académicos y mejorar la empleabilidad.',
  },
  {
    icon: <Users className="w-6 h-6 text-[#06B6D4]" />,
    title: 'Orientación Estudiantil',
    description: 'Recibe recomendaciones personalizadas de carrera basadas en tus intereses y las tendencias del mercado.',
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-[#8B5CF6]" />,
    title: 'Analytics en Tiempo Real',
    description: 'Visualiza datos del mercado laboral con gráficas interactivas y reportes detallados por industria.',
  },
  {
    icon: <Brain className="w-6 h-6 text-[#06B6D4]" />,
    title: 'Test Vocacional',
    description: 'Nuestro test inteligente mapea tus fortalezas y las alinea con las carreras más demandadas del futuro.',
  },
  {
    icon: <Target className="w-6 h-6 text-[#8B5CF6]" />,
    title: 'Match Laboral',
    description: 'Algoritmo de compatibilidad que conecta estudiantes con perfiles de empresa según sus habilidades.',
  },
];

export function Features() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Todo lo que necesitas en <span className="gradient-text">una plataforma</span>
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Herramientas diseñadas para cada actor del ecosistema educativo y laboral.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-xl border border-[#E2E8F0] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-[#F1F5F9] flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-[#0F172A] mb-2">{f.title}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
