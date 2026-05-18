'use client';

import { useState } from 'react';
import { FileText, Download, Calendar, Filter, TrendingUp, Users, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Report {
  id: string;
  titulo: string;
  tipo: 'trimestral' | 'anual' | 'personalizado';
  fecha: string;
  estado: 'generado' | 'procesando' | 'error';
}

const reportesGenerados: Report[] = [
  {
    id: '1',
    titulo: 'Análisis Trimestral Q1 2026',
    tipo: 'trimestral',
    fecha: '2026-04-01',
    estado: 'generado',
  },
  {
    id: '2',
    titulo: 'Reporte Anual 2025',
    tipo: 'anual',
    fecha: '2026-01-15',
    estado: 'generado',
  },
  {
    id: '3',
    titulo: 'Análisis de Empleabilidad - Marzo 2026',
    tipo: 'personalizado',
    fecha: '2026-03-28',
    estado: 'generado',
  },
];

const plantillasReporte = [
  {
    id: 'empleabilidad',
    nombre: 'Análisis de Empleabilidad',
    descripcion: 'Tasas de empleabilidad por carrera y comparativas',
    icono: TrendingUp,
  },
  {
    id: 'tendencias',
    nombre: 'Tendencias del Mercado',
    descripcion: 'Skills emergentes y demanda laboral',
    icono: Filter,
  },
  {
    id: 'estudiantes',
    nombre: 'Reporte de Estudiantes',
    descripcion: 'Estadísticas y progreso académico',
    icono: Users,
  },
  {
    id: 'carreras',
    nombre: 'Análisis por Carrera',
    descripcion: 'Desglose detallado de cada programa',
    icono: GraduationCap,
  },
];

export default function ReportesPage() {
  const [generandoReporte, setGenerandoReporte] = useState(false);
  const [plantillaSeleccionada, setPlantillaSeleccionada] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');

  const handleGenerarReporte = async () => {
    if (!plantillaSeleccionada) {
      alert('Por favor selecciona una plantilla de reporte');
      return;
    }

    setGenerandoReporte(true);
    
    // Simulate report generation
    setTimeout(() => {
      alert('¡Reporte generado exitosamente!');
      setGenerandoReporte(false);
      setPlantillaSeleccionada('');
      setFechaInicio('');
      setFechaFin('');
    }, 2000);
  };

  const handleDescargarReporte = (reportId: string) => {
    // Simulate download
    console.log('Descargando reporte:', reportId);
    alert('Descargando reporte en PDF...');
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#0F172A]">Reportes Académicos</h1>
        <p className="text-[#64748B]">
          Genera reportes profesionales sobre tendencias y métricas académicas
        </p>
      </div>

      <div className="bg-white rounded-lg border border-[#E2E8F0] p-6">
        <h3 className="text-lg font-semibold text-[#0F172A] mb-6">
          Generar Nuevo Reporte
        </h3>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#0F172A] mb-3">
              Selecciona una plantilla
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {plantillasReporte.map((plantilla) => {
                const Icon = plantilla.icono;
                return (
                  <button
                    key={plantilla.id}
                    onClick={() => setPlantillaSeleccionada(plantilla.id)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      plantillaSeleccionada === plantilla.id
                        ? 'border-[#06B6D4] bg-[#06B6D4]/5'
                        : 'border-[#E2E8F0] hover:border-[#06B6D4]/50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          plantillaSeleccionada === plantilla.id
                            ? 'bg-[#06B6D4] text-white'
                            : 'bg-[#F1F5F9] text-[#64748B]'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-[#0F172A] mb-1">
                          {plantilla.nombre}
                        </div>
                        <div className="text-xs text-[#64748B]">
                          {plantilla.descripcion}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                Fecha de inicio
              </label>
              <Input
                type="date"
                value={fechaInicio}
                onChange={(e) => setFechaInicio(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                Fecha de fin
              </label>
              <Input
                type="date"
                value={fechaFin}
                onChange={(e) => setFechaFin(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E2E8F0]">
            <Button
              variant="outline"
              onClick={() => {
                setPlantillaSeleccionada('');
                setFechaInicio('');
                setFechaFin('');
              }}
            >
              Cancelar
            </Button>
            <Button
              onClick={handleGenerarReporte}
              disabled={generandoReporte}
              className="gap-2"
            >
              {generandoReporte ? (
                <>Generando...</>
              ) : (
                <>
                  <FileText className="w-4 h-4" /> Generar Reporte
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
          Reportes Generados
        </h3>
        <div className="space-y-3">
          {reportesGenerados.map((reporte) => (
            <div
              key={reporte.id}
              className="bg-white rounded-lg border border-[#E2E8F0] p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F1F5F9] flex items-center justify-center">
                    <FileText className="w-6 h-6 text-[#64748B]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#0F172A]">{reporte.titulo}</h4>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center gap-1 text-xs text-[#64748B]">
                        <Calendar className="w-3 h-3" />
                        {new Date(reporte.fecha).toLocaleDateString('es-MX', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {reporte.tipo}
                      </Badge>
                      {reporte.estado === 'generado' && (
                        <Badge className="text-xs bg-[#10B981] hover:bg-[#10B981]/90">
                          Listo
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDescargarReporte(reporte.id)}
                  className="gap-2"
                >
                  <Download className="w-4 h-4" /> Descargar PDF
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Información sobre los Reportes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-[#06B6D4] mt-2" />
            <div>
              <p className="text-sm text-[#0F172A] font-medium">Formato PDF profesional</p>
              <p className="text-xs text-[#64748B]">
                Todos los reportes se generan en formato PDF con gráficas y tablas profesionales
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-[#06B6D4] mt-2" />
            <div>
              <p className="text-sm text-[#0F172A] font-medium">Datos en tiempo real</p>
              <p className="text-xs text-[#64748B]">
                Los reportes incluyen datos actualizados hasta la fecha de generación
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-[#06B6D4] mt-2" />
            <div>
              <p className="text-sm text-[#0F172A] font-medium">Personalización</p>
              <p className="text-xs text-[#64748B]">
                Puedes seleccionar rangos de fechas y métricas específicas para cada reporte
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
