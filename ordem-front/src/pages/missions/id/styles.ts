import styled, { css } from 'styled-components';
import { Wrapper as Button } from '../../../components/Button/styles';
import { Wrapper as SelectWrapper } from '../../../components/Select/styles';

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
    border: 1px solid ${theme.colors.purple_850};
    padding: ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius.xsmall};
    background-color: ${theme.colors.midnight_900};

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
    display: flex;
    align-items: center;
    justify-content: center;

    width: 5rem;
    height: 5rem;
    border-radius: ${theme.border.radius.full};
    border: 4px solid ${theme.colors.midnight_900};
    background-color: ${theme.colors.green_600};
    color: ${theme.colors.white};
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
    border-radius: ${theme.border.radius.medium};
    padding: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.medium};
    color: ${({ theme }) => theme.colors.gray_500};

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
    background-color: ${theme.colors.midnight_900};
    border-radius: ${theme.border.radius.medium};
    border: 1px solid ${theme.colors.purple_850};
    color: ${theme.colors.white};
    min-height: 25rem;

    > div {
      display: flex;
    }

    &:nth-child(3) {
      grid-column: span 2;
    }

    &:nth-child(4) {
      grid-column: span 2;
    }

    &:nth-child(5) {
      grid-column: span 2;
    }
  `}
`;

export const InfoCardHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.xsmall};

    div {
      display: flex;
      align-items: center;
      gap: ${theme.spacings.xxsmall};
    }

    svg {
      font-size: ${theme.font.sizes.xxlarge};
    }
  `}
`;

export const CardNoAllocation = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-end;
    gap: ${theme.spacings.small};

    padding: ${theme.spacings.xsmall};

    ${SelectWrapper} {
      width: 85%;
    }

    button {
      transform: translateY(-25%);
    }
  `}
`;

export const CardContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.medium};

    ul {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;

export const Avatar = styled.div`
  ${({ theme }) => css`
    width: 5rem;
    height: 5rem;
    border-radius: ${theme.border.radius.full};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const SelectedTeam = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${theme.colors.purple_950};
    padding: ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius.medium};

    p {
      color: ${theme.colors.white};
      font-weight: ${theme.font.bold};
    }

    span {
      font-size: ${theme.font.sizes.small};
    }

    ${Avatar} {
      margin-right: ${theme.spacings.xxsmall};
      background-color: ${theme.colors.purple_500};
      color: ${theme.colors.white};

      svg {
        font-size: ${theme.font.sizes.xlarge};
      }
    }

    section {
      display: flex;
      align-items: center;
    }
  `}
`;

export const SelectedTeamsAction = styled.div`
  ${Button} {
    background-color: ${({ theme }) => theme.colors.red_900};
    color: ${({ theme }) => theme.colors.red_200};
    margin-left: auto;
  }
`;

export const AgentCardList = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: ${theme.spacings.xsmall};

    margin-top: ${theme.spacings.medium};
  `}
`;

export const AgentCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.xsmall};
    background-color: ${theme.colors.purple_950};
    border-radius: ${theme.border.radius.medium};

    ${Avatar} {
      background-color: ${theme.colors.green_600};
      color: ${theme.colors.green_200};
    }
  `}
`;

export const EvidencesList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacings.small};
`;

export const EvidenceCard = styled.div`
  background-color: #1a1a2a;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid #2a2a3a;
  transition: all 0.2s ease;
  max-width: 32rem;

  &:hover {
    border-color: #4a4a8a;
    transform: translateY(-2px);
  }
`;

export const EvidenceTitle = styled.p`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 8px;
  color: #fff;
`;

export const EvidenceDescription = styled.p`
  color: #8a8a9a;
  font-size: 14px;
  line-height: 1.4;
`;

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    background-color: ${theme.colors.purple_950};
    border-radius: ${theme.border.radius.medium};
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
    //background-color: ${({ theme }) => theme.colors.blue_800};
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
