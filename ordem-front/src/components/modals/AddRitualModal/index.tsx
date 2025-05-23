import { useForm } from 'react-hook-form';
import * as S from './styles';
import { Select } from '../../Select';
import { Button } from '../../Button';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import {
  Ritual,
  RitualService,
} from '../../../services/http/rituals/RitualService';
import { AgentService } from '../../../services/http/agents/AgentService';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  id_agent: string;
};

type Option = {
  label: string;
  value: string;
};

type CreateRitualPropsModal = {
  ritual: Option;
};

export function AddRitualModal({ isOpen, onClose, id_agent }: ModalProps) {
  const { control, handleSubmit } = useForm<CreateRitualPropsModal>();

  const { data: rituals } = useQuery<Ritual[]>({
    queryKey: ['rituals'],
    queryFn: () => RitualService.findAll(),
  });

  const ritualOptions = rituals?.map((ritual) => ({
    label: ritual.name,
    value: ritual.id_ritual,
  }));

  const { mutate } = useMutation({
    mutationFn: async (data: CreateRitualPropsModal) => {
      console.log(data);
      const reformattedData = {
        id_ritual: data.ritual.value,
        id_agent,
      };

      await AgentService.createAgentRitual(reformattedData);
    },
    onSuccess: () => {
      toast.success('Ritual adicionado ao agente com sucesso!');
      onClose();
    },
    onError: () => {
      toast.error('Ocorreu um erro ao adicionar ritual a agente!');
      onClose();
    },
  });

  function handleCreateRitual(data: CreateRitualPropsModal) {
    mutate(data);
  }

  if (!isOpen) return;

  return (
    <S.Overlay>
      <S.Content>
        <h2>Adicionar ritual</h2>

        <S.RitualForm onSubmit={handleSubmit(handleCreateRitual)}>
          <Select
            control={control}
            options={ritualOptions!}
            label="Rituais"
            name="ritual"
          />
          <S.Actions>
            <Button variant="secondary" onClick={onClose}>
              Cancelar
            </Button>
            <Button>Adicionar</Button>
          </S.Actions>
        </S.RitualForm>
      </S.Content>
    </S.Overlay>
  );
}
