'use client';

import { useState } from 'react';
import { Map, CheckCircle, Circle, Lock, Clock, ExternalLink, Play } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import type { LearningPath } from '@/types';

const roadmapData: LearningPath[] = [
  {
    id: '1',
    titulo: 'Fundamentos de Programación',
    descripcion: 'Domina los conceptos básicos de programación y algoritmos',
    duracionEstimada: '2-3 meses',
    dificultad: 'principiante',
    pasos: [
      {
        id: '1-1',
        titulo: 'Variables y Tipos de Datos',
        descripcion: 'Aprende sobre variables, tipos de datos primitivos y estructuras básicas',
        recursos: ['Curso JavaScript Básico', 'Documentación MDN', 'Ejercicios en FreeCodeCamp'],
        completado: true,
        orden: 1,
      },
      {
        id: '1-2',
        titulo: 'Estructuras de Control',
        descripcion: 'If/else, loops, switch y control de flujo',
        recursos: ['Tutorial interactivo', 'Ejercicios prácticos'],
        completado: true,
        orden: 2,
      },
      {
        id: '1-3',
        titulo: 'Funciones y Scope',
        descripcion: 'Funciones, parámetros, return, closures y scope',
        recursos: ['Video tutorial', 'Challenges en Codewars'],
        completado: false,
        orden: 3,
      },
      {
        id: '1-4',
        titulo: 'Arrays y Objetos',
        descripcion: 'Manipulación de estructuras de datos complejas',
        recursos: ['Guía completa', 'Proyecto práctico'],
        completado: false,
        orden: 4,
      },
    ],
  },
  {
    id: '2',
    titulo: 'Desarrollo Web Frontend',
    descripcion: 'Construye interfaces modernas con React y herramientas actuales',
    duracionEstimada: '3-4 meses',
    dificultad: 'intermedio',
    pasos: [
      {
        id: '2-1',
        titulo: 'HTML y CSS Avanzado',
        descripcion: 'Layouts con Flexbox/Grid, responsive design, animaciones',
        recursos: ['CSS Grid Garden', 'Flexbox Froggy', 'Curso Tailwind'],
        completado: false,
        orden: 1,
      },
      {
        id: '2-2',
        titulo: 'JavaScript Moderno (ES6+)',
        descripcion: 'Arrow functions, destructuring, spread/rest, async/await',
        recursos: ['JavaScript.info', 'ES6 Features'],
        completado: false,
        orden: 2,
      },
      {
        id: '2-3',
        titulo: 'React Fundamentos',
        descripcion: 'Componentes, props, state, hooks, lifecycle',
        recursos: ['Documentación React', 'Tutorial oficial', 'Proyecto TODO app'],
        completado: false,
        orden: 3,
      },
      {
        id: '2-4',
        titulo: 'React Avanzado',
        descripcion: 'Context API, Custom Hooks, Performance, Testing',
        recursos: ['Epic React por Kent C. Dodds', 'Testing Library'],
        completado: false,
        orden: 4,
      },
    ],
  },
  {
    id: '3',
    titulo: 'Backend y APIs',
    descripcion: 'Crea APIs robustas y aprende sobre bases de datos',
    duracionEstimada: '3-4 meses',
    dificultad: 'intermedio',
    pasos: [
      {
        id: '3-1',
        titulo: 'Node.js y Express',
        descripcion: 'Servidor HTTP, routing, middleware, REST APIs',
        recursos: ['Node.js Docs', 'Express Tutorial', 'API Project'],
        completado: false,
        orden: 1,
      },
      {
        id: '3-2',
        titulo: 'Bases de Datos',
        descripcion: 'SQL (PostgreSQL) y NoSQL (MongoDB)',
        recursos: ['PostgreSQL Tutorial', 'MongoDB University'],
        completado: false,
        orden: 2,
      },
      {
        id: '3-3',
        titulo: 'Autenticación y Seguridad',
        descripcion: 'JWT, OAuth, bcrypt, mejores prácticas de seguridad',
        recursos: ['Auth0 Docs', 'OWASP Guidelines'],
        completado: false,
        orden: 3,
      },
    ],
  },
];

