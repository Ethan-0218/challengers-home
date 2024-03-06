import styled from "@emotion/styled";

export const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  gap: 16px;
`

export const MessageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const MenuContainer = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const LoadingImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
`

export const InputConatiner = styled.div`
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
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`

export const CancelButton = styled.div`
  cursor: pointer;
  padding: 12px 20px;
  border-radius: 12px;
  border: 1px solid #222222;
  box-sizing: border-box;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #222222;
  border: none;
  outline: none;
`;

export const SaveButton = styled.div`
  cursor: pointer;
  padding: 12px 20px;
  border-radius: 12px;
  background: #222222;
  box-sizing: border-box;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  border: none;
  outline: none;
`;