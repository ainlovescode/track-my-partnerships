import { render, screen } from '@testing-library/react';
import App from './App';

const LINKS = ["about", "login", "sign up"]

test('renders learn react link', () => {
  render(<App />);
  for (var link of LINKS) {
        expect(screen.getByText(link)).toBeInTheDocument();
  }
});
