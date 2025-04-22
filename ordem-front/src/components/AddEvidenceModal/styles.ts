import styled, { css } from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.blue_800};
    border-radius: ${theme.border.radius.xxsmall};
    padding: ${theme.spacings.small};
    width: 100%;
    max-width: 40rem;

    h2 {
      margin-bottom: 1rem;
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.large};
    }

    p {
      color: #374151;
      margin-bottom: 2rem;
    }
  `}
`;

export const EvidenceForm = styled.form``;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;
