import { Helmet } from 'react-helmet-async';
import * as S from './styles';
import { Navigation } from '../../../components/Navigation';
import { Button } from '../../../components/Button';
import { useNavigate } from 'react-router';
import { Input } from '../../../components/Input';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import { Team, TeamService } from '../../../services/http/teams/TeamService';
import { DeleteModal } from '../../../components/DeleteModal';
import { FiTrash2, FiEdit3 } from 'react-icons/fi';
import { useState } from "react";
import { toast } from 'sonner';


export function Teams() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: teams } = useQuery({
    queryKey: ['teams'],
    queryFn: () => TeamService.findAll(),
  });

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

    const deleteMutation = useMutation({
        mutationFn: (teamId: string) => TeamService.delete(teamId),
        onSuccess: () => {
            toast.success('Equipe deletada com sucesso!');
            queryClient.invalidateQueries({ queryKey: ['teams'] });
            handleCloseDeleteModal();
        },
        onError: () => {
            toast.error('Erro ao deletar equipe');
        },
    });

    const handleUpdateTeam = (teamId: string | number) => {
        navigate(`/equipes/${teamId}`);
    };

    const handleOpenDeleteModal = (team: Team) => {
        setSelectedTeam(team);
        setIsDeleteModalOpen(true);
    };

    const handleCloseDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setSelectedTeam(null);
    };

    const handleConfirmDelete = () => {
        if (selectedTeam) {
            deleteMutation.mutate(selectedTeam.id);
        }
    };

  return (
    <S.Wrapper>
      <Helmet title="Equipes" />

      <h1>Equipes</h1>

      <S.SearchInterface>
        <Input placeholder="Procure uma equipe..." />

        <Button onClick={() => navigate('/equipes/criar')}>Criar equipe</Button>
      </S.SearchInterface>

      <S.TableContainer>
        <S.Table>
          <S.TableHead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Especialização</th>
              <th></th>
              <th></th>
            </tr>
          </S.TableHead>
          <tbody>
            {teams?.map((team: Team, index: number) => {
              return (
                <S.TableRow>
                  <td>
                    <span>{index + 1}</span>
                  </td>
                  <td>
                    <p>{team.name}</p>
                  </td>
                  <td>
                    <p>{team.specialization}</p>
                  </td>
                    <td onClick={() => handleUpdateTeam(team.id)}>
                        <FiEdit3 style={{ cursor: 'pointer' }} />
                    </td>
                  <td
                      onClick={() => handleOpenDeleteModal(team)}
                      style={{ cursor: 'pointer' }}
                  >
                    <FiTrash2/>
                  </td>
                </S.TableRow>
              );
            })}
          </tbody>
        </S.Table>
      </S.TableContainer>

      <Navigation />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
        title="Excluir Equipe"
        message={`Tem certeza que deseja excluir "${selectedTeam?.name}"?`}
      />
    </S.Wrapper>
  );
}
