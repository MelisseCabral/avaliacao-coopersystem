
/* global __DEV__ */
/**
 * @format
 */

import { act, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import App from './../App.tsx';

 test('Espera carregar os investimentos', () => {
  act( () => {
    const { getByText } = render(<App />);

    waitFor(() => getByText('Investimento I'));
    fireEvent.press(getByText('Investimento I'));

    expect(getByText('Dados do Invetimento')).toBeTruthy();
  })
});