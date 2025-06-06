import Select from 'react-select';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const Label = styled.label`
  ${({ theme }) => css`
    display: block;

    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.medium};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const StyledSelect = styled(Select).attrs({
  classNamePrefix: 'react-select',
})`
  ${({ theme }) => css`
    .react-select__control {
      border: 2px solid ${theme.colors.midnight_500};
      border-radius: ${theme.border.radius.medium};
      padding: ${theme.spacings.xxsmall};
      box-shadow: none;
      cursor: pointer;
      background-color: ${theme.colors.purple_950};

      font-size: ${theme.font.sizes.small};

      &:hover {
        border-color: ${theme.colors.purple_500};
      }
    }

    .react-select__menu {
      border-radius: ${theme.border.radius.medium};
      padding: ${theme.spacings.xxsmall} 0;
    }

    .react-select__option {
      display: flex;
      align-items: center;
      padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
      background-color: ${theme.colors.white};
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.blue_900};

      &:hover {
        background-color: ${theme.colors.purple_500};
      }
    }

    .react-select__option--is-selected {
      background-color: ${theme.colors.purple_500};
    }

    .react-select__dropdown-indicator {
      color: ${theme.colors.white};
    }

    .react-select__placeholder {
      color: ${theme.colors.white};
    }

    .react-select__single-value {
      color: ${theme.colors.white};
    }

    .react-select__input-container input {
      color: ${theme.colors.white} !important;
    }
  `}
`;
