import styled, { css, DefaultTheme } from 'styled-components';

import { TextFieldProps } from '.';

type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean };

export const TextareaWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.purple_800};
    border-radius: 0.8rem;
    border: 0.2rem solid ${theme.colors.gray_500};
    transition: all 0.3s;

    &:focus-within {
      border: 0.2rem solid ${theme.colors.purple_500};
    }
  `}
`;

export const Textarea = styled.textarea`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    height: 25rem;
    resize: none;

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small}
        ${theme.colors.purple_500} inset;
      filter: none;
      &::first-line {
        font-size: ${theme.font.sizes.medium};
      }
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

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.purple_500}; // change to red
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${TextareaWrapper} {
      border-color: ${theme.colors.purple_500}; // change to red
    }

    ${Label} {
      color: ${theme.colors.purple_500}; // change to red
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Textarea} {
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
