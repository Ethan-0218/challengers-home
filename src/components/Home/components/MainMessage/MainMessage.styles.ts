import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const EditContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 456px;
  align-items: center;
`;

export const CancelButton = styled.div`
  cursor: pointer;
  padding: 12px 20px;
  border-radius: 12px;
  border: 1px solid #222222;
  box-sizing: border-box;
  flex-shrink: 0;
  height: 44px;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #222222;
`;

export const SaveButton = styled.div`
  cursor: pointer;
  padding: 12px 20px;
  border-radius: 12px;
  background: #222222;
  box-sizing: border-box;
  flex-shrink: 0;
  height: 44px;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;
