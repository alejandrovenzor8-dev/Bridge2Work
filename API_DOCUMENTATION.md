# Bridge2Work - API Documentation

## Base URL
```
http://localhost:4000/api
```

## Authentication
La mayoría de los endpoints requieren autenticación mediante JWT token en el header:
```
Authorization: Bearer <token>
```

---

## 🔐 Auth Endpoints

### Register User
```http
POST /api/auth/register
```

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe",
  "role": "EMPRESA" | "UNIVERSIDAD" | "ESTUDIANTE" | "ADMIN"
}
```

**Response:**
```json
{
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "name": "John Doe",
    "role": "EMPRESA"
  },
  "token": "jwt-token-here"
}
```

### Login
```http
POST /api/auth/login
```

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "user": { ... },
  "token": "jwt-token-here"
}
```

---

## 👤 Users Endpoints

### Get User Profile
```http
GET /api/users/:id
```

### Update User
```http
PUT /api/users/:id
```

**Request Body:**
```json
{
  "name": "Updated Name",
  "email": "new@email.com"
}
```

---

## 🏢 Companies Endpoints

### Get Company
```http
GET /api/companies/:id
```

**Response:**
```json
{
  "id": "uuid",
  "name": "TechMX Corp",
  "industry": "Tecnología",
  "description": "Empresa de desarrollo...",
  "website": "https://techmx.com",
  "employees": "50-200",
  "location": "CDMX"
}
```

### Create Company
```http
POST /api/companies
```

**Request Body:**
```json
{
  "name": "TechMX Corp",
  "industry": "Tecnología",
  "description": "...",
  "website": "https://...",
  "employees": "50-200",
  "location": "CDMX"
}
```

### Get Company Analytics
```http
GET /api/companies/:id/analytics
```

**Response:**
```json
{
  "totalProfiles": 12,
  "totalApplications": 145,
  "avgMatchScore": 78.5,
  "topSkills": [
    { "skill": "React", "count": 8 },
    { "skill": "Node.js", "count": 6 }
  ],
  "trends": [...]
}
```

---

## 💼 Job Profiles Endpoints

### Get All Job Profiles
```http
GET /api/job-profiles
```

**Query Params:**
- `companyId` - Filter by company
- `minSalary` - Minimum salary
- `maxSalary` - Maximum salary

**Response:**
```json
{
  "profiles": [
    {
      "id": "uuid",
      "title": "Desarrollador React Senior",
      "company": "TechMX Corp",
      "description": "...",
      "requirements": [...],
      "skills": ["React", "TypeScript", "Node.js"],
      "salaryMin": 45000,
      "salaryMax": 65000,
      "location": "CDMX - Híbrido",
      "status": "active",
      "createdAt": "2026-05-01"
    }
  ],
  "total": 156
}
```

### Create Job Profile
```http
POST /api/job-profiles
```

**Request Body:**
```json
{
  "title": "Desarrollador React Senior",
  "companyId": "uuid",
  "description": "Buscamos...",
  "requirements": ["5+ años experiencia", "..."],
  "skills": ["React", "TypeScript"],
  "salaryMin": 45000,
  "salaryMax": 65000,
  "location": "CDMX - Híbrido"
}
```

### Update Job Profile
```http
PUT /api/job-profiles/:id
```

### Delete Job Profile
```http
DELETE /api/job-profiles/:id
```

---

## 🎯 Matching Endpoints

### Get Matches for Job Profile
```http
GET /api/matching/job-profile/:id
```

**Query Params:**
- `minScore` - Minimum match score (default: 70)

**Response:**
```json
{
  "jobProfileId": "uuid",
  "matches": [
    {
      "id": "uuid",
      "candidatoNombre": "Ana García",
      "score": 92,
      "skillsCoincidentes": ["React", "TypeScript"],
      "skillsFaltantes": ["AWS"],
      "fortalezas": ["Frontend", "Testing"],
      "experiencia": "4 años",
      "disponibilidad": "Inmediata"
    }
  ],
  "totalMatches": 12
}
```

### Get Matches for Student
```http
GET /api/matching/student/:id
```

