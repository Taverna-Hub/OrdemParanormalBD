import { Helmet } from 'react-helmet-async';
import * as S from './styles';
import { Navigation } from '../../components/Navigation';
import { Button } from '../../components/Button';
import { useForm } from 'react-hook-form';
import { Select } from '../../components/Select';
import { Input } from '../../components/Input';
import { ArsenalItem } from '../../components/ArsenalItem';

export function Arsenal() {
  const { control } = useForm();

  const arsenalOptions = [
    {
      label: 'Geral',
      value: 'Geral',
    },
    {
      label: 'Componente',
      value: 'Componente',
    },
    {
      label: 'Arma',
      value: 'Arma',
    },
  ];

  return (
    <S.Wrapper>
      <Helmet title="Arsenal" />

      <h1>Arsenal</h1>

      <S.SearchInterface>
        <Input placeholder="Procure um item..." />
        <div>
          <Select
            control={control}
            options={arsenalOptions}
            label="Filtro de equipamento"
            placeholder="Filtre por tipo de arma..."
            name="type"
          />
          <Button size="lg">INVENTÁRIO</Button>
        </div>
      </S.SearchInterface>

      <S.ItemsList>
        <ArsenalItem />
        <ArsenalItem />
        <ArsenalItem />
      </S.ItemsList>
      <Navigation />
    </S.Wrapper>
  );
}
