import Image from 'next/image';
import { Title } from '@/components/Title';
import { Container } from '@/components/Container';
import { StatsCardContainer, StatsCard } from '@/components/StatsCard';

export default function Tasks() {
  return (
    <main>
      <Container>
        <StatsCardContainer>
          <StatsCard name="Total Tasks" number={100} />
          <StatsCard name="Total Days" number={100} />
          <StatsCard name="Total Hours" number={100} />
        </StatsCardContainer>
      </Container>
    </main>
  );
}
