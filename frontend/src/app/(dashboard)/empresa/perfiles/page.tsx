'use client';

import { useState, useEffect } from 'react';
import { Plus, Briefcase, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DataTable, Column } from '@/components/shared/DataTable';
import { EmptyState } from '@/components/shared/EmptyState';
import { SkeletonTable } from '@/components/shared/SkeletonLoader';
import { Modal } from '@/components/shared/Modal';
import { Badge } from '@/components/ui/badge';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import type { PerfilLaboral } from '@/types';
import { companyService } from '@/services/companyService';

export default function PerfilesLaboralesPage() {
  const [profiles, setProfiles] = useState<PerfilLaboral[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProfile, setEditingProfile] = useState<PerfilLaboral | null>(null);
  const [formData, setFormData] = useState<Partial<PerfilLaboral>>({
    puesto: '',
    descripcion: '',
    habilidadesTecnicas: [],
    softSkills: [],
    experienciaAnios: 0,
    herramientas: [],
    modalidad: 'Híbrido',
  });

  useEffect(() => {
    loadProfiles();
  }, []);

  const loadProfiles = async () => {
    setLoading(true);
    try {
      // TODO: Replace with actual company ID from auth context
      const data = await companyService.getJobProfiles('1');
      setProfiles(data);
    } catch (error) {
      console.error('Error loading profiles:', error);
      // Mock data for development
      setProfiles([
        {
          id: '1',
          puesto: 'Desarrollador Full Stack',
          descripcion: 'Buscamos un desarrollador con experiencia en React y Node.js',
          habilidadesTecnicas: ['React', 'Node.js', 'TypeScript'],
          softSkills: ['Trabajo en equipo', 'Comunicación'],
          experienciaAnios: 3,
          herramientas: ['Git', 'Docker'],
          salarioMin: 30000,
          salarioMax: 50000,
          modalidad: 'Híbrido',
          empresaId: '1',
          createdAt: new Date().toISOString(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setEditingProfile(null);
    setFormData({
      puesto: '',
      descripcion: '',
      habilidadesTecnicas: [],
      softSkills: [],
      experienciaAnios: 0,
      herramientas: [],
      modalidad: 'Híbrido',
    });
    setModalOpen(true);
  };

  const handleEdit = (profile: PerfilLaboral) => {
    setEditingProfile(profile);
    setFormData(profile);
    setModalOpen(true);
  };

  const handleSave = async () => {
    try {
      if (editingProfile) {
        await companyService.updateJobProfile(editingProfile.id, formData);
      } else {
        await companyService.createJobProfile({ ...formData, empresaId: '1' });
      }
      await loadProfiles();
      setModalOpen(false);
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('¿Estás seguro de eliminar este perfil laboral?')) {
      try {
        await companyService.deleteJobProfile(id);
        await loadProfiles();
      } catch (error) {
        console.error('Error deleting profile:', error);
      }
    }
  };

  const columns: Column<PerfilLaboral>[] = [
    {
      key: 'puesto',
      label: 'Puesto',
      sortable: true,
      render: (row) => (
        <div>
          <div className="font-medium text-[#0F172A]">{row.puesto}</div>
          <div className="text-xs text-[#64748B]">{row.modalidad}</div>
        </div>
      ),
    },
    {
      key: 'experienciaAnios',
      label: 'Experiencia',
      sortable: true,
      render: (row) => `${row.experienciaAnios} años`,
    },
    {
      key: 'habilidadesTecnicas',
      label: 'Habilidades',
      render: (row) => (
        <div className="flex flex-wrap gap-1">
          {row.habilidadesTecnicas.slice(0, 3).map((skill, i) => (
            <Badge key={i} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
          {row.habilidadesTecnicas.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{row.habilidadesTecnicas.length - 3}
            </Badge>
          )}
        </div>
      ),
    },
    {
      key: 'salarioMin',
      label: 'Salario',
      render: (row) =>
        row.salarioMin && row.salarioMax
          ? `$${row.salarioMin.toLocaleString()} - $${row.salarioMax.toLocaleString()}`
          : 'No especificado',
    },
    {
      key: 'createdAt',
      label: 'Creado',
      sortable: true,
      render: (row) => new Date(row.createdAt).toLocaleDateString(),
    },
  ];

  const filteredProfiles = profiles.filter((p) =>
    p.puesto.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <SkeletonTable rows={5} />;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0F172A]">
            Perfiles Laborales
          </h1>
          <p className="text-[#64748B]">
            Gestiona los puestos de trabajo de tu empresa
          </p>
        </div>
        <Button onClick={handleCreate} className="gap-2">
          <Plus className="w-4 h-4" /> Crear Perfil
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
            <Input
              placeholder="Buscar por puesto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" /> Filtros
        </Button>
      </div>

      {filteredProfiles.length === 0 && !searchTerm ? (
        <EmptyState
          icon={Briefcase}
          title="No hay perfiles laborales"
          description="Comienza creando tu primer perfil laboral para atraer talento"
          actionLabel="Crear Perfil"
          onAction={handleCreate}
        />
      ) : (
        <DataTable
          columns={columns}
          data={filteredProfiles}
          onRowClick={handleEdit}
          emptyMessage="No se encontraron perfiles con ese criterio"
        />
      )}

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingProfile ? 'Editar Perfil Laboral' : 'Crear Perfil Laboral'}
        size="lg"
        footer={
          <>
            <Button variant="outline" onClick={() => setModalOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSave}>
              {editingProfile ? 'Guardar Cambios' : 'Crear Perfil'}
            </Button>
          </>
        }
      >
        <div className="space-y-4">
          <Input
            label="Puesto"
            value={formData.puesto}
            onChange={(e) => setFormData({ ...formData, puesto: e.target.value })}
            placeholder="Ej: Desarrollador Full Stack"
          />
          
          <Textarea
            label="Descripción"
            value={formData.descripcion}
            onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
            placeholder="Describe el puesto y responsabilidades..."
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Experiencia (años)"
              type="number"
              value={formData.experienciaAnios}
              onChange={(e) =>
                setFormData({ ...formData, experienciaAnios: parseInt(e.target.value) || 0 })
              }
            />
            
            <Select
              label="Modalidad"
              value={formData.modalidad}
              onChange={(e) => setFormData({ ...formData, modalidad: e.target.value })}
            >
              <option value="Presencial">Presencial</option>
              <option value="Remoto">Remoto</option>
              <option value="Híbrido">Híbrido</option>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Salario Mínimo"
              type="number"
              value={formData.salarioMin}
              onChange={(e) =>
                setFormData({ ...formData, salarioMin: parseInt(e.target.value) || undefined })
              }
              placeholder="30000"
            />
            
            <Input
              label="Salario Máximo"
              type="number"
              value={formData.salarioMax}
              onChange={(e) =>
                setFormData({ ...formData, salarioMax: parseInt(e.target.value) || undefined })
              }
              placeholder="50000"
            />
          </div>

          <Input
            label="Habilidades Técnicas (separadas por coma)"
            value={formData.habilidadesTecnicas?.join(', ')}
            onChange={(e) =>
              setFormData({
                ...formData,
                habilidadesTecnicas: e.target.value.split(',').map((s) => s.trim()),
              })
            }
            placeholder="React, Node.js, TypeScript"
          />

          <Input
            label="Soft Skills (separadas por coma)"
            value={formData.softSkills?.join(', ')}
            onChange={(e) =>
              setFormData({
                ...formData,
                softSkills: e.target.value.split(',').map((s) => s.trim()),
              })
            }
            placeholder="Trabajo en equipo, Comunicación"
          />

          <Input
            label="Herramientas (separadas por coma)"
            value={formData.herramientas?.join(', ')}
            onChange={(e) =>
              setFormData({
                ...formData,
                herramientas: e.target.value.split(',').map((s) => s.trim()),
              })
            }
            placeholder="Git, Docker, Jira"
          />
        </div>
      </Modal>
    </div>
  );
}