**Response:**
```json
{
  "studentId": "uuid",
  "matches": [
    {
      "id": "uuid",
      "empresa": "TechMX Corp",
      "puesto": "Desarrollador React",
      "score": 92,
      "salarioMin": 45000,
      "salarioMax": 65000,
      "ubicacion": "CDMX",
      "skillsRequeridas": [...],
      "skillsOpcionales": [...]
    }
  ],
  "totalMatches": 8
}
```

### Calculate Match Score
```http
POST /api/matching/calculate
```

**Request Body:**
```json
{
  "jobProfileId": "uuid",
  "studentId": "uuid"
}
```

**Response:**
```json
{
  "overallScore": 87,
  "breakdown": {
    "skillsMatch": 90,
    "experienceMatch": 85,
    "educationMatch": 88,
    "locationMatch": 80
  },
  "matchedSkills": ["React", "TypeScript"],
  "missingSkills": ["AWS"],
  "recommendations": [...]
}
```

### Get Matching Statistics
```http
GET /api/matching/stats
```

**Response:**
```json
{
  "totalMatches": 1240,
  "avgMatchScore": 78.5,
  "successfulPlacements": 156,
  "topMatchedSkills": [...],
  "matchesByMonth": [...]
}
```

---

## 🤖 Recommendations Endpoints

### Get Career Recommendations
```http
GET /api/recommendations/careers/:studentId
```

**Query Params:**
- `limit` - Number of recommendations (default: 10)

**Response:**
```json
{
  "studentId": "uuid",
  "recommendations": [
    {
      "id": "uuid",
      "carrera": "Ingeniería en Software",
      "descripcion": "...",
      "compatibilidad": 95,
      "salarioPromedio": "$45,000 - $85,000 MXN",
      "demandaLaboral": 92,
      "crecimiento": 45,
      "skillsRequeridas": [...],
      "recursos": [...]
    }
  ],
  "totalRecommendations": 3,
  "generatedAt": "2026-05-18T..."
}
```

### Get Skill Recommendations
```http
GET /api/recommendations/skills/:studentId
```

**Query Params:**
- `priority` - Filter by priority (alta, media, baja)

**Response:**
```json
{
  "studentId": "uuid",
  "recommendations": [
    {
      "id": "uuid",
      "skill": "TypeScript",
      "descripcion": "...",
      "prioridad": "alta",
      "tiempoEstimado": "2-3 semanas",
      "demanda": 92,
      "relacionadas": ["JavaScript", "React"],
      "recursos": [...]
    }
  ],
  "totalRecommendations": 5,
  "generatedAt": "2026-05-18T..."
}
```

### Get Learning Path
```http
GET /api/recommendations/learning-path/:studentId
```

**Response:**
```json
{
  "studentId": "uuid",
  "paths": [
    {
      "id": "uuid",
      "titulo": "Fundamentos de Desarrollo Web",
      "descripcion": "...",
      "progreso": 75,
      "completada": false,
      "duracion": "8 semanas",
      "pasos": [
        {
          "id": "uuid",
          "titulo": "HTML Semántico",
          "completado": true,
          "recursos": [...]
        }
      ]
    }
  ]
}
```

### Generate Personalized Recommendations
```http
POST /api/recommendations/generate
```

**Request Body:**
```json
{
  "studentId": "uuid",
  "currentSkills": ["JavaScript", "React"],
  "interests": ["Frontend", "Mobile"],
  "careerGoals": ["Full Stack Developer"]
}
```

**Response:**
```json
{
  "studentId": "uuid",
  "careers": [...],
  "skills": [...],
  "insights": [
    "Basado en tus skills, tienes fuerte perfil para Desarrollo Web",
    "..."
  ],
  "nextSteps": [...],
  "generatedAt": "2026-05-18T..."
}
```

---

## 📊 Analytics Endpoints

### Get Global Analytics
```http
GET /api/analytics/global
```

**Response:**
```json
{
  "totalUsers": 1150,
  "totalCompanies": 38,
  "totalUniversities": 8,
  "totalStudents": 850,
  "totalJobProfiles": 156,
  "totalSkills": 487,
  "monthlyGrowth": 15,
  "avgMatchScore": 78.5
}
```

### Get Industry Analytics
```http
GET /api/analytics/industries
```

