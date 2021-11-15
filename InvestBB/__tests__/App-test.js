/**
 * @format
 */

import { render } from '@testing-library/react-native';
import 'react-native';
import App from '../App';

it("Click on investimento", () => {
  const {getAllByText, getAllByPlaceholderText} = render(<App  />);

  expect(getAllByText('Investimento')).toBeTruthy();
});
