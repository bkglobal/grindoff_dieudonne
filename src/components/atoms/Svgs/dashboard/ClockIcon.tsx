import * as React from 'react';

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={14} height={14} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        opacity={0.3}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 12.834a5.25 5.25 0 110-10.5 5.25 5.25 0 010 10.5z"
        fill="#14A800"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.686 4.67a.319.319 0 01.634-.008l.263 2.63L9.47 8.369a.309.309 0 01-.234.566l-2.42-.66a.5.5 0 01-.367-.52l.238-3.086z"
        fill="#14A800"
      />
    </svg>
  );
}

export default ClockIcon;
