'use client';

import styled from 'styled-components';
import { Title } from './Title';

const CardWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  background-color: #dff0d8;
`;

const StatsNumber = styled.p`
  font-size: 2.5rem;
  text-align: center;
  font-weight: 700;
  color: #534fbf;
`;

type StatsProps = {
  name: string;
  number: number;
};

export const StatsCardContainer = styled.div`
  display: flex;
`;

export const StatsCard: React.FC<StatsProps> = ({ name, number }) => {
  return (
    <CardWrapper>
      <Title>{name}</Title>
      <StatsNumber>{number}</StatsNumber>
    </CardWrapper>
  );
};
