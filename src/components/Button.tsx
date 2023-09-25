'use client';

import styled from 'styled-components';

export const Button = styled.button<{ $primary?: boolean }>`
  background: ${(props) => (props.$primary ? '#534fbf' : 'white')};
  color: ${(props) => (props.$primary ? 'white' : '#534fbf')};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: 2px solid #534fbf;
  border-radius: 3px;
  height: 44px;
  &:hover {
    cursor: pointer;
  }
`;

export const ActionButton = styled.button<{ $danger?: boolean }>`
  background: transparent;
  text-decoration: underline;
  color: ${(props) => (props.$danger ? '#c54b4b' : '#534fbf')};
  font-size: 0.9rem;
  padding: 0.3rem 0.8rem;
  border: none;
  height: 40px;
  &:hover {
    cursor: pointer;
  }
`;
