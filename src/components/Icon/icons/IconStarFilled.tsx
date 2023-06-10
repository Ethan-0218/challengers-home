import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIconStarFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    {...props}
  >
    <path
      fill={props.color || `#000000`}
      d="M11.097 1.891a1 1 0 0 1 1.805 0l2.32 4.862a1 1 0 0 0 .772.56l5.34.705a1 1 0 0 1 .559 1.717l-3.907 3.708a1 1 0 0 0-.295.908l.98 5.297a1 1 0 0 1-1.46 1.06l-4.734-2.57a1 1 0 0 0-.954 0l-4.735 2.57a1 1 0 0 1-1.46-1.06l.98-5.297a1 1 0 0 0-.294-.908L2.107 9.735a1 1 0 0 1 .558-1.717l5.34-.704a1 1 0 0 0 .772-.56l2.32-4.863Z"
    />
  </svg>
);
export default SvgIconStarFilled;
