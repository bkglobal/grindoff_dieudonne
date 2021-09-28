import * as React from 'react';

function WalletIcon({ fill = '#1A1A1A', stroke, ...rest }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        opacity={0.3}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5 14a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        fill={fill}
        fillOpacity={0.7}
      />
      <rect
        opacity={0.3}
        x={2.401}
        y={5.449}
        width={18}
        height={7}
        rx={1}
        transform="rotate(-15 2.4 5.45)"
        fill={fill}
        fillOpacity={0.7}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2v-2.337a3.5 3.5 0 110-6.326V6a2 2 0 00-2-2H4z"
        fill={fill}
        fillOpacity={0.7}
      />
    </svg>
  );
}

export default WalletIcon;
