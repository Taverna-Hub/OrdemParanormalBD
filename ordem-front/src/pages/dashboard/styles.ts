import styled, { css } from 'styled-components';

export type DashboardIconProps = {
  backgroundColor: string;
};

export const Wrapper = styled.main`
  ${({ theme }) => css`
    margin: 4.8rem auto calc(9.6rem + 6.4rem);
    max-width: ${theme.grid.container};
    width: 100%;

    h1 {
      color: white;
      font-size: ${theme.font.sizes['3xlarge']};
    }
    
  `}
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 4rem;
  
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  div p {
    color: ${({ theme }) => theme.colors.white}; // ou a cor desejada
    font-size: ${({ theme }) => theme.font.sizes.small};
  }
`;

export const TopGraphsWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const TopGraphCard = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue_800};
    border-radius: ${theme.border.radius.xxsmall};
    border: 1px solid ${theme.colors.slate_700};
    padding: ${theme.spacings.xsmall};
    width: 40rem;
    height: 12.8rem;

    header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      span {
        font-size: ${theme.font.sizes.small};
        color: ${theme.colors.gray_500};
      }
    }

    h2 {
      font-size: ${theme.font.sizes.xxlarge};
      color: ${theme.colors.white};
    }

    footer {
      font-size: ${theme.font.sizes.small};
      margin-top: ${theme.spacings.xxsmall};

      &.positive {
        color: ${theme.colors.green_500};
      }

      &.negative {
        color: ${theme.colors.red_600};
      }

      &.neutral {
        color: ${theme.colors.yellow_200};
      }
    }
  `}
`;

export const Icon = styled.div<DashboardIconProps>`
  ${({ theme, backgroundColor }) => css`
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${backgroundColor};
    border-radius: ${theme.border.radius.xxsmall};
    font-size: ${theme.font.sizes.xlarge};
  `}
`;

export const GridWrapper = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: ${theme.spacings.small};
    grid-column-gap: ${theme.spacings.small};
  `}
`;

export const RankAgentsTableContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    overflow-x: auto;
    background-color: ${theme.colors.blue_800};
    backdrop-filter: blur(10px);
    border-radius: ${theme.border.radius.xxsmall};
    width: 100%;

    div {
      padding: 1.6rem 2.4rem;

      h2 {
        font-size: ${theme.font.sizes.large};
        color: ${theme.colors.white};
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

    &:first-child {
      color: ${({ theme }) => theme.colors.gray_500};
    }

    &:nth-child(2) {
      color: ${({ theme }) => theme.colors.white};
      font-weight: ${({ theme }) => theme.font.medium};
    }

    &.success {
      color: ${({ theme }) => theme.colors.green_500};
      font-weight: ${({ theme }) => theme.font.bold};
    }

    &.fail {
      color: ${({ theme }) => theme.colors.gray_500};
      font-weight: ${({ theme }) => theme.font.bold};
    }
  }

  &:hover {
    background-color: rgba(64, 64, 64, 0.1);
    border-radius: 0.375rem;
  }
`;

export const GraphContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    background-color: ${theme.colors.blue_800};
    border-radius: ${theme.border.radius.xxsmall};
    min-height: 400px;
  `}
`;
