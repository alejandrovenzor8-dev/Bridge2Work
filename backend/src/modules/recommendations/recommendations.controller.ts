import { Request, Response } from 'express';

interface CareerRecommendation {
  id: string;
  carrera: string;
  descripcion: string;
  compatibilidad: number;
  salarioPromedio: string;
  demandaLaboral: number;
  crecimiento: number;
  skillsRequeridas: string[];
  recursos: Array<{ titulo: string; url: string }>;
}

interface SkillRecommendation {
  id: string;
  skill: string;
  descripcion: string;
  prioridad: 'alta' | 'media' | 'baja';
  tiempoEstimado: string;
  demanda: number;
  relacionadas: string[];
  recursos: Array<{ titulo: string; tipo: string; url: string }>;
}

// Mock career recommendations
const mockCareerRecommendations: CareerRecommendation[] = [
  {
    id: '1',
    carrera: 'Ingeniería en Software',
    descripcion: 'Desarrollo de aplicaciones y sistemas de software empresarial',
    compatibilidad: 95,
    salarioPromedio: '$45,000 - $85,000 MXN',
    demandaLaboral: 92,
    crecimiento: 45,
    skillsRequeridas: ['JavaScript', 'React', 'Node.js', 'Git', 'SQL'],
    recursos: [
      { titulo: 'The Odin Project', url: 'https://theodinproject.com' },
      { titulo: 'FreeCodeCamp', url: 'https://freecodecamp.org' },
    ],
  },
  {
    id: '2',
    carrera: 'Ciencia de Datos',
    descripcion: 'Análisis de datos y desarrollo de modelos de machine learning',
    compatibilidad: 88,
    salarioPromedio: '$50,000 - $95,000 MXN',
    demandaLaboral: 89,
    crecimiento: 38,
    skillsRequeridas: ['Python', 'Pandas', 'SQL', 'Machine Learning', 'Statistics'],
    recursos: [
      { titulo: 'Kaggle Learn', url: 'https://kaggle.com/learn' },
      { titulo: 'DataCamp', url: 'https://datacamp.com' },
    ],
  },
  {
    id: '3',
    carrera: 'Ciberseguridad',
    descripcion: 'Protección de sistemas y redes contra amenazas digitales',
    compatibilidad: 82,
    salarioPromedio: '$55,000 - $110,000 MXN',
    demandaLaboral: 87,
    crecimiento: 35,
    skillsRequeridas: ['Network Security', 'Ethical Hacking', 'Cryptography', 'Linux'],
    recursos: [
      { titulo: 'TryHackMe', url: 'https://tryhackme.com' },
      { titulo: 'HackTheBox', url: 'https://hackthebox.com' },
    ],
  },
];

// Mock skill recommendations
const mockSkillRecommendations: SkillRecommendation[] = [
  {
    id: '1',
    skill: 'TypeScript',
    descripcion: 'Superset de JavaScript con tipado estático para desarrollo robusto',
    prioridad: 'alta',
    tiempoEstimado: '2-3 semanas',
    demanda: 92,
    relacionadas: ['JavaScript', 'React', 'Node.js'],
    recursos: [
      { titulo: 'TypeScript Handbook', tipo: 'Documentación', url: 'https://typescriptlang.org' },
      { titulo: 'TypeScript Course', tipo: 'Video', url: 'https://youtube.com' },
    ],
  },
  {
    id: '2',
    skill: 'Docker',
    descripcion: 'Containerización de aplicaciones para deployment consistente',
    prioridad: 'alta',
    tiempoEstimado: '3-4 semanas',
    demanda: 88,
    relacionadas: ['Kubernetes', 'DevOps', 'CI/CD'],
    recursos: [
      { titulo: 'Docker Docs', tipo: 'Documentación', url: 'https://docs.docker.com' },
      { titulo: 'Docker Mastery', tipo: 'Curso', url: 'https://udemy.com' },
    ],
  },
  {
    id: '3',
    skill: 'AWS',
    descripcion: 'Plataforma de cloud computing líder en la industria',
    prioridad: 'media',
    tiempoEstimado: '4-6 semanas',
    demanda: 85,
    relacionadas: ['Cloud Computing', 'DevOps', 'Terraform'],
    recursos: [
      { titulo: 'AWS Free Tier', tipo: 'Práctica', url: 'https://aws.amazon.com' },
      { titulo: 'AWS Certified', tipo: 'Certificación', url: 'https://aws.amazon.com' },
    ],
  },
];

