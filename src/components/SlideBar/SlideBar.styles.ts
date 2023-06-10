import styled from '@emotion/styled';
import { BAR_WIDTH } from '../../constants/slidebar.constants';

export const Container = styled.div<{ show: boolean; height: number }>`
  transition: transform 0.3s ease-out;
  transform: ${({ show }) =>
    show ? `translateX(-${BAR_WIDTH}px)` : `translateX(0px)`};
  width: ${BAR_WIDTH}px;
  height: ${({ height }) => height}px;
  position: absolute;
  right: -${BAR_WIDTH}px;
  top: 0px;
  border-radius: 40px 0 0 40px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: -10px 0px 29px rgba(0, 0, 0, 0.07);
`;
