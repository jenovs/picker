import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Item from './Item';

test('renders unchecked Item element with label that can be checked', () => {
  const onSelectMock = jest.fn();

  const { getByText, getByLabelText } = render(
    <Item label="EUR" onSelect={onSelectMock} />
  );

  expect(getByText(/eur/i)).toBeVisible();
  expect(getByLabelText(/eur/i)).not.toBeChecked();

  fireEvent.click(getByText(/eur/i));

  expect(onSelectMock).toHaveBeenCalledWith('EUR');
});

test('renders checked Item element with label that can be unchecked', () => {
  const onSelectMock = jest.fn();

  const { getByText, getByLabelText } = render(
    <Item label="EUR" isSelected onSelect={onSelectMock} />
  );

  expect(getByText(/eur/i)).toBeVisible();
  expect(getByLabelText(/eur/i)).toBeChecked();

  fireEvent.click(getByText(/eur/i));

  expect(onSelectMock).toHaveBeenCalledWith('EUR');
});