/**
 * Get career recommendations for a student
 * @route GET /api/recommendations/careers/:studentId
 */
export const getCareerRecommendations = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const { limit = 10 } = req.query;

    // Return mock recommendations
    const recommendations = mockCareerRecommendations.slice(0, Number(limit));

    res.json({
      studentId,
      recommendations,
      totalRecommendations: recommendations.length,
      generatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error getting career recommendations:', error);
    res.status(500).json({ error: 'Error al obtener recomendaciones de carrera' });
  }
};

/**
 * Get skill recommendations for a student
 * @route GET /api/recommendations/skills/:studentId
 */
export const getSkillRecommendations = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const { priority } = req.query;

    let recommendations = mockSkillRecommendations;

    // Filter by priority if specified
    if (priority) {
      recommendations = recommendations.filter((rec) => rec.prioridad === priority);
    }

    res.json({
      studentId,
      recommendations,
      totalRecommendations: recommendations.length,
      generatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error getting skill recommendations:', error);
    res.status(500).json({ error: 'Error al obtener recomendaciones de skills' });
  }
};

/**
 * Get personalized learning path for a student
 * @route GET /api/recommendations/learning-path/:studentId
 */
export const getLearningPath = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const learningPath = {
      studentId,
      paths: [
        {
          id: '1',
          titulo: 'Fundamentos de Desarrollo Web',
          descripcion: 'Domina HTML, CSS y JavaScript para crear sitios web modernos',
          progreso: 75,
          completada: false,
          duracion: '8 semanas',
          pasos: [
            {
              id: '1-1',
              titulo: 'HTML Semántico',
              completado: true,
              recursos: ['MDN Web Docs', 'FreeCodeCamp'],
            },
            {
              id: '1-2',
              titulo: 'CSS Moderno y Flexbox',
              completado: true,
              recursos: ['CSS Tricks', 'Flexbox Froggy'],
            },
            {
              id: '1-3',
              titulo: 'JavaScript ES6+',
              completado: false,
              recursos: ['JavaScript.info', 'Eloquent JavaScript'],
            },
          ],
        },
        {
          id: '2',
          titulo: 'React y Ecosistema Frontend',
          descripcion: 'Aprende React, hooks y herramientas del ecosistema moderno',
          progreso: 40,
          completada: false,
          duracion: '10 semanas',
          pasos: [
            {
              id: '2-1',
              titulo: 'Fundamentos de React',
              completado: true,
              recursos: ['React Docs', 'Scrimba React Course'],
            },
            {
              id: '2-2',
              titulo: 'React Hooks',
              completado: false,
              recursos: ['useHooks.com', 'React Hooks Docs'],
            },
            {
              id: '2-3',
              titulo: 'State Management',
              completado: false,
              recursos: ['Redux Toolkit', 'Zustand'],
            },
          ],
        },
      ],
    };

    res.json(learningPath);
  } catch (error) {
    console.error('Error getting learning path:', error);
    res.status(500).json({ error: 'Error al obtener ruta de aprendizaje' });
  }
};

/**
 * Generate personalized recommendations based on student profile
 * @route POST /api/recommendations/generate
 */
export const generateRecommendations = async (req: Request, res: Response) => {
  try {
    const { studentId, currentSkills, interests, careerGoals } = req.body;

    if (!studentId) {
      return res.status(400).json({ error: 'Student ID is required' });
    }

    // Mock AI-powered recommendation generation
    const recommendations = {
      studentId,
      careers: mockCareerRecommendations.slice(0, 3),
      skills: mockSkillRecommendations.slice(0, 5),
      insights: [
        'Basado en tus skills actuales, tienes fuerte perfil para Desarrollo Web',
        'Recomendamos enfocarte en TypeScript y Docker para mejorar empleabilidad',
        'Considera certificaciones en AWS para roles cloud',
      ],
      nextSteps: [
        'Completa curso de TypeScript',
        'Construye 2-3 proyectos con React + TypeScript',
        'Aprende Docker y contenedorización',
        'Práctica con AWS Free Tier',
      ],
      generatedAt: new Date().toISOString(),
    };

    res.json(recommendations);
  } catch (error) {
    console.error('Error generating recommendations:', error);
    res.status(500).json({ error: 'Error al generar recomendaciones' });
  }
};
