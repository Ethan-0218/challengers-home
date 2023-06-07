import styled from '@emotion/styled';
import { BAR_WIDTH } from '../../constants/slidebar.constants';

export const Container = styled.div<{ show: boolean; height: number }>`
  transition: transform 0.3s ease-out;
  transform: ${({ show }) =>
    show ? `translateX(-${BAR_WIDTH}px)` : `translateX(0px)`};
  width: ${BAR_WIDTH}px;
  height: ${({ height }) => height}px;
  background: red;
  position: absolute;
  right: -${BAR_WIDTH}px;
  top: 0px;
`;
