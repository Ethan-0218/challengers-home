import styled from '@emotion/styled';

export const Container = styled.div`
  width: min(100%, 700px);
  height: 64px;
  box-sizing: border-box;
  display: flex;
  padding: 20px 24px;
  background: #f5f5f5;
  border-radius: 1000px;
  gap: 8px;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;

  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #111111;

  &::placeholder {
    color: #878787;
  }
`;
