import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.2rem;
  gap: 3.2rem;
`;

export const FormWrapper = styled.section`
  width: 50vw;
  min-width: 400px;
  max-width: 700px;
  min-height: 650px;
  background-color: ${({ theme }) => theme.colors.midnight_900};
  padding: 3.2rem;
  border-radius: ${({ theme }) => theme.border.radius.medium};

  > div {
    margin-bottom: ${({ theme }) => theme.spacings.medium};

    h2 {
      color: ${({ theme }) => theme.colors.white};
      font-size: 3.2rem;
    }

    h3 {
      padding: 1.6rem;
      color: ${({ theme }) => theme.colors.white};
      font-size: 2.4rem;
    }
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${({ theme }) => theme.spacings.medium};
  grid-row-gap: ${({ theme }) => theme.spacings.medium};
`;

export const MembersList = styled.div``;

export const Member = styled.div`
  color: white;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 1.6rem;
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    .inputsection {
      display: grid;
      grid-template-columns: 15fr 1fr;
      align-items: flex-end;
      gap: ${theme.spacings.xxsmall};

      button {
        transform: translateY(-12%);
      }
    }
  `}
`;

export const NamesListWrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    border: 1px solid ${theme.colors.gray_500};
    margin-top: ${theme.spacings.small};
    border-radius: ${theme.border.radius.medium};

    h2 {
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.white};
    }
  `}
`;

export const ListWrapper = styled.div``;

export const List = styled.ul`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall} ${theme.spacings.small}
      ${theme.spacings.xxsmall};
  `}
`;

export const ListItem = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    margin-top: ${theme.spacings.xxsmall};
  `}
`;

export const TableContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacings.medium};
  overflow: auto;
  max-height: 340px;
  background-color: ${({ theme }) => theme.colors.midnight_900};
  border-radius: ${({ theme }) => theme.border.radius.medium};

  div {
    padding: 2.4rem;
  }
`;

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    min-width: 240px;
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
`;
