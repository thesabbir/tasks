import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Container } from './Container';

describe('Component', () => {
  describe('Container', () => {
    test('renders correctly', async () => {
      const { container } = render(
        <Container data-testid="container">
          <p>Hello</p>
        </Container>,
      );
      expect(container).toHaveTextContent('Hello');
    });
  });
});
