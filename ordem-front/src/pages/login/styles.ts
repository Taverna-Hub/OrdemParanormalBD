import styled, { css } from 'styled-components';
import { Wrapper as Button } from '../../components/Button/styles';
import { Input } from '../../components/Input/styles';
import { hexToRgba } from '../../utils/hexToRgba';

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.medium};
  height: 100vh;
`;

export const LoginForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.medium};

    background-color: #111327;
    border-radius: ${theme.border.radius.medium};
    border: 1px solid ${theme.colors.midnight_500};

    width: 58rem;
    gap: 1rem;

    header {
      text-align: center;
      margin-bottom: ${theme.spacings.small};

      h2 {
        color: ${theme.colors.white};
        font-size: ${theme.font.sizes.xxlarge};
        margin-bottom: ${theme.spacings.xxsmall};
      }

      p {
        color: ${theme.colors.gray_500};
        font-size: ${theme.font.sizes.small};
      }
    }

    ${Input} {
      height: 4rem;
    }

    ${Button} {
      margin-top: ${theme.spacings.large};
    }
  `}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 6.4rem;
    height: 6.4rem;
    border-radius: ${theme.border.radius.xsmall};
    background-color: ${theme.colors.teal_700};
    color: ${theme.colors.white};
    transition: all 0.3s;

    svg {
      font-size: calc(${theme.font.sizes['4xlarge']} - 0.8rem);
    }

    &:hover {
      box-shadow: ${hexToRgba(`${theme.colors.teal_700}`, 0.3)} 0px 8px 24px,
        ${hexToRgba(`${theme.colors.teal_700}`, 0.3)} 0px 16px 56px,
        ${hexToRgba(`${theme.colors.teal_700}`, 0.3)} 0px 24px 80px;
    }
  `}
`;

export const LoginFooter = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.gray_500};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;
