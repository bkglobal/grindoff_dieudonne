import * as React from 'react';

function HelpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        opacity={0.3}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"
        fill="#14A800"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.591 11.209v1.659h1.26c2.541 0 4.536-1.953 4.536-4.473 0-2.52-1.995-4.473-4.536-4.473-2.541 0-4.515 1.953-4.515 4.473h1.785c0-1.596 1.113-2.814 2.73-2.814 1.596 0 2.751 1.218 2.751 2.814s-1.155 2.814-2.751 2.814h-1.26zM10 14a1 1 0 100 2 1 1 0 000-2z"
        fill="#14A800"
      />
    </svg>
  );
}

export default HelpIcon;
