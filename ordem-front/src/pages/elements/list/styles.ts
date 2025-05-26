import styled, { css } from 'styled-components';
import { Input } from '../../../components/Input/styles';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    margin: 4.8rem auto;
    max-width: ${theme.grid.container};
    width: 100%;

    h1 {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes['3xlarge']};
    }
  `}
`;

export const SearchInterface = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Input} {
      width: 40rem;
    }
  `}
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const GridCard = styled.div`
  position: relative;
  overflow: hidden;
  
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  /* min-height: 220px; */
  height: 100dvh;

  img {
    position: absolute;
    top: 0;
    z-index: 10;
  }
  
  &:hover{
    transform: scale(1.05);
  }

  &.Medo {
    background: linear-gradient(to bottom right, #5A7CA2 50%, #1B273A 100%);
  }
  
  &.Morte {
    background: linear-gradient(to bottom right, #27262C 50%, #151418 100%);
  }

  &.Sangue {
    background: linear-gradient(to bottom right, #6C161B 50%, #271513 100%);
  }

  &.Conhecimento {
    background: linear-gradient(to bottom right, #8F6603 50%, #291D01 100%);
  }
  
  &.Energia {
    background: linear-gradient(to bottom right, #44248B 50%, #1C182B 100%);
  }

  &.Medo:hover {
    box-shadow: 0 10px 25px rgba(90, 124, 162, 0.4);
  }

  &.Morte:hover {
    box-shadow: 0 10px 25px rgba(39, 38, 44, 0.4);
  }

  &.Sangue:hover {
    box-shadow: 0 10px 25px rgba(108, 22, 27, 0.4);
  }

  &.Conhecimento:hover {
    box-shadow: 0 10px 25px rgba(143, 102, 3, 0.4);
  }

  &.Energia:hover {
    box-shadow: 0 10px 25px rgba(68, 36, 139, 0.4);
  }


`;

export const CardTitle = styled.h2`
  padding: 20px;
  
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: 700;
  color: #f8fafc;
`;

export const CardDescription = styled.p`
  padding: 0 20px;
  color: #e2e8f0;
  
  font-size: ${({ theme }) => theme.font.sizes.small};
  line-height: 1.4;
  
  flex: 1;
`;

export const CardAdvantage = styled.p`
  margin: 16px 20px 20px 20px;
  
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  font-family: 'Fira Code', monospace;
  
  background-color: rgba(255, 255, 255, 0.05);
  padding: 10px;
  border-radius: 8px;
  color: #cbd5e1;
  
  white-space: pre-wrap;
`;