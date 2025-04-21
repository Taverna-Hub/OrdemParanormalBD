import { Helmet } from 'react-helmet-async';
import * as S from './styles';
import { FiTrash2, FiEdit3 } from 'react-icons/fi';
import { Navigation } from '../../../components/Navigation';
import { Button } from '../../../components/Button';
import { useNavigate } from 'react-router';
import { Input } from '../../../components/Input';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-toastify';

import {
    Agent,
    AgentService,
} from '../../../services/http/agents/AgentService';

import { DeleteModal } from '../../../components/DeleteModal';

export function Agents() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { data: agents } = useQuery({
        queryKey: ['agents'],
        queryFn: () => AgentService.findAll(),
    });

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

    const deleteMutation = useMutation({
        mutationFn: (agentId: string) => AgentService.delete(agentId),
        onSuccess: () => {
            toast.success('Agente deletado com sucesso!');
            queryClient.invalidateQueries({ queryKey: ['agents'] });
            handleCloseDeleteModal();
        },
        onError: () => {
            toast.error('Erro ao deletar agente');
        },
    });

    const handleEditAgent = (agentId: string | number) => {
        navigate(`/agentes/${agentId}`);
    };

    const handleOpenDeleteModal = (agent: Agent) => {
        setSelectedAgent(agent);
        setIsDeleteModalOpen(true);
    };

    const handleCloseDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setSelectedAgent(null);
    };

    const handleConfirmDelete = () => {
        if (selectedAgent) {
            deleteMutation.mutate(selectedAgent.id);
        }
    };

    return (
        <S.Wrapper>
            <Helmet title="Agentes" />

            <h1>Agentes</h1>

            <S.SearchInterface>
                <Input placeholder="Procure um agente..." />
                <Button onClick={() => navigate('/agentes/criar')}>Criar agente</Button>
            </S.SearchInterface>

            <S.TableContainer>
                <S.Table>
                    <S.TableHead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Especialização</th>
                            <th>Patente</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </S.TableHead>
                    <tbody>
                    {agents?.map((agent: Agent, index: number) => (
                        <S.TableRow key={agent.id}>
                            <td><span>{index + 1}</span></td>
                            <td><p>{agent.name}</p></td>
                            <td><p>{agent.specialization}</p></td>
                            <td><p>{agent.rank_agent}</p></td>
                            <td onClick={() => handleEditAgent(agent.id)}>
                                <FiEdit3 style={{ cursor: 'pointer' }} />
                            </td>
                            <td>
                                <FiTrash2
                                    onClick={() => handleOpenDeleteModal(agent)}
                                    style={{ cursor: 'pointer' }}
                                />
                            </td>
                        </S.TableRow>
                    ))}
                    </tbody>
                </S.Table>
            </S.TableContainer>

            <Navigation />

            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={handleCloseDeleteModal}
                onConfirm={handleConfirmDelete}
                title="Excluir Agente"
                message={`Tem certeza que deseja excluir "${selectedAgent?.name}"?`}
            />
        </S.Wrapper>
    );
}
