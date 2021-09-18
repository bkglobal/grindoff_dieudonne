import * as React from 'react';

function CameraAltIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={19} height={17} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M17.1 1.889h-3.012L12.35 0h-5.7L4.911 1.889H1.9A1.9 1.9 0 000 3.778V15.11A1.9 1.9 0 001.9 17h15.2a1.9 1.9 0 001.9-1.889V3.778a1.9 1.9 0 00-1.9-1.89zm0 13.222H1.9V3.778h3.847l1.739-1.89h4.028l1.739 1.89H17.1V15.11zM9.5 4.722c-2.622 0-4.75 2.116-4.75 4.722 0 2.607 2.128 4.723 4.75 4.723s4.75-2.116 4.75-4.723c0-2.606-2.128-4.722-4.75-4.722zm0 7.556c-1.567 0-2.85-1.275-2.85-2.834 0-1.558 1.282-2.833 2.85-2.833s2.85 1.275 2.85 2.833c0 1.559-1.282 2.834-2.85 2.834z"
        fill="#14A800"
      />
    </svg>
  );
}

export default CameraAltIcon;
