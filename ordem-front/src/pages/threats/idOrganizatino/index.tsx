import { FiArrowRight } from 'react-icons/fi';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Navigation } from '../../../components/Navigation';
import { Select } from '../../../components/Select';
import * as S from './styles';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  Element,
  ElementService,
} from '../../../services/http/elements/ElementService';
import { useCallback, useEffect, useState } from 'react';
import { Textarea } from '../../../components/Textarea';
import {
  CreateOrganizationProps,
  GetThreatProps,
  Member,
  ThreatService,
} from '../../../services/http/threats/ThreatService';
import { useNavigate, useParams } from 'react-router';

type CreateMemberProps = {
  name: string;
  role: {
    label: string;
    value: string;
  };
};

export function UpdateOrganization() {
  const { id } = useParams();

  const [names, setNames] = useState<string[]>([]);
  const [members, setMembers] = useState<Omit<Member, 'id_member'>[]>([]);
  const navigate = useNavigate();

  const { control, register, setValue, getValues } = useForm<
    CreateMemberProps & CreateOrganizationProps
  >();

  const { data: elements } = useQuery({
    queryKey: ['elements'],
    queryFn: () => ElementService.findAll(),
  });

  const { data: threat } = useQuery<GetThreatProps>({
    queryKey: ['threat', id],
    queryFn: () => ThreatService.findOrganizationById(id),
    enabled: !!id,
  });

  const { mutate } = useMutation({
    mutationFn: async (data: CreateMemberProps) => {
      const reformattedData = {
        name: data.name,
        role: data.role.value,
      };

      await ThreatService.addMember(id!, reformattedData as Member);
    },
  });

  const elementsOptions = elements?.map((element: Element) => {
    return {
      label: element.name,
      value: element.id_element,
    };
  });

  const roleOptions = [
    {
      value: 'Lider',
      label: 'Lider',
    },
    {
      value: 'Pesquisador',
      label: 'Pesquisador',
    },
    {
      value: 'Ocultista',
      label: 'Ocultista',
    },
    {
      value: 'Simpatizante',
      label: 'Simpatizante',
    },
  ];

  function handleAddMember() {
    const name = getValues().name;
    const role = getValues().role.value;
    const data = getValues();
    const newMember = {
      name,
      role,
    };
    setMembers((oldMembers) => [...oldMembers, newMember]);
    mutate(data);
  }

  const loadThreatData = useCallback(() => {
    if (threat) {
      const elements = threat.elements.map((elementId, i) => ({
        value: elementId,
        label: threat.elementsNames[i],
      }));

      setNames(threat.names || []);
      setValue('description', threat.description);
      setValue('elements', elements);
    }
  }, [threat]);

  useEffect(() => {
    loadThreatData();
  }, [loadThreatData]);

  return (
    <S.Wrapper>
      <Helmet title="Editar Ameaça" />
      <S.FormWrapper>
        <div>
          <h2>Editar ameaça</h2>
        </div>

        <S.Form>
          <S.InputWrapper>
            <S.NamesListWrapper>
              <h2>Nomes</h2>
              <S.List>
                {names?.length > 0 &&
                  names.map((name, index) => (
                    <S.ListItem key={index}>{name}</S.ListItem>
                  ))}
              </S.List>
            </S.NamesListWrapper>
          </S.InputWrapper>

          <Select
            control={control}
            options={elementsOptions}
            label="Elementos"
            name="elements"
            isMulti
          />

          <Textarea label="Descrição" {...register('description')} disabled />

          <div />
          <div />

          <S.Actions>
            <Button
              onClick={() => navigate('/ameacas')}
              variant="secondary"
              type="button"
            >
              Cancelar
            </Button>

            <Button iconRight={() => <FiArrowRight />} type="submit">
              Atualizar ameaça
            </Button>
          </S.Actions>
        </S.Form>
      </S.FormWrapper>

      <S.FormWrapper>
        <div>
          <h2>Adicionar membros</h2>
        </div>

        <S.Form>
          <Input label="Nome" {...register('name')} />

          <Select
            control={control}
            options={roleOptions}
            label="Papel"
            name="role"
          />
          <div />
          <Button type="button" onClick={() => handleAddMember()}>
            Adicionar membro
          </Button>
        </S.Form>
        <S.MembersList>
          {members &&
            members.length > 0 &&
            members.map((member: Omit<Member, 'id_member'>) => {
              return (
                <S.Member>
                  {member.name} - {member.role}
                </S.Member>
              );
            })}
        </S.MembersList>
      </S.FormWrapper>

      <Navigation />
    </S.Wrapper>
  );
}
