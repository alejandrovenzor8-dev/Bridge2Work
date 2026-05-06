import Link from 'next/link';
import { Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#06B6D4] to-[#8B5CF6] flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white">Bridge2Work</span>
            </div>
            <p className="text-slate-400 text-sm">Inteligencia laboral para conectar talento con oportunidades.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Plataforma</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/register" className="hover:text-white">Para Empresas</Link></li>
              <li><Link href="/register" className="hover:text-white">Para Universidades</Link></li>
              <li><Link href="/register" className="hover:text-white">Para Estudiantes</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="#features" className="hover:text-white">Características</Link></li>
              <li><Link href="#how-it-works" className="hover:text-white">Cómo funciona</Link></li>
              <li><Link href="#testimonials" className="hover:text-white">Testimonios</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="#" className="hover:text-white">Privacidad</Link></li>
              <li><Link href="#" className="hover:text-white">Términos</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Bridge2Work. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
