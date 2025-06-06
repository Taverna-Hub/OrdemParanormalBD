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
    background: ${theme.colors.midnight_900};
    border-radius: ${theme.border.radius.medium};
    padding: ${theme.spacings.small};
    width: 100%;
    max-width: 64rem;

    h2 {
      margin-bottom: ${theme.spacings.medium};
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`;

export const RitualForm = styled.form``;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;
