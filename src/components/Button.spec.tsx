import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button, ActionButton } from './Button';

describe('Component', () => {
  describe('Button', () => {
    test('renders correctly', async () => {
      render(<Button>Click Me</Button>);
      await screen.findByRole('button');
      expect(screen.getByRole('button')).toHaveTextContent('Click Me');
    });
    test('renders primary variant correctly', async () => {
      render(<Button $primary>Add</Button>);
      await screen.findByRole('button');
      expect(screen.getByRole('button')).toHaveTextContent('Add');
    });
  });
  describe('ActionButton', () => {
    test('renders correctly', async () => {
      render(<ActionButton>Edit Me</ActionButton>);
      await screen.findByRole('button');
      expect(screen.getByRole('button')).toHaveTextContent('Edit Me');
    });
    test('renders danger variant correctly', async () => {
      render(<ActionButton $danger>Delete Me</ActionButton>);
      await screen.findByRole('button');
      expect(screen.getByRole('button')).toHaveTextContent('Delete Me');
    });
  });
});
