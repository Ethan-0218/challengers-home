import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  flex: 1;
  height: 50px;
  background: #fafafa;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0px 20px;
`;

export const TextInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background: transparent;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #111111;

  &::placeholder {
    color: #878787;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }
`;
