import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 95px;
  height: 88px;
  padding: 6px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-left: 1px solid #e8e8e8;
  background: #fff;
  &:last-child {
    border-right: 1px solid #e8e8e8;
  }
`;

export const DateText = styled.span<{ color?: string }>`
  color: ${({ color }) => color || '#878787'};
  font-size: 14px;
  font-weight: 500;
`;
