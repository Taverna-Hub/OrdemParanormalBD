import { Helmet } from 'react-helmet-async';
import * as S from './styles';
import { Navigation } from '../../components/Navigation';

export function Missions() {
  return (
    <S.Wrapper>
      <Helmet title="Missões" />
      <h1>Missions</h1>

      <Navigation />
    </S.Wrapper>
  );
}
