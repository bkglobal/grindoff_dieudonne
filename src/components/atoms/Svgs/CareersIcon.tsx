import * as React from 'react';

function CareersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={10} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.112 5.006A1.01 1.01 0 007 5H3c-.038 0-.076.002-.112.006L.348 2.558A1 1 0 01.32 1.146L1.42 0h7.16l1.1 1.146a1 1 0 01-.028 1.412l-2.54 2.448z"
        fill="#14A800"
      />
      <path
        opacity={0.3}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.764 7l1.721 9.15a1 1 0 01-.26.877l-2.503 2.607a.999.999 0 01-1.444 0l-2.502-2.607a1 1 0 01-.261-.878L3.236 7h3.528z"
        fill="#14A800"
      />
    </svg>
  );
}

export default CareersIcon;
