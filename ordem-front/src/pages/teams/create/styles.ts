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
    padding: 2rem;
`;

export const GridColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const GridCard = styled.div`
    background-color: #111827;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    color: white;

    padding: 2.4rem;
    border-radius: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    max-height: 500px;
    overflow-y: auto;
      scrollbar-width: thin;

    p {
        textAlign: 'center';
        marginTop: '2rem';
    }

    div {
        display: 'flex';
        justifyContent: 'space-between';
        
    }
`;

export const GridButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 2rem;
`;