import * as React from 'react';

function ReferralsIcon({ fill = '#1A1A1A', stroke, ...rest }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={22} fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        opacity={0.3}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 7a1 1 0 00-1 1v6a1 1 0 102 0v-2h8a4 4 0 004-4V7h-2v1a2 2 0 01-2 2H5V8a1 1 0 00-1-1z"
        fill={fill}
        fillOpacity={0.7}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 18a4 4 0 108 0 4 4 0 00-8 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zM12 4a4 4 0 108 0 4 4 0 00-8 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zM0 4a4 4 0 108 0 4 4 0 00-8 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z"
        fill={fill}
        fillOpacity={0.7}
      />
    </svg>
  );
}

export default ReferralsIcon;
