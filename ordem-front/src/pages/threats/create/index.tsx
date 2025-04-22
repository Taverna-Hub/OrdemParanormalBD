import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Navigation } from '../../../components/Navigation';
import { Select } from '../../../components/Select';
import * as S from './styles';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import {
  Element,
  ElementService,
} from '../../../services/http/elements/ElementService';
import { useState } from 'react';
import { IconButton } from '../../../components/IconButton';
import { Textarea } from '../../../components/Textarea';

export function CreateThreats() {
  const [names, setNames] = useState<string[]>([]);

  // const navigate = useNavigate();
  const { control, register, getValues } = useForm();

  const { data: elements } = useQuery({
    queryKey: ['elements'],
    queryFn: () => ElementService.findAll(),
  });

  const elementsOptions = elements?.map((element: Element) => {
    return {
      label: element.name,
      value: element.id,
    };
  });

  function handleAddNames() {
    const name = getValues().name;
    setNames((oldNames) => [...oldNames, name]);
  }

  console.log(names);

  return (
    <S.Wrapper>
      <Helmet title="Criar Ameaça" />
      <S.FormWrapper>
        <div>
          <h2>Adicionar ameaça</h2>
        </div>

        <S.Form>
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

          <Input label="Habilidades" {...register('abilities')} />

          <Select
            control={control}
            options={elementsOptions}
            label="Elementos"
            name="specialization"
            isMulti
          />

          <Textarea label="Descrição" {...register('description')} />
          <Textarea label="Enigma" {...register('enigma')} />

          <div />

          <S.Actions>
            <Button variant="secondary" type="button">
              Cancelar
            </Button>

            <Button iconRight={() => <FiArrowRight />} type="submit">
              Adicionar agente
            </Button>
          </S.Actions>
        </S.Form>
      </S.FormWrapper>

      <Navigation />
    </S.Wrapper>
  );
}
