import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.2rem;
`;

export const FormWrapper = styled.section`
  width: 80%;
  background-color: ${({ theme }) => theme.colors.purple_900};
  padding: 3.2rem;
  border-radius: ${({ theme }) => theme.border.radius.xxsmall};

  > div {
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
    border-radius: ${theme.border.radius.xxsmall};

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
