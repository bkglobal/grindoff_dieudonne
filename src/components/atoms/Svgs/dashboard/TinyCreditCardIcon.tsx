import * as React from 'react';

function TinyCreditCardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={14} height={14} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        opacity={0.3}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.664 2.294a1 1 0 00-1.225.707L.145 7.831a1 1 0 00.707 1.224l9.9 2.653a1 1 0 001.226-.707l1.294-4.83a1 1 0 00-.707-1.224L2.664 2.294zm6.298 5.311a2.333 2.333 0 11-4.508-1.207 2.333 2.333 0 014.508 1.207z"
        fill="#14A800"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.583 3.5a1 1 0 00-1 1v5a1 1 0 001 1h10.25a1 1 0 001-1v-5a1 1 0 00-1-1H1.583zM9.042 7a2.333 2.333 0 11-4.667 0 2.333 2.333 0 014.667 0zM6.708 8.167a1.167 1.167 0 100-2.334 1.167 1.167 0 000 2.334z"
        fill="#14A800"
      />
    </svg>
  );
}

export default TinyCreditCardIcon;
