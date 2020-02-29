import React from 'react';
import { fireEvent, render, within } from '@testing-library/react';
import Picker from './Picker';

const currencyList = ['EUR', 'USD', 'GBP'];

test('renders list of currencies', () => {
  const { queryAllByText } = render(<Picker list={currencyList} />);

  expect(queryAllByText(/eur/i).length).toBe(1);
  expect(queryAllByText(/usd/i).length).toBe(1);
  expect(queryAllByText(/gbp/i).length).toBe(1);
  expect(queryAllByText(/czk/i).length).toBe(0);
});

test('renders list of currencies and initally selected', () => {
  const { getByLabelText, queryAllByText } = render(
    <Picker list={currencyList} initiallySelected={['GBP']} />
  );

  expect(queryAllByText(/eur/i).length).toBe(1);
  expect(getByLabelText(/eur/i)).not.toBeChecked();

  expect(queryAllByText(/usd/i).length).toBe(1);
  expect(getByLabelText(/usd/i)).not.toBeChecked();

  expect(queryAllByText(/gbp/i).length).toBe(2);
  expect(getByLabelText(/gbp/i)).toBeChecked();

  expect(queryAllByText(/czk/i).length).toBe(0);
});

test('adds/removes clicked currency to/from selected list', () => {
  const { getByText, queryAllByText } = render(<Picker list={currencyList} />);

  expect(queryAllByText(/eur/i).length).toBe(1);

  fireEvent.click(getByText(/eur/i));

  expect(queryAllByText(/eur/i).length).toBe(2);

  fireEvent.click(queryAllByText(/eur/i)[1]);

  expect(queryAllByText(/eur/i).length).toBe(1);
});

test('removes item from selected list when `x` clicked', () => {
  const { getByLabelText, getByText, queryAllByText, queryAllByTitle } = render(
    <Picker list={currencyList} />
  );

  fireEvent.click(getByText(/eur/i));
  fireEvent.click(getByText(/gbp/i));

  expect(queryAllByText(/eur/i).length).toBe(2);
  expect(getByLabelText(/eur/i)).toBeChecked();

  expect(queryAllByText(/gbp/i).length).toBe(2);
  expect(getByLabelText(/gbp/i)).toBeChecked();

  const xButton = within(queryAllByTitle(/eur/i)[0]).getByText(/x/i);

  fireEvent.click(xButton);

  expect(queryAllByText(/eur/i).length).toBe(1);
  expect(getByLabelText(/eur/i)).not.toBeChecked();

  expect(queryAllByText(/gbp/i).length).toBe(2);
  expect(getByLabelText(/gbp/i)).toBeChecked();
});
