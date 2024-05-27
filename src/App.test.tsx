import React from 'react';
import { render } from '@testing-library/react';
import {App1} from "./additionaltasks/src/App";
// import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App1 />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
