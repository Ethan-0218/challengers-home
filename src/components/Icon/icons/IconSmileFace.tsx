import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIconSmileFace = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    {...props}
  >
    <path
      fill={props.color || `#000000`}
      fillRule="evenodd"
      d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color || `#000000`}
      fillRule="evenodd"
      d="M16.398 13.384a1 1 0 0 1 .366 1.366 5.503 5.503 0 0 1-9.528 0 1 1 0 0 1 1.732-1 3.502 3.502 0 0 0 6.064 0 1 1 0 0 1 1.366-.366Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color || `#000000`}
      d="M8.625 11.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25ZM15.375 11.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
    />
  </svg>
);
export default SvgIconSmileFace;
