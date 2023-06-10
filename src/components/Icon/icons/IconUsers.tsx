import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIconUsers = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    {...props}
  >
    <path
      fill={props.color || `#000000`}
      d="M11.362 14.808a5.626 5.626 0 1 0-6.224 0 9.02 9.02 0 0 0-4.252 3.266.75.75 0 0 0 .614 1.182H15a.75.75 0 0 0 .613-1.182 9.02 9.02 0 0 0-4.25-3.266Z"
    />
    <path
      fill={props.color || `#000000`}
      d="M23.256 18.074a9.02 9.02 0 0 0-4.251-3.266A5.626 5.626 0 0 0 14.367 4.71a.75.75 0 0 0-.399 1.17 7.108 7.108 0 0 1 .36 7.958.75.75 0 0 0 .192.993c.284.212.558.438.82.677.013.014.027.03.042.043a10.503 10.503 0 0 1 2.388 3.272.749.749 0 0 0 .68.433h4.193a.75.75 0 0 0 .613-1.182Z"
    />
  </svg>
);
export default SvgIconUsers;
