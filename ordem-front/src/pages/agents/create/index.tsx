import { FiArrowRight } from 'react-icons/fi';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Navigation } from '../../../components/Navigation';
import { Select } from '../../../components/Select';
import * as S from './styles';
import { useForm } from 'react-hook-form';
import { Checkbox } from '../../../components/Checkbox';
import { Helmet } from 'react-helmet-async';

export function CreateAgent() {
  const { control, register } = useForm();

  const specialties = [
    {
      value: 'Especialista',
      label: 'Especialista',
    },
    {
      value: 'Ocultista',
      label: 'Ocultista',
    },
    {
      value: 'Combatente',
      label: 'Combatente',
    },
  ];

  const patents = [
    {
      value: 'Recruta',
      label: 'Recruta',
    },
    {
      value: 'Operator',
      label: 'Operator',
    },
    {
      value: 'Agente Especial',
      label: 'Agente Especial',
    },
    {
      value: 'Oficial de Operações',
      label: 'Oficial de Operações',
    },
    {
      value: 'Agente de Elite',
      label: 'Agente de Elite',
    },
  ];

  return (
    <S.Wrapper>
      <Helmet title="Criar Agente" />
      <S.FormWrapper>
        <div>
          <h2>Adicionar agente</h2>
        </div>

        <S.Form>
          <Input label="Nome" />
          <Input label="Telefone" />
          <Input label="Data de Nascimento" type="date" />
          <Input label="Endereço" />

          <Select
            control={control}
            options={specialties}
            label="Especialidade"
            name="specialty"
          />

          <Select
            control={control}
            options={patents}
            label="Patente"
            name="patent"
          />

          <Input label="NEX" type="number" />

          <S.BooleanFields>
            <Checkbox
              control={control}
              label="Aposentado"
              {...register('isRetired')}
            />

            <Checkbox
              control={control}
              label="Transcendido"
              {...register('isTrans')}
            />
          </S.BooleanFields>
          <div />

          <S.Actions>
            <Button variant="secondary">Cancelar</Button>

            <Button iconRight={() => <FiArrowRight />}>Adicionar agente</Button>
          </S.Actions>
        </S.Form>
      </S.FormWrapper>

      <Navigation />
    </S.Wrapper>
  );
}
