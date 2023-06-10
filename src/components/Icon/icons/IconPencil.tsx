import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIconPencil = (props: SVGProps<SVGSVGElement>) => (
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
      d="m15.75 4.414-11 11v3.836h3.836l11-11-3.836-3.836ZM4.677 15.487 4.5 15.31l.177.177Zm9.836-12.664a1.75 1.75 0 0 1 2.474 0l-.52.52.52-.52 4.19 4.19-.707.707.707-.708a1.75 1.75 0 0 1 0 2.475l-11.47 11.47A1 1 0 0 1 9 21.25H4.5a1.75 1.75 0 0 1-1.75-1.75v-4.19a1.75 1.75 0 0 1 .513-1.237l11.25-11.25.692.693-.692-.693Z"
      clipRule="evenodd"
    />
    <path
      fill={props.color || `#000000`}
      fillRule="evenodd"
      d="M12.043 5.293a1 1 0 0 1 1.414 0l5.25 5.25a1 1 0 0 1-1.414 1.414l-5.25-5.25a1 1 0 0 1 0-1.414ZM3.09 14.34a1 1 0 0 1 1.415 0l4.91 4.91H20.25a1 1 0 1 1 0 2H9a1 1 0 0 1-.707-.293l-5.202-5.202a1 1 0 0 1 0-1.415Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconPencil;
