import styled from 'styled-components';

import * as colors from '../colors';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  min-height: 48px;
`;

export const Wrapper = styled.div`
  border: 1px solid ${colors.border};
  border-radius: 6px;
  box-shadow: 1px 1px 4px ${colors.border};
  display: flex;
  flex-direction: column;
  max-width: calc(150px * 3 + 16px * 2 + 8px * 2 + 2px);
  padding: 24px 16px;
`;
