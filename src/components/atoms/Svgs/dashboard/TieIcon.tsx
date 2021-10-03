import * as React from 'react';

function TieIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={14} height={14} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.232 4.086a.59.59 0 00-.065-.003H5.833a.59.59 0 00-.065.003L4.286 2.658a.583.583 0 01-.016-.824l.641-.668H9.09l.64.668c.224.232.216.601-.015.824L8.232 4.086z"
        fill="#14A800"
      />
      <path
        opacity={0.3}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.03 5.25l1.003 5.337a.583.583 0 01-.152.512L7.42 12.62a.583.583 0 01-.842 0L5.12 11.1a.583.583 0 01-.152-.512L5.97 5.25h2.058z"
        fill="#14A800"
      />
    </svg>
  );
}

export default TieIcon;
