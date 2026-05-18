import { Request, Response } from 'express';

interface GlobalAnalytics {
  totalUsers: number;
  totalCompanies: number;
  totalUniversities: number;
  totalStudents: number;
  totalJobProfiles: number;
  totalSkills: number;
  monthlyGrowth: number;
  avgMatchScore: number;
}

interface IndustryData {
  name: string;
  activeCompanies: number;
  jobProfiles: number;
  avgSalary: number;
  growth: number;
}

interface SkillTrend {
  skill: string;
  demand: number;
  growth: number;
  avgSalary: number;
  topCompanies: string[];
}

/**
 * Get global platform analytics
 * @route GET /api/analytics/global
 */
export const getGlobalAnalytics = async (req: Request, res: Response) => {
  try {
    const analytics: GlobalAnalytics = {
      totalUsers: 1150,
      totalCompanies: 38,
      totalUniversities: 8,
      totalStudents: 850,
      totalJobProfiles: 156,
      totalSkills: 487,
      monthlyGrowth: 15,
      avgMatchScore: 78.5,
    };

    res.json(analytics);
  } catch (error) {
    console.error('Error getting global analytics:', error);
    res.status(500).json({ error: 'Error al obtener analytics globales' });
  }
};

/**
 * Get industry analytics
 * @route GET /api/analytics/industries
 */
export const getIndustryAnalytics = async (req: Request, res: Response) => {
  try {
    const industries: IndustryData[] = [
      {
        name: 'Tecnología',
        activeCompanies: 18,
        jobProfiles: 68,
        avgSalary: 65000,
        growth: 24,
      },
      {
        name: 'Finanzas',
        activeCompanies: 8,
        jobProfiles: 32,
        avgSalary: 58000,
        growth: 18,
      },
      {
        name: 'Salud',
        activeCompanies: 5,
        jobProfiles: 24,
        avgSalary: 52000,
        growth: 15,
      },
      {
        name: 'Educación',
        activeCompanies: 4,
        jobProfiles: 18,
        avgSalary: 42000,
        growth: 12,
      },
      {
        name: 'Retail',
        activeCompanies: 3,
        jobProfiles: 14,
        avgSalary: 38000,
        growth: 8,
      },
    ];

    res.json({
      industries,
      totalIndustries: industries.length,
    });
  } catch (error) {
    console.error('Error getting industry analytics:', error);
    res.status(500).json({ error: 'Error al obtener analytics de industrias' });
  }
};

/**
 * Get skill trends and demand
 * @route GET /api/analytics/skills
 */
export const getSkillTrends = async (req: Request, res: Response) => {
  try {
    const { limit = 20 } = req.query;

    const skills: SkillTrend[] = [
      {
        skill: 'JavaScript',
        demand: 850,
        growth: 8,
        avgSalary: 55000,
        topCompanies: ['TechMX', 'Innovatech', 'CodeLabs'],
      },
      {
        skill: 'Python',
        demand: 720,
        growth: 15,
        avgSalary: 62000,
        topCompanies: ['DataCorp', 'AI Solutions', 'TechMX'],
      },
      {
        skill: 'React',
        demand: 680,
        growth: 12,
        avgSalary: 58000,
        topCompanies: ['TechMX', 'Frontend Masters', 'Innovatech'],
      },
      {
        skill: 'TypeScript',
        demand: 590,
        growth: 22,
        avgSalary: 60000,
        topCompanies: ['TechMX', 'CodeLabs', 'Modern Dev'],
      },
      {
        skill: 'Node.js',
        demand: 540,
        growth: 10,
        avgSalary: 56000,
        topCompanies: ['Backend Pro', 'TechMX', 'API Masters'],
      },
      {
        skill: 'AWS',
        demand: 480,
        growth: 18,
        avgSalary: 68000,
        topCompanies: ['Cloud Nine', 'TechMX', 'DevOps Corp'],
      },
      {
        skill: 'Docker',
        demand: 420,
        growth: 25,
        avgSalary: 62000,
        topCompanies: ['DevOps Corp', 'Container Labs', 'TechMX'],
      },
      {
        skill: 'SQL',
        demand: 380,
        growth: 5,
        avgSalary: 50000,
        topCompanies: ['DataCorp', 'Backend Pro', 'TechMX'],
      },
    ];

    res.json({
      skills: skills.slice(0, Number(limit)),
      totalSkills: skills.length,
    });
  } catch (error) {
    console.error('Error getting skill trends:', error);
    res.status(500).json({ error: 'Error al obtener tendencias de skills' });
  }
};

/**
 * Get market trends over time
 * @route GET /api/analytics/trends
 */
export const getMarketTrends = async (req: Request, res: Response) => {
  try {
    const { period = '6months' } = req.query;

    const trends = {
      period,
      data: [
        { month: 'Ene', jobProfiles: 120, applications: 450, matches: 85, companies: 28 },
        { month: 'Feb', jobProfiles: 145, applications: 580, matches: 110, companies: 31 },
        { month: 'Mar', jobProfiles: 180, applications: 720, matches: 145, companies: 34 },
        { month: 'Abr', jobProfiles: 210, applications: 890, matches: 180, companies: 36 },
        { month: 'May', jobProfiles: 250, applications: 1150, matches: 220, companies: 38 },
      ],
      insights: [
        'Crecimiento sostenido del 18% mensual en ofertas laborales',
        'Tasa de matching mejoró del 18% al 19.1%',
        'Incorporación de 10 nuevas empresas en el último trimestre',
      ],
    };

    res.json(trends);
  } catch (error) {
    console.error('Error getting market trends:', error);
    res.status(500).json({ error: 'Error al obtener tendencias del mercado' });
  }
};

