'use client';

import { useState } from 'react';
import { Map, Filter, TrendingUp, TrendingDown } from 'lucide-react';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AreaChart, BarChart } from '@/components/shared/Charts';

const heatmapData = [
  { region: 'CDMX', ofertas: 450, candidatos: 1200, match: 85 },
  { region: 'Guadalajara', ofertas: 320, candidatos: 850, match: 78 },
  { region: 'Monterrey', ofertas: 280, candidatos: 720, match: 82 },
  { region: 'Puebla', ofertas: 180, candidatos: 480, match: 72 },
  { region: 'Querétaro', ofertas: 150, candidatos: 390, match: 75 },
];

const comparativaTemporalData = [
  { mes: 'Ene', '2025': 320, '2026': 450 },
  { mes: 'Feb', '2025': 340, '2026': 520 },
  { mes: 'Mar', '2025': 360, '2026': 620 },
  { mes: 'Abr', '2025': 380, '2026': 780 },
  { mes: 'May', '2025': 400, '2026': 920 },
];

const demandaPorIndustriaData = [
  { name: 'Tecnología', Q1: 850, Q2: 1050 },
  { name: 'Finanzas', Q1: 620, Q2: 720 },
  { name: 'Salud', Q1: 480, Q2: 580 },
  { name: 'Educación', Q1: 320, Q2: 380 },
  { name: 'Retail', Q1: 250, Q2: 280 },
];

export default function HeatmapsPage() {
  const [selectedRegion, setSelectedRegion] = useState('todas');
  const [selectedPeriod, setSelectedPeriod] = useState('2026');

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0F172A]">Heatmaps & Visualización</h1>
          <p className="text-[#64748B]">
            Mapas de calor y análisis comparativos del mercado laboral
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-[#E2E8F0] p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
            <option value="todas">Todas las regiones</option>
            <option value="cdmx">CDMX</option>
            <option value="guadalajara">Guadalajara</option>
            <option value="monterrey">Monterrey</option>
            <option value="puebla">Puebla</option>
            <option value="queretaro">Querétaro</option>
          </Select>
          <Select value={selectedPeriod} onChange={(e) => setSelectedPeriod(e.target.value)}>
            <option value="2026">2026</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
          </Select>
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" /> Más Filtros
          </Button>
          <Button className="gap-2">
            <Map className="w-4 h-4" /> Exportar Mapa
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#06B6D4]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#0F172A]">1,380</div>
                <div className="text-sm text-[#64748B]">Total Ofertas</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#8B5CF6]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#0F172A]">3,640</div>
                <div className="text-sm text-[#64748B]">Candidatos Activos</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#10B981]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#0F172A]">78.4%</div>
                <div className="text-sm text-[#64748B]">Tasa de Match Promedio</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Mapa de Calor por Región</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-[#64748B] mb-6">
            Distribución geográfica de ofertas laborales y candidatos
          </p>
          <div className="space-y-4">
            {heatmapData.map((region) => (
              <div key={region.region} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-[#0F172A] w-32">{region.region}</span>
                    <Badge
                      className={
                        region.match >= 80
                          ? 'bg-[#10B981]'
                          : region.match >= 75
                          ? 'bg-[#F59E0B]'
                          : 'bg-[#64748B]'
                      }
                    >
                      {region.match}% match
                    </Badge>
                  </div>
                  <div className="flex gap-6 text-sm">
                    <span className="text-[#64748B]">
                      <strong className="text-[#0F172A]">{region.ofertas}</strong> ofertas
                    </span>
                    <span className="text-[#64748B]">
                      <strong className="text-[#0F172A]">{region.candidatos}</strong> candidatos
                    </span>
                  </div>
                </div>
                <div className="relative h-8 bg-[#F1F5F9] rounded-lg overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6] rounded-lg transition-all"
                    style={{ width: `${(region.ofertas / 450) * 100}%` }}
                  />
                  <div
                    className="absolute top-0 right-0 h-full bg-gradient-to-l from-[#10B981]/30 to-transparent rounded-lg transition-all"
                    style={{ width: `${(region.candidatos / 1200) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-[#E2E8F0] p-6">
          <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
            Comparativa Temporal (2025 vs 2026)
          </h3>
          <p className="text-sm text-[#64748B] mb-4">
            Crecimiento año contra año de ofertas laborales
          </p>
          <AreaChart data={comparativaTemporalData} height={300} />
          <div className="mt-4 flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#06B6D4]" />
              <span className="text-[#64748B]">2025</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#8B5CF6]" />
              <span className="text-[#64748B]">2026</span>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <TrendingUp className="w-4 h-4 text-[#10B981]" />
              <span className="text-[#10B981] font-semibold">+130% crecimiento</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[#E2E8F0] p-6">
          <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
            Demanda por Industria (Q1 vs Q2)
          </h3>
          <p className="text-sm text-[#64748B] mb-4">
            Comparativa trimestral de ofertas por sector
          </p>
          <BarChart data={demandaPorIndustriaData} height={300} />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Análisis de Tendencias</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#10B981]/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 text-[#10B981]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A] mb-1">
                    Crecimiento Destacado
                  </h4>
                  <p className="text-sm text-[#64748B]">
                    CDMX lidera con 450 ofertas activas y una tasa de match del 85%,
                    mostrando un crecimiento del 28% respecto al trimestre anterior.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#06B6D4]/10 flex items-center justify-center flex-shrink-0">
                  <Map className="w-4 h-4 text-[#06B6D4]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A] mb-1">
                    Expansión Regional
                  </h4>
                  <p className="text-sm text-[#64748B]">
                    Guadalajara y Monterrey muestran un crecimiento sostenido del 22% y
                    19% respectivamente, indicando una descentralización del mercado tech.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 text-[#8B5CF6]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A] mb-1">
                    Industria Tecnológica
                  </h4>
                  <p className="text-sm text-[#64748B]">
                    El sector tecnológico representa el 45% de todas las ofertas,
                    con un incremento del 24% en el Q2 2026.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="w-4 h-4 text-[#F59E0B]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A] mb-1">
                    Oportunidad de Mejora
                  </h4>
                  <p className="text-sm text-[#64748B]">
                    Puebla y Querétaro tienen ratios de match menores al 75%,
                    indicando oportunidades para mejorar el matching de talento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
