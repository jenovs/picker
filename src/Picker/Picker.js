import React, { useState, useEffect } from 'react';

import Item from './Item';
import Selected from './Selected';

import * as S from './styled';

export default ({ initiallySelected = [], list, onChange }) => {
  const [selected, setSelected] = useState(initiallySelected);

  useEffect(() => {
    onChange && onChange(selected);
  }, [onChange, selected]);

  const handleSelect = label => {
    if (selected.includes(label)) {
      setSelected(selected.filter(s => s !== label));
    } else {
      setSelected([...selected, label]);
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <Selected items={selected} onDelete={handleSelect} />
      </S.Container>
      <S.Container>
        {list.map(item => (
          <Item
            key={item}
            label={item}
            onSelect={handleSelect}
            isSelected={selected.includes(item)}
          />
        ))}
      </S.Container>
    </S.Wrapper>
  );
};
