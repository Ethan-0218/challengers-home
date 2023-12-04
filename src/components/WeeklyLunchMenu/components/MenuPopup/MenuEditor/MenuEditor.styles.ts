import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const InputContainer = styled.div`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #d7d7d7;
  width: 100%;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  box-sizing: border-box;
  max-height: 104px;
  overflow-y: auto;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 200px;
`;

export const MenuContainer = styled.div<{ color: string }>`
  padding: 4px 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 2px;
  cursor: pointer;
  ${({ color }) =>
    css`
      background-color: ${color}22;
    `}
`;
