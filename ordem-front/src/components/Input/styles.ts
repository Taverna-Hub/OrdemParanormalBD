import styled, { css, DefaultTheme } from 'styled-components';

import { TextFieldProps } from '.';

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>;

type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean };

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.purple_800};
    border-radius: 0.8rem;
    border: 0.2rem solid ${theme.colors.midnight_500};
    transition: all 0.3s;

    &:focus-within {
      border: 0.2rem solid ${theme.colors.purple_500};
    }
  `}
`;

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: ${iconPosition === 'right' ? `calc(100% - 2.2rem)` : `100%`};
    height: 4.8rem;

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small}
        ${theme.colors.purple_500} inset;
      filter: none;
      &::first-line {
        font-size: ${theme.font.sizes.medium};
      }
    }

       &::placeholder {
        color: ${theme.colors.gray_500};
      }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
    cursor: pointer;
    display: block;
    margin-bottom: 0.8rem;
  `}
`;

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    color: ${theme.colors.gray_500};
    order: ${iconPosition === 'right' ? 1 : 0};
    margin-${iconPosition}: ${theme.spacings.xxsmall};


    & > svg {
      width: 2.2rem;
      height: 100%;
    }
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red_200}; // change to red
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red_200}; // change to red
    }

    ${Icon},
    ${Label} {
      color: ${theme.colors.red_200}; // change to red
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.white};

      &::placeholder {
        color: currentColor;
      }
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`;
