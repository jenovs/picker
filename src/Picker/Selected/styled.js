import styled from 'styled-components';

import * as colors from '../../colors';

export const Delete = styled.button`
  background-color: ${colors.deleteBackground};
  border: 2px solid ${colors.deleteBackgroundHover};
  border-radius: 50%;
  color: ${colors.deleteBackgroundHover};
  cursor: pointer;
  font-weight: bold;
  height: 24px;
  padding: 0;
  position: absolute;
  right: -10px;
  top: -10px;
  width: 24px;
  transition: all 0.15s;

  &:hover {
    background-color: ${colors.deleteBackgroundHover};
    border: 2px solid ${colors.deleteBackground};
    color: ${colors.deleteBackground};
  }
`;

export const Item = styled.li`
  align-items: center;
  background-color: ${colors.background};
  color: ${colors.fontDefault};
  cursor: default;
  display: flex;
  font-size: 1.2rem;
  height: 40px;
  justify-content: center;
  margin-bottom: 14px;
  margin-right: 16px;
  padding-left: 4px;
  position: relative;
  user-select: none;
  width: 144px;

  &:nth-child(3n) {
    margin-right: 0;
  }

  @media (max-width: 500px) {
    margin-right: 0;
    width: calc(100% / 2 - 16px);

    &:nth-child(2n + 1) {
      margin-right: 16px;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0;
  margin-bottom: 1rem;
  min-height: 54px;
  padding: 0;
  width: 100%;

  @media (max-width: 500px) {
    max-width: calc(144px * 2 + 16px);
    margin: auto;
  }
`;
