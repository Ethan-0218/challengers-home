import styled from '@emotion/styled';

export const Container = styled.div`
  width: min(100%, 700px);
  height: 60px;
  box-sizing: border-box;
  display: flex;
  padding: 0px 24px;
  background: #f8f8f8;
  border-radius: 1000px;
  gap: 8px;
  align-items: center;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;

  font-weight: 500;
  font-size: 16px;
  line-height: normal;
  color: #111111;

  &::placeholder {
    color: #878787;
  }
`;
