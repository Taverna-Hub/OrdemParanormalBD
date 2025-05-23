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
    border-radius: ${theme.border.radius.medium};
    padding: ${theme.spacings.small};
    width: 100%;
    max-width: 64rem;

    h2 {
      margin-bottom: ${theme.spacings.medium};
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xlarge};
    }

    p {
      color: #374151;
      margin-bottom: 2rem;
    }
  `}
`;

export const ThreatMissionForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.6rem;
  margin-top: 2.4rem;
`;
