import styled, { css } from 'styled-components';
import { Input as InputWrapper } from '../../components/Input/styles';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    margin: 4.8rem auto;
    max-width: ${theme.grid.container};
    width: 100%;

    h1 {
      color: white;
      font-size: ${theme.font.sizes['3xlarge']};
    }
  `}
`;

export const SearchInterface = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    margin-top: ${theme.spacings.medium};

    ${InputWrapper} {
      width: 40rem;
    }

    > div {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: ${theme.spacings.small};
    }
  `}
`;

export const ItemsList = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};

    margin-top: ${theme.spacings.medium};
  `}
`;
