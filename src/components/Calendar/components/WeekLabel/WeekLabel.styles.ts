import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
`;

export const LabelItem = styled.div<{ color: string }>`
  display: flex;
  width: 95px;
  height: 14px;
  padding: 8px 6px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  color: ${({ color }) => color};
  font-size: 14px;
  font-weight: 500;
  line-height: normal;

  border-radius: 0px 8.661px 0px 0px;
  border-left: 1px solid #e8e8e8;
  background: #fff;

  &:first-child {
    border-left: none;
  }
`;
