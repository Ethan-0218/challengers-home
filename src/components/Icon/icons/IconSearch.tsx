import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIconSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color || `#000000`}
      fillRule="evenodd"
      d="M10.875 4a6.875 6.875 0 1 0 0 13.75 6.875 6.875 0 0 0 0-13.75ZM2 10.875a8.875 8.875 0 1 1 17.75 0 8.875 8.875 0 0 1-17.75 0Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color || `#000000`}
      fillRule="evenodd"
      d="M15.736 15.737a1 1 0 0 1 1.415 0l4.556 4.556a1 1 0 0 1-1.414 1.414l-4.557-4.556a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconSearch;
