import { Helmet } from 'react-helmet-async';
import * as S from './styles';
import { useForm } from 'react-hook-form';
import { Input } from '../../../components/Input';
import { Select } from '../../../components/Select';
import { Button } from '../../../components/Button';
import { Navigation } from '../../../components/Navigation';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  Agent,
  AgentService,
} from '../../../services/http/agents/AgentService';
import { useState } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router';
import {
  CreateTeamProps,
  TeamService,
} from '../../../services/http/teams/TeamService';
import ReactApexChart from 'react-apexcharts';
import { IconButton } from '../../../components/IconButton';
import { FiTrash2 } from 'react-icons/fi';

type Option = {
  label: string;
  value: string;
};

type CreateTeamUnformattedProps = {
  name: string;
  specialization: Option;
  agents: Option[];
};

export function CreateTeam() {
  const [agentsList, setAgentsList] = useState<Agent[]>([]);
  const [chartData, setChartData] = useState({
    series: [0, 0, 0],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Recruta', 'Veterano', 'Elite'],
      legend: {
        labels: {
          useSeriesColors: true,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/equipes');
  }

  const { control, getValues, handleSubmit, register, resetField } =
    useForm<CreateTeamUnformattedProps>();

  const { data: agents } = useQuery({
    queryKey: ['agents'],
    queryFn: () => AgentService.findAll(),
  });

  const specOptions = [
    {
      label: 'Investigação',
      value: 'Investigação',
    },
    {
      label: 'Combate',
      value: 'Combate',
    },
    {
      label: 'Suporte',
      value: 'Suporte',
    },
  ];

  const agentsOptions = agents?.map((agent: Agent) => {
    return {
      label: agent.name,
      value: agent.id,
    };
  });

  function handleAddAgentsToTeam() {
    const selectedAgents = getValues().agents;
    const agentsToAdd: Agent[] = [];
    let countRookie = 0;
    let countVeteran = 0;
    let countElite = 0;

    selectedAgents.forEach((option: Option) => {
      const selected = agents.find((agent: Agent) => agent.id === option.value);
      agentsToAdd.push(selected);
    });

    const uniqueAgents = agentsToAdd.reduce((acc: Agent[], current: Agent) => {
      const exists =
        acc.find((agent: Agent) => agent.id === current.id) ||
        agentsList.find((agent: Agent) => agent.id === current.id);
      if (!exists) acc.push(current);
      return acc;
    }, []);

    [...uniqueAgents, ...agentsList].forEach((agent) => {
      if (agent.rank_agent === 'Recruta') {
        countRookie = countRookie + 1;
      } else if (agent.rank_agent === 'Veterano') {
        countVeteran = countVeteran + 1;
      } else if (agent.rank_agent === 'Elite') {
        countElite = countElite + 1;
      }
    });

    setChartData((oldData) => {
      return {
        ...oldData,
        series: [countRookie, countVeteran, countElite],
      };
    });
    setAgentsList((oldAgents) => [...oldAgents, ...uniqueAgents]);
    resetField('agents', { defaultValue: [] });
  }

  const { mutate } = useMutation({
    mutationFn: async (data: CreateTeamUnformattedProps) => {
      const agentIds = agentsList.map((agent) => agent.id);

      const reformattedData = {
        team: {
          name: data.name,
          specialization: data.specialization.value,
        },
        agentIds,
      };

      await TeamService.create(reformattedData as CreateTeamProps);
    },
    onSuccess: async () => {
      toast.success('Equipe criada com sucesso!');
      navigate('/equipes');
    },
    onError: () => {
      toast.error('Ocorreu um erro ao criar equipe!');
    },
  });

  function handleCreateTeam(data: CreateTeamUnformattedProps) {
    mutate(data);
  }

  const handleRemoveAgent = (agentId: string) => {
    setAgentsList((prev) => prev.filter((agent) => agent.id !== agentId));
  };

  return (
    <S.Wrapper>
      <Helmet title="Criar Nova Equipe" />

      <h1>Criar Nova Equipe</h1>

      <S.GridWrapper onSubmit={handleSubmit(handleCreateTeam)}>
        <S.GridColumn>
          <S.TeamBasicInfo>
            <h2>Informações Básicas</h2>
            <Input
              label="Nome da equipe"
              placeholder="Digite o nome da equipe"
              {...register('name')}
            />

            <Select
              label="Especialização da equipe"
              placeholder="Selecione uma especialização"
              control={control}
              options={specOptions}
              name="specialization"
            />
          </S.TeamBasicInfo>

          <S.TeamStatistics>
            <h2>Estatísticas da Equipe</h2>
            <p>Selecione agentes para vizualizar estatísticas</p>
            <ReactApexChart
              options={chartData.options as never}
              series={chartData.series as never}
              type="pie"
              width="90%"
              height={460}
            />
          </S.TeamStatistics>
        </S.GridColumn>

        <S.GridColumn>
          <S.TeamSelectAgents>
            <h2>Seleção de Agentes</h2>
            <S.SelectAgentsInterface>
              <Select
                control={control}
                options={agentsOptions}
                name="agents"
                placeholder="Selecione os agentes"
                isMulti
              />

              <Button onClick={handleAddAgentsToTeam} type="button">
                Adicionar
              </Button>
            </S.SelectAgentsInterface>

            <S.AgentsHeader>
              <span>Agentes</span>
              <span></span>
              <span></span>
            </S.AgentsHeader>

            {agentsList.length > 0 &&
              agentsList?.map((agent: Agent, index) => (
                <S.AgentCard key={agent.id}>
                  <S.Label htmlFor={'lider' + index}>
                    <h3>{agent.name}</h3>
                    <p>{agent.specialization}</p>
                  </S.Label>
                  <IconButton type="button" onClick={() => handleRemoveAgent(agent.id)} icon={<FiTrash2 />} />
                </S.AgentCard>
              ))}
          </S.TeamSelectAgents>

          <S.GridButtons>
            <Button type="button" onClick={handleCancel}>Cancelar</Button>
            <Button type="submit"> Criar Equipe </Button>
          </S.GridButtons>
        </S.GridColumn>
      </S.GridWrapper>

      <Navigation />
    </S.Wrapper>
  );
}
