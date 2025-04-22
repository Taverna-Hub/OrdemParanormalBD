import { ReactNode } from 'react';
import * as S from './styles';

interface IconButtonProps {
  icon: ReactNode;
}

export function IconButton({ icon }: IconButtonProps) {
  return <S.Wrapper type="button">{icon}</S.Wrapper>;
}
