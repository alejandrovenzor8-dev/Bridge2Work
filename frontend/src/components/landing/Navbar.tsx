'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#06B6D4] to-[#8B5CF6] flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-white text-lg">Bridge2Work</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-slate-300 hover:text-white text-sm transition-colors">Características</Link>
            <Link href="#how-it-works" className="text-slate-300 hover:text-white text-sm transition-colors">Cómo funciona</Link>
            <Link href="#testimonials" className="text-slate-300 hover:text-white text-sm transition-colors">Testimonios</Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/10">Iniciar sesión</Button>
            </Link>
            <Link href="/register">
              <Button>Comenzar gratis</Button>
            </Link>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#0F172A] border-t border-white/10 px-4 py-4 space-y-3">
          <Link href="#features" className="block text-slate-300 hover:text-white py-2">Características</Link>
          <Link href="#how-it-works" className="block text-slate-300 hover:text-white py-2">Cómo funciona</Link>
          <Link href="/login" className="block"><Button variant="outline" className="w-full">Iniciar sesión</Button></Link>
          <Link href="/register" className="block"><Button className="w-full">Comenzar gratis</Button></Link>
        </div>
      )}
    </nav>
  );
}
