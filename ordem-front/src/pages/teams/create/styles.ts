import styled, { css } from 'styled-components';

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

export const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: ${({ theme }) => theme.spacings.small};
`;

export const GridColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const GridCard = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue_800};
    padding: 1.5rem;
    border-radius: ${theme.border.radius.xsmall};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: ${theme.colors.white};

    padding: 2.4rem;
    border-radius: 1.2rem;
    display: flex;
    flex-direction: column;

    h2 {
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`;

export const TeamBasicInfo = styled(GridCard)`
  ${({ theme }) => css`
    gap: ${theme.spacings.xsmall};
  `}
`;

export const TeamStatistics = styled(GridCard)`
  ${({ theme }) => css`
    gap: ${theme.spacings.xsmall};
  `}
`;

export const TeamSelectAgents = styled(GridCard)`
  max-height: 500px;
  overflow-y: auto;
  scrollbar-width: thin;

  h2 {
    margin-bottom: ${({ theme }) => theme.spacings.small};
  }
`;

export const AgentsHeader = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 1.6rem 0 0.8rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_500};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.sizes.small};

  margin-top: ${({ theme }) => theme.spacings.xsmall};
`;

export const GridButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`;

export const AgentCard = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    padding: ${theme.spacings.xsmall} 0;
    border-bottom: 1px solid #2c2f3b;

    h3 {
      font-size: ${theme.font.sizes.large};
      margin-bottom: 0.4rem;
    }

    p {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.gray_500};
    }
  `}
`;

export const Label = styled.label`
  margin-left: ${({ theme }) => theme.spacings.xsmall};
`;
