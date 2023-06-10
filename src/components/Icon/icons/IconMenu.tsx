import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIconMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={6} r={2} fill={props.color || `#000000`} />
    <circle cx={12} cy={13} r={2} fill={props.color || `#000000`} />
    <circle cx={12} cy={20} r={2} fill={props.color || `#000000`} />
  </svg>
);
export default SvgIconMenu;
