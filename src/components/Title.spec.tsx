import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Title } from './Title';

describe('Component', () => {
  describe('Title', () => {
    test('renders correctly', async () => {
      const { container } = render(<Title data-testid="title">Hello</Title>);
      expect(container).toHaveTextContent('Hello');
    });
  });
});
