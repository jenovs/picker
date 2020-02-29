import React from 'react';

import * as S from './styled';

export default ({ items, onDelete }) => {
  return (
    <S.List>
      {items.map(label => (
        <S.Item key={label} title={label}>
          <p>{label}</p>
          <S.Delete onClick={() => onDelete(label)} title="Delete">
            X
          </S.Delete>
        </S.Item>
      ))}
    </S.List>
  );
};
