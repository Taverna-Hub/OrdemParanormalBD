import { Button } from '../Button';
import * as S from './styles';

export function ArsenalItem() {
  return (
    <S.Wrapper>
      <S.Header>
        <h2>Espada</h2>
        <p>Uma espada muito legal que faz fiufiu</p>
      </S.Header>

      <Button>Adicionar</Button>
    </S.Wrapper>
  );
}
