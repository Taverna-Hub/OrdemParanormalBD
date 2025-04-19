import { Helmet } from 'react-helmet-async';
import * as S from './styles';
import { Navigation } from '../../../components/Navigation';

export function Teams() {
  return (
    <S.Wrapper>
      <Helmet title="Equipes" />
      <h1>Teams</h1>

      <Navigation />
    </S.Wrapper>
  );
}
