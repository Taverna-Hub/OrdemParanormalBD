import { Helmet } from 'react-helmet-async';
import * as S from './styles';
import { Navigation } from '../../../components/Navigation';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import { useNavigate } from 'react-router';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  GetOrganizationProps,
  GetThreatProps,
  ThreatService,
} from '../../../services/http/threats/ThreatService';
import { DeleteModal } from '../../../components/modals/DeleteModal';
import { FiTrash2, FiEdit3 } from 'react-icons/fi';
import { useState } from 'react';
import { toast } from 'sonner';
import { Select } from '../../../components/Select';
import { useForm } from 'react-hook-form';

export function Threats() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedThreat, setSelectedThreat] = useState<GetThreatProps | null>(
    null,
  );
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { control, watch } = useForm();
  const [searchTerm, setSearchTerm] = useState('');

  const threatType = watch('threatType');

  const threatsTypes = [
    {
      label: 'Entidade Paranormal',
      value: 'entity',
    },
    {
      label: 'Organização',
      value: 'organization',
    },
  ];

  const { data: paranormalEntities } = useQuery<GetThreatProps[]>({
    queryKey: ['paranormalEntity'],
    queryFn: () => ThreatService.findAllParanormalEntity(),
  });

  const { data: organizations } = useQuery<GetOrganizationProps[]>({
    queryKey: ['organizations'],
    queryFn: () => ThreatService.findAllOrganization(),
  });

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredParanormalEntities = paranormalEntities?.filter(
    (entity) =>
      normalizedSearch === '' ||
      entity.names.some((name) =>
        name.toLowerCase().includes(normalizedSearch),
      ),
  );

  const filteredOrganizations = organizations?.filter(
    (org) =>
      normalizedSearch === '' ||
      org.names.some((name) => name.toLowerCase().includes(normalizedSearch)),
  );

  function handleGoToParanormalEntity(id: string) {
    navigate(`/ameacas/paranormal/${id}`);
  }

  function handleGoToOrganization(id: string) {
    navigate(`/ameacas/organizacao/${id}`);
  }

  const deleteMutation = useMutation({
    mutationFn: (threatId: string) => ThreatService.delete(threatId),
    onSuccess: () => {
      toast.success('Ameaça deletada com sucesso!');
      queryClient.invalidateQueries({ queryKey: ['organizations'] });
      queryClient.invalidateQueries({ queryKey: ['paranormalEntity'] });
      handleCloseDeleteModal();
    },
    onError: () => {
      toast.error('Erro ao deletar ameaça');
    },
  });

  const handleOpenDeleteModal = (threat: GetThreatProps) => {
    setSelectedThreat(threat);
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
        <Input
          placeholder="Procure uma ameaças..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div>
          <Select
            control={control}
            options={threatsTypes}
            label="Filtro de ameaça"
            name="threatType"
            defaultValue={{
              label: 'Entidade Paranormal',
              value: 'entity',
            }}
          />

          <Button onClick={() => navigate('/ameacas/criar/paranormal')}>
            Criar entidade
          </Button>
          <Button onClick={() => navigate('/ameacas/criar/organizacao')}>
            Criar organização
          </Button>
        </div>
      </S.SearchInterface>

      <S.TableContainer>
        <S.Table>
          {threatType?.value === 'entity' && (
            <>
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
                {filteredParanormalEntities?.map((paranormalEntity, index) => {
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
                      <td
                        onClick={() =>
                          handleGoToParanormalEntity(paranormalEntity.id_threat)
                        }
                      >
                        <FiEdit3 style={{ cursor: 'pointer' }} />
                      </td>
                      <td
                        onClick={() => handleOpenDeleteModal(paranormalEntity)}
                        style={{ cursor: 'pointer' }}
                      >
                        <FiTrash2 />
                      </td>
                    </S.TableRow>
                  );
                })}
              </tbody>
            </>
          )}

          {threatType?.value === 'organization' && (
            <>
              <S.TableHead>
                <tr>
                  <th>#</th>
                  <th>Nomes</th>
                  <th></th>
                  <th></th>
                </tr>
              </S.TableHead>
              <tbody>
                {filteredOrganizations?.map(
                  (organization: GetOrganizationProps, index) => {
                    return (
                      <S.TableRow>
                        <td>
                          <span>{index + 1}</span>
                        </td>
                        <td>
                          <p>
                            {organization.names.map((name, index) => {
                              if (index + 1 === organization.names.length) {
                                return `${name}`;
                              } else {
                                return `${name}, `;
                              }
                            })}
                          </p>
                        </td>
                        <td
                          onClick={() =>
                            handleGoToOrganization(organization.id_threat)
                          }
                        >
                          <FiEdit3 style={{ cursor: 'pointer' }} />
                        </td>
                        <td
                          onClick={() => handleOpenDeleteModal(organization)}
                          style={{ cursor: 'pointer' }}
                        >
                          <FiTrash2 />
                        </td>
                      </S.TableRow>
                    );
                  },
                )}
              </tbody>
            </>
          )}
        </S.Table>
      </S.TableContainer>

      <Navigation />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
        title="Excluir Ameaça"
        message={`Tem certeza que deseja excluir "${selectedThreat?.names.join(
          ', ',
        )}"?`}
      />
    </S.Wrapper>
  );
}
