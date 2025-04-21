import styled, { css } from 'styled-components';

const StatusModifiers = {
  Aberta: () => css`
    background-color: oklch(27.9% 0.077 45.635);
    color: oklch(66.6% 0.179 58.318);
    border: 2px solid oklch(66.6% 0.179 58.318);
  `,
  Arquivada: () => css`
    background-color: oklch(25.8% 0.092 26.042);
    color: oklch(57.7% 0.245 27.325);
    border: 2px solid oklch(57.7% 0.245 27.325);
  `,
  Concluida: () => css`
    background-color: oklch(26.6% 0.065 152.934);
    color: oklch(62.7% 0.194 149.214);
    border: 2px solid oklch(62.7% 0.194 149.214);
  `,
};

export const Wrapper = styled.main`
  ${({ theme }) => css`
    margin: 4.8rem auto;
    max-width: ${theme.grid.container};
    width: 100%;
  `}
`;

export const MissionHeader = styled.header`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray_500};
    padding: ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius.xsmall};

    h1 {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes['4xlarge']};
    }
  `}
`;

export const Status = styled.div`
  ${({ theme, className }) => css`
    width: fit-content;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    border-radius: ${theme.border.radius.full};
    margin-bottom: ${theme.spacings.xsmall};

    ${!!className && StatusModifiers[className]}
  `}
`;

export const HeaderDetail = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const DateAndTime = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};

    margin-top: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.medium};
    color: oklch(55.4% 0.046 257.417);
  `}
`;

export const AvatarAgent = styled.div`
  ${({ theme }) => css`
    width: 5rem;
    height: 5rem;
    border-radius: ${theme.border.radius.full};
    border: 4px solid ${theme.colors.blue_900};
    background-color: ${theme.colors.red_200};
    position: relative;
    margin-left: -10px;

    &:first-child {
      margin-left: -4px;
    }
  `}
`;

export const HeaderAgents = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};

    width: fit-content;
    border: 1px solid ${theme.colors.gray_500};
    border-radius: ${theme.border.radius.xxsmall};
    padding: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.medium};
    color: oklch(55.4% 0.046 257.417);

    > div {
      display: flex;
    }
  `}
`;

export const MissionInfo = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: ${theme.spacings.small};
    grid-row-gap: ${theme.spacings.small};
    margin-top: ${theme.spacings.medium};
  `}
`;

export const InfoCard = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue_800};
    border: 1px solid ${theme.colors.gray_500};
    border-radius: ${theme.border.radius.xxsmall};
    color: oklch(55.4% 0.046 257.417);
    height: 25rem;

    > div {
      display: flex;
    }

    &:nth-child(3) {
      grid-column: span 2;
    }
  `}
`;

export const InfoCardHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};

    padding: ${theme.spacings.xsmall};
    border-bottom: 1px solid ${theme.colors.gray_500};
    font-size: ${theme.font.sizes.xsmall};

    svg {
      font-size: ${theme.font.sizes.xxlarge};
    }
  `}
`;

export const CardContent = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.medium};
  `}
`;
