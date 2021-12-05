import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page details', () => {
  render(<App />);
  const linkElement = screen.getByText(/Data Visualisation and Analytics/i);
  expect(linkElement).toBeInTheDocument();
});
