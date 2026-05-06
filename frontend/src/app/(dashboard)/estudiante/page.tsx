'use client';

import { useState } from 'react';
import { Target, BookOpen, Briefcase, CheckCircle } from 'lucide-react';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { SkillsChart } from '@/components/dashboard/SkillsChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

const recommendations = [
  { carrera: 'Ciencia de Datos', match: 94, habilidades: ['Python', 'SQL', 'Estadística'], demanda: 'Alta' },
  { carrera: 'Ingeniería en Software', match: 88, habilidades: ['React', 'Node.js', 'TypeScript'], demanda: 'Alta' },
  { carrera: 'DevOps/Cloud', match: 76, habilidades: ['Docker', 'AWS', 'Linux'], demanda: 'Media' },
];

const testQuestions = [
  { id: 1, pregunta: '¿Prefieres trabajar con datos y análisis numérico?', respuesta: null as boolean | null },
  { id: 2, pregunta: '¿Te interesa crear software o aplicaciones?', respuesta: null as boolean | null },
  { id: 3, pregunta: '¿Disfrutas diseñar interfaces visuales?', respuesta: null as boolean | null },
  { id: 4, pregunta: '¿Te atrae liderar equipos de trabajo?', respuesta: null as boolean | null },
];

export default function EstudianteDashboard() {
  const [questions, setQuestions] = useState(testQuestions);
  const [testDone, setTestDone] = useState(false);

  function answer(id: number, val: boolean) {
    setQuestions(q => q.map(item => item.id === id ? { ...item, respuesta: val } : item));
  }

  function submitTest() {
    setTestDone(true);
  }

  const answered = questions.filter(q => q.respuesta !== null).length;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#0F172A]">Mi Panel</h1>
        <p className="text-[#64748B]">Descubre tu camino profesional ideal</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatsCard title="Match Promedio" value="86%" trend={5} icon={<Target className="w-5 h-5 text-[#06B6D4]" />} />
        <StatsCard title="Habilidades Mapeadas" value="12" icon={<BookOpen className="w-5 h-5 text-[#8B5CF6]" />} />
        <StatsCard title="Oportunidades Abiertas" value="34" trend={22} icon={<Briefcase className="w-5 h-5 text-[#06B6D4]" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle>Carreras Recomendadas</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {recommendations.map((r) => (
              <div key={r.carrera} className="p-4 border border-[#E2E8F0] rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#0F172A]">{r.carrera}</span>
                  <div className="flex items-center gap-2">
                    <Badge variant={r.demanda === 'Alta' ? 'success' : 'warning'}>{r.demanda} demanda</Badge>
                    <span className="text-[#06B6D4] font-bold">{r.match}%</span>
                  </div>
                </div>
                <Progress value={r.match} />
                <div className="flex flex-wrap gap-1">
                  {r.habilidades.map(h => <Badge key={h} variant="outline">{h}</Badge>)}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Test Vocacional</CardTitle></CardHeader>
          <CardContent>
            {testDone ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">¡Test completado!</h3>
                <p className="text-[#64748B] text-sm mb-4">Tu perfil ha sido actualizado con tus preferencias.</p>
                <Button variant="outline" onClick={() => { setTestDone(false); setQuestions(testQuestions); }}>
                  Volver a tomar el test
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-[#64748B]">Progreso</span>
                  <span className="text-sm font-medium">{answered}/{questions.length}</span>
                </div>
                <Progress value={(answered / questions.length) * 100} />

                {questions.map((q) => (
                  <div key={q.id} className="p-3 border border-[#E2E8F0] rounded-lg">
                    <p className="text-sm text-[#0F172A] mb-3">{q.pregunta}</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => answer(q.id, true)}
                        className={`flex-1 py-1.5 rounded text-sm font-medium transition-colors ${
                          q.respuesta === true ? 'bg-[#06B6D4] text-white' : 'bg-[#F1F5F9] text-[#64748B] hover:bg-[#E2E8F0]'
                        }`}
                      >
                        Sí
                      </button>
                      <button
                        onClick={() => answer(q.id, false)}
                        className={`flex-1 py-1.5 rounded text-sm font-medium transition-colors ${
                          q.respuesta === false ? 'bg-[#8B5CF6] text-white' : 'bg-[#F1F5F9] text-[#64748B] hover:bg-[#E2E8F0]'
                        }`}
                      >
                        No
                      </button>
                    </div>
                  </div>
                ))}

                {answered === questions.length && (
                  <Button className="w-full" onClick={submitTest}>
                    Ver resultados
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <SkillsChart />
    </div>
  );
}
