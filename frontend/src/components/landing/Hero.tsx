'use client';

import Link from 'next/link';
import { ArrowRight, BarChart2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="min-h-screen bg-[#0F172A] flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/10 via-transparent to-[#8B5CF6]/10 pointer-events-none" />
      <div className="absolute top-32 left-10 w-72 h-72 bg-[#06B6D4]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-[#06B6D4]" />
          <span className="text-sm text-slate-300">Inteligencia Laboral para México</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Conecta el{' '}
          <span className="gradient-text">Talento</span>
          <br />con el{' '}
          <span className="gradient-text">Futuro Laboral</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10">
          Bridge2Work es la plataforma que conecta empresas, universidades y estudiantes
          mediante inteligencia de datos laborales para tomar mejores decisiones de carrera.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/register">
            <Button size="lg" className="gap-2 text-base">
              Comenzar gratis <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="#how-it-works">
            <Button size="lg" variant="outline" className="gap-2 text-base border-white/20 text-white hover:bg-white/10">
              <BarChart2 className="w-5 h-5" /> Ver cómo funciona
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { num: '1,200+', label: 'Estudiantes activos' },
            { num: '87', label: 'Empresas registradas' },
            { num: '12', label: 'Universidades' },
            { num: '215+', label: 'Habilidades rastreadas' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-2xl font-bold text-white">{stat.num}</p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
