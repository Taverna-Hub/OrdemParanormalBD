import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 4rem;
    height: 4rem;
    border-radius: ${theme.border.radius.xxsmall};

    background-color: ${theme.colors.purple_500};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    border: none;
    cursor: pointer;
  `}
`;
