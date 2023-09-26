import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './Header';

describe('Component', () => {
  describe('Header', () => {
    test('renders correctly', async () => {
      const { container } = render(
        <Header data-testid="container">
          <p>Header</p>
          <p>Menu</p>
        </Header>,
      );
      expect(container).toHaveTextContent('Menu');
    });
  });
});
