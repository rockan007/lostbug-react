import { render, screen } from '@testing-library/react';
import App from './App';

test('renders background image', () => {
  const { container } = render(<App />);
  const bgContainer = container.getElementsByClassName('content-img');
  expect(bgContainer.length).toBe(1);
});
