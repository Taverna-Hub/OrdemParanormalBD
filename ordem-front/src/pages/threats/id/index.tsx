import { FiArrowRight, FiPlus } from 'react-icons/fi';
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
import { IconButton } from '../../../components/IconButton';
import { Textarea } from '../../../components/Textarea';
import {
  GetThreatProps,
  ThreatService,
} from '../../../services/http/threats/ThreatService';
import { toast } from 'sonner';
import { useNavigate, useParams } from 'react-router';

type Options = {
  label: string;
  value: string;
};

type CreateThreatProps = {
  name: string;
  ability: string;
  description: string;
  enigma: string;
  elements: Options[];
};

export function UpdateThreats() {
  const { id } = useParams();

  const [names, setNames] = useState<string[]>([]);
  const [abilities, setAbilities] = useState<string[]>([]);
  const navigate = useNavigate();

  const { control, register, getValues, resetField, handleSubmit, setValue } =
    useForm<CreateThreatProps>();

  const { data: elements } = useQuery({
    queryKey: ['elements'],
    queryFn: () => ElementService.findAll(),
  });

  const { data: threat } = useQuery<GetThreatProps>({
    queryKey: ['threat', id],
    queryFn: () => ThreatService.findById(id),
    enabled: !!id,
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
        abilities,
        elements: elementsList,
      };

      await ThreatService.update(id!, reformattedData);
    },
    onSuccess: async () => {
      toast.success('Ameaça cadastrada com sucesso!');
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

  function handleAddAbilities() {
    const ability = getValues().ability;
    if (ability.trim() !== '') {
      setAbilities((oldAbilities) => [...oldAbilities, ability]);
      resetField('ability');
    }
  }

  const loadThreatData = useCallback(() => {
    if (threat) {
      const elements = threat.elements.map((elementId, i) => ({
        value: elementId,
        label: threat.elementsNames[i],
      }));

      console.log(elements);

      setNames(threat.names || []);
      setAbilities(threat.abilities || []);
      setValue('description', threat.description);
      setValue('enigma', threat.enigma);
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

          <S.InputWrapper>
            <div className="inputsection">
              <Input label="Habilidades" {...register('ability')} />
              <IconButton
                onClick={() => handleAddAbilities()}
                icon={<FiPlus />}
              />
            </div>

            <S.NamesListWrapper>
              <h2>Habilidades</h2>

              <S.List>
                {abilities?.length > 0 &&
                  abilities.map((ability, index) => (
                    <S.ListItem key={index}>{ability}</S.ListItem>
                  ))}
              </S.List>
            </S.NamesListWrapper>
          </S.InputWrapper>

          <Textarea label="Descrição" {...register('description')} />
          <Textarea label="Enigma" {...register('enigma')} />
          <Select
            control={control}
            options={elementsOptions}
            label="Elementos"
            name="elements"
            isMulti
          />

          <div />
          <div />

          <S.Actions>
            <Button  onClick={() => navigate('/ameacas')} variant="secondary" type="button">
              Cancelar
            </Button>

            <Button iconRight={() => <FiArrowRight />} type="submit">
              Atualizar ameaça
            </Button>
          </S.Actions>
        </S.Form>
      </S.FormWrapper>

      <Navigation />
    </S.Wrapper>
  );
}
