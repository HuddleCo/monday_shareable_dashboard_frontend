import { render, screen } from '@testing-library/react';
import App from './App';

test('renders an email field', () => {
  render(<App />);
  const linkElement = screen.getByText(/Email Address/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders password field', () => {
  render(<App />);
  const linkElement = screen.getByText(/Password/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders a url field', () => {
  render(<App />);
  const linkElement = screen.getByText(/Dashboard Url/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders a submit button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sign In/i);
  expect(linkElement).toBeInTheDocument();
});
