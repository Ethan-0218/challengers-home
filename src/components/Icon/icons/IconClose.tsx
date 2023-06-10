import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIconClose = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.457 4.543a1 1 0 0 1 0 1.414l-13.5 13.5a1 1 0 0 1-1.414-1.414l13.5-13.5a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color || `#000000`}
      fillRule="evenodd"
      d="M4.543 4.543a1 1 0 0 1 1.414 0l13.5 13.5a1 1 0 0 1-1.414 1.414l-13.5-13.5a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconClose;
