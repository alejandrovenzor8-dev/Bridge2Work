'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/useAuth';
import { registerUser, getDashboardPath } from '@/lib/auth';
import { Role } from '@/types';

const roles: { value: Role; label: string }[] = [
  { value: 'EMPRESA', label: '🏢 Empresa' },
  { value: 'UNIVERSIDAD', label: '🎓 Universidad' },
  { value: 'ESTUDIANTE', label: '👨‍🎓 Estudiante' },
];

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<Role>('ESTUDIANTE');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { token, user } = await registerUser(name, email, password, role);
      login(token, user);
      router.push(getDashboardPath(user.role));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al registrarse');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <Link href="/" className="inline-flex items-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#06B6D4] to-[#8B5CF6] flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <span className="font-bold text-white text-xl">Bridge2Work</span>
        </Link>
        <h1 className="text-2xl font-bold text-white">Crear cuenta</h1>
        <p className="text-slate-400 mt-2">Únete a Bridge2Work hoy</p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-400 text-sm">{error}</div>
          )}

          <div className="space-y-2">
            <Label className="text-slate-300">Tipo de cuenta</Label>
            <div className="grid grid-cols-3 gap-2">
              {roles.map((r) => (
                <button
                  key={r.value}
                  type="button"
                  onClick={() => setRole(r.value)}
                  className={`p-2 rounded-lg border text-sm text-center transition-all ${
                    role === r.value
                      ? 'border-[#06B6D4] bg-[#06B6D4]/10 text-[#06B6D4]'
                      : 'border-white/20 text-slate-400 hover:border-white/40'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-slate-300">Nombre</Label>
            <Input
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-white/5 border-white/20 text-white placeholder:text-slate-500"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-slate-300">Correo electrónico</Label>
            <Input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/5 border-white/20 text-white placeholder:text-slate-500"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-slate-300">Contraseña</Label>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="bg-white/5 border-white/20 text-white placeholder:text-slate-500"
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Creando cuenta...' : 'Crear cuenta'}
          </Button>
        </form>

        <p className="text-center text-slate-400 text-sm mt-6">
          ¿Ya tienes cuenta?{' '}
          <Link href="/login" className="text-[#06B6D4] hover:underline">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
}
