'use client';

import { useState } from 'react';
import { Brain, TrendingUp, Sparkles, AlertCircle, Lightbulb, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LineChart, BarChart } from '@/components/shared/Charts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const prediccionesData = [
  { mes: 'Jun', predicho: 280, real: 250 },
  { mes: 'Jul', predicho: 320, real: null },
  { mes: 'Ago', predicho: 360, real: null },
  { mes: 'Sep', predicho: 410, real: null },
  { mes: 'Oct', predicho: 450, real: null },
];

const tecnologiasEmergenteData = [
  { name: 'IA Generativa', crecimiento: 185 },
  { name: 'Blockchain', crecimiento: 142 },
  { name: 'Edge Computing', crecimiento: 128 },
  { name: 'Quantum Computing', crecimiento: 95 },
  { name: 'Web3', crecimiento: 88 },
  { name: 'AR/VR', crecimiento: 76 },
];

const insights = [
  {
    titulo: 'Explosión de IA Generativa',
    descripcion:
      'La demanda de profesionales con experiencia en IA Generativa ha crecido un 185% en los últimos 6 meses. Se espera que esta tendencia continúe con un crecimiento del 40% adicional en Q3 2026.',
    impacto: 'alto',
    icon: Sparkles,
  },
  {
    titulo: 'Escasez de Talento en Ciberseguridad',
    descripcion:
      'El mercado muestra un déficit del 35% en profesionales de ciberseguridad. Las empresas están aumentando salarios un 22% en promedio para atraer talento.',
    impacto: 'alto',
    icon: AlertCircle,
  },
  {
    titulo: 'Crecimiento de Roles Híbridos',
    descripcion:
      'Los perfiles que combinan desarrollo con conocimientos de IA/ML están en alta demanda, con un incremento del 68% en ofertas para roles híbridos.',
    impacto: 'medio',
    icon: Target,
  },
  {
    titulo: 'Adopción de Cloud Native',
    descripcion:
      'El 78% de las empresas tecnológicas están migrando a arquitecturas cloud-native, incrementando la demanda de skills en Kubernetes, Docker y AWS en un 52%.',
    impacto: 'medio',
    icon: TrendingUp,
  },
];

const cambiosMercadoData = [
  {
    categoria: 'Skills Técnicas',
    cambios: [
      { skill: 'JavaScript', cambio: '+8%' },
      { skill: 'Python', cambio: '+15%' },
      { skill: 'TypeScript', cambio: '+22%' },
      { skill: 'Rust', cambio: '+45%' },
    ],
  },
  {
    categoria: 'Frameworks',
    cambios: [
      { skill: 'React', cambio: '+12%' },
      { skill: 'Next.js', cambio: '+35%' },
      { skill: 'Vue', cambio: '-5%' },
      { skill: 'Svelte', cambio: '+28%' },
    ],
  },
  {
    categoria: 'Cloud & DevOps',
    cambios: [
      { skill: 'AWS', cambio: '+18%' },
      { skill: 'Kubernetes', cambio: '+42%' },
      { skill: 'Docker', cambio: '+25%' },
      { skill: 'Terraform', cambio: '+38%' },
    ],
  },
];

