'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, AlertCircle, CheckCircle2, Target } from 'lucide-react';
import { BarChart, LineChart } from '@/components/shared/Charts';
import { DataTable, Column } from '@/components/shared/DataTable';
import { Badge } from '@/components/ui/badge';
import { Select } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface CarreraComparativa {
  carrera: string;
  estudiantes: number;
  empleabilidad: number;
  demandaMercado: number;
  salarioPromedio: number;
  crecimientoAnual: number;
  brechaHabilidades: number;
}

const carrerasData: CarreraComparativa[] = [
  {
    carrera: 'Ingeniería en Sistemas',
    estudiantes: 320,
    empleabilidad: 92,
    demandaMercado: 88,
    salarioPromedio: 45000,
    crecimientoAnual: 8,
    brechaHabilidades: 15,
  },
  {
    carrera: 'Ciencia de Datos',
    estudiantes: 185,
    empleabilidad: 96,
    demandaMercado: 95,
    salarioPromedio: 52000,
    crecimientoAnual: 15,
    brechaHabilidades: 25,
  },
  {
    carrera: 'Ingeniería en Software',
    estudiantes: 410,
    empleabilidad: 94,
    demandaMercado: 90,
    salarioPromedio: 48000,
    crecimientoAnual: 12,
    brechaHabilidades: 18,
  },
  {
    carrera: 'Ingeniería Industrial',
    estudiantes: 290,
    empleabilidad: 88,
    demandaMercado: 75,
    salarioPromedio: 40000,
    crecimientoAnual: 5,
    brechaHabilidades: 12,
  },
  {
    carrera: 'Administración de TI',
    estudiantes: 150,
    empleabilidad: 85,
    demandaMercado: 70,
    salarioPromedio: 38000,
    crecimientoAnual: 3,
    brechaHabilidades: 10,
  },
];

const skillsBrechaData = [
  { skill: 'Cloud Computing', brecha: 35, demanda: 90, oferta: 55 },
  { skill: 'Machine Learning', brecha: 42, demanda: 85, oferta: 43 },
  { skill: 'Cybersecurity', brecha: 38, demanda: 88, oferta: 50 },
  { skill: 'DevOps', brecha: 30, demanda: 80, oferta: 50 },
  { skill: 'Blockchain', brecha: 45, demanda: 75, oferta: 30 },
];

