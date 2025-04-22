import { useForm } from 'react-hook-form';
import { Input } from '../Input';
import { Textarea } from '../Textarea';
import * as S from './styles';
import { Select } from '../Select';
import { Button } from '../Button';
import { useMutation } from '@tanstack/react-query';
import {
  CreateEvidenceProps,
  Evidence,
  EvidenceService,
} from '../../services/http/evidences/EvidenceService';
import { toast } from 'sonner';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  id_mission: string;
};

type Options = {
  label: string;
  value: string;
};

type CreateEvidencePropsModal = Omit<CreateEvidenceProps, 'stability_level'> & {
  stability_level: Options;
};

export function AddEvidenceModal({ isOpen, onClose, id_mission }: ModalProps) {
  const { control, register, handleSubmit } =
    useForm<CreateEvidencePropsModal>();

  const stabilityLevelOptions = [
    {
      label: 'Estavel',
      value: 'Estavel',
    },
    {
      label: 'Volatil',
      value: 'Volatil',
    },
    {
      label: 'Perigoso',
      value: 'Perigoso',
    },
    {
      label: 'Contido',
      value: 'Contido',
    },
  ];

  const { mutate } = useMutation({
    mutationFn: async (data: CreateEvidencePropsModal) => {
      const reformattedData = {
        ...data,
        mission: id_mission,
        stability_level: data.stability_level.value,
      };

      await EvidenceService.create(reformattedData as Evidence);
    },
    onSuccess: () => {
      toast.success('Evidência adicionada com sucesso!');
      onClose();
    },
    onError: () => {
      toast.success('Ocorreu um erro ao adicionar a evidência!');
      onClose();
    },
  });

  function handleCreateEvidence(data: CreateEvidencePropsModal) {
    mutate(data);
  }

  if (!isOpen) return;

  return (
    <S.Overlay>
      <S.Content>
        <h2>Adicionar evidência</h2>

        <S.EvidenceForm onSubmit={handleSubmit(handleCreateEvidence)}>
          <Input label="Origem" {...register('origin')} />
          <Textarea label="Descrição" {...register('description')} />
          <Select
            control={control}
            options={stabilityLevelOptions}
            label="Nível de estabilidade"
            name="stability_level"
          />
          <S.Actions>
            <Button variant="secondary" onClick={onClose}>
              Cancelar
            </Button>
            <Button>Adicionar</Button>
          </S.Actions>
        </S.EvidenceForm>
      </S.Content>
    </S.Overlay>
  );
}
