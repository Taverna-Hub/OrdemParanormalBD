import styled, { css } from 'styled-components';
import { Input } from '../../../components/Input/styles';

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
    margin-top: ${theme.spacings.medium};
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Input} {
      width: 40rem;
    }
  `}
`;

export const TableContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    overflow-x: auto;
    background-color: ${theme.colors.blue_800};
    border-radius: ${theme.border.radius.xxsmall};

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 2.4rem;
    }
  `}
`;

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    min-width: 640px;
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

    &:first-child {
      color: ${({ theme }) => theme.colors.gray_500};
    }

    font-size: ${({ theme }) => theme.font.sizes.small};
    color:  ${({ theme }) => theme.colors.white};

    max-width: 100px;
    cursor: pointer;

    p {
      text-overflow: ellipsis;
      white-space: normal;
    }
  }


  &:hover {
    background-color: rgba(30, 58, 138, 0.2);
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.05);
    border-radius: 0.375rem;
    border-color: rgba(30, 58, 138, 0.2);
  }
`;
