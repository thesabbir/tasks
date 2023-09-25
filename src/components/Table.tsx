'use client';

import styled from 'styled-components';

export const TableContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
`;
export const Table = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  width: 75%;
`;
export const TableRow = styled.tr`
  border: 3px solid grey;
  color: #484848;
  padding: 1px;
`;
export const TableHead = styled.th`
  border: 3px solid grey;
  color: #484848;
  padding: 10px;
  letter-spacing: 1px;
  &:nth-child(2) {
    width: 24%;
  }
  &:nth-child(3) {
    width: 15%;
  }
`;
export const TableCell = styled.td`
  border: 3px solid grey;
  color: #484848;
  padding: 1px;
`;
