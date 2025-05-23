import { useForm } from 'react-hook-form';
import * as S from './styles';
import { Button } from '../../Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import {
  CreateThreatNeutralization,
  MissionService,
} from '../../../services/http/missions/MissionService';
import { Textarea } from '../../Textarea';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  id_mission: string;
  id_threat: string;
  id_team?: string;
};

type AddUpdateThreatNeutralizationModal = {
  method: string;
  result: string;
};

export function AddUpdateThreatNeutralizationModal({
  isOpen,
  onClose,
  id_mission,
  id_team,
  id_threat,
}: ModalProps) {
  const { register, handleSubmit } =
    useForm<AddUpdateThreatNeutralizationModal>();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (data: AddUpdateThreatNeutralizationModal) => {
      const reformattedData = {
        id_mission,
        id_threat,
        id_team,
        method: data.method,
        result: data.result,
      };

      await MissionService.createThreatNeutralization(
        reformattedData as CreateThreatNeutralization,
      );
    },
    onSuccess: () => {
      toast.success('Estratégia de neutralização adicionada com sucesso!');
      queryClient.invalidateQueries({ queryKey: ['missionThreats'] });
      queryClient.invalidateQueries({
        queryKey: ['missionNeutralizedThreats'],
      });
      onClose();
    },
    onError: () => {
      toast.success(
        'Ocorreu um erro ao adicionar a estratégia de neutralização!',
      );
      onClose();
    },
  });

  function handleCreateThreatMission(data: AddUpdateThreatNeutralizationModal) {
    mutate(data);
  }

  if (!isOpen) return;

  return (
    <S.Overlay>
      <S.Content>
        <h2>Adicionar estratégia de neutralização</h2>

        <S.ThreatMissionForm onSubmit={handleSubmit(handleCreateThreatMission)}>
          <Textarea label="Método de neutralização" {...register('method')} />
          <Textarea label="Resultado" {...register('result')} />

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
