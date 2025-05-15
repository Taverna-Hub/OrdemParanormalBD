import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    margin: 4.8rem auto;
    max-width: ${theme.grid.container};
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: ${theme.spacings.medium};
    grid-column-gap: ${theme.spacings.medium};

    h1 {
      color: white;
      font-size: ${theme.font.sizes['3xlarge']};
    }
  `}
`;

export const RankAgentsTableContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    overflow-x: auto;
    background-color: rgba(255, 255, 255, 1);
    border-radius: ${theme.border.radius.xxsmall};
    width: 100%;

    div {
      padding: 1.6rem 2.4rem;

      h2 {
        font-size: ${theme.font.sizes.large};
        color: ${theme.colors.blue_900};
      }

      p {
        margin-top: ${theme.spacings.xxsmall};
        font-size: ${theme.font.sizes.small};
        color: ${theme.colors.gray_500};
      }
    }
  `}
`;

export const RankAgentsTable = styled.table`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
  `}
`;

export const TableHead = styled.thead`
  & tr {
    border-bottom: 1px solid #333;
  }

  & th {
    text-align: left;
    color: #9ca3af;
    font-size: ${({ theme }) => theme.font.sizes.medium};
    padding-bottom: 0.5rem;
  }
`;

export const TableRow = styled.tr`
  height: 4rem;
  transition: background-color 0.2s;

  td {
    font-size: ${({ theme }) => theme.font.sizes.small};
  }

  &:hover {
    background-color: rgba(64, 64, 64, 0.1);
    border-radius: 0.375rem;
  }
`;

export const GraphContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    background-color: rgba(255, 255, 255, 1);
    border-radius: ${theme.border.radius.xxsmall};
    min-height: 400px;
  `}
`;
