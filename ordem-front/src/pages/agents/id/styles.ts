import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.large};
  padding: 3.2rem;
`;

export const FormWrapper = styled.section`
  width: 80%;
  background-color: ${({ theme }) => theme.colors.midnight_900};
  padding: 3.2rem;
  border-radius: ${({ theme }) => theme.border.radius.medium};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.spacings.medium};

    h2 {
      color: ${({ theme }) => theme.colors.white};
      font-size: 3.2rem;
    }
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${({ theme }) => theme.spacings.medium};
  grid-row-gap: ${({ theme }) => theme.spacings.medium};
`;

export const BooleanFields = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 1.6rem;
`;

export const TableContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    overflow-x: auto;
    overflow-y: auto;
    background-color: ${theme.colors.midnight_900};
    border-radius: ${theme.border.radius.medium};
    max-height: calc(100vh - 260px);

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 2.4rem;
    }

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.gray_500};
      border-radius: 20px;
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
    //position: sticky;
    //top: 0;
    //z-index: 1;
    //background-color: ${({ theme }) => theme.colors.midnight_900};
    text-align: left;
    color: #9ca3af;
    font-size: ${({ theme }) => theme.font.sizes.medium};
    //padding-top: 2rem;
    padding-bottom: 0.5rem;
  }
`;

export const TableRow = styled.tr`
  ${({ theme }) => css`
    height: 4.8rem;
    transition: background-color 0.2s;

    td {
      &:first-child {
        color: ${({ theme }) => theme.colors.gray_500};
      }

      font-size: ${({ theme }) => theme.font.sizes.small};
      color: ${({ theme }) => theme.colors.white};

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

    .status {
      padding: ${theme.spacings.xxsmall};
      border-radius: ${theme.border.radius.full};
      width: fit-content;
      font-weight: ${theme.font.bold};

      &.Aberta {
        border: 1px solid ${theme.colors.yellow_200};
        background-color: ${theme.colors.yellow_600};
        color: ${theme.colors.yellow_200};
      }

      &.Arquivada {
        border: 1px solid ${theme.colors.red_200};
        background-color: ${theme.colors.red_600};
        color: ${theme.colors.red_200};
      }

      &.Concluida {
        border: 1px solid ${theme.colors.green_200};
        background-color: ${theme.colors.green_600};
        color: ${theme.colors.green_200};
      }
    }
  `}
`;
