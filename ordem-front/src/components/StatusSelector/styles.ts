import styled, { css } from 'styled-components';

export const StatusContainer = styled.div`
  position: relative;
  display: inline-block;
  user-select: none;
`;

export const StatusBadge = styled.button<{ bgColor: string }>`
  ${({ theme }) => css`
    background-color: ${(props) => props.bgColor};
    color: ${theme.colors.white};
    border: none;
    border-radius: ${theme.border.radius.full};
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s ease;

    &:hover {
      filter: brightness(1.1);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
    }
  `}
`;

export const DropdownMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  background-color: #1e1e2d;
  border-radius: 8px;
  width: 200px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 100;
  overflow: hidden;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transform: ${(props) =>
    props.isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  pointer-events: ${(props) => (props.isOpen ? 'all' : 'none')};
  transition: all 0.2s ease;
`;

export const OptionItem = styled.div<{ isActive: boolean }>`
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color 0.2s;
  background-color: ${(props) =>
    props.isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const ColorDot = styled.span<{ $color: string }>`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
  margin-right: 10px;
`;

export const OptionLabel = styled.span`
  flex-grow: 1;
  color: #fff;
  font-size: 14px;
`;
