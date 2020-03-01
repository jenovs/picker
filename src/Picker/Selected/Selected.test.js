import React from 'react';
import { fireEvent, render, within } from '@testing-library/react';
import Selected from './Selected';

const currencyList = ['EUR', 'USD', 'GBP'];

test('renders list of currencies', () => {
  const { queryAllByText } = render(<Selected items={currencyList} />);

  expect(queryAllByText(/eur/i).length).toBe(1);
  expect(queryAllByText(/usd/i).length).toBe(1);
  expect(queryAllByText(/gbp/i).length).toBe(1);
  expect(queryAllByText(/czk/i).length).toBe(0);
});

test('handles click on delete button', () => {
  const onDeleteMock = jest.fn();

  const { getByTitle } = render(
    <Selected items={currencyList} onDelete={onDeleteMock} />
  );

  fireEvent.click(within(getByTitle(/eur/i)).getByText(/x/i));

  expect(onDeleteMock).toHaveBeenCalledWith('EUR');
});
