import { css } from '@emotion/react';
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
  overflow-x: visible;
  &:first-child {
    border-left: none;
  }
`;

export const DateText = styled.span<{ color?: string; weight?: number }>`
  ${({ color, weight }) => css`
    color: ${color || '#878787'};
    font-size: 14px;
    font-weight: ${weight || 500};
  `}
`;

export const TextContainer = styled.div<{ color?: string }>`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  cursor: pointer;
`;

export const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 2px;
  flex: 1;
  width: 89px;

  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;
