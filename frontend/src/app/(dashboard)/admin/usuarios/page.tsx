'use client';

import { useState, useEffect } from 'react';
import { Search, Filter, UserPlus, Edit, Trash2, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { DataTable, Column } from '@/components/shared/DataTable';
import { Badge } from '@/components/ui/badge';
import { Modal } from '@/components/shared/Modal';
import type { User, Role } from '@/types';

interface UserWithDetails extends User {
  estado: 'activo' | 'inactivo' | 'suspendido';
  ultimoAcceso: string;
}

const mockUsers: UserWithDetails[] = [
  {
    id: '1',
    name: 'Carlos Méndez',
    email: 'carlos@techmx.com',
    role: 'EMPRESA',
    estado: 'activo',
    ultimoAcceso: '2026-05-18',
    createdAt: '2026-01-15',
  },
  {
    id: '2',
    name: 'Ana García',
    email: 'ana@estudiante.com',
    role: 'ESTUDIANTE',
    estado: 'activo',
    ultimoAcceso: '2026-05-17',
    createdAt: '2026-02-20',
  },
  {
    id: '3',
    name: 'María López',
    email: 'maria@tec.mx',
    role: 'UNIVERSIDAD',
    estado: 'activo',
    ultimoAcceso: '2026-05-16',
    createdAt: '2026-01-10',
  },
  {
    id: '4',
    name: 'Admin Bridge2Work',
    email: 'admin@bridge2work.com',
    role: 'ADMIN',
    estado: 'activo',
    ultimoAcceso: '2026-05-18',
    createdAt: '2025-12-01',
  },
];

export default function UsuariosPage() {
  const [users, setUsers] = useState<UserWithDetails[]>(mockUsers);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('todos');
  const [selectedUser, setSelectedUser] = useState<UserWithDetails | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleEdit = (user: UserWithDetails) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const handleDelete = async (userId: string) => {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      console.log('Deleting user:', userId);
      setUsers(users.filter((u) => u.id !== userId));
    }
  };

  const handleSuspend = async (userId: string) => {
    if (confirm('¿Suspender este usuario?')) {
      console.log('Suspending user:', userId);
      setUsers(
        users.map((u) =>
          u.id === userId ? { ...u, estado: 'suspendido' as const } : u
        )
      );
    }
  };

  const getRoleBadgeColor = (role: Role) => {
    switch (role) {
      case 'ADMIN':
        return 'bg-[#EF4444] text-white';
      case 'EMPRESA':
        return 'bg-[#06B6D4] text-white';
      case 'UNIVERSIDAD':
        return 'bg-[#8B5CF6] text-white';
      case 'ESTUDIANTE':
        return 'bg-[#10B981] text-white';
      default:
        return 'bg-[#64748B] text-white';
    }
  };

  const getEstadoBadgeColor = (estado: string) => {
    switch (estado) {
      case 'activo':
        return 'bg-[#10B981] text-white';
      case 'inactivo':
        return 'bg-[#64748B] text-white';
      case 'suspendido':
        return 'bg-[#EF4444] text-white';
      default:
        return 'bg-[#64748B] text-white';
    }
  };

  const columns: Column<UserWithDetails>[] = [
    {
      key: 'name',
      label: 'Usuario',
      sortable: true,
      render: (row) => (
        <div>
          <div className="font-medium text-[#0F172A]">{row.name}</div>
          <div className="text-xs text-[#64748B]">{row.email}</div>
        </div>
      ),
    },
    {
      key: 'role',
      label: 'Rol',
      sortable: true,
      render: (row) => (
        <Badge className={getRoleBadgeColor(row.role)}>{row.role}</Badge>
      ),
    },
    {
      key: 'estado',
      label: 'Estado',
      sortable: true,
      render: (row) => (
        <Badge className={getEstadoBadgeColor(row.estado)}>
          {row.estado.charAt(0).toUpperCase() + row.estado.slice(1)}
        </Badge>
      ),
    },
    {
      key: 'ultimoAcceso',
      label: 'Último acceso',
      sortable: true,
      render: (row) => new Date(row.ultimoAcceso).toLocaleDateString('es-MX'),
    },
    {
      key: 'createdAt',
      label: 'Registrado',
      sortable: true,
      render: (row) => new Date(row.createdAt).toLocaleDateString('es-MX'),
    },
    {
      key: 'actions',
      label: 'Acciones',
      render: (row) => (
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleEdit(row);
            }}
            className="text-[#06B6D4] hover:text-[#0891B2]"
          >
            <Edit className="w-4 h-4" />
          </button>
          {row.estado !== 'suspendido' && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleSuspend(row.id);
              }}
              className="text-[#F59E0B] hover:text-[#D97706]"
            >
              <Shield className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(row.id);
            }}
            className="text-[#EF4444] hover:text-[#DC2626]"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'todos' || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0F172A]">Gestión de Usuarios</h1>
          <p className="text-[#64748B]">Administra usuarios, roles y permisos</p>
        </div>
        <Button className="gap-2">
          <UserPlus className="w-4 h-4" /> Nuevo Usuario
        </Button>
      </div>

      <div className="bg-white rounded-lg border border-[#E2E8F0] p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
              <Input
                placeholder="Buscar por nombre o email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
            <option value="todos">Todos los roles</option>
            <option value="ADMIN">Admin</option>
            <option value="EMPRESA">Empresa</option>
            <option value="UNIVERSIDAD">Universidad</option>
            <option value="ESTUDIANTE">Estudiante</option>
          </Select>
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" /> Más Filtros
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-[#E2E8F0] p-4">
          <div className="text-2xl font-bold text-[#0F172A]">{users.length}</div>
          <div className="text-sm text-[#64748B]">Total Usuarios</div>
        </div>
        <div className="bg-white rounded-lg border border-[#E2E8F0] p-4">
          <div className="text-2xl font-bold text-[#10B981]">
            {users.filter((u) => u.estado === 'activo').length}
          </div>
          <div className="text-sm text-[#64748B]">Activos</div>
        </div>
        <div className="bg-white rounded-lg border border-[#E2E8F0] p-4">
          <div className="text-2xl font-bold text-[#EF4444]">
            {users.filter((u) => u.estado === 'suspendido').length}
          </div>
          <div className="text-sm text-[#64748B]">Suspendidos</div>
        </div>
        <div className="bg-white rounded-lg border border-[#E2E8F0] p-4">
          <div className="text-2xl font-bold text-[#F59E0B]">
            {users.filter((u) => u.role === 'ADMIN').length}
          </div>
          <div className="text-sm text-[#64748B]">Administradores</div>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={filteredUsers}
        emptyMessage="No se encontraron usuarios"
      />

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Editar Usuario"
        size="md"
        footer={
          <>
            <Button variant="outline" onClick={() => setModalOpen(false)}>
              Cancelar
            </Button>
            <Button>Guardar Cambios</Button>
          </>
        }
      >
        {selectedUser && (
          <div className="space-y-4">
            <Input label="Nombre" value={selectedUser.name} />
            <Input label="Email" type="email" value={selectedUser.email} />
            <Select label="Rol" value={selectedUser.role}>
              <option value="ADMIN">Admin</option>
              <option value="EMPRESA">Empresa</option>
              <option value="UNIVERSIDAD">Universidad</option>
              <option value="ESTUDIANTE">Estudiante</option>
            </Select>
            <Select label="Estado" value={selectedUser.estado}>
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
              <option value="suspendido">Suspendido</option>
            </Select>
          </div>
        )}
      </Modal>
    </div>
  );
}
