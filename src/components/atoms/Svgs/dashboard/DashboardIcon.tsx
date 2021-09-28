import * as React from 'react';

function DashboardIcon({ fill = '#1A1A1A', stroke, ...rest }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.658 14.974A1.5 1.5 0 004.081 16h7.838a1.5 1.5 0 001.423-1.026l2.33-6.99a1.5 1.5 0 00-.476-1.638l-6.24-5.077a1.5 1.5 0 00-1.892-.001L.806 6.346a1.5 1.5 0 00-.478 1.639l2.33 6.99z"
        fill={fill}
      />
    </svg>
  );
}

export default DashboardIcon;