export default function RoadmapPage() {
  const [expandedPath, setExpandedPath] = useState<string | null>(roadmapData[0].id);

  const togglePath = (pathId: string) => {
    setExpandedPath(expandedPath === pathId ? null : pathId);
  };

  const toggleStepCompletion = (pathId: string, stepId: string) => {
    // Here you would update the step completion status
    console.log('Toggle step:', pathId, stepId);
  };

  const getPathProgress = (path: LearningPath) => {
    const completedSteps = path.pasos.filter((p) => p.completado).length;
    return Math.round((completedSteps / path.pasos.length) * 100);
  };

  const totalProgress = Math.round(
    roadmapData.reduce((acc, path) => acc + getPathProgress(path), 0) / roadmapData.length
  );

  const getDifficultyColor = (dificultad: string) => {
    switch (dificultad) {
      case 'principiante':
        return 'bg-[#10B981]';
      case 'intermedio':
        return 'bg-[#F59E0B]';
      case 'avanzado':
        return 'bg-[#EF4444]';
      default:
        return 'bg-[#64748B]';
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#0F172A]">Mi Roadmap de Aprendizaje</h1>
        <p className="text-[#64748B]">
          Sigue tu ruta personalizada para alcanzar tus objetivos profesionales
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Progreso General</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-4">
              <div className="relative w-32 h-32 mb-4">
                <svg className="transform -rotate-90 w-32 h-32">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="#F1F5F9"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - totalProgress / 100)}`}
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06B6D4" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-[#0F172A]">{totalProgress}%</span>
                </div>
              </div>
              <p className="text-sm text-[#64748B] text-center">
                Has completado {totalProgress}% de tu roadmap
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-3 space-y-4">
          {roadmapData.map((path, pathIndex) => {
            const progress = getPathProgress(path);
            const isExpanded = expandedPath === path.id;
            const isLocked = pathIndex > 0 && getPathProgress(roadmapData[pathIndex - 1]) < 80;

            return (
              <Card
                key={path.id}
                className={`transition-all ${isLocked ? 'opacity-60' : ''}`}
              >
                <CardHeader
                  className="cursor-pointer hover:bg-[#F8FAFC]"
                  onClick={() => !isLocked && togglePath(path.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                          progress === 100
                            ? 'bg-[#10B981]'
                            : progress > 0
                            ? 'bg-[#06B6D4]'
                            : 'bg-[#64748B]'
                        }`}
                      >
                        {isLocked ? (
                          <Lock className="w-5 h-5" />
                        ) : progress === 100 ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          pathIndex + 1
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-[#0F172A]">{path.titulo}</h3>
                          <Badge className={`text-xs ${getDifficultyColor(path.dificultad)}`}>
                            {path.dificultad}
                          </Badge>
                        </div>
                        <p className="text-sm text-[#64748B] mb-3">{path.descripcion}</p>
                        <div className="flex items-center gap-4 text-xs text-[#64748B]">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {path.duracionEstimada}
                          </div>
                          <div>
                            {path.pasos.filter((p) => p.completado).length}/{path.pasos.length} pasos
                          </div>
                        </div>
                        <div className="mt-3">
                          <Progress value={progress} className="h-2" />
                        </div>
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-2xl font-bold text-[#06B6D4]">{progress}%</div>
                    </div>
                  </div>
                </CardHeader>

                {isExpanded && !isLocked && (
                  <CardContent className="border-t border-[#E2E8F0] pt-4">
                    <div className="space-y-3">
                      {path.pasos.map((paso, index) => (
                        <div
                          key={paso.id}
                          className={`p-4 rounded-lg border-2 transition-all ${
                            paso.completado
                              ? 'border-[#10B981] bg-[#10B981]/5'
                              : 'border-[#E2E8F0] hover:border-[#06B6D4]'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <button
                              onClick={() => toggleStepCompletion(path.id, paso.id)}
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                                paso.completado
                                  ? 'border-[#10B981] bg-[#10B981]'
                                  : 'border-[#E2E8F0] hover:border-[#06B6D4]'
                              }`}
                            >
                              {paso.completado && <CheckCircle className="w-4 h-4 text-white" />}
                            </button>
                            <div className="flex-1">
                              <h4 className="font-semibold text-[#0F172A] mb-1">
                                {paso.titulo}
                              </h4>
                              <p className="text-sm text-[#64748B] mb-3">{paso.descripcion}</p>
                              <div>
                                <p className="text-xs font-medium text-[#0F172A] mb-2">Recursos:</p>
                                <div className="flex flex-wrap gap-2">
                                  {paso.recursos.map((recurso, i) => (
                                    <Badge
                                      key={i}
                                      variant="outline"
                                      className="text-xs cursor-pointer hover:bg-[#F1F5F9]"
                                    >
                                      <ExternalLink className="w-3 h-3 mr-1" />
                                      {recurso}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              {!paso.completado && (
                                <div className="mt-3">
                                  <Button size="sm" variant="outline" className="gap-2">
                                    <Play className="w-3 h-3" />
                                    Comenzar
                                  </Button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      </div>

      <Card className="bg-gradient-to-br from-[#06B6D4]/5 to-[#8B5CF6]/5 border-[#E2E8F0]">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
              <Map className="w-6 h-6 text-[#06B6D4]" />
            </div>
            <div>
              <h4 className="font-semibold text-[#0F172A] mb-2">Tu roadmap es dinámico</h4>
              <p className="text-sm text-[#64748B] mb-4">
                Este roadmap se actualiza automáticamente basado en tus intereses, progreso y 
                tendencias del mercado laboral. Completa los pasos en orden para desbloquear nuevas secciones.
              </p>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">Personalizar Roadmap</Button>
                <Button size="sm">Ver Más Recursos</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
