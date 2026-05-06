'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, BarChart2, Users, Briefcase, GraduationCap, Settings, LogOut, Zap } from 'lucide-react';
import { cn } from '@/utils';
import { useAuth } from '@/hooks/useAuth';
import { Role } from '@/types';

const navItems: Record<Role, { href: string; label: string; icon: React.ReactNode }[]> = {
  ADMIN: [
    { href: '/admin', label: 'Panel', icon: <LayoutDashboard className="w-5 h-5" /> },
    { href: '/admin#companies', label: 'Empresas', icon: <Briefcase className="w-5 h-5" /> },
    { href: '/admin#universities', label: 'Universidades', icon: <GraduationCap className="w-5 h-5" /> },
    { href: '/admin#users', label: 'Usuarios', icon: <Users className="w-5 h-5" /> },
    { href: '/admin#analytics', label: 'Analytics', icon: <BarChart2 className="w-5 h-5" /> },
  ],
  EMPRESA: [
    { href: '/empresa', label: 'Panel', icon: <LayoutDashboard className="w-5 h-5" /> },
    { href: '/empresa#profiles', label: 'Perfiles', icon: <Briefcase className="w-5 h-5" /> },
    { href: '/empresa#analytics', label: 'Analytics', icon: <BarChart2 className="w-5 h-5" /> },
  ],
  UNIVERSIDAD: [
    { href: '/universidad', label: 'Panel', icon: <LayoutDashboard className="w-5 h-5" /> },
    { href: '/universidad#tendencias', label: 'Tendencias', icon: <BarChart2 className="w-5 h-5" /> },
    { href: '/universidad#estudiantes', label: 'Estudiantes', icon: <Users className="w-5 h-5" /> },
  ],
  ESTUDIANTE: [
    { href: '/estudiante', label: 'Panel', icon: <LayoutDashboard className="w-5 h-5" /> },
    { href: '/estudiante#recomendaciones', label: 'Recomendaciones', icon: <Briefcase className="w-5 h-5" /> },
    { href: '/estudiante#test', label: 'Test Vocacional', icon: <GraduationCap className="w-5 h-5" /> },
  ],
};

export function Sidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const items = user ? navItems[user.role] : [];

  return (
    <aside className="flex flex-col w-64 bg-[#0F172A] min-h-screen">
      <div className="flex items-center gap-2 p-6 border-b border-white/10">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#06B6D4] to-[#8B5CF6] flex items-center justify-center">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <span className="font-bold text-white">Bridge2Work</span>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors',
              pathname === item.href
                ? 'bg-[#06B6D4]/20 text-[#06B6D4]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            )}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10 space-y-1">
        <Link href="#settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5">
          <Settings className="w-5 h-5" />
          Configuración
        </Link>
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Cerrar sesión
        </button>
      </div>

      {user && (
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#8B5CF6] flex items-center justify-center text-white text-sm font-semibold">
              {user.name[0]}
            </div>
            <div className="min-w-0">
              <p className="text-white text-sm font-medium truncate">{user.name}</p>
              <p className="text-slate-500 text-xs">{user.role}</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
