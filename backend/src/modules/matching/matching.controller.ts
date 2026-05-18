import { Request, Response } from 'express';

interface MatchRequest {
  jobProfileId?: string;
  studentId?: string;
  minScore?: number;
}

interface MatchScore {
  id: string;
  candidatoNombre: string;
  score: number;
  skillsCoincidentes: string[];
  skillsFaltantes: string[];
  fortalezas: string[];
  experiencia: string;
  disponibilidad: string;
}

// Mock data para matches
const mockMatches: MatchScore[] = [
  {
    id: '1',
    candidatoNombre: 'Ana García Rodríguez',
    score: 92,
    skillsCoincidentes: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker'],
    skillsFaltantes: ['Kubernetes'],
    fortalezas: ['Desarrollo Frontend', 'Arquitectura de Componentes', 'Performance'],
    experiencia: '4 años',
    disponibilidad: 'Inmediata',
  },
  {
    id: '2',
    candidatoNombre: 'Carlos Méndez López',
    score: 88,
    skillsCoincidentes: ['React', 'TypeScript', 'Node.js', 'Docker'],
    skillsFaltantes: ['AWS', 'Kubernetes'],
    fortalezas: ['Full Stack', 'APIs REST', 'Testing'],
    experiencia: '3 años',
    disponibilidad: '2 semanas',
  },
  {
    id: '3',
    candidatoNombre: 'María Fernández Torres',
    score: 85,
    skillsCoincidentes: ['React', 'JavaScript', 'Node.js', 'AWS'],
    skillsFaltantes: ['TypeScript', 'Kubernetes'],
    fortalezas: ['UI/UX', 'Responsive Design', 'Accesibilidad'],
    experiencia: '3 años',
    disponibilidad: 'Inmediata',
  },
];

/**
 * Get matches for a specific job profile
 * @route GET /api/matching/job-profile/:id
 */
export const getMatchesForJobProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { minScore = 70 } = req.query;

    // Filter matches by minimum score
    const filteredMatches = mockMatches.filter(
      (match) => match.score >= Number(minScore)
    );

    res.json({
      jobProfileId: id,
      matches: filteredMatches,
      totalMatches: filteredMatches.length,
    });
  } catch (error) {
    console.error('Error getting matches for job profile:', error);
    res.status(500).json({ error: 'Error al obtener matches' });
  }
};

/**
 * Get matches for a specific student
 * @route GET /api/matching/student/:id
 */
export const getMatchesForStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { minScore = 70 } = req.query;

    // Mock job profiles that match the student
    const studentMatches = [
      {
        id: '1',
        empresa: 'TechMX Corp',
        puesto: 'Desarrollador React Senior',
        score: 92,
        salarioMin: 45000,
        salarioMax: 65000,
        ubicacion: 'CDMX - Híbrido',
        skillsRequeridas: ['React', 'TypeScript', 'Node.js'],
        skillsOpcionales: ['AWS', 'Docker'],
      },
      {
        id: '2',
        empresa: 'Innovatech Solutions',
        puesto: 'Full Stack Developer',
        score: 88,
        salarioMin: 40000,
        salarioMax: 60000,
        ubicacion: 'Remoto',
        skillsRequeridas: ['React', 'Node.js', 'MongoDB'],
        skillsOpcionales: ['TypeScript', 'AWS'],
      },
    ].filter((match) => match.score >= Number(minScore));

    res.json({
      studentId: id,
      matches: studentMatches,
      totalMatches: studentMatches.length,
    });
  } catch (error) {
    console.error('Error getting matches for student:', error);
    res.status(500).json({ error: 'Error al obtener matches' });
  }
};

/**
 * Calculate match score between job profile and student
 * @route POST /api/matching/calculate
 */
export const calculateMatchScore = async (req: Request, res: Response) => {
  try {
    const { jobProfileId, studentId } = req.body;

    if (!jobProfileId || !studentId) {
      return res.status(400).json({ error: 'Job profile ID and student ID are required' });
    }

    // Mock calculation logic
    const matchScore = {
      jobProfileId,
      studentId,
      overallScore: 87,
      breakdown: {
        skillsMatch: 90,
        experienceMatch: 85,
        educationMatch: 88,
        locationMatch: 80,
      },
      matchedSkills: ['React', 'TypeScript', 'Node.js'],
      missingSkills: ['AWS', 'Kubernetes'],
      recommendations: [
        'El candidato tiene excelente match técnico',
        'Recomendado capacitación en AWS',
        'Considerar para entrevista técnica',
      ],
    };

    res.json(matchScore);
  } catch (error) {
    console.error('Error calculating match score:', error);
    res.status(500).json({ error: 'Error al calcular score de matching' });
  }
};

/**
 * Get matching statistics
 * @route GET /api/matching/stats
 */
export const getMatchingStats = async (req: Request, res: Response) => {
  try {
    const stats = {
      totalMatches: 1240,
      avgMatchScore: 78.5,
      successfulPlacements: 156,
      topMatchedSkills: [
        { skill: 'React', matches: 450 },
        { skill: 'JavaScript', matches: 520 },
        { skill: 'Node.js', matches: 380 },
        { skill: 'Python', matches: 320 },
      ],
      matchesByMonth: [
        { month: 'Ene', matches: 180 },
        { month: 'Feb', matches: 210 },
        { month: 'Mar', matches: 245 },
        { month: 'Abr', matches: 280 },
        { month: 'May', matches: 325 },
      ],
    };

    res.json(stats);
  } catch (error) {
    console.error('Error getting matching stats:', error);
    res.status(500).json({ error: 'Error al obtener estadísticas de matching' });
  }
};
