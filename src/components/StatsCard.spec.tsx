import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StatsCard, StatsCardContainer } from './StatsCard';

describe('Component', () => {
  describe('StatsCard', () => {
    test('renders correctly', async () => {
      const { container } = render(
        <StatsCard data-testid="container" name="Data" value={100} />,
      );
      expect(container).toHaveTextContent('Data');
      expect(container).toHaveTextContent('100');
    });
  });
  describe('StatsCardContainer', () => {
    test('renders correctly', async () => {
      const { container } = render(
        <StatsCardContainer>
          <StatsCard data-testid="container" name="Data" value={100} />
        </StatsCardContainer>,
      );
      expect(container).toHaveTextContent('Data');
      expect(container).toHaveTextContent('100');
    });
  });
});
