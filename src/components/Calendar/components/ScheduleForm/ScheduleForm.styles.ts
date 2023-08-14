import styled from '@emotion/styled';
import { FORM_HEIGHT, FORM_WIDTH } from './ScheduleForm.constants';

export const Container = styled.div`
  border-radius: 12px;
  width: ${FORM_WIDTH}px;
  height: ${FORM_HEIGHT}px;
  background-color: #fefefe;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.07);
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  margin-top: 20px;
`;

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
`;

export const Row = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  justify-content: flex-end;
`;
