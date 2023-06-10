import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIconEyeClosed = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.358 11.069a1 1 0 0 1 1.366.366l2.138 3.704a1 1 0 1 1-1.732 1l-2.138-3.704a1 1 0 0 1 .366-1.366ZM14.28 13.008a1 1 0 0 1 1.16.812l.666 3.782a1 1 0 0 1-1.97.347l-.666-3.782a1 1 0 0 1 .81-1.159ZM9.71 13.007a1 1 0 0 1 .812 1.158l-.667 3.783a1 1 0 1 1-1.97-.347l.667-3.783a1 1 0 0 1 1.158-.811ZM5.638 11.066a1 1 0 0 1 .366 1.366l-2.149 3.722a1 1 0 1 1-1.732-1l2.15-3.722a1 1 0 0 1 1.365-.366Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color || `#000000`}
      fillRule="evenodd"
      d="M2.372 9.054a1 1 0 0 1 1.406.15C5.244 11.018 7.875 13.25 12 13.25c4.125 0 6.756-2.232 8.222-4.046a1 1 0 1 1 1.556 1.256c-1.686 2.088-4.834 4.79-9.778 4.79-4.944 0-8.091-2.702-9.778-4.79a1 1 0 0 1 .15-1.406Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconEyeClosed;
