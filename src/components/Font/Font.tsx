import { css } from '@emotion/react';
import styled from '@emotion/styled';

type Props = {
  size: number;
  weight?: 800 | 700 | 600 | 500 | 400;
  color?: string;
  line?: number;
};

const Font = styled.span<Props>`
  ${({ size, weight = 600, color = '#111111', line }) => css`
    font-size: ${size}px;
    font-weight: ${weight};
    color: ${color};
    line-height: ${line || size * 1.22}px;
  `}
`;

export default Font;
