import { Helmet } from 'react-helmet-async';
import * as S from './styles';
import { Navigation } from '../../../components/Navigation';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import { useNavigate } from 'react-router';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {
  GetThreatProps,
  ThreatService,
} from '../../../services/http/threats/ThreatService';
import { DeleteModal } from '../../../components/DeleteModal';
import { FiTrash2, FiEdit3 } from 'react-icons/fi';
import {useState} from "react";
import {toast} from "sonner";

export function Threats() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: paranormalEntities } = useQuery<GetThreatProps[]>({
    queryKey: ['paranormalEntities'],
    queryFn: () => ThreatService.findAllParanormalEntity(),
  });

  function handleGoToThreat(id: string) {
    navigate(`/ameacas/${id}`);
  }

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedThreat, setSelectedThreat] = useState<GetThreatProps  | null>(null);

  const deleteMutation = useMutation({
    mutationFn: (threatId: string) => ThreatService.delete(threatId),
    onSuccess: () => {
      toast.success('Ameaça deletada com sucesso!');
      queryClient.invalidateQueries({ queryKey: ['threats'] });
      handleCloseDeleteModal();
    },
    onError: () => {
      toast.error('Erro ao deletar ameaça');
    },
  });

  const handleOpenDeleteModal = (threat: GetThreatProps) => {
    setSelectedThreat(threat); // corrigido nome da função
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedThreat(null);
  };

  const handleConfirmDelete = () => {
    if (selectedThreat) {
      deleteMutation.mutate(selectedThreat.id_threat);
    }
  };

  return (
    <S.Wrapper>
      <Helmet title="Ameaças" />

      <h1>Ameaças</h1>

      <S.SearchInterface>
        <Input placeholder="Procure uma ameaças..." />

        <Button onClick={() => navigate('/ameacas/criar')}>Criar ameaça</Button>
      </S.SearchInterface>

      <S.TableContainer>
        <div>
          <h2>Ameaças</h2>
        </div>
        <S.Table>
          <S.TableHead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Elementos</th>
              <th></th>
              <th></th>
            </tr>
          </S.TableHead>
          <tbody>
            {paranormalEntities?.map((paranormalEntity, index) => {
              return (
                <S.TableRow>
                  <td>
                    <span>{index + 1}</span>
                  </td>
                  <td>
                    <p>
                      {' '}
                      {paranormalEntity.names.map((name, index) => {
                        if (index + 1 === paranormalEntity.names.length) {
                          return `${name}`;
                        } else {
                          return `${name}, `;
                        }
                      })}
                    </p>
                  </td>
                  <td>
                    <p>
                      {paranormalEntity.elementsNames.map((name, index) => {
                        if (
                          index + 1 ===
                          paranormalEntity.elementsNames.length
                        ) {
                          return `${name}`;
                        } else {
                          return `${name}, `;
                        }
                      })}
                    </p>
                  </td>
                  <td onClick={() => handleGoToThreat(paranormalEntity.id_threat)}>
                    <FiEdit3 style={{ cursor: 'pointer' }} />
                  </td>
                  <td
                      onClick={() => handleOpenDeleteModal(paranormalEntity)}
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
          title="Excluir Ameaça"
          message={`Tem certeza que deseja excluir "${selectedThreat?.names.join(', ')}"?`}
      />
    </S.Wrapper>
  );
}
