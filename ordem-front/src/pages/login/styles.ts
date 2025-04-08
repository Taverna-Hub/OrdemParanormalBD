import styled from 'styled-components';
import { Wrapper as Button } from '../../components/Button/styles';
import { Input } from '../../components/Input/styles';

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LoginForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.border.radius.xxsmall};

  height: 73rem;
  width: 58rem;
  gap: 1rem;

  ${Input} {
    width: 32rem;
    height: 4rem;
  }

  ${Button} {
    margin-top: ${({ theme }) => theme.spacings.large};
    width: 32rem;
  }

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.blue_200};
    border-radius: ${({ theme }) => theme.border.radius.xlg};

    width: 26.5rem;
    height: 26.5rem;

    margin-bottom: ${({ theme }) => theme.spacings.large};

    svg {
      font-size: 25rem;
      color: ${({ theme }) => theme.colors.blue_600};
    }
  }
`;