export default function ComparativaAcademicaPage() {
  const [selectedMetric, setSelectedMetric] = useState<string>('empleabilidad');

  const columns: Column<CarreraComparativa>[] = [
    {
      key: 'carrera',
      label: 'Carrera',
      sortable: true,
      render: (row) => (
        <div className="font-medium text-[#0F172A]">{row.carrera}</div>
      ),
    },
    {
      key: 'estudiantes',
      label: 'Estudiantes',
      sortable: true,
      render: (row) => row.estudiantes.toLocaleString(),
    },
    {
      key: 'empleabilidad',
      label: 'Empleabilidad',
      sortable: true,
      render: (row) => (
        <div className="flex items-center gap-2">
          <Progress value={row.empleabilidad} className="w-16 h-2" />
          <span className="text-sm font-medium">{row.empleabilidad}%</span>
        </div>
      ),
    },
    {
      key: 'demandaMercado',
      label: 'Demanda',
      sortable: true,
      render: (row) => (
        <div className="flex items-center gap-2">
          {row.demandaMercado >= 85 ? (
            <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
          ) : row.demandaMercado >= 70 ? (
            <AlertCircle className="w-4 h-4 text-[#F59E0B]" />
          ) : (
            <AlertCircle className="w-4 h-4 text-[#EF4444]" />
          )}
          <span>{row.demandaMercado}%</span>
        </div>
      ),
    },
    {
      key: 'salarioPromedio',
      label: 'Salario Promedio',
      sortable: true,
      render: (row) => `$${row.salarioPromedio.toLocaleString()}`,
    },
    {
      key: 'crecimientoAnual',
      label: 'Crecimiento',
      sortable: true,
      render: (row) => (
        <Badge
          variant={row.crecimientoAnual >= 10 ? 'default' : 'secondary'}
          className="text-xs"
        >
          +{row.crecimientoAnual}%
        </Badge>
      ),
    },
  ];

  const chartData = carrerasData.map((c) => ({
    name: c.carrera.split(' ').slice(-1)[0],
    empleabilidad: c.empleabilidad,
    demanda: c.demandaMercado,
  }));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#0F172A]">
          Comparativa Académica
        </h1>
        <p className="text-[#64748B]">
          Analiza tus carreras vs la demanda del mercado laboral
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-[#64748B]">
              Empleabilidad Promedio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#0F172A]">91%</div>
            <p className="text-xs text-[#10B981] flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3" /> +3% vs año anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-[#64748B]">
              Alineación con Mercado
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#0F172A]">84%</div>
            <p className="text-xs text-[#64748B] mt-1">
              Promedio de demanda laboral
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-[#64748B]">
              Brecha de Habilidades
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#F59E0B]">18%</div>
            <p className="text-xs text-[#64748B] mt-1">
              Skills faltantes promedio
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white rounded-lg border border-[#E2E8F0] p-6">
        <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
          Empleabilidad vs Demanda de Mercado
        </h3>
        <p className="text-sm text-[#64748B] mb-4">
          Comparación de la empleabilidad de tus carreras con la demanda del mercado laboral
        </p>
        <BarChart data={chartData} height={350} />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
          Análisis Detallado por Carrera
        </h3>
        <DataTable columns={columns} data={carrerasData} />
      </div>

      <div className="bg-white rounded-lg border border-[#E2E8F0] p-6">
        <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
          Brecha de Habilidades
        </h3>
        <p className="text-sm text-[#64748B] mb-6">
          Skills con mayor diferencia entre demanda del mercado y capacitación actual
        </p>
        <div className="space-y-6">
          {skillsBrechaData.map((skill, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold ${
                      skill.brecha >= 40
                        ? 'bg-[#EF4444]/10 text-[#EF4444]'
                        : skill.brecha >= 30
                        ? 'bg-[#F59E0B]/10 text-[#F59E0B]'
                        : 'bg-[#10B981]/10 text-[#10B981]'
                    }`}
                  >
                    {skill.brecha}%
                  </div>
                  <div>
                    <div className="font-medium text-[#0F172A]">{skill.skill}</div>
                    <div className="text-xs text-[#64748B]">
                      Demanda: {skill.demanda}% | Oferta: {skill.oferta}%
                    </div>
                  </div>
                </div>
                <Badge
                  variant={skill.brecha >= 40 ? 'destructive' : 'secondary'}
                  className="text-xs"
                >
                  {skill.brecha >= 40
                    ? 'Crítico'
                    : skill.brecha >= 30
                    ? 'Alto'
                    : 'Moderado'}
                </Badge>
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <div className="text-xs text-[#64748B] mb-1">Demanda del mercado</div>
                  <div className="h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#06B6D4]"
                      style={{ width: `${skill.demanda}%` }}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-[#64748B] mb-1">Capacitación actual</div>
                  <div className="h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#8B5CF6]"
                      style={{ width: `${skill.oferta}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#06B6D4]/5 to-[#8B5CF6]/5 rounded-lg border border-[#E2E8F0] p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
            <Target className="w-6 h-6 text-[#06B6D4]" />
          </div>
          <div>
            <h4 className="font-semibold text-[#0F172A] mb-2">
              Recomendaciones para Cerrar la Brecha
            </h4>
            <ul className="space-y-2 text-sm text-[#64748B]">
              <li className="flex items-start gap-2">
                <span className="text-[#06B6D4]">•</span>
                <span>Incorporar módulos de Cloud Computing en Ingeniería en Sistemas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#06B6D4]">•</span>
                <span>Fortalecer prácticas de Machine Learning en Ciencia de Datos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#06B6D4]">•</span>
                <span>Crear certificación en Cybersecurity para todas las carreras tecnológicas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
