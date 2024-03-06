import styled from "@emotion/styled";

export const Container = styled.div`
  width: 380px;
  height: 550px;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

export const Button = styled.button`
  padding: 12px 24px;
  background-color: #333;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;