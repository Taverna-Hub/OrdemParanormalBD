import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Agent, AgentService } from '../../../services/http/agents/AgentService';
import { TeamService } from '../../../services/http/teams/TeamService';
import { Input } from '../../../components/Input';
import { Select } from '../../../components/Select';
import { Button } from '../../../components/Button';
import { Navigation } from '../../../components/Navigation';
import * as S from './styles';

type Option = {
    label: string;
    value: string;
};

type TeamForm = {
    agents: Option[];
};

export function UpdateTeam() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [allAgents, setAllAgents] = useState<Agent[]>([]);
    const [teamAgents, setTeamAgents] = useState<Agent[]>([]);
    const { control, getValues, handleSubmit, resetField } = useForm<TeamForm>();

    const { data: teamData } = useQuery({
        queryKey: ['team', id],
        queryFn: () => TeamService.findById(id!),
        enabled: !!id,
    });

    const { data: agents } = useQuery({
        queryKey: ['agents'],
        queryFn: () => AgentService.findAll(),
    });

    const { data: initialTeamAgents } = useQuery({
        queryKey: ['team-agents', id],
        queryFn: () => TeamService.findAgentsById(id!),
        enabled: !!teamData,
    });

    useEffect(() => {
        if (agents?.length) {
            setAllAgents(agents);
        }
    }, [agents]);

    useEffect(() => {
        if (initialTeamAgents?.length && agents?.length) {
            const formattedAgents = initialTeamAgents.map((item: any) => {
                if (typeof item === 'string') {
                    return agents.find((a) => a.id === item);
                }
                return item;
            }).filter(Boolean) as Agent[];

            setTeamAgents(formattedAgents);
        }
    }, [initialTeamAgents, agents]);

    const agentOptions = allAgents?.map((agent) => ({
        label: agent.name,
        value: agent.id,
    }));

    const { mutate } = useMutation({
        mutationFn: async () => {
            const agentIds = teamAgents.map((a) => a.id);

            // Adicionar agentes
            const addedAgents = agentIds.filter(
                (id) => !teamData.agentIds.includes(id)
            );
            if (addedAgents.length > 0) {
                await TeamService.addAgents(id!, addedAgents);
            }

            // Remover agentes
            const removedAgents = teamData.agentIds.filter(
                (id) => !agentIds.includes(id)
            );
            if (removedAgents.length > 0) {
                await TeamService.removeAgents(id!, removedAgents);
            }
        },

        onSuccess: () => {
            toast.success('Equipe atualizada com sucesso!');
            navigate('/equipes');
        },
        onError: () => {
            toast.error('Erro ao atualizar equipe!');
        },
    });

    function handleAddAgents() {
        const selected = getValues().agents || []; // Garantir que seja um array, mesmo que getValues() não retorne nada

        if (Array.isArray(selected)) {  // Verifica se selected é um array
            const toAdd = selected
                .map((option) =>
                    allAgents.find((a) => a.id === option.value)
                )
                .filter(Boolean) as Agent[];

            const unique = toAdd.filter(
                (newAgent) => !teamAgents.some((a) => a.id === newAgent.id)
            );

            setTeamAgents((prev) => [...prev, ...unique]);
            resetField('agents');
        } else {
            console.error("selected não é um array válido", selected);
        }
    }


    function handleRemoveAgent(agentId: string) {
        setTeamAgents((prev) => prev.filter((a) => a.id !== agentId));
    }

    function handleUpdateTeam() {
        mutate();
    }

    return (
        <S.Wrapper>
            <h1>Editar Equipe</h1>

            <S.GridWrapper onSubmit={handleSubmit(handleUpdateTeam)}>
                <S.GridColumn>
                    <S.TeamBasicInfo>
                        <Input label="Nome da equipe" value={teamData?.name || ''} disabled />
                        <Input label="Especialização" value={teamData?.specialization || ''} disabled />
                    </S.TeamBasicInfo>
                </S.GridColumn>

                <S.GridColumn>
                    <S.TeamSelectAgents>
                        <h2>Modificar Agentes</h2>

                        <S.SelectAgentsInterface>
                            <Select
                                control={control}
                                options={agentOptions}
                                name="agents"
                                placeholder="Selecionar agentes"
                                isMulti
                            />
                            <Button onClick={handleAddAgents} type="button">Adicionar</Button>
                        </S.SelectAgentsInterface>

                        <S.AgentsHeader>
                            <span>Agentes na equipe</span>
                        </S.AgentsHeader>

                        {teamAgents?.map((agent) => (
                            <S.AgentCard key={agent.id}>
                                <h3>{agent.name} </h3>
                                <p>| {agent.rank_agent}</p>
                                <Button size="sm" onClick={() => handleRemoveAgent(agent.id)}>Remover</Button>
                            </S.AgentCard>
                        ))}
                    </S.TeamSelectAgents>

                    <S.GridButtons>
                        <Button type="button" onClick={() => navigate('/equipes')}>Cancelar</Button>
                        <Button type="submit">Salvar alterações</Button>
                    </S.GridButtons>
                </S.GridColumn>
            </S.GridWrapper>

            <Navigation />
        </S.Wrapper>
    );
}