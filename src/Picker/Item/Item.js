import React from 'react';

import * as S from './styled';

export default ({ isSelected, label, onSelect }) => {
  return (
    <S.Label title={label} isSelected={isSelected}>
      <S.Input checked={isSelected} onChange={() => onSelect(label)} />
      {label}
    </S.Label>
  );
};
