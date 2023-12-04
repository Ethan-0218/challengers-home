import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div<{ active: boolean; clickable?: boolean }>`
  display: flex;
  width: 292px;
  height: 82px;
  padding: 0 20px;
  gap: 12px;
  align-items: center;
  cursor: pointer;

  ${({ active }) =>
    active
      ? css`
          border-radius: 12px;
          background: rgba(255, 184, 79, 0.1);
        `
      : ''};
`;

export const DayBox = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Divider = styled.div`
  height: 42px;
  width: 1px;
  background-color: #d7d7d7;
`;

export const MenuBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  height: 40px;
  gap: 4px;
`;
