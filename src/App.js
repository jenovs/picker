import React from 'react';
import styled from 'styled-components';

import Picker from './Picker';

import currencyList from './currencyList';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

const App = () => {
  const handleChange = selectedItems => {
    console.log(selectedItems);
  };

  return (
    <Wrapper>
      <Picker list={currencyList} onChange={handleChange} />
    </Wrapper>
  );
};

export default App;
