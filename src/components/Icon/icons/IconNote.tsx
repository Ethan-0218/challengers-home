import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIconNote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    {...props}
  >
    <path
      fill={props.color || `#000000`}
      d="M19.5 3h-15A1.501 1.501 0 0 0 3 4.5v15A1.501 1.501 0 0 0 4.5 21h10.19a1.493 1.493 0 0 0 1.06-.44l4.81-4.81a1.491 1.491 0 0 0 .44-1.06V4.5A1.501 1.501 0 0 0 19.5 3ZM9 8.25h6a.75.75 0 1 1 0 1.5H9a.75.75 0 0 1 0-1.5Zm3 7.5H9a.75.75 0 1 1 0-1.5h3a.75.75 0 1 1 0 1.5Zm-3-3a.75.75 0 1 1 0-1.5h6a.75.75 0 1 1 0 1.5H9Zm6 6.44v-4.192h4.19L15 19.19Z"
    />
  </svg>
);
export default SvgIconNote;
