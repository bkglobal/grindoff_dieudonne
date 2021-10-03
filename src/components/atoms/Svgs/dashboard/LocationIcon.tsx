import * as React from 'react';

function LocationIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={14} height={14} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.267 9.716A4.085 4.085 0 007 1.75a4.083 4.083 0 00-1.267 7.966L7 12.25l1.267-2.534zM7 7a1.167 1.167 0 100-2.333A1.167 1.167 0 007 7z"
        fill="#14A800"
      />
    </svg>
  );
}

export default LocationIcon;
