'use client';

import styled from 'styled-components';

export const Button = styled.button<{ $primary?: boolean }>`
  background: ${(props) => (props.$primary ? '#534fbf' : 'white')};
  color: ${(props) => (props.$primary ? 'white' : '#534fbf')};
  font-size: 1rem;
  margin: 1rem;
  padding: 0.5rem 1rem;
  border: 2px solid #534fbf;
  border-radius: 3px;

  &:hover {
    cursor: pointer;
  }
`;
