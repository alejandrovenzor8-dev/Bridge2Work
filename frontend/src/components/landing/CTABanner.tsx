import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6] py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Listo para conectar con el futuro laboral?
        </h2>
        <p className="text-white/80 text-lg mb-8">
          Únete a más de 1,200 usuarios que ya usan Bridge2Work para tomar decisiones más inteligentes.
        </p>
        <Link href="/register">
          <Button size="lg" className="bg-white text-[#0F172A] hover:bg-white/90 gap-2">
            Crear cuenta gratis <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