export default function InteligenciaPage() {
  const [selectedTab, setSelectedTab] = useState('insights');

  const getImpactColor = (impacto: string) => {
    switch (impacto) {
      case 'alto':
        return 'bg-[#EF4444] text-white';
      case 'medio':
        return 'bg-[#F59E0B] text-white';
      case 'bajo':
        return 'bg-[#10B981] text-white';
      default:
        return 'bg-[#64748B] text-white';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0F172A]">Inteligencia de Mercado</h1>
          <p className="text-[#64748B]">
            Análisis predictivo y tendencias del mercado laboral con IA
          </p>
        </div>
        <Button className="gap-2">
          <Brain className="w-4 h-4" />
          Generar Reporte IA
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/10 flex items-center justify-center">
                <Brain className="w-5 h-5 text-[#06B6D4]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#0F172A]">95.2%</div>
                <div className="text-sm text-[#64748B]">Precisión IA</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#8B5CF6]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#0F172A]">42</div>
                <div className="text-sm text-[#64748B]">Insights Generados</div>
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
                <div className="text-2xl font-bold text-[#0F172A]">+28%</div>
                <div className="text-sm text-[#64748B]">Crecimiento Predicho</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="insights">Insights Clave</TabsTrigger>
          <TabsTrigger value="predicciones">Predicciones</TabsTrigger>
          <TabsTrigger value="tecnologias">Tecnologías Emergentes</TabsTrigger>
          <TabsTrigger value="cambios">Cambios del Mercado</TabsTrigger>
        </TabsList>

        <TabsContent value="insights">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#06B6D4]" />
                        </div>
                        <CardTitle className="text-lg">{insight.titulo}</CardTitle>
                      </div>
                      <Badge className={getImpactColor(insight.impacto)}>
                        Impacto {insight.impacto}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[#64748B]">{insight.descripcion}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-[#06B6D4]/5 to-[#8B5CF6]/5 rounded-lg border border-[#E2E8F0] p-6 mt-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#0F172A] mb-2">
                  Recomendación Estratégica
                </h4>
                <p className="text-sm text-[#64748B] mb-4">
                  Basado en el análisis de datos, recomendamos enfocar esfuerzos en
                  capacitación para roles de IA/ML y Ciberseguridad. Las universidades
                  deberían actualizar programas académicos para incluir estas tecnologías
                  emergentes. Las empresas pueden mejorar tasas de retención ofreciendo
                  programas de upskilling en estas áreas críticas.
                </p>
                <Button variant="outline" size="sm">
                  Ver Recomendaciones Detalladas
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="predicciones">
          <div className="bg-white rounded-lg border border-[#E2E8F0] p-6">
            <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
              Predicción de Demanda - Próximos 5 Meses
            </h3>
            <p className="text-sm text-[#64748B] mb-6">
              Modelo predictivo basado en análisis de tendencias históricas y factores
              estacionales
            </p>
            <LineChart data={prediccionesData} height={350} />
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#F8FAFC] rounded-lg p-4">
                <div className="text-xs text-[#64748B] mb-1">Confianza del Modelo</div>
                <div className="text-2xl font-bold text-[#0F172A]">95.2%</div>
              </div>
              <div className="bg-[#F8FAFC] rounded-lg p-4">
                <div className="text-xs text-[#64748B] mb-1">Crecimiento Esperado</div>
                <div className="text-2xl font-bold text-[#10B981]">+28%</div>
              </div>
              <div className="bg-[#F8FAFC] rounded-lg p-4">
                <div className="text-xs text-[#64748B] mb-1">Margen de Error</div>
                <div className="text-2xl font-bold text-[#0F172A]">±4.8%</div>
              </div>
            </div>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Factores Predictivos Clave</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    factor: 'Tendencias históricas',
                    impacto: 35,
                    descripcion: 'Patrones de crecimiento de los últimos 24 meses',
                  },
                  {
                    factor: 'Estacionalidad',
                    impacto: 25,
                    descripcion: 'Variaciones típicas por temporada del año',
                  },
                  {
                    factor: 'Adopción tecnológica',
                    impacto: 20,
                    descripcion: 'Velocidad de adopción de nuevas tecnologías',
                  },
                  {
                    factor: 'Indicadores económicos',
                    impacto: 15,
                    descripcion: 'PIB, tasa de empleo y otros factores macro',
                  },
                  {
                    factor: 'Eventos externos',
                    impacto: 5,
                    descripcion: 'Cambios regulatorios y eventos de industria',
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-[#0F172A]">{item.factor}</span>
                      <span className="text-sm text-[#64748B]">{item.impacto}% impacto</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6] rounded-full"
                          style={{ width: `${item.impacto * 2}%` }}
                        />
                      </div>
                    </div>
                    <p className="text-xs text-[#64748B] mt-1">{item.descripcion}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tecnologias">
          <div className="bg-white rounded-lg border border-[#E2E8F0] p-6">
            <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
              Tecnologías Emergentes - Crecimiento en Demanda
            </h3>
            <p className="text-sm text-[#64748B] mb-6">
              Tecnologías con mayor crecimiento en demanda laboral (últimos 6 meses)
            </p>
            <BarChart data={tecnologiasEmergenteData} height={350} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>IA Generativa - Líder en Crecimiento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Badge className="bg-[#10B981] mb-3">+185% crecimiento</Badge>
                    <p className="text-sm text-[#64748B]">
                      La demanda de profesionales con experiencia en IA Generativa (GPT,
                      Claude, Midjourney) ha explotado en 2026. Skills clave incluyen:
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Prompt Engineering',
                      'Fine-tuning',
                      'RAG',
                      'LangChain',
                      'Vector Databases',
                      'OpenAI API',
                    ].map((skill) => (
                      <Badge key={skill} className="bg-[#06B6D4]">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="bg-[#F8FAFC] rounded-lg p-4 mt-4">
                    <div className="text-xs text-[#64748B] mb-1">Salario Promedio</div>
                    <div className="text-xl font-bold text-[#0F172A]">$85,000 - $150,000 MXN</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Blockchain & Web3</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Badge className="bg-[#8B5CF6] mb-3">+142% crecimiento</Badge>
                    <p className="text-sm text-[#64748B]">
                      El ecosistema Web3 continúa expandiéndose con roles especializados
                      en smart contracts, DeFi y NFTs. Skills demandadas:
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Solidity',
                      'Ethereum',
                      'Smart Contracts',
                      'Web3.js',
                      'DeFi',
                      'Hardhat',
                    ].map((skill) => (
                      <Badge key={skill} className="bg-[#8B5CF6]">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="bg-[#F8FAFC] rounded-lg p-4 mt-4">
                    <div className="text-xs text-[#64748B] mb-1">Salario Promedio</div>
                    <div className="text-xl font-bold text-[#0F172A]">$90,000 - $180,000 MXN</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="cambios">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {cambiosMercadoData.map((categoria, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{categoria.categoria}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {categoria.cambios.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-2 border-b border-[#F1F5F9] last:border-0"
                      >
                        <span className="text-sm text-[#0F172A]">{item.skill}</span>
                        <Badge
                          className={
                            item.cambio.startsWith('+')
                              ? 'bg-[#10B981]'
                              : item.cambio.startsWith('-')
                              ? 'bg-[#EF4444]'
                              : 'bg-[#64748B]'
                          }
                        >
                          {item.cambio}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Resumen de Cambios del Mercado</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#0F172A] mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#10B981]" />
                    Tecnologías en Alza
                  </h4>
                  <ul className="space-y-2 text-sm text-[#64748B]">
                    <li>• TypeScript supera a JavaScript puro en nuevas posiciones</li>
                    <li>• Rust gana tracción como lenguaje de sistemas moderno</li>
                    <li>• Kubernetes se vuelve skill obligatorio para DevOps</li>
                    <li>• Next.js domina el ecosistema React enterprise</li>
                    <li>• Terraform lidera infraestructura como código</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A] mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#F59E0B]" />
                    Observaciones Clave
                  </h4>
                  <ul className="space-y-2 text-sm text-[#64748B]">
                    <li>
                      • Vue muestra ligera disminución frente al momentum de React/Next
                    </li>
                    <li>• Angular mantiene presencia estable en proyectos enterprise</li>
                    <li>• Skills de IA/ML se vuelven transversales a todos los roles</li>
                    <li>
                      • Arquitectura cloud-native es el nuevo estándar, no la excepción
                    </li>
                    <li>• Seguridad se integra como responsabilidad de todo developer</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
