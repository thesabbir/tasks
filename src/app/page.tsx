import Image from 'next/image';
import { Title } from '@/components/Title';
import { Container } from '@/components/Container';
import { StatsCard, StatsCardContainer } from '@/components/StatsCard';
import { Header } from '../components/Header';
import Link from 'next/link';
import { Button } from '../components/Button';

export default function Home() {
  return (
    <main>
      <Header>
        <Title>Welcome to Task Management App</Title>
      </Header>

      <Container>
        <Link href="/tasks">
          <Button>Manage Tasks</Button>
        </Link>
      </Container>
    </main>
  );
}
