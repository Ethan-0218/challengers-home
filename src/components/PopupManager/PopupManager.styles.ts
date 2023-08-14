import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { ANIM_DURATION } from './PopupManager.constants';

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`;

export const Container = styled.div<{ width: number; height: number }>`
  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
    animation: ${ShowKeyframes} ${ANIM_DURATION}ms ease-in;
  `}
`;

export const ShowKeyframes = keyframes`
   0% { transform: translateY(-20px) ; opacity: 0; }
  100% { transform: translateY(0px) ; opacity: 1; }
`;
