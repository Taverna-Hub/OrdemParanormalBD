import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from './styles';

type IconButtonProps = {
  icon: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function IconButton({ icon, ...rest }: IconButtonProps) {
  return (
    <S.Wrapper type="button" {...rest}>
      {icon}
    </S.Wrapper>
  );
}
