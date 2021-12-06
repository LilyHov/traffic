import React from "react";
import { render, screen } from "@testing-library/react";
import  userEvent  from "@testing-library/user-event";
import App from "./App";

test('renders page details', () => {
  render(<App />);
  const linkElement = screen.getByText(/Data Visualisation and Analytics/i);
  expect(linkElement).toBeInTheDocument();
});

it('should correctly set default option', () => {
    render(<App />)
    // @ts-ignore
    expect(screen.getByRole('option', { name: 'Clicks' }).selected).toBe(true)
})

it('should display the correct number of options', () => {
    render(<App />)
    expect(screen.getAllByRole('option').length).toBe(9)
})

it('should allow user to change metrics', () => {
    render(<App />)
    userEvent.selectOptions(
        // Find the select element, like a real user would.
        screen.getByTestId('select'),
        // Find and select the Impression option, like a real user would.
        screen.getByRole('option', { name: 'Impression' }),
    )
    // @ts-ignore
    expect(screen.getByRole('option', { name: 'Impression' }).selected).toBe(true)
})


