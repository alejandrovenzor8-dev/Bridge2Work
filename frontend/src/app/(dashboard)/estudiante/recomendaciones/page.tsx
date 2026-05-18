'use client';

import { useState, useEffect } from 'react';
import { Lightbulb, TrendingUp, Star, Target, CheckCircle, XCircle, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { CareerRecommendation, SkillRecommendation } from '@/types';

const careerRecommendations: CareerRecommendation[] = [
  {
    id: '1',
    carrera: 'Ciencia de Datos',
    compatibilidad: 94,
    razones: [
      'Fuerte afinidad con análisis y matemáticas',
      'Interés previo en Python y estadística',
      'Alta demanda en el mercado laboral (95%)',
    ],
    habilidadesRequeridas: ['Python', 'SQL', 'Machine Learning', 'Estadística', 'Power BI'],
    salarioPromedio: 52000,
    demandaLaboral: 95,
  },
  {
    id: '2',
    carrera: 'Ingeniería en Software',
    compatibilidad: 88,
    razones: [
      'Experiencia en desarrollo web',
      'Dominio de lenguajes de programación',
      'Excelentes habilidades técnicas',
    ],
    habilidadesRequeridas: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'Git'],
    salarioPromedio: 48000,
    demandaLaboral: 90,
  },
  {
    id: '3',
    carrera: 'DevOps / Cloud Engineering',
    compatibilidad: 76,
    razones: [
      'Interés en infraestructura y automatización',
      'Base sólida en sistemas',
      'Crecimiento exponencial en el sector',
    ],
    habilidadesRequeridas: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Linux'],
    salarioPromedio: 55000,
    demandaLaboral: 88,
  },
];

const skillRecommendations: SkillRecommendation[] = [
  {
    skill: {
      id: '1',
      nombre: 'TypeScript',
      categoria: 'Lenguaje de Programación',
      demanda: 92,
      crecimiento: 35,
    },
    prioridad: 'alta',
    razon: 'Complementa tu conocimiento de JavaScript y es altamente demandado',
    recursos: [
      'TypeScript Handbook (oficial)',
      'Curso en Udemy: TypeScript Complete Guide',
      'Documentación MDN',
    ],
  },
  {
    skill: {
      id: '2',
      nombre: 'Machine Learning',
      categoria: 'Inteligencia Artificial',
      demanda: 95,
      crecimiento: 42,
    },
    prioridad: 'alta',
    razon: 'Área emergente con alto crecimiento y excelentes salarios',
    recursos: [
      'Curso de Andrew Ng en Coursera',
      'Fast.ai - Practical Deep Learning',
      'Kaggle Learn',
    ],
  },
  {
    skill: {
      id: '3',
      nombre: 'Docker',
      categoria: 'DevOps',
      demanda: 85,
      crecimiento: 28,
    },
    prioridad: 'media',
    razon: 'Esencial para desarrollo moderno y despliegue de aplicaciones',
    recursos: [
      'Docker Official Documentation',
      'Curso en Platzi: Docker',
      'Docker Mastery en Udemy',
    ],
  },
];

export default function RecomendacionesPage() {
  const [loading, setLoading] = useState(false);

  const getPrioridadColor = (prioridad: string) => {
    switch (prioridad) {
      case 'alta':
        return 'bg-[#EF4444] text-white';
      case 'media':
        return 'bg-[#F59E0B] text-white';
      case 'baja':
        return 'bg-[#10B981] text-white';
      default:
        return 'bg-[#64748B] text-white';
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#0F172A]">Recomendaciones IA</h1>
        <p className="text-[#64748B]">
          Sugerencias personalizadas basadas en tu perfil y el mercado laboral
        </p>
      </div>

      <div className="bg-gradient-to-br from-[#06B6D4]/10 to-[#8B5CF6]/10 rounded-lg border border-[#E2E8F0] p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-6 h-6 text-[#F59E0B]" />
          </div>
          <div>
            <h3 className="font-semibold text-[#0F172A] mb-2">
              Análisis basado en Inteligencia Artificial
            </h3>
            <p className="text-sm text-[#64748B]">
              Nuestro sistema ha analizado tu perfil, intereses y habilidades actuales para generar
              recomendaciones personalizadas que maximicen tus oportunidades laborales.
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="carreras" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
          <TabsTrigger value="carreras">Carreras</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>

        <TabsContent value="carreras" className="space-y-6">
          {careerRecommendations.map((rec) => (
            <Card key={rec.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-[#0F172A]">{rec.carrera}</h3>
                      <Badge className="bg-[#10B981] text-white">
                        {rec.demandaLaboral}% demanda
                      </Badge>
                    </div>
                    <p className="text-sm text-[#64748B]">
                      Salario promedio: ${rec.salarioPromedio.toLocaleString()} MXN/mes
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-[#06B6D4] mb-1">
                      {rec.compatibilidad}%
                    </div>
                    <p className="text-xs text-[#64748B]">Compatibilidad</p>
                  </div>
                </div>

                <div className="mb-4">
                  <Progress value={rec.compatibilidad} className="h-2" />
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-[#0F172A] mb-2 flex items-center gap-2">
                      <Star className="w-4 h-4 text-[#F59E0B]" />
                      Por qué te recomendamos esta carrera
                    </h4>
                    <ul className="space-y-1">
                      {rec.razones.map((razon, i) => (
                        <li key={i} className="text-sm text-[#64748B] flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                          <span>{razon}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-[#0F172A] mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-[#06B6D4]" />
                      Habilidades requeridas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {rec.habilidadesRequeridas.map((skill, i) => (
                        <Badge key={i} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
                  <Button className="w-full sm:w-auto">Ver Roadmap para esta Carrera</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="skills" className="space-y-4">
          {skillRecommendations.map((rec) => (
            <Card key={rec.skill.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-[#0F172A]">{rec.skill.nombre}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {rec.skill.categoria}
                      </Badge>
                      <Badge className={getPrioridadColor(rec.prioridad)} size="sm">
                        Prioridad {rec.prioridad}
                      </Badge>
                    </div>
                    <p className="text-sm text-[#64748B] mb-3">{rec.razon}</p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-[#06B6D4]">{rec.skill.demanda}%</div>
                    <p className="text-xs text-[#64748B]">Demanda</p>
                    <div className="flex items-center gap-1 text-xs text-[#10B981] mt-1">
                      <TrendingUp className="w-3 h-3" />
                      +{rec.skill.crecimiento}%
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[#0F172A] mb-2">
                    Recursos recomendados
                  </h4>
                  <ul className="space-y-2">
                    {rec.recursos?.map((recurso, i) => (
                      <li key={i} className="text-sm text-[#64748B] flex items-center gap-2">
                        <ExternalLink className="w-3 h-3 text-[#06B6D4]" />
                        <span>{recurso}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-4 border-t border-[#E2E8F0] flex gap-3">
                  <Button variant="outline" size="sm">Ver Cursos</Button>
                  <Button size="sm">Agregar a mi Roadmap</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      <Card className="bg-gradient-to-br from-[#06B6D4]/5 to-[#8B5CF6]/5 border-[#E2E8F0]">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-6 h-6 text-[#8B5CF6]" />
            </div>
            <div>
              <h4 className="font-semibold text-[#0F172A] mb-2">
                Actualiza tu perfil regularmente
              </h4>
              <p className="text-sm text-[#64748B] mb-4">
                Para obtener recomendaciones más precisas, mantén actualizado tu perfil con nuevas
                habilidades e intereses. Nuestro sistema se adaptará automáticamente.
              </p>
              <Button variant="outline" size="sm">Actualizar Perfil</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
