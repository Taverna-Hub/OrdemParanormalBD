import styled, { css } from 'styled-components';
import { Wrapper as Button } from '../Button/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 100%;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius.xxsmall};

    ${Button} {
      align-self: flex-end;
    }
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};

    h2 {
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.xxsmall};
    }

    p {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.gray_500};
    }
  `}
`;
