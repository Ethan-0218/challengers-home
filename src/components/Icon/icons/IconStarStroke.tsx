import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIconStarStroke = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.195 1.46c.724-1.518 2.886-1.518 3.61 0l2.32 4.862 5.34.704c1.669.22 2.336 2.276 1.116 3.434l-3.907 3.709.981 5.296c.306 1.655-1.442 2.925-2.92 2.122L12 19.017l-4.734 2.57c-1.479.803-3.227-.467-2.921-2.122l.98-5.296-3.906-3.71C.199 9.303.867 7.247 2.534 7.027l5.341-.704 2.32-4.861ZM12 2.323 9.68 7.184a2 2 0 0 1-1.544 1.121l-5.34.704 3.907 3.71a2 2 0 0 1 .59 1.814L6.31 19.83l4.735-2.57a2 2 0 0 1 1.908 0l4.735 2.57-.981-5.297a2 2 0 0 1 .59-1.815l3.906-3.709-5.34-.704a2 2 0 0 1-1.544-1.121L12 2.322Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconStarStroke;
