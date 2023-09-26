import { render, screen } from '@testing-library/react';
import { Button, ActionButton } from './Button';

describe('Button components', () => {
  describe('Button', () => {
    test('renders correctly', async () => {
      render(<Button>Click Me</Button>);
      await screen.findByRole('button');
      expect(screen.getByRole('button')).toHaveTextContent('Click Me');
    });
  });
  describe('ActionButton', () => {
    test('renders correctly', async () => {
      render(<ActionButton>Delete Me</ActionButton>);
      await screen.findByRole('button');
      expect(screen.getByRole('button')).toHaveTextContent('Delete Me');
    });
  });
});
