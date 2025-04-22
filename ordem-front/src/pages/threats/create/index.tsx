import { FiArrowRight } from 'react-icons/fi';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Navigation } from '../../../components/Navigation';
import { Select } from '../../../components/Select';
import * as S from './styles';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { useMutation } from '@tanstack/react-query';
import {
  Agent,
  AgentService,
} from '../../../services/http/agents/AgentService';
import { toast } from 'sonner';
import { useNavigate } from 'react-router';
import { Textarea } from '../../../components/Textarea';
import { CreateThreatProps } from '../../../services/http/threats/ThreatService';

type SelectOptions = {
  label: string;
  value: string;
};
type CreateThreat = Omit<CreateThreatProps, 'elements'> & {
  elements: SelectOptions;
};

export function CreateThreats() {
  const navigate = useNavigate();
  const { control, register, handleSubmit } = useForm<CreateThreat>();

  const specialties = [
    {
      value: 'Especialista',
      label: 'Especialista',
    },
    {
      value: 'Ocultista',
      label: 'Ocultista',
    },
    {
      value: 'Combatente',
      label: 'Combatente',
    },
  ];

  const { mutate } = useMutation({
    mutationFn: async (data: CreateThreat) => {
      const reformattedData = {
        ...data,
        specialization: data.specialization.value,
        rank_agent: data.rank_agent.value,
      };

      await AgentService.create(reformattedData as Agent);
    },
    onSuccess: async () => {
      toast.success('Agente cadastrado com sucesso!');
      navigate('/agentes');
    },
    onError: () => {
      toast.error('Ocorreu um erro ao cadastrar agente!');
    },
  });

  function handleCreateAgent(data: CreateAgentProps) {
    mutate(data);
  }

  return (
    <S.Wrapper>
      <Helmet title="Criar Ameaça" />
      <S.FormWrapper>
        <div>
          <h2>Adicionar ameaça</h2>
        </div>

        <S.Form onSubmit={handleSubmit(handleCreateAgent)}>
          <Input label="Nomes" {...register('names')} />
          <Input label="Habilidades" {...register('abilities')} />

          <Select
            control={control}
            options={specialties}
            label="Elementos"
            name="specialization"
            isMulti
          />

          <Textarea label="Descrição" {...register('description')} />
          <Textarea label="Enigma" {...register('enigma')} />

          <div />

          <S.Actions>
            <Button variant="secondary" type="button">
              Cancelar
            </Button>

            <Button iconRight={() => <FiArrowRight />} type="submit">
              Adicionar agente
            </Button>
          </S.Actions>
        </S.Form>
      </S.FormWrapper>

      <Navigation />
    </S.Wrapper>
  );
}