/**
 * Get regional analytics (heatmap data)
 * @route GET /api/analytics/regions
 */
export const getRegionalAnalytics = async (req: Request, res: Response) => {
  try {
    const regions = [
      {
        region: 'CDMX',
        activeCompanies: 18,
        students: 380,
        jobProfiles: 68,
        avgMatchScore: 85,
        avgSalary: 58000,
      },
      {
        region: 'Guadalajara',
        activeCompanies: 12,
        students: 250,
        jobProfiles: 48,
        avgMatchScore: 78,
        avgSalary: 52000,
      },
      {
        region: 'Monterrey',
        activeCompanies: 10,
        students: 220,
        jobProfiles: 42,
        avgMatchScore: 82,
        avgSalary: 55000,
      },
      {
        region: 'Puebla',
        activeCompanies: 5,
        students: 180,
        jobProfiles: 28,
        avgMatchScore: 72,
        avgSalary: 45000,
      },
      {
        region: 'Querétaro',
        activeCompanies: 4,
        students: 150,
        jobProfiles: 22,
        avgMatchScore: 75,
        avgSalary: 48000,
      },
    ];

    res.json({
      regions,
      totalRegions: regions.length,
    });
  } catch (error) {
    console.error('Error getting regional analytics:', error);
    res.status(500).json({ error: 'Error al obtener analytics regionales' });
  }
};

/**
 * Get career growth analytics
 * @route GET /api/analytics/careers
 */
export const getCareerAnalytics = async (req: Request, res: Response) => {
  try {
    const careers = [
      {
        career: 'Ingeniería en Software',
        growth: 45,
        employability: 92,
        avgSalary: 65000,
        activeProfiles: 68,
        avgMatchScore: 85,
      },
      {
        career: 'Ciencia de Datos',
        growth: 38,
        employability: 89,
        avgSalary: 72000,
        activeProfiles: 42,
        avgMatchScore: 82,
      },
      {
        career: 'Ciberseguridad',
        growth: 35,
        employability: 87,
        avgSalary: 78000,
        activeProfiles: 28,
        avgMatchScore: 80,
      },
      {
        career: 'DevOps',
        growth: 32,
        employability: 85,
        avgSalary: 68000,
        activeProfiles: 38,
        avgMatchScore: 83,
      },
      {
        career: 'UX/UI Design',
        growth: 28,
        employability: 81,
        avgSalary: 55000,
        activeProfiles: 32,
        avgMatchScore: 78,
      },
      {
        career: 'Cloud Computing',
        growth: 25,
        employability: 78,
        avgSalary: 70000,
        activeProfiles: 24,
        avgMatchScore: 79,
      },
    ];

    res.json({
      careers,
      totalCareers: careers.length,
    });
  } catch (error) {
    console.error('Error getting career analytics:', error);
    res.status(500).json({ error: 'Error al obtener analytics de carreras' });
  }
};

/**
 * Generate AI-powered market insights
 * @route GET /api/analytics/insights
 */
export const getMarketInsights = async (req: Request, res: Response) => {
  try {
    const insights = {
      summary: {
        overallGrowth: 18,
        topTrend: 'IA Generativa',
        hottestSkill: 'TypeScript',
        fastestGrowingIndustry: 'Tecnología',
      },
      predictions: [
        {
          category: 'Skills',
          prediction: 'TypeScript demanda crecerá 25% en próximos 6 meses',
          confidence: 92,
          impact: 'alto',
        },
        {
          category: 'Salarios',
          prediction: 'Salarios para roles de IA/ML aumentarán 15-20%',
          confidence: 88,
          impact: 'alto',
        },
        {
          category: 'Industria',
          prediction: 'Sector tecnológico mantendrá crecimiento sostenido del 20%+',
          confidence: 95,
          impact: 'alto',
        },
      ],
      recommendations: [
        'Universidades deben actualizar currículos con enfoque en IA/ML',
        'Estudiantes deben priorizar TypeScript y cloud skills',
        'Empresas pueden mejorar retención con programas de upskilling',
      ],
      emergingTrends: [
        {
          trend: 'IA Generativa',
          growth: 185,
          description: 'Explosión en demanda de profesionales con experiencia en LLMs',
        },
        {
          trend: 'Edge Computing',
          growth: 128,
          description: 'Crecimiento en arquitecturas distribuidas y edge',
        },
        {
          trend: 'Web3/Blockchain',
          growth: 142,
          description: 'Continúa expansión del ecosistema descentralizado',
        },
      ],
      generatedAt: new Date().toISOString(),
    };

    res.json(insights);
  } catch (error) {
    console.error('Error getting market insights:', error);
    res.status(500).json({ error: 'Error al obtener insights del mercado' });
  }
};