**Response:**
```json
{
  "industries": [
    {
      "name": "Tecnología",
      "activeCompanies": 18,
      "jobProfiles": 68,
      "avgSalary": 65000,
      "growth": 24
    }
  ],
  "totalIndustries": 5
}
```

### Get Skill Trends
```http
GET /api/analytics/skills
```

**Query Params:**
- `limit` - Number of skills to return (default: 20)

**Response:**
```json
{
  "skills": [
    {
      "skill": "JavaScript",
      "demand": 850,
      "growth": 8,
      "avgSalary": 55000,
      "topCompanies": ["TechMX", "Innovatech"]
    }
  ],
  "totalSkills": 487
}
```

### Get Market Trends
```http
GET /api/analytics/trends
```

**Query Params:**
- `period` - Time period (6months, 1year, etc.)

**Response:**
```json
{
  "period": "6months",
  "data": [
    {
      "month": "Ene",
      "jobProfiles": 120,
      "applications": 450,
      "matches": 85,
      "companies": 28
    }
  ],
  "insights": [...]
}
```

### Get Regional Analytics
```http
GET /api/analytics/regions
```

**Response:**
```json
{
  "regions": [
    {
      "region": "CDMX",
      "activeCompanies": 18,
      "students": 380,
      "jobProfiles": 68,
      "avgMatchScore": 85,
      "avgSalary": 58000
    }
  ],
  "totalRegions": 5
}
```

### Get Career Analytics
```http
GET /api/analytics/careers
```

**Response:**
```json
{
  "careers": [
    {
      "career": "Ingeniería en Software",
      "growth": 45,
      "employability": 92,
      "avgSalary": 65000,
      "activeProfiles": 68,
      "avgMatchScore": 85
    }
  ],
  "totalCareers": 6
}
```

### Get Market Insights (AI-Powered)
```http
GET /api/analytics/insights
```

**Response:**
```json
{
  "summary": {
    "overallGrowth": 18,
    "topTrend": "IA Generativa",
    "hottestSkill": "TypeScript",
    "fastestGrowingIndustry": "Tecnología"
  },
  "predictions": [
    {
      "category": "Skills",
      "prediction": "TypeScript demanda crecerá 25%",
      "confidence": 92,
      "impact": "alto"
    }
  ],
  "recommendations": [...],
  "emergingTrends": [
    {
      "trend": "IA Generativa",
      "growth": 185,
      "description": "..."
    }
  ],
  "generatedAt": "2026-05-18T..."
}
```

---

## 🎓 Universities Endpoints

### Get University
```http
GET /api/universities/:id
```

### Get University Analytics
```http
GET /api/universities/:id/analytics
```

### Get Career Comparison
```http
GET /api/universities/:id/careers
```

---

## 👨‍🎓 Students Endpoints

### Get Student
```http
GET /api/students/:id
```

### Update Student
```http
PUT /api/students/:id
```

### Get Learning Path
```http
GET /api/students/:id/learning-path
```

---

## 🔧 Skills Endpoints

### Get All Skills
```http
GET /api/skills
```

### Create Skill
```http
POST /api/skills
```

---

## ⚡ Rate Limiting

- **Auth endpoints**: 20 requests per 15 minutes
- **API endpoints**: 200 requests per 15 minutes

## 📝 Error Responses

All errors follow this format:

```json
{
  "error": "Error message description"
}
```

### HTTP Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `429` - Too Many Requests
- `500` - Internal Server Error

---

## 🧪 Testing with cURL

### Register and Login
```bash
# Register
curl -X POST http://localhost:4000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"pass123","name":"Test User","role":"ESTUDIANTE"}'

# Login
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"pass123"}'
```

### Get Global Analytics
```bash
curl http://localhost:4000/api/analytics/global \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Get Matches for Student
```bash
curl http://localhost:4000/api/matching/student/uuid-here?minScore=80 \
  -H "Authorization: Bearer YOUR_TOKEN"
```

---

## 📚 Additional Resources

- **Frontend Documentation**: See `frontend/README.md`
- **Development Guide**: See `DEVELOPMENT.md`
- **Database Schema**: See `prisma/schema.prisma`

---

**Last Updated**: May 18, 2026  
**API Version**: 1.0.0
