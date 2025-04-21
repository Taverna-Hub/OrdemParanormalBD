import { FiArrowRight } from 'react-icons/fi';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Navigation } from '../../../components/Navigation';
import { Select } from '../../../components/Select';
import * as S from './styles';
import { useForm } from 'react-hook-form';
import { Checkbox } from '../../../components/Checkbox';
import { Helmet } from 'react-helmet-async';
import { useMutation } from '@tanstack/react-query';
import {
  Agent,
  AgentService,
} from '../../../services/http/agents/AgentService';
import { toast } from 'sonner';
import { useNavigate } from 'react-router';

type SelectOptions = {
  label: string;
  value: string;
};
type CreateAgentProps = Omit<Agent, 'rank_agent' | 'specialization'> & {
  rank_agent: SelectOptions;
  specialization: SelectOptions;
};

export function CreateAgent() {
  const navigate = useNavigate();
  const { control, register, handleSubmit } = useForm<CreateAgentProps>();

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

  const patents = [
    {
      value: 'Recruta',
      label: 'Recruta',
    },
    {
      value: 'Veterano',
      label: 'Veterano',
    },
    {
      value: 'Elite',
      label: 'Elite',
    },
  ];

  const { mutate } = useMutation({
    mutationFn: async (data: CreateAgentProps) => {
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
      <Helmet title="Criar Agente" />
      <S.FormWrapper>
        <div>
          <h2>Adicionar agente</h2>
        </div>

        <S.Form onSubmit={handleSubmit(handleCreateAgent)}>
          <Input label="Nome" {...register('name')} />
          <Input label="Telefone" {...register('telNumber')} />
          <Input
            label="Data de Nascimento"
            type="date"
            {...register('birthDate')}
          />

          <Select
            control={control}
            options={specialties}
            label="Especialidade"
            name="specialization"
          />

          <Select
            control={control}
            options={patents}
            label="Patente"
            name="rank_agent"
          />

          <Input label="NEX" type="number" />

          <S.BooleanFields>
            <Checkbox
              control={control}
              label="Aposentado"
              {...register('retired')}
            />

            <Checkbox
              control={control}
              label="Transcendido"
              {...register('transcended')}
            />
          </S.BooleanFields>
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
