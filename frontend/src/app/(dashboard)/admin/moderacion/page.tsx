'use client';

import { useState } from 'react';
import { Shield, CheckCircle, XCircle, Clock, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DataTable, Column } from '@/components/shared/DataTable';
import { Modal } from '@/components/shared/Modal';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface PendingItem {
  id: string;
  tipo: 'empresa' | 'universidad' | 'perfil' | 'contenido';
  titulo: string;
  descripcion: string;
  autor: string;
  fecha: string;
  estado: 'pendiente' | 'aprobado' | 'rechazado';
}

const pendingItems: PendingItem[] = [
  {
    id: '1',
    tipo: 'empresa',
    titulo: 'TechStart Solutions',
    descripcion: 'Empresa de desarrollo de software con 50 empleados',
    autor: 'Carlos Méndez',
    fecha: '2026-05-18',
    estado: 'pendiente',
  },
  {
    id: '2',
    tipo: 'perfil',
    titulo: 'Desarrollador React Senior',
    descripcion: 'Perfil laboral para desarrollador con 5+ años de experiencia',
    autor: 'TechMX Corp',
    fecha: '2026-05-17',
    estado: 'pendiente',
  },
  {
    id: '3',
    tipo: 'universidad',
    titulo: 'Universidad Tecnológica del Norte',
    descripcion: 'Institución educativa con programas de ingeniería',
    autor: 'Dr. Jorge Ramírez',
    fecha: '2026-05-16',
    estado: 'pendiente',
  },
];

