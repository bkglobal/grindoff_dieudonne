import * as React from 'react';

function AboutGrindOffIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        opacity={0.3}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"
        fill="#14A800"
      />
      <rect x={9} y={5} width={2} height={8} rx={1} fill="#14A800" />
    </svg>
  );
}

export default AboutGrindOffIcon;
