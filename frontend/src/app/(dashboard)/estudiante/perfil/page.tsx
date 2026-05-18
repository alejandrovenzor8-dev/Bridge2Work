'use client';

import { useState } from 'react';
import { User, Mail, MapPin, GraduationCap, Briefcase, Code, Heart, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PerfilEstudiantePage() {
  const [saving, setSaving] = useState(false);
  const [perfil, setPerfil] = useState({
    nombre: 'Juan Pérez',
    email: 'juan@example.com',
    ubicacion: 'Ciudad de México',
    nivelEducativo: 'Licenciatura',
    carreraInteres: 'Ingeniería en Software',
    objetivoProfesional: 'Convertirme en desarrollador full stack senior y liderar proyectos innovadores',
    intereses: ['Desarrollo Web', 'Inteligencia Artificial', 'Cloud Computing'],
    habilidades: ['JavaScript', 'React', 'Node.js', 'Python', 'Git'],
    experiencia: 'Prácticas profesionales en startup tecnológica (6 meses)',
  });

  const [nuevoInteres, setNuevoInteres] = useState('');
  const [nuevaHabilidad, setNuevaHabilidad] = useState('');

  const handleSave = async () => {
    setSaving(true);
    // Simulate save
    setTimeout(() => {
      alert('¡Perfil actualizado exitosamente!');
      setSaving(false);
    }, 1000);
  };

  const agregarInteres = () => {
    if (nuevoInteres.trim()) {
      setPerfil({
        ...perfil,
        intereses: [...perfil.intereses, nuevoInteres.trim()],
      });
      setNuevoInteres('');
    }
  };

  const eliminarInteres = (interes: string) => {
    setPerfil({
      ...perfil,
      intereses: perfil.intereses.filter((i) => i !== interes),
    });
  };

  const agregarHabilidad = () => {
    if (nuevaHabilidad.trim()) {
      setPerfil({
        ...perfil,
        habilidades: [...perfil.habilidades, nuevaHabilidad.trim()],
      });
      setNuevaHabilidad('');
    }
  };

  const eliminarHabilidad = (habilidad: string) => {
    setPerfil({
      ...perfil,
      habilidades: perfil.habilidades.filter((h) => h !== habilidad),
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0F172A]">Mi Perfil Profesional</h1>
          <p className="text-[#64748B]">
            Mantén tu perfil actualizado para mejores recomendaciones
          </p>
        </div>
        <Button onClick={handleSave} disabled={saving} className="gap-2">
          <Save className="w-4 h-4" />
          {saving ? 'Guardando...' : 'Guardar Cambios'}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardContent className="pt-6">
            <div className="text-center mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#8B5CF6] mx-auto flex items-center justify-center text-white text-3xl font-bold mb-4">
                {perfil.nombre.charAt(0)}
              </div>
              <h3 className="text-lg font-semibold text-[#0F172A]">{perfil.nombre}</h3>
              <p className="text-sm text-[#64748B]">{perfil.carreraInteres}</p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-[#64748B]">
                <Mail className="w-4 h-4" />
                <span>{perfil.email}</span>
              </div>
              <div className="flex items-center gap-3 text-[#64748B]">
                <MapPin className="w-4 h-4" />
                <span>{perfil.ubicacion}</span>
              </div>
              <div className="flex items-center gap-3 text-[#64748B]">
                <GraduationCap className="w-4 h-4" />
                <span>{perfil.nivelEducativo}</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
              <h4 className="text-sm font-semibold text-[#0F172A] mb-3">Completitud del Perfil</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-[#64748B]">Completado</span>
                  <span className="font-medium text-[#0F172A]">85%</span>
                </div>
                <div className="h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6]" style={{ width: '85%' }} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Información Personal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Nombre Completo"
                  value={perfil.nombre}
                  onChange={(e) => setPerfil({ ...perfil, nombre: e.target.value })}
                />
                <Input
                  label="Correo Electrónico"
                  type="email"
                  value={perfil.email}
                  onChange={(e) => setPerfil({ ...perfil, email: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Ubicación"
                  value={perfil.ubicacion}
                  onChange={(e) => setPerfil({ ...perfil, ubicacion: e.target.value })}
                />
                <Select
                  label="Nivel Educativo"
                  value={perfil.nivelEducativo}
                  onChange={(e) => setPerfil({ ...perfil, nivelEducativo: e.target.value })}
                >
                  <option value="Preparatoria">Preparatoria</option>
                  <option value="Licenciatura">Licenciatura</option>
                  <option value="Maestría">Maestría</option>
                  <option value="Doctorado">Doctorado</option>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Información Profesional
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                label="Carrera de Interés"
                value={perfil.carreraInteres}
                onChange={(e) => setPerfil({ ...perfil, carreraInteres: e.target.value })}
                placeholder="Ej: Ingeniería en Software"
              />
              <Textarea
                label="Objetivo Profesional"
                value={perfil.objetivoProfesional}
                onChange={(e) => setPerfil({ ...perfil, objetivoProfesional: e.target.value })}
                placeholder="Describe tus metas profesionales..."
              />
              <Textarea
                label="Experiencia"
                value={perfil.experiencia}
                onChange={(e) => setPerfil({ ...perfil, experiencia: e.target.value })}
                placeholder="Describe tu experiencia laboral o prácticas..."
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Intereses
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Agregar interés..."
                  value={nuevoInteres}
                  onChange={(e) => setNuevoInteres(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && agregarInteres()}
                />
                <Button onClick={agregarInteres}>Agregar</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {perfil.intereses.map((interes) => (
                  <Badge
                    key={interes}
                    className="bg-[#06B6D4]/10 text-[#06B6D4] hover:bg-[#06B6D4]/20 cursor-pointer"
                    onClick={() => eliminarInteres(interes)}
                  >
                    {interes} ×
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                Habilidades
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Agregar habilidad..."
                  value={nuevaHabilidad}
                  onChange={(e) => setNuevaHabilidad(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && agregarHabilidad()}
                />
                <Button onClick={agregarHabilidad}>Agregar</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {perfil.habilidades.map((habilidad) => (
                  <Badge
                    key={habilidad}
                    className="bg-[#8B5CF6]/10 text-[#8B5CF6] hover:bg-[#8B5CF6]/20 cursor-pointer"
                    onClick={() => eliminarHabilidad(habilidad)}
                  >
                    {habilidad} ×
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