export default function ModeracionPage() {
  const [items, setItems] = useState<PendingItem[]>(pendingItems);
  const [selectedItem, setSelectedItem] = useState<PendingItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [reviewComment, setReviewComment] = useState('');

  const handleReview = (item: PendingItem) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleApprove = async () => {
    if (selectedItem) {
      setItems(
        items.map((item) =>
          item.id === selectedItem.id ? { ...item, estado: 'aprobado' as const } : item
        )
      );
      setModalOpen(false);
      setReviewComment('');
    }
  };

  const handleReject = async () => {
    if (selectedItem && reviewComment.trim()) {
      setItems(
        items.map((item) =>
          item.id === selectedItem.id ? { ...item, estado: 'rechazado' as const } : item
        )
      );
      setModalOpen(false);
      setReviewComment('');
    } else {
      alert('Por favor proporciona una razón para el rechazo');
    }
  };

  const getTipoBadgeColor = (tipo: string) => {
    switch (tipo) {
      case 'empresa':
        return 'bg-[#06B6D4] text-white';
      case 'universidad':
        return 'bg-[#8B5CF6] text-white';
      case 'perfil':
        return 'bg-[#10B981] text-white';
      case 'contenido':
        return 'bg-[#F59E0B] text-white';
      default:
        return 'bg-[#64748B] text-white';
    }
  };

  const columns: Column<PendingItem>[] = [
    {
      key: 'tipo',
      label: 'Tipo',
      sortable: true,
      render: (row) => (
        <Badge className={getTipoBadgeColor(row.tipo)}>
          {row.tipo.charAt(0).toUpperCase() + row.tipo.slice(1)}
        </Badge>
      ),
    },
    {
      key: 'titulo',
      label: 'Título',
      sortable: true,
      render: (row) => (
        <div>
          <div className="font-medium text-[#0F172A]">{row.titulo}</div>
          <div className="text-xs text-[#64748B]">{row.descripcion}</div>
        </div>
      ),
    },
    {
      key: 'autor',
      label: 'Autor',
      sortable: true,
    },
    {
      key: 'fecha',
      label: 'Fecha',
      sortable: true,
      render: (row) => new Date(row.fecha).toLocaleDateString('es-MX'),
    },
    {
      key: 'estado',
      label: 'Estado',
      sortable: true,
      render: (row) => (
        <Badge
          className={
            row.estado === 'aprobado'
              ? 'bg-[#10B981] text-white'
              : row.estado === 'rechazado'
              ? 'bg-[#EF4444] text-white'
              : 'bg-[#F59E0B] text-white'
          }
        >
          {row.estado === 'aprobado'
            ? 'Aprobado'
            : row.estado === 'rechazado'
            ? 'Rechazado'
            : 'Pendiente'}
        </Badge>
      ),
    },
    {
      key: 'actions',
      label: 'Acciones',
      render: (row) => (
        <Button
          size="sm"
          variant="outline"
          onClick={(e) => {
            e.stopPropagation();
            handleReview(row);
          }}
          className="gap-2"
        >
          <Eye className="w-3 h-3" /> Revisar
        </Button>
      ),
    },
  ];

  const pendientes = items.filter((i) => i.estado === 'pendiente');
  const aprobados = items.filter((i) => i.estado === 'aprobado');
  const rechazados = items.filter((i) => i.estado === 'rechazado');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#0F172A]">Moderación de Contenido</h1>
        <p className="text-[#64748B]">Revisa y aprueba empresas, universidades y perfiles</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-[#E2E8F0] p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-[#F59E0B]" />
            </div>
            <div>
              <div className="text-2xl font-bold text-[#0F172A]">{pendientes.length}</div>
              <div className="text-sm text-[#64748B]">Pendientes</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[#E2E8F0] p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-[#10B981]" />
            </div>
            <div>
              <div className="text-2xl font-bold text-[#0F172A]">{aprobados.length}</div>
              <div className="text-sm text-[#64748B]">Aprobados</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[#E2E8F0] p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-[#EF4444]/10 flex items-center justify-center">
              <XCircle className="w-5 h-5 text-[#EF4444]" />
            </div>
            <div>
              <div className="text-2xl font-bold text-[#0F172A]">{rechazados.length}</div>
              <div className="text-sm text-[#64748B]">Rechazados</div>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="pendientes" className="space-y-6">
        <TabsList>
          <TabsTrigger value="pendientes">
            Pendientes ({pendientes.length})
          </TabsTrigger>
          <TabsTrigger value="aprobados">Aprobados ({aprobados.length})</TabsTrigger>
          <TabsTrigger value="rechazados">Rechazados ({rechazados.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="pendientes">
          <DataTable
            columns={columns}
            data={pendientes}
            emptyMessage="No hay elementos pendientes de revisión"
          />
        </TabsContent>

        <TabsContent value="aprobados">
          <DataTable
            columns={columns}
            data={aprobados}
            emptyMessage="No hay elementos aprobados"
          />
        </TabsContent>

        <TabsContent value="rechazados">
          <DataTable
            columns={columns}
            data={rechazados}
            emptyMessage="No hay elementos rechazados"
          />
        </TabsContent>
      </Tabs>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Revisar Contenido"
        size="lg"
      >
        {selectedItem && (
          <div className="space-y-6">
            <div>
              <Badge className={getTipoBadgeColor(selectedItem.tipo)}>
                {selectedItem.tipo.charAt(0).toUpperCase() + selectedItem.tipo.slice(1)}
              </Badge>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                {selectedItem.titulo}
              </h3>
              <p className="text-sm text-[#64748B] mb-4">{selectedItem.descripcion}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-[#64748B]">Autor:</span>
                  <span className="ml-2 text-[#0F172A] font-medium">{selectedItem.autor}</span>
                </div>
                <div>
                  <span className="text-[#64748B]">Fecha:</span>
                  <span className="ml-2 text-[#0F172A] font-medium">
                    {new Date(selectedItem.fecha).toLocaleDateString('es-MX')}
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-[#E2E8F0] pt-4">
              <Textarea
                label="Comentarios de revisión (opcional para aprobación, requerido para rechazo)"
                placeholder="Proporciona comentarios sobre esta revisión..."
                value={reviewComment}
                onChange={(e) => setReviewComment(e.target.value)}
                rows={4}
              />
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-[#E2E8F0]">
              <Button variant="outline" onClick={() => setModalOpen(false)}>
                Cancelar
              </Button>
              <Button
                variant="outline"
                onClick={handleReject}
                className="text-[#EF4444] border-[#EF4444] hover:bg-[#EF4444] hover:text-white"
              >
                <XCircle className="w-4 h-4 mr-2" />
                Rechazar
              </Button>
              <Button onClick={handleApprove} className="gap-2">
                <CheckCircle className="w-4 h-4" />
                Aprobar
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
