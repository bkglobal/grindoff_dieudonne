import * as React from 'react';

function RoundHeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={10} cy={10} r={9.5} fill="#fff" stroke="#FE0C0C" />
      <path
        d="M12.188 6.355c-.783 0-1.698.887-2.188 1.459-.49-.572-1.405-1.459-2.187-1.459-1.385 0-2.188 1.08-2.188 2.456 0 2.284 4.375 4.836 4.375 4.836s4.375-2.552 4.375-4.74c0-1.374-.803-2.552-2.188-2.552z"
        stroke="#FE0C0C"
      />
    </svg>
  );
}

export default RoundHeartIcon;
