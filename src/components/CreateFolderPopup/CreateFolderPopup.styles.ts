import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupContainer = styled.div`
  width: 500px;
  height: 326px;
  background: #ffffff;
  box-shadow: 0px 12px 23px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  box-sizing: border-box;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
`;
