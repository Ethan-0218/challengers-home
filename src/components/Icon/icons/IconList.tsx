import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIconList = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.25 11.25H3.75a.75.75 0 1 0 0 1.5h16.5a.75.75 0 1 0 0-1.5ZM3.75 6.75h16.5a.75.75 0 1 0 0-1.5H3.75a.75.75 0 0 0 0 1.5ZM20.25 17.25H3.75a.75.75 0 1 0 0 1.5h16.5a.75.75 0 1 0 0-1.5Z"
    />
  </svg>
);
export default SvgIconList;
