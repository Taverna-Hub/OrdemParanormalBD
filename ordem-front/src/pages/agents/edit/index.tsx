import { Helmet } from 'react-helmet-async';
import * as S from './styles';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import {
    AgentService,
    Agent
} from '../../../services/http/agents/AgentService';

export function EditAgent() {
    const { agentId } = useParams<{ agentId: string }>();

    const {
        data: agent,
    } = useQuery<Agent>({
        queryKey: ['agent', agentId],
        queryFn: () => AgentService.findById(agentId!),
        enabled: !!agentId,
    });


    return (
        <div>
            <h1>Editar Agente: {agent.name}</h1>
        </div>
    );
}
