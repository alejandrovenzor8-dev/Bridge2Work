'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { PerfilLaboral } from '@/types';
import { MapPin, Clock, DollarSign } from 'lucide-react';
import { formatCurrency } from '@/utils';

interface JobProfileCardProps {
  profile: PerfilLaboral;
}

export function JobProfileCard({ profile }: JobProfileCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-base">{profile.puesto}</CardTitle>
          <Badge variant="secondary">{profile.modalidad}</Badge>
        </div>
        {profile.descripcion && (
          <p className="text-sm text-[#64748B] line-clamp-2">{profile.descripcion}</p>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-1">
          {profile.habilidadesTecnicas.slice(0, 4).map((s) => (
            <Badge key={s} variant="outline">{s}</Badge>
          ))}
          {profile.habilidadesTecnicas.length > 4 && (
            <Badge variant="outline">+{profile.habilidadesTecnicas.length - 4}</Badge>
          )}
        </div>

        <div className="flex items-center gap-4 text-xs text-[#64748B]">
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{profile.experienciaAnios} años exp.</span>
          {profile.salarioMin && profile.salarioMax && (
            <span className="flex items-center gap-1">
              <DollarSign className="w-3 h-3" />
              {formatCurrency(profile.salarioMin)} - {formatCurrency(profile.salarioMax)}
            </span>
          )}
        </div>

        <div>
          <p className="text-xs text-[#64748B] mb-1">Match potencial</p>
          <Progress value={75} />
        </div>
      </CardContent>
    </Card>
  );
}
