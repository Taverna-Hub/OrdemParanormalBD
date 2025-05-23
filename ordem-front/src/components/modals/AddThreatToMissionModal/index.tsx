import { useForm } from 'react-hook-form';
import * as S from './styles';
import { Select } from '../../Select';
import { Button } from '../../Button';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { MissionService } from '../../../services/http/missions/MissionService';
import {
  GetOrganizationProps,
  GetThreatProps,
  ThreatService,
} from '../../../services/http/threats/ThreatService';
import { useMemo } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  id_mission: string;
};

type Options = {
  label: string;
  value: string;
};

type AddThreatToMissionModalProps = {
  threats: Options;
};

export function AddThreatToMissionModal({
  isOpen,
  onClose,
  id_mission,
}: ModalProps) {
  const { control, handleSubmit } = useForm<AddThreatToMissionModalProps>();

  const queryClient = useQueryClient();

  const { data: paranormalEntities } = useQuery<GetThreatProps[]>({
    queryKey: ['paranormalEntity'],
    queryFn: () => ThreatService.findAllParanormalEntity(),
  });

  const { data: organizations } = useQuery<GetOrganizationProps[]>({
    queryKey: ['organizations'],
    queryFn: () => ThreatService.findAllOrganization(),
  });

  const threatsOptions = useMemo(() => {
    const combined = [...(paranormalEntities || []), ...(organizations || [])];

    return combined.map((threat) => ({
      label: Array.isArray(threat.names)
        ? `${threat.names.join(', ')} - ${
            threat.members ? 'Organização' : 'Entidade paranormal'
          }`
        : threat.names || 'Sem nome',
      value: threat.id_threat,
    }));
  }, [paranormalEntities, organizations]);

  const { mutate } = useMutation({
    mutationFn: async (data: AddThreatToMissionModalProps) => {
      const reformattedData = {
        id_mission,
        id_threat: data.threats.value,
      };

      await MissionService.createThreatMission(reformattedData);
    },
    onSuccess: () => {
      toast.success('Ameaça adicionada com sucesso!');
      queryClient.invalidateQueries({ queryKey: ['missionThreats'] });
      queryClient.invalidateQueries({
        queryKey: ['missionNeutralizedThreats'],
      });
      onClose();
    },
    onError: () => {
      toast.success('Ocorreu um erro ao adicionar a ameaça!');
      onClose();
    },
  });

  function handleCreateThreatMission(data: AddThreatToMissionModalProps) {
    mutate(data);
  }

  if (!isOpen) return;

  return (
    <S.Overlay>
      <S.Content>
        <h2>Adicionar ameaça na missão</h2>

        <S.ThreatMissionForm onSubmit={handleSubmit(handleCreateThreatMission)}>
          <Select
            control={control}
            options={threatsOptions}
            label="Ameaças"
            name="threats"
          />
          <S.Actions>
            <Button variant="secondary" onClick={onClose}>
              Cancelar
            </Button>
            <Button>Adicionar</Button>
          </S.Actions>
        </S.ThreatMissionForm>
      </S.Content>
    </S.Overlay>
  );
}
