import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIconFolderSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    {...props}
  >
    <path
      fill={props.color || `#000000`}
      d="M20.25 6.75h-8L9.648 4.8a1.507 1.507 0 0 0-.898-.3h-5A1.501 1.501 0 0 0 2.25 6v12.75a1.501 1.501 0 0 0 1.5 1.5h16.583a1.419 1.419 0 0 0 1.417-1.417V8.25a1.501 1.501 0 0 0-1.5-1.5Z"
    />
  </svg>
);
export default SvgIconFolderSimple;
