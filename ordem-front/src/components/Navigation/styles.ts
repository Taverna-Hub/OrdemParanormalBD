import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 68.8rem;
  padding: 0.8rem 1.6rem;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(0.4rem);
  border-radius: ${({ theme }) => theme.border.radius.full};

  position: fixed;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const Page = styled.a`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    width: 11.2rem;
    height: 8rem;
    color: white;

    svg {
      font-size: 2.4rem;
    }

    p {
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.semibold};
    }

    &.active ${IconWrapper} {
      background-color: ${theme.colors.purple_700};
      color: ${theme.colors.purple_500};
    }

    &.active p {
      color: ${theme.colors.purple_500};
    }
  `}
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.4rem;
  height: 3.2rem;
  border-radius: ${({ theme }) => theme.border.radius.full};
`;
