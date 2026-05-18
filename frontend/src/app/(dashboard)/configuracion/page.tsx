'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Save, User, Mail, Lock, Bell, Eye, Shield } from 'lucide-react';

export default function ConfiguracionPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'perfil' | 'seguridad' | 'notificaciones'>('perfil');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    // Simular guardado
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSaving(false);
    alert('Configuración guardada exitosamente');
  };

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900">Configuración</h1>
        <p className="text-slate-600 mt-1">Administra tus preferencias y configuración de la cuenta</p>
      </div>

      <div className="flex gap-6">
        {/* Tabs laterales */}
        <div className="w-64 space-y-1">
          <button
            onClick={() => setActiveTab('perfil')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
              activeTab === 'perfil'
                ? 'bg-[#06B6D4] text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <User className="w-5 h-5" />
            <span className="font-medium">Perfil</span>
          </button>

          <button
            onClick={() => setActiveTab('seguridad')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
              activeTab === 'seguridad'
                ? 'bg-[#06B6D4] text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Shield className="w-5 h-5" />
            <span className="font-medium">Seguridad</span>
          </button>

          <button
            onClick={() => setActiveTab('notificaciones')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
              activeTab === 'notificaciones'
                ? 'bg-[#06B6D4] text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Bell className="w-5 h-5" />
            <span className="font-medium">Notificaciones</span>
          </button>
        </div>

        {/* Contenido */}
        <div className="flex-1">
          <Card className="p-6">
            {/* Tab Perfil */}
            {activeTab === 'perfil' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">Información del Perfil</h2>
                  <p className="text-slate-600 text-sm mb-6">
                    Actualiza tu información personal y datos de contacto
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre completo</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        id="nombre"
                        defaultValue={user?.name}
                        className="pl-10"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        id="email"
                        type="email"
                        defaultValue={user?.email}
                        className="pl-10"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input
                      id="telefono"
                      type="tel"
                      placeholder="+52 (555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ubicacion">Ubicación</Label>
                    <Input
                      id="ubicacion"
                      placeholder="Ciudad, País"
                      defaultValue="Ciudad de México, México"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Biografía</Label>
                  <textarea
                    id="bio"
                    rows={4}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent"
                    placeholder="Cuéntanos sobre ti..."
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <Button variant="outline">
                    Cancelar
                  </Button>
                  <Button onClick={handleSave} disabled={isSaving}>
                    <Save className="w-4 h-4 mr-2" />
                    {isSaving ? 'Guardando...' : 'Guardar cambios'}
                  </Button>
                </div>
              </div>
            )}

            {/* Tab Seguridad */}
            {activeTab === 'seguridad' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">Seguridad y Contraseña</h2>
                  <p className="text-slate-600 text-sm mb-6">
                    Mantén tu cuenta segura actualizando tu contraseña regularmente
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Contraseña actual</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        id="current-password"
                        type="password"
                        className="pl-10"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="new-password">Nueva contraseña</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        id="new-password"
                        type="password"
                        className="pl-10"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirmar nueva contraseña</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        id="confirm-password"
                        type="password"
                        className="pl-10"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-medium text-slate-900 mb-2">Requisitos de contraseña:</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Mínimo 8 caracteres</li>
                    <li>• Al menos una letra mayúscula</li>
                    <li>• Al menos un número</li>
                    <li>• Al menos un carácter especial</li>
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-medium text-slate-900 mb-3">Autenticación de dos factores</h3>
                  <div className="flex items-center justify-between bg-slate-50 p-4 rounded-lg">
                    <div>
                      <p className="font-medium text-slate-900">2FA deshabilitado</p>
                      <p className="text-sm text-slate-600">Aumenta la seguridad de tu cuenta</p>
                    </div>
                    <Button variant="outline">
                      Habilitar
                    </Button>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <Button variant="outline">
                    Cancelar
                  </Button>
                  <Button onClick={handleSave} disabled={isSaving}>
                    <Save className="w-4 h-4 mr-2" />
                    {isSaving ? 'Guardando...' : 'Actualizar contraseña'}
                  </Button>
                </div>
              </div>
            )}

            {/* Tab Notificaciones */}
            {activeTab === 'notificaciones' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">Preferencias de Notificaciones</h2>
                  <p className="text-slate-600 text-sm mb-6">
                    Elige cómo y cuándo quieres recibir notificaciones
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-slate-900">Notificaciones por email</p>
                      <p className="text-sm text-slate-600">Recibe actualizaciones importantes por correo</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5 text-[#06B6D4]" />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-slate-900">Nuevas oportunidades</p>
                      <p className="text-sm text-slate-600">Te avisamos cuando hay nuevos matches</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5 text-[#06B6D4]" />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-slate-900">Mensajes de empresas</p>
                      <p className="text-sm text-slate-600">Recibe mensajes directos de reclutadores</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5 text-[#06B6D4]" />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-slate-900">Recordatorios semanales</p>
                      <p className="text-sm text-slate-600">Resumen semanal de actividad y recomendaciones</p>
                    </div>
                    <input type="checkbox" className="w-5 h-5 text-[#06B6D4]" />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-slate-900">Noticias y actualizaciones</p>
                      <p className="text-sm text-slate-600">Entérate de nuevas funciones y novedades</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5 text-[#06B6D4]" />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-slate-900">Promociones</p>
                      <p className="text-sm text-slate-600">Ofertas especiales y descuentos</p>
                    </div>
                    <input type="checkbox" className="w-5 h-5 text-[#06B6D4]" />
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <Button variant="outline">
                    Cancelar
                  </Button>
                  <Button onClick={handleSave} disabled={isSaving}>
                    <Save className="w-4 h-4 mr-2" />
                    {isSaving ? 'Guardando...' : 'Guardar preferencias'}
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
