import styled from '@emotion/styled';

export const Container = styled.div<{ bg: string }>`
  display: flex;
  padding: 2px 4px;
  border-radius: 4px;
  background-color: ${({ bg }) => bg};
  cursor: pointer;
  position: relative;
`;
