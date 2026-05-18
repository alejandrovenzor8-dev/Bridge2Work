'use client';

import { useState, useEffect } from 'react';
import { Target, User, CheckCircle, XCircle, TrendingUp } from 'lucide-react';
import { Select } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { EmptyState } from '@/components/shared/EmptyState';
import { SkeletonCard } from '@/components/shared/SkeletonLoader';
import { companyService } from '@/services/companyService';
import type { PerfilLaboral, MatchScore } from '@/types';

export default function MatchingTalentoPage() {
  const [profiles, setProfiles] = useState<PerfilLaboral[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<string>('');
  const [matches, setMatches] = useState<MatchScore[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMatches, setLoadingMatches] = useState(false);

  useEffect(() => {
    loadProfiles();
  }, []);

  useEffect(() => {
    if (selectedProfile) {
      loadMatches(selectedProfile);
    }
  }, [selectedProfile]);

  const loadProfiles = async () => {
    setLoading(true);
    try {
      const data = await companyService.getJobProfiles('1');
      setProfiles(data);
      if (data.length > 0) {
        setSelectedProfile(data[0].id);
      }
    } catch (error) {
      console.error('Error loading profiles:', error);
      // Mock data
      const mockProfiles: PerfilLaboral[] = [
        {
          id: '1',
          puesto: 'Desarrollador Full Stack',
          descripcion: 'Buscamos desarrollador con experiencia en React y Node.js',
          habilidadesTecnicas: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
          softSkills: ['Trabajo en equipo', 'Comunicación'],
          experienciaAnios: 3,
          herramientas: ['Git', 'Docker'],
          modalidad: 'Híbrido',
          empresaId: '1',
          createdAt: new Date().toISOString(),
        },
      ];
      setProfiles(mockProfiles);
      setSelectedProfile(mockProfiles[0].id);
    } finally {
      setLoading(false);
    }
  };

  const loadMatches = async (profileId: string) => {
    setLoadingMatches(true);
    try {
      const data = await companyService.getMatches(profileId);
      setMatches(data);
    } catch (error) {
      console.error('Error loading matches:', error);
      // Mock data
      setMatches([
        {
          estudiante: {
            id: '1',
            intereses: ['Desarrollo Web', 'Tecnología'],
            habilidades: ['React', 'TypeScript', 'Node.js', 'Git'],
            carreraInteres: 'Ingeniería en Sistemas',
            nivelEducativo: 'Licenciatura',
            userId: '101',
            user: {
              id: '101',
              name: 'Ana García',
              email: 'ana@example.com',
              role: 'ESTUDIANTE',
              createdAt: new Date().toISOString(),
            },
          },
          perfilLaboral: profiles.find((p) => p.id === profileId)!,
          score: 92,
          skillsCoincidentes: ['React', 'TypeScript', 'Node.js', 'Git'],
          skillsFaltantes: ['PostgreSQL'],
          fortalezas: ['Experiencia en frontend', 'Conocimiento de TypeScript'],
        },
        {
          estudiante: {
            id: '2',
            intereses: ['Backend', 'APIs'],
            habilidades: ['Node.js', 'PostgreSQL', 'Docker', 'Git'],
            carreraInteres: 'Ingeniería en Computación',
            nivelEducativo: 'Licenciatura',
            userId: '102',
            user: {
              id: '102',
              name: 'Carlos Ruiz',
              email: 'carlos@example.com',
              role: 'ESTUDIANTE',
              createdAt: new Date().toISOString(),
            },
          },
          perfilLaboral: profiles.find((p) => p.id === profileId)!,
          score: 85,
          skillsCoincidentes: ['Node.js', 'PostgreSQL', 'Docker', 'Git'],
          skillsFaltantes: ['React', 'TypeScript'],
          fortalezas: ['Experiencia en backend', 'Manejo de bases de datos'],
        },
        {
          estudiante: {
            id: '3',
            intereses: ['Full Stack', 'Desarrollo Web'],
            habilidades: ['React', 'JavaScript', 'Git'],
            carreraInteres: 'Ingeniería de Software',
            nivelEducativo: 'Licenciatura',
            userId: '103',
            user: {
              id: '103',
              name: 'María López',
              email: 'maria@example.com',
              role: 'ESTUDIANTE',
              createdAt: new Date().toISOString(),
            },
          },
          perfilLaboral: profiles.find((p) => p.id === profileId)!,
          score: 78,
          skillsCoincidentes: ['React', 'Git'],
          skillsFaltantes: ['TypeScript', 'Node.js', 'PostgreSQL'],
          fortalezas: ['Fundamentos sólidos de React'],
        },
      ]);
    } finally {
      setLoadingMatches(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-[#10B981]';
    if (score >= 60) return 'text-[#F59E0B]';
    return 'text-[#EF4444]';
  };

  if (loading) {
    return <SkeletonCard />;
  }

  if (profiles.length === 0) {
    return (
      <EmptyState
        icon={Target}
        title="No hay perfiles laborales"
        description="Crea perfiles laborales primero para ver candidatos compatibles"
      />
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#0F172A]">Matching de Talento</h1>
        <p className="text-[#64748B]">
          Encuentra los candidatos más compatibles con tus perfiles laborales
        </p>
      </div>

      <div className="bg-white rounded-lg border border-[#E2E8F0] p-6">
        <label className="block text-sm font-medium text-[#0F172A] mb-2">
          Selecciona un perfil laboral
        </label>
        <Select
          value={selectedProfile}
          onChange={(e) => setSelectedProfile(e.target.value)}
        >
          {profiles.map((profile) => (
            <option key={profile.id} value={profile.id}>
              {profile.puesto}
            </option>
          ))}
        </Select>
      </div>

      {loadingMatches ? (
        <div className="space-y-4">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ) : matches.length === 0 ? (
        <EmptyState
          icon={User}
          title="No hay candidatos disponibles"
          description="Aún no hay estudiantes que coincidan con este perfil laboral"
        />
      ) : (
        <div className="space-y-4">
          {matches.map((match) => (
            <div
              key={match.estudiante.id}
              className="bg-white rounded-lg border border-[#E2E8F0] p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#8B5CF6] flex items-center justify-center text-white font-semibold">
                    {match.estudiante.user.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0F172A]">
                      {match.estudiante.user.name}
                    </h3>
                    <p className="text-sm text-[#64748B]">
                      {match.estudiante.carreraInteres}
                    </p>
                    <p className="text-xs text-[#64748B]">
                      {match.estudiante.nivelEducativo}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-3xl font-bold ${getScoreColor(match.score)}`}>
                    {match.score}%
                  </div>
                  <p className="text-xs text-[#64748B]">Compatibilidad</p>
                </div>
              </div>

              <div className="mb-4">
                <Progress value={match.score} className="h-2" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-[#10B981]" />
                    <span className="text-sm font-medium text-[#0F172A]">
                      Skills Coincidentes
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {match.skillsCoincidentes.map((skill, i) => (
                      <Badge key={i} className="bg-[#10B981]/10 text-[#10B981]">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-4 h-4 text-[#EF4444]" />
                    <span className="text-sm font-medium text-[#0F172A]">
                      Skills Faltantes
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {match.skillsFaltantes.map((skill, i) => (
                      <Badge key={i} variant="outline" className="text-[#EF4444]">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-[#E2E8F0] pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-[#06B6D4]" />
                  <span className="text-sm font-medium text-[#0F172A]">
                    Fortalezas
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1">
                  {match.fortalezas.map((fortaleza, i) => (
                    <li key={i} className="text-sm text-[#64748B]">
                      {fortaleza}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
