import styled from '@emotion/styled';

export const WIDTH = 500;
export const HEIGHT = 460;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupContainer = styled.div`
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  background: #ffffff;
  box-shadow: 0px 12px 23px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  gap: 40px;
`;

export const EditorContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  gap: 12px;
`;

export const CancelButton = styled.div`
  cursor: pointer;
  padding: 12px 20px;
  border-radius: 12px;
  border: 1px solid #222222;
  box-sizing: border-box;
`;

export const SaveButton = styled.div`
  cursor: pointer;
  padding: 12px 20px;
  border-radius: 12px;
  background: #222222;
  box-sizing: border-box;
`;
