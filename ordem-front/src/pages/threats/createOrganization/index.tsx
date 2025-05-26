import { FiPlus } from 'react-icons/fi';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Navigation } from '../../../components/Navigation';
import { Select } from '../../../components/Select';
import * as S from './styles';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  Element,
  ElementService,
} from '../../../services/http/elements/ElementService';
import { useState } from 'react';
import { IconButton } from '../../../components/IconButton';
import { Textarea } from '../../../components/Textarea';
import { ThreatService } from '../../../services/http/threats/ThreatService';
import { toast } from 'sonner';
import { useNavigate } from 'react-router';

type Options = {
  label: string;
  value: string;
};

type CreateThreatProps = {
  name: string;
  description: string;
  enigma: string;
  elements: Options[];
};

export function CreateOrganizationThreats() {
  const [names, setNames] = useState<string[]>([]);
  const navigate = useNavigate();

  const { control, register, getValues, resetField, handleSubmit } =
    useForm<CreateThreatProps>();
  const queryClient = useQueryClient();

  const { data: elements } = useQuery({
    queryKey: ['elements'],
    queryFn: () => ElementService.findAll(),
  });

  const elementsOptions = elements?.map((element: Element) => {
    return {
      label: element.name,
      value: element.id_element,
    };
  });

  const { mutate } = useMutation({
    mutationFn: async (data: CreateThreatProps) => {
      const elementsList = data.elements.map((element) => element.value);

      const reformattedData = {
        ...data,
        names,
        elements: elementsList,
      };

      await ThreatService.createOrganization(reformattedData);
    },
    onSuccess: async () => {
      toast.success('Ameaça cadastrada com sucesso!');
      queryClient.invalidateQueries({ queryKey: ['organizations'] });
      navigate('/ameacas');
    },
    onError: () => {
      toast.error('Ocorreu um erro ao cadastrar ameaça!');
    },
  });

  function handleCreateThreat(data: CreateThreatProps) {
    mutate(data);
  }

  function handleAddNames() {
    const name = getValues().name;
    if (name.trim() !== '') {
      setNames((oldNames) => [...oldNames, name]);
      resetField('name');
    }
  }

  return (
    <S.Wrapper>
      <Helmet title="Criar Organização" />
      <S.FormWrapper>
        <div>
          <h2>Adicionar Organização</h2>
        </div>

        <S.Form onSubmit={handleSubmit(handleCreateThreat)}>
          <S.InputWrapper>
            <div className="inputsection">
              <Input label="Nomes" {...register('name')} />
              <IconButton onClick={() => handleAddNames()} icon={<FiPlus />} />
            </div>

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

          <Textarea label="Descrição" {...register('description')} />

          <div />
          <div />

          <S.Actions>
            <Button
              variant="secondary"
              type="button"
              onClick={() => navigate('/ameacas')}
            >
              Cancelar
            </Button>

            <Button type="submit">Adicionar organização</Button>
          </S.Actions>
        </S.Form>
      </S.FormWrapper>

      <Navigation />
    </S.Wrapper>
  );
}
