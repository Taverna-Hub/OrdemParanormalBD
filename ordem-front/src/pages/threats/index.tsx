import { Helmet } from 'react-helmet-async';
import * as S from './styles';
import { Navigation } from '../../components/Navigation';

export function Threats() {
  return (
    <S.Wrapper>
      <Helmet title="Ameaças" />

      <h1>Threats</h1>

      <Navigation />
    </S.Wrapper>
  );
}
