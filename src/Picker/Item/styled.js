import styled from 'styled-components';

import * as colors from '../../colors';

export const Input = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
`;

export const Label = styled.label`
  align-items: center;
  background-color: ${p =>
    p.isSelected ? colors.backgroundSelected : colors.background};
  border: 1px solid ${colors.border};
  color: ${colors.font};
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  height: 40px;
  justify-content: flex-start;
  margin-bottom: 8px;
  padding-left: 4px;
  user-select: none;
  width: 150px;

  &::before {
    content: '${p => (p.isSelected ? 'X' : '')}';
    align-items: center;
    border: 1px solid ${colors.border};
    border-radius: 4px;
    color: red;
    display: flex;
    font-size: 16px;
    height: 16px;
    justify-content: center;
    margin-right: 8px;
    width: 16px;
  }

  &:hover {
    background-color: ${colors.backgroundHover};
  }
`;
