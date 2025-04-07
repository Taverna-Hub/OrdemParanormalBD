import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  as?: React.ElementType;
  variant?: 'primary' | 'secondary';
  iconLeft?: () => React.ReactNode;
  iconRight?: () => React.ReactNode;
} & ButtonTypes;

export function Button({
  children,
  size = 'md',
  fullWidth = false,
  variant = 'primary',
  iconLeft,
  iconRight,
  ...rest
}: ButtonProps) {
  return (
    <S.Wrapper size={size} fullWidth={fullWidth} variant={variant} {...rest}>
      {!!iconLeft && iconLeft()}
      {!!children && <span>{children}</span>}
      {!!iconRight && iconRight()}
    </S.Wrapper>
  );
}
