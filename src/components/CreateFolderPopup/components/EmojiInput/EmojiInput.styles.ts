import styled from '@emotion/styled';

const BUTTON_SIZE = 50;
export const PICKER_WIDTH = 400;
export const PICKER_HEIGHT = 340;

export const Container = styled.div`
  position: relative;
  cursor: pointer;
  width: ${BUTTON_SIZE}px;
  height: ${BUTTON_SIZE}px;
  background: #fafafa;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PickerContainer = styled.div`
  position: absolute;
  top: ${BUTTON_SIZE}px;
  left: 0px;
`;

export const EmojiText = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;
