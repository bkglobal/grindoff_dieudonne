import * as React from 'react';

function ReplyIcon({ fill = '#14A800', ...props}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={14} height={14} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        opacity={0.3}
        d="M5.57 3.444a.75.75 0 00-1.253-.556L.927 5.964A.75.75 0 00.92 7.07l3.39 3.14a.75.75 0 001.26-.551V3.444z"
        fill={fill}
      />
      <path
        d="M13.589 10.378c0-.478.102-2.367-1.387-3.865C11.199 5.505 9.699 5.33 7.904 5.25V3.443a.75.75 0 00-1.254-.555L3.26 5.963a.75.75 0 00-.005 1.106l3.39 3.14a.75.75 0 001.26-.55V7.874c1.138.031 1.95.104 2.687.338 1.425.454 2.271 2.398 2.5 2.99.039.102.136.172.245.172.14 0 .255-.114.254-.254l-.002-.743z"
        fill={fill}
      />
    </svg>
  );
}

export default ReplyIcon;
